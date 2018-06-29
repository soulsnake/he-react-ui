/**
 *
 * BenefitList
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './BenefitList.scss';

function BenefitList(props) {
  const { children } = props;

  return <div className={styles.outer}>{children}</div>;
}

BenefitList.propTypes = {
  children: PropTypes.any.isRequired,
};

export default BenefitList;
