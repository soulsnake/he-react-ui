// @flow
/**
 *
 * TextField
 *
 */

import classnames from 'classnames';
import React from 'react';
import { returnNull } from '../../../util';
import Cross from '../../Icon/Cross';
import Tick from '../../Icon/Tick';
import Help from '../../Icon/Help';
import Popover from '../../Popover';
import style from './TextField.scss';

type Props = {
  id: string,
  name: string,
  className?: string,
  label?: Object | string,
  description?: string,
  error?: string,
  inline?: boolean,
  value?: string,
  disabled?: boolean,
  marker?: boolean,
  helper?: any,
  isValid?: boolean,
  password?: boolean,
  small?: boolean,
  onBlur: Function,
  onChange: Function,
  onFocus: Function,
};

class TextField extends React.Component<Props, *> {
  static defaultProps = {
    disabled: false,
    inline: false,
    marker: false,
    helper: null,
    value: '',
    isValid: true,
    onBlur: returnNull,
    onChange: returnNull,
    onFocus: returnNull,
  };

  state = {
    focused: false,
  };

  handleFocus = (e: SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };

    this.setState({
      focused: true,
    });
    this.props.onFocus(event);
  };

  handleBlur = (e: SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };

    this.setState({
      focused: false,
    });
    this.props.onBlur(event);
  };

  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };
    this.props.onChange(event);
  };

  render() {
    const {
      className,
      id,
      name,
      label,
      description,
      value,
      disabled,
      error,
      inline,
      marker,
      helper,
      onBlur,
      onChange,
      onFocus,
      isValid,
      password,
      small,
      ...restProps
    } = this.props;
    const { focused } = this.state;
    const floating = focused || value !== '';
    const wrapperClasses = classnames(
      style.outer,
      {
        [style.invalid]: !isValid,
        [style.disabled]: disabled,
        [style.inline]: inline,
        [style.focused]: focused,
        [style.hasMarker]: marker || helper,
        [style.small]: small,
      },
      className,
    );

    const inputClasses = classnames(style.input, {
      [style.small]: small,
      [style.noLabel]: !label,
    });

    const labelClasses = classnames(style.label, {
      [style.floating]: floating,
      [style.small]: small,
    });

    return (
      <div className={wrapperClasses} {...restProps}>
        <div className={style.block}>
          <input
            className={inputClasses}
            id={id}
            name={name}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            disabled={disabled}
            value={value}
            type={password ? 'password' : 'text'}
          />

          {marker &&
            value !== '' &&
            !helper &&
            (isValid ? (
              <Tick className={style.marker} />
            ) : (
              <Cross className={style.marker} />
            ))}

          {label && (
            <label className={labelClasses} htmlFor={id}>
              {label}
            </label>
          )}
        </div>

        {(description || error) && (
          <label htmlFor={id} className={style.description}>
            {error || description}
          </label>
        )}

        {helper && (
          <div className={style.helper}>
            <Popover content={helper} light>
              <Help className={style.helperIcon} />
            </Popover>
          </div>
        )}
      </div>
    );
  }
}

export default TextField;
