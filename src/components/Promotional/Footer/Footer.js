/**
 *
 * Footer
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.scss';

function Footer(props) {
  const { children, header } = props;

  return (
    <div className={styles.outer}>
      <h2 className={styles.header}>{header}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

Footer.propTypes = {
  children: PropTypes.any.isRequired,
  header: PropTypes.string.isRequired,
};

export default Footer;
