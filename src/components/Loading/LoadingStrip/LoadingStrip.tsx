import classnames from 'classnames';
import React from 'react';
import style from './LoadingStrip.scss';

function LoadingStrip(props: { className?: string }) {
  const { className } = props;
  const classes = classnames(style.outer, className);

  return (
    <div className={classes}>
      <div className={style.inner} />
    </div>
  );
}

export default LoadingStrip;
