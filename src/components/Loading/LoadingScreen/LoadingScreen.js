// @flow
import React from 'react';
import style from './LoadingScreen.module.scss';

export default function LoadingScreen({ children }: { children?: any }) {
  return (
    <div className={style.loadingContainer}>
      <div className={style.pulseButton} />
      <div className={style.pulseButton2}>{children}</div>
    </div>
  );
}

LoadingScreen.defaultProps = {
  children: null,
};
