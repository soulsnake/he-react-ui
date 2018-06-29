import PropTypes from 'prop-types';
import React from 'react';
import style from './LoadingScreen.module.scss';

export default function LoadingScreen({ children }) {
  return (
    <div className={style.loadingContainer}>
      <div className={style.pulseButton} />
      <div className={style.pulseButton2}>{children}</div>
    </div>
  );
}

LoadingScreen.propTypes = {
  children: PropTypes.element,
};

LoadingScreen.defaultProps = {
  children: null,
};
