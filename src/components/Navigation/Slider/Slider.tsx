/**
 *
 * Navigation Slider
 *
 */

import classnames from 'classnames';
import React from 'react';
import { returnNull } from '../../../util';
import List from '../List';
import styles from './Slider.scss';
import { NavItem } from '../NavItem';

type Props = {
  siteName?: string;
  itemKey?: string;
  label?: string;
  icon?: string;
  route?: string;
  items?: NavItem[];
  open?: boolean;
  bottom?: boolean;
  onSelect?: () => void;
};

const Slider: React.SFC<Props> = props => {
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
      <List title="" className={styles.list} itemKey={itemKey} {...restProps} />
    </div>
  );
};

Slider.defaultProps = {
  onSelect: returnNull,
  open: false,
  bottom: false,
};

export default Slider;
