// @flow

/**
 *
 * Button
 *
 */

import classnames from 'classnames';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { returnNull } from '../../../util';
import Icon from '../../Icon';
import styles from './Button.scss';
import ButtonSpinner from './ButtonSpinner';

function InnerButton(props: {
  to: ?string,
  withRouter: ?boolean,
  submit: ?boolean,
  children: any,
  className: string,
  onClick: ?Function,
  newWindow?: boolean,
}) {
  const { to, withRouter, submit, children, className, onClick, newWindow } = props;
  if (!to) {
    return submit ? (
      <button className={className} onClick={onClick} type="submit">
        {children}
      </button>
    ) : (
      <button className={className} onClick={onClick} type="button">
        {children}
      </button>
    );
  }

  const targetProp = newWindow ? { target: '_blank' } : {};

  return withRouter ? (
    <Link to={to} className={className} {...targetProp}>
      {children}
    </Link>
  ) : (
    <a href={to} className={className} {...targetProp}>
      {children}
    </a>
  );
}

type Props = {
  submit?: boolean,
  color?: 'teal' | 'blue' | 'green' | 'red' | 'white',
  link?: boolean,
  small?: boolean,
  large?: boolean,
  onClick: Function,
  keyline?: boolean,
  children: any,
  disabled?: boolean,
  icon?: string,
  iconLeft?: any,
  iconRight?: any,
  squared?: boolean,
  style?: any,
  submitting?: boolean,
  done?: boolean,
  className?: string,
  containerClassName?: string,
  to?: string,
  withRouter?: boolean,
  newWindow?: boolean,
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
    onClick: returnNull,
    withRouter: false,
    newWindow: false,
  };

  handleClick = (event: SyntheticEvent<*>) => {
    const { disabled, onClick } = this.props;
    if (!disabled) {
      onClick(event);
    }
  };

  render() {
    const {
      children,
      className,
      color,
      containerClassName,
      disabled,
      icon,
      iconLeft,
      iconRight,
      keyline,
      link,
      small,
      large,
      squared,
      style,
      submit,
      submitting,
      done,
      to,
      withRouter,
      newWindow,
    } = this.props;

    const buttonClasses = classnames(
      styles.button,
      color && !done && styles[color],
      {
        [styles.disabled]: disabled,
        [styles.keyline]: keyline,
        [styles.link]: link,
        [styles.squared]: squared,
        [styles.submitting]: submitting,
        [styles.done]: done,
      },
      className,
    );

    const containerClasses = classnames(
      styles.buttonContainer,
      {
        [styles.small]: small,
        [styles.large]: large,
      },
      containerClassName,
    );

    const submittingIcon = submitting ? (
      <div className={styles.iconCenter}>
        <ButtonSpinner />
      </div>
    ) : null;

    const statusIcon = done ? (
      <div className={styles.iconCenter}>
        <Icon name="Tick" />
      </div>
    ) : (
      submittingIcon
    );

    return (
      <div className={containerClasses} style={style}>
        <InnerButton
          className={buttonClasses}
          submit={submit}
          to={to}
          withRouter={withRouter}
          onClick={this.handleClick}
          newWindow={newWindow}
        >
          {statusIcon || (
            <Fragment>
              {iconLeft && <div className={styles.iconLeft}>{iconLeft}</div>}

              <div className={styles.content}>
                {children}

                {icon && <Icon className={styles.legacyIcon} name={icon} />}
              </div>

              {iconRight && <div className={styles.iconRight}>{iconRight}</div>}
            </Fragment>
          )}
        </InnerButton>
      </div>
    );
  }
}

export default Button;
