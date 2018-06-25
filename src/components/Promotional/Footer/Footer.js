/**
 *
 * Footer
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.scss';

class Footer extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    header: PropTypes.string.isRequired,
  };

  render() {
    const { children, header } = this.props;

    return (
      <div className={styles.outer}>
        <h2 className={styles.header}>{header}</h2>
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}

export default Footer;
