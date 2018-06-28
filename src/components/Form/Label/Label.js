/**
 *
 * Label
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../Icon';
import LoadingStrip from '../../Loading/LoadingStrip';
import style from './Label.scss';

function Label(props) {
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

Label.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  htmlFor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func,
};

Label.defaultProps = {
  error: false,
  onChange: () => null,
};

export default Label;
