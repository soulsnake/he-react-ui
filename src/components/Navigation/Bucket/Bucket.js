/**
 *
 * Navigation Bucket
 *
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { matchPath } from 'react-router'
import { NavLink } from 'react-router-dom'
import isExternal from 'is-url-external'

import styles from './Bucket.scss'
import Icon from '../../Icon'

class Bucket extends Component {
  static propTypes = {
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    route: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      route: PropTypes.string.isRequired,
      notifications: PropTypes.number})),
    onSelect: PropTypes.func,
    open: PropTypes.bool,
    onClickRoute: PropTypes.func,
    onClickParent: PropTypes.func
  }

  static defaultProps = {
    onClickRoute: () => null,
    onClickParent: () => null,
    open: false
  }

  render () {
    const { key, icon, items, label, route, open, onClickRoute, onClickParent } = this.props

    const external = isExternal(route)
    const activeChild = items && items.find(
      (child) => matchPath(location.pathname + location.hash, { path: child.route }) !== null
    )
    const notificationChild = items && items.find((child) => child.notifications > 0)

    const content = (
      <Fragment>
        <Icon className={styles.icon} name={icon} />
        <span className={styles.label}>{label}</span>
        {notificationChild && <div className={styles.notification} />}
      </Fragment>)

    const props = {
      key: key,
      className: classnames(styles.bucket, {
        [styles.open]: open,
        [styles.external]: external,
        [styles.current]: activeChild
      }),
      title: label,
      onClick: () => route ? onClickRoute() : onClickParent()
    }

    if (route) {
      if (external) {
        return (<a target="_blank" href={route} {...props}>{content}</a>)
      } else {
        return (<NavLink exact to={route} activeClassName={styles.current} {...props}>{content}</NavLink>)
      }
    } else {
      return (<div {...props}>{content}</div>)
    }
  }
}

export default Bucket
