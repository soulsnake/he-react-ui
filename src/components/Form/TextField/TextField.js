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
    const { onFocus } = this.props;
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };

    this.setState({
      focused: true,
    });
    onFocus(event);
  };

  handleBlur = (e: SyntheticEvent<HTMLInputElement>) => {
    const { onBlur } = this.props;
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };

    this.setState({
      focused: false,
    });
    onBlur(event);
  };

  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };
    onChange(event);
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
        [style.hasMarker]: marker,
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

          {marker && value !== '' && (isValid ? <Tick className={style.marker} /> : <Cross className={style.marker} />)}

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
      </div>
    );
  }
}

export default TextField;
