/**
 *
 * BenefitItem
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import styles from './BenefitItem.scss';

class BenefitItem extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <div className={styles.outer}>
        <Icon className={styles.tick} name="Tick" />
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}

export default BenefitItem;
