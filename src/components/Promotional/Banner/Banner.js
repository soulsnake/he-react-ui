/**
 *
 * Banner
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.scss';

function Banner(props) {
  const { children, title } = props;

  return (
    <div className={styles.outer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

Banner.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
};

export default Banner;
