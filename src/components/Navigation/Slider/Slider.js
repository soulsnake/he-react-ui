/**
 *
 * Navigation Slider
 *
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import List from '../List';
import styles from './Slider.scss';

function Slider(props) {
  const { bottom, itemKey, open, siteName, ...restProps } = props;

  return (
    <div
      className={classnames(styles.slider, {
        [styles.open]: open,
        [styles.bottom]: bottom,
      })}
      key={itemKey}
    >
      <div className={styles.filler}>
        {siteName && <div className={styles.sitename}>{siteName}</div>}
      </div>
      <List className={styles.list} itemKey={itemKey} {...restProps} />
    </div>
  );
}

Slider.propTypes = {
  siteName: PropTypes.string,
  itemKey: PropTypes.string.isRequired,
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

Slider.defaultProps = {
  onSelect: () => null,
  open: false,
  bottom: false,
};

export default Slider;
