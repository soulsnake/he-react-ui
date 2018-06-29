import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import style from './LoadingStrip.scss';

function LoadingStrip(props) {
  const { className } = props;
  const classes = classnames(style.outer, {
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className={style.inner} />
    </div>
  );
}

LoadingStrip.propTypes = {
  className: PropTypes.string,
};

export default LoadingStrip;
