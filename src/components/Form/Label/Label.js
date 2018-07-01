// @flow
/**
 *
 * Label
 *
 */

import classnames from 'classnames';
import React from 'react';
import Icon from '../../Icon';
import LoadingStrip from '../../Loading/LoadingStrip';
import style from './Label.scss';

type Props = {
  className: string,
  error?: boolean,
  htmlFor?: string,
  children: any,
  onChange?: Function,
};

function Label(props: Props) {
  const { children, className, error, htmlFor, ...restProps } = props;
  const classes = classnames(style.label, {
    [style.error]: error,
    [className]: className,
  });

  return (
    <div className={classes} {...restProps}>
      {error && <Icon className={style.icon} name="Alert" />}
      {children ? (
        <label htmlFor={htmlFor}>{children}</label>
      ) : (
        <LoadingStrip className={style.loading} />
      )}
    </div>
  );
}

Label.defaultProps = {
  error: false,
  onChange: () => null,
  htmlFor: '',
};

export default Label;
