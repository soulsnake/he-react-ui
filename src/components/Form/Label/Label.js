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

class Label extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.bool,
    htmlFor: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    error: false,
    onChange: () => null,
  };

  render() {
    const { children, className, error, htmlFor, ...restProps } = this.props;
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
}

export default Label;
