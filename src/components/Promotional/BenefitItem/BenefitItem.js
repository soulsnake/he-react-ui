/**
 *
 * BenefitItem
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import styles from './BenefitItem.scss';

function BenefitItem(props) {
  const { children } = props;

  return (
    <div className={styles.outer}>
      <Icon className={styles.tick} name="Tick" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

BenefitItem.propTypes = {
  children: PropTypes.any.isRequired,
};

export default BenefitItem;
