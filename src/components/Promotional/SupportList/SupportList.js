/**
 *
 * SupportList
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SupportList.scss';

function SupportList(props) {
  const { children } = props;

  return <div className={styles.outer}>{children}</div>;
}

SupportList.propTypes = {
  children: PropTypes.any.isRequired,
};

export default SupportList;
