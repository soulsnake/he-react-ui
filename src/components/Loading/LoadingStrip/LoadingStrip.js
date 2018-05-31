import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './LoadingStrip.scss';

class LoadingStrip extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    const classes = classnames(style.outer, {
      [className]: className,
    });

    return (
      <div className={classes}>
        <div className={style.inner} />
      </div>
    );
  }
}

export default LoadingStrip;
