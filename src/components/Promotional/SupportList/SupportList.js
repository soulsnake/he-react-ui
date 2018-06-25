/**
 *
 * SupportList
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SupportList.scss';

class SupportList extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  }

  render() {
    const { children } = this.props;

    return <div className={styles.outer}>{children}</div>;
  }
}

export default SupportList;
