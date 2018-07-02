// @flow
/**
 *
 * BenefitItem
 *
 */
import React from 'react';
import Icon from '../../Icon';
import styles from './BenefitItem.scss';

export default function BenefitItem(props: { children: any }) {
  const { children } = props;

  return (
    <div className={styles.outer}>
      <Icon className={styles.tick} name="Tick" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
