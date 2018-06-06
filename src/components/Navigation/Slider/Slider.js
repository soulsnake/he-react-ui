/**
 *
 * Navigation Slider
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import List from '../List';
import styles from './Slider.scss';

class Slider extends Component {
  static propTypes = {
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    route: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        route: PropTypes.string.isRequired,
        notifications: PropTypes.number,
      }),
    ),
    open: PropTypes.bool,
    bottom: PropTypes.bool,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    onSelect: () => null,
    open: false,
    bottom: false,
  };

  render() {
    const { bottom, key, open, ...restProps } = this.props;

    return (
      <div
        className={classnames(styles.slider, {
          [styles.open]: open,
          [styles.bottom]: bottom,
        })}
        key={key}
      >
        <div className={styles.filler} />
        <List className={styles.list} {...restProps} />
      </div>
    );
  }
}

export default Slider;
