/**
 *
 * Footer
 *
 */
import React from 'react';
import styles from './Footer.scss';

function Footer(props: { header: string; children: any }) {
  const { children, header } = props;

  return (
    <div className={styles.outer}>
      <h2 className={styles.header}>{header}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Footer;
