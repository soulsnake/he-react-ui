/**
 *
 * Primary Navigation
 *
 */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import isExternal from 'is-url-external'
import { matchPath } from 'react-router'
import { NavLink } from 'react-router-dom'
import onClickOutside from 'react-onclickoutside'

import styles from './PrimaryNavigation.scss'
import Icon from '../../Icon'

class PrimaryNavigation extends React.Component {
  static propTypes = {
    bottomKeys: PropTypes.arrayOf(PropTypes.string),
    logo: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired
    }).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      route: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        badge: PropTypes.oneOf(['NEW', 'FREE']),
        notifications: PropTypes.number,
        items: PropTypes.arrayOf(PropTypes.shape({
          key: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          route: PropTypes.string.isRequired
        }))
      }))
    })).isRequired
  }

  static defaultProps = {
    baseUrl: '',
    bottomKeys: []
  }

  constructor (props) {
    super(props)

    this.state = {
      openKey: null
    }

    this.closeBucket = this.closeBucket.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.renderBadge = this.renderBadge.bind(this)
    this.renderBucket = this.renderBucket.bind(this)
    this.renderBuckets = this.renderBuckets.bind(this)
    this.renderList = this.renderList.bind(this)
    this.renderSliders = this.renderSliders.bind(this)
    this.toggleBucket = this.toggleBucket.bind(this)
  }

  closeBucket () {
    this.setState({openKey: null})
  }

  toggleBucket (key) {
    const { openKey } = this.state

    this.setState({openKey: key === openKey ? null : key})
  }

  renderBucket (bucket) {
    const { closeBucket, toggleBucket } = this
    const { openKey } = this.state
    const external = isExternal(bucket.route)
    const activeChild = bucket.items && bucket.items.find(
      (child) => matchPath(location.pathname + location.hash, { path: child.route, exact: false, strict: false }) !== null)
    const notificationChild = bucket.items && bucket.items.find((child) => child.notifications > 0)
    const content = (
      <Fragment>
        <Icon className={styles.bucketIcon} name={bucket.icon} />
        <span className={styles.bucketLabel}>{bucket.label}</span>
        {notificationChild && <div className={styles.bucketNotification} />}
      </Fragment>)
    const props = {
      key: bucket.key,
      className: classnames(styles.bucket, {
        [styles.bucketOpen]: openKey === bucket.key,
        [styles.external]: external,
        [styles.bucketCurrent]: activeChild
      }),
      title: bucket.label,
      onClick: () => bucket.route ? closeBucket() : toggleBucket(bucket.key)
    }

    if (bucket.route) {
      if (external) {
        return (<a target="_blank" href={bucket.route} {...props}>{content}</a>)
      } else {
        return (<NavLink exact to={bucket.route} activeClassName={styles.bucketCurrent} {...props}>{content}</NavLink>)
      }
    } else {
      return (<div {...props}>{content}</div>)
    }
  }

  renderBuckets () {
    const { closeBucket, renderBucket } = this
    const { bottomKeys, items, logo } = this.props
    const topItems = items.filter(item => !bottomKeys.includes(item.key))
    const bottomItems = items.filter(item => bottomKeys.includes(item.key))

    return (
      <div className={styles.buckets}>
        <NavLink className={styles.logoBucket} to={logo.route}
          onClick={closeBucket}>
          <Icon className={styles.logo} name={logo.icon} />
        </NavLink>
        {topItems.map(item => renderBucket(item))}
        <div className={styles.bucketFiller} onClick={closeBucket} />
        {bottomItems.map(item => renderBucket(item))}
      </div>
    )
  }

  renderBadge (item) {
    if (item.notifications > 0) {
      return (<div className={classnames(styles.badge, styles.badgeNotification)}>
        {item.notifications}
      </div>)
    } else if (item.badge) {
      return (<div className={
        classnames(styles.badge, {
          [styles.badgeFree]: item.badge === 'FREE',
          [styles.badgeNew]: item.badge === 'NEW'
        })}>
        {item.badge}
      </div>)
    }
  }

  renderList (list) {
    const { closeBucket, renderBadge } = this
    return (
      <div className={styles.list}
        key={list.key}>
        {list.items && (
          <Fragment>
            <span className={styles.listHeading}>{list.title}</span>
            {list.items.map(item => (
              <NavLink
                className={classnames(styles.listItem, {
                  [styles.listCurrent]: matchPath(location.pathname + location.hash, { path: item.route, exact: false, strict: false }) !== null
                })}
                activeClassName={styles.listCurrent}
                key={item.key}
                to={item.route}
                onClick={closeBucket}>
                {item.label}
                {renderBadge(item)}
              </NavLink>
            ))}
          </Fragment>)}
      </div>)
  }

  renderSliders () {
    const { renderList } = this
    const { bottomKeys, items } = this.props
    const { openKey } = this.state

    return (
      <div className={styles.sliders}>
        {items.map(
          item => {
            const top = !bottomKeys.includes(item.key)
            return (
              <div
                className={classnames(styles.slider, {
                  [styles.sliderOpen]: openKey === item.key,
                  [styles.topSlider]: top,
                  [styles.bottomSlider]: !top
                })}
                key={item.key}>
                <div className={styles.sliderFiller} />
                {renderList(item)}
              </div>
            )
          }
        )}
      </div>
    )
  }

  handleClickOutside = () => {
    this.setState({openKey: null})
  }

  render () {
    const { renderBuckets, renderSliders } = this

    return (
      <div className={styles.outer}>
        {renderBuckets()}
        {renderSliders()}
      </div>
    )
  }
}

export default onClickOutside(PrimaryNavigation)
