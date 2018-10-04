import React from 'react';
import style from './LoadingScreen.module.scss';

const LoadingScreen: React.SFC<{ children?: any }> = ({ children }) => (
  <div className={style.loadingContainer}>
    <div className={style.pulseButton} />
    <div className={style.pulseButton2}>{children}</div>
  </div>
);

LoadingScreen.defaultProps = {
  children: null,
};

export default LoadingScreen;
