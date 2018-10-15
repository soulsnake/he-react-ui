/**
 *
 * Button
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { returnNull } from '../../../util';

const InnerButton: React.SFC<{
  to: string | void;
  withRouter: boolean | void;
  submit: boolean | void;
  children: any;
  className: string;
  onClick: () => void;
  newWindow?: boolean;
  buttonProps: object;
}> = props => {
  const {
    to,
    withRouter,
    submit,
    children,
    className,
    onClick,
    newWindow,
    buttonProps,
  } = props;
  if (!to) {
    return (
      <button
        className={className}
        onClick={onClick}
        type={submit ? 'submit' : 'button'}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }

  const targetProp = newWindow ? { target: '_blank' } : {};

  return withRouter ? (
    <Link to={to} className={className} {...targetProp} {...buttonProps}>
      {children}
    </Link>
  ) : (
    <a href={to} className={className} {...targetProp} {...buttonProps}>
      {children}
    </a>
  );
};

InnerButton.defaultProps = {
  onClick: returnNull,
};

export default InnerButton;
