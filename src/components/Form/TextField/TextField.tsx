/**
 *
 * TextField
 *
 */

import classnames from 'classnames';
import React from 'react';
import { returnNull } from '../../../util';
import Cross from '../../Icon/Cross';
import Help from '../../Icon/Help';
import Tick from '../../Icon/Tick';
import Popover from '../../Popover';
import style from './TextField.scss';

enum Markers {
  none = 'none',
  tickCross = 'tick-cross',
  info = 'info',
  verify = 'verify',
}

type Props = {
  className?: string;
  description?: string;
  disabled?: boolean;
  error?: string;
  helper?: any;
  id: string;
  inline?: boolean;
  isValid?: boolean;
  isVerified?: boolean;
  label?: Object | string;
  marker?: Markers;
  markerTooltip?: any;
  name: string;
  onBlur: Function;
  onChange: Function;
  onFocus: Function;
  password?: boolean;
  small?: boolean;
  onMarkerClick: () => any;
  value?: string;
};

class TextField extends React.Component<Props, any> {
  static defaultProps = {
    disabled: false,
    inline: false,
    marker: 'none',
    markerTooltip: null,
    value: '',
    isValid: true,
    isVerified: false,
    onBlur: returnNull,
    onChange: returnNull,
    onFocus: returnNull,
    onMarkerClick: returnNull,
  };

  state = {
    focused: false,
  };

  handleFocus = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: (e.currentTarget as any).value,
      props: this.props,
    };

    this.setState({
      focused: true,
    });
    this.props.onFocus(event);
  };

  handleBlur = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: (e.currentTarget as any).value,
      props: this.props,
    };

    this.setState({
      focused: false,
    });
    this.props.onBlur(event);
  };

  handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: (e.currentTarget as any).value,
      props: this.props,
    };
    this.props.onChange(event);
  };

  renderMarker = () => {
    const {
      value,
      marker,
      markerTooltip,
      isVerified,
      isValid,
      onMarkerClick,
    } = this.props;
    let markerIcon = null;

    switch (marker) {
      case 'tick-cross': {
        markerIcon =
          value !== '' &&
          (isValid ? (
            <Tick className={style.marker} onClick={onMarkerClick} />
          ) : (
            <Cross className={style.marker} onClick={onMarkerClick} />
          ));
        break;
      }
      case 'info': {
        markerIcon = (
          <div className={style.helper} onClick={onMarkerClick}>
            <Help className={style.helperIcon} />
          </div>
        );

        break;
      }
      case 'verify': {
        markerIcon = (
          <div
            className={classnames(
              style.verifiedTag,
              isVerified ? style.verified : style.unVerified,
            )}
            onClick={onMarkerClick}
          >
            {isVerified ? 'Verified' : 'Verify'}
          </div>
        );
        break;
      }
      default: {
        markerIcon = null;
      }
    }

    return markerTooltip ? (
      <Popover content={markerTooltip} tooltip light preferRight>
        {markerIcon}
      </Popover>
    ) : (
      markerIcon
    );
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
      markerTooltip,
      onBlur,
      onChange,
      onFocus,
      isValid,
      isVerified,
      password,
      small,
      onMarkerClick,
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
        [style.hasMarker]: marker !== 'none',
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

          {this.renderMarker()}

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
