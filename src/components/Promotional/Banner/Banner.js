/**
 *
 * Banner
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.scss';

class Banner extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { children, title } = this.props;

    return (
      <div className={styles.outer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}

export default Banner;
