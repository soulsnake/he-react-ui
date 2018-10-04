/**
 *
 * SupportList
 *
 */
import React from 'react';
import styles from './SupportList.scss';

function SupportList(props: { children: any }) {
  const { children } = props;

  return <div className={styles.outer}>{children}</div>;
}

export default SupportList;
