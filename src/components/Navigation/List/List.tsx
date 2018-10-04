/**
 *
 * Navigation List
 *
 */

import classnames from 'classnames';
import React, { Component, Fragment } from 'react';
import { matchPath } from 'react-router';
import { NavLink } from 'react-router-dom';
import { returnNull } from '../../../util';
import styles from './List.scss';
import { NavItem } from '../NavItem';

function renderBadge(item: NavItem) {
  if (item.notifications && item.notifications > 0) {
    return (
      <div className={classnames(styles.badge, styles.notification)}>
        {item.notifications}
      </div>
    );
  } else if (item.badge) {
    return (
      <div
        className={classnames(styles.badge, {
          [styles.free]: item.badge === 'FREE',
          [styles.new]: item.badge === 'NEW',
        })}
      >
        {item.badge}
      </div>
    );
  }
  return null;
}

type Props = {
  itemKey?: string;
  title?: string;
  items?: NavItem[];
  className?: string;
  onSelect?: () => void;
};

class List extends Component<Props> {
  static defaultProps = {
    className: '',
    onSelect: returnNull,
  };

  renderItem = (item: NavItem) => {
    const { onSelect } = this.props;
    const current =
      matchPath(window.location.pathname + window.location.hash, {
        path: item.route,
      }) !== null;

    return (
      <NavLink
        className={classnames(styles.item, { [styles.current]: current })}
        activeClassName={styles.current}
        key={item.key}
        id={item.key && `NAV_${item.key}`}
        to={item.route as any}
        onClick={onSelect}
      >
        {item.label}
        {renderBadge(item)}
      </NavLink>
    );
  };

  render() {
    const { renderItem } = this;
    const { className, itemKey, title, items } = this.props;

    return (
      <div className={className} key={itemKey}>
        {items && (
          <Fragment>
            <span className={styles.heading}>{title}</span>
            {items.map(item => renderItem(item))}
          </Fragment>
        )}
      </div>
    );
  }
}

export default List;
