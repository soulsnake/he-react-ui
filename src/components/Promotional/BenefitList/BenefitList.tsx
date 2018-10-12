/**
 *
 * BenefitList
 *
 */
import React from 'react';
import styles from './BenefitList.scss';

function BenefitList(props: { children: any }) {
  const { children } = props;

  return <div className={styles.outer}>{children}</div>;
}

export default BenefitList;
