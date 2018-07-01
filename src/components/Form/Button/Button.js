// @flow

/**
 *
 * Button
 *
 */

import classnames from 'classnames';
import React, { Fragment } from 'react';
import Icon from '../../Icon';
import style from './Button.scss';
import ButtonSpinner from './ButtonSpinner';

type Props = {
  submit?: boolean,
  color?: 'teal' | 'blue' | 'green' | 'red' | 'white',
  link?: boolean,
  small?: boolean,
  large?: boolean,
  onClick: Function,
  keyline?: boolean,
  children?: string | Array<any>,
  disabled?: boolean,
  icon?: string,
  iconLeft?: any,
  iconRight?: any,
  squared?: boolean,
  submitting?: boolean,
  done?: boolean,
  className?: string,
};

class Button extends React.Component<Props> {
  static defaultProps = {
    submit: false,
    link: false,
    color: 'teal',
    icon: '',
    keyline: false,
    disabled: false,
    squared: false,
    onClick: () => null,
  };

  handleClick = (event: SyntheticEvent<*>) => {
    if (!this.props.disabled) {
      this.props.onClick(event);
    }
  };

  render() {
    const {
      children,
      className,
      color,
      disabled,
      icon,
      iconLeft,
      iconRight,
      keyline,
      link,
      small,
      large,
      squared,
      submit,
      submitting,
      done,
    } = this.props;

    const buttonClasses = classnames(
      style.button,
      color && !done && style[color],
      {
        [style.disabled]: disabled,
        [style.keyline]: keyline,
        [style.link]: link,
        [style.squared]: squared,
        [style.submitting]: submitting,
        [style.done]: done,
      },
      className,
    );

    const containerClasses = classnames(style.buttonContainer, {
      [style.small]: small,
      [style.large]: large,
    });

    const submittingIcon = submitting ? (
      <div className={style.iconCenter}>
        <ButtonSpinner />
      </div>
    ) : null;

    const statusIcon = done ? (
      <div className={style.iconCenter}>
        <Icon name="Tick" />
      </div>
    ) : (
      submittingIcon
    );

    return (
      <div className={containerClasses}>
        <button
          className={buttonClasses}
          type={submit ? 'submit' : 'button'}
          onClick={this.handleClick}
        >
          {statusIcon || (
            <Fragment>
              {iconLeft && <div className={style.iconLeft}>{iconLeft}</div>}

              <div className={style.content}>
                {children}

                {icon && <Icon className={style.legacyIcon} name={icon} />}
              </div>

              {iconRight && <div className={style.iconRight}>{iconRight}</div>}
            </Fragment>
          )}
        </button>
      </div>
    );
  }
}

export default Button;
