// @flow
/**
 *
 * Navigation Bucket
 *
 */

import classnames from 'classnames';
import isExternal from 'is-url-external';
import React, { Fragment } from 'react';
import { matchPath, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { returnNull } from '../../../util';
import Icon from '../../Icon';
import styles from './Bucket.scss';
import type { NavItem } from '../NavItem';

type Props = {
  itemKey?: string,
  label?: string,
  icon?: string,
  route?: string,
  items?: NavItem[],
  onSelect?: Function,
  open?: boolean,
  location?: Location,
  onClickRoute?: Function,
  onClickParent?: Function,
};

function Bucket(props: Props) {
  const { itemKey, icon, items, label, route, open, onClickRoute, onClickParent, location } = props;

  const external = isExternal(route);
  const activeChild =
    items &&
    location &&
    items.find(
      child =>
        matchPath(location.pathname + location.hash, {
          path: child.route,
        }) !== null,
    );
  const notificationChild = items && items.find(child => child.notifications && child.notifications > 0);

  const content = (
    <Fragment>
      <Icon className={styles.icon} name={icon} />
      <span className={styles.label}>{label}</span>
      {notificationChild && <div className={styles.notification} />}
    </Fragment>
  );

  const childProps = {
    id: itemKey && `BUCKET_${itemKey}`,
    key: itemKey,
    className: classnames(styles.bucket, {
      [styles.open]: open,
      [styles.external]: external,
      [styles.current]: activeChild,
    }),
    title: label,
    onClick: route ? onClickRoute : onClickParent,
  };

  if (route) {
    if (external) {
      return (
        <a target="_blank" rel="noopener noreferrer" href={route} {...childProps}>
          {content}
        </a>
      );
    }
    return (
      <NavLink exact to={route} activeClassName={styles.current} {...childProps}>
        {content}
      </NavLink>
    );
  }
  return <div {...childProps}>{content}</div>;
}

Bucket.defaultProps = {
  onClickRoute: returnNull,
  onClickParent: returnNull,
  open: false,
};

export default withRouter(Bucket);
