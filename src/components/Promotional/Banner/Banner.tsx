/**
 *
 * Banner
 *
 */
import React from 'react';
import styles from './Banner.scss';

function Banner(props: { children: any; title: string }) {
  const { children, title } = props;

  return (
    <div className={styles.outer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Banner;
