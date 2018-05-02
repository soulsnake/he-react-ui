/**
 *
 * Primary Navigation
 *
 */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './PrimaryNavigation.scss'
import Icon from '../../Icon'
import { NavLink } from 'react-router-dom'
import onClickOutside from 'react-onclickoutside'

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

    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.renderBucket = this.renderBucket.bind(this)
    this.renderBuckets = this.renderBuckets.bind(this)
    this.renderList = this.renderList.bind(this)
    this.renderSliders = this.renderSliders.bind(this)
  }

  renderBucket (bucket) {
    const { openKey } = this.state
    const content = (
      <Fragment>
        <Icon className={styles.bucketIcon} name={bucket.icon} />
        <span className={styles.bucketLabel}>{bucket.label}</span>
      </Fragment>)

    if (bucket.route) {
      return (
        <NavLink
          key={bucket.key}
          className={styles.bucket}
          activeClassName={styles.current}
          to={bucket.route}
          title={bucket.label}
          onClick={() => { this.setState({openKey: null}) }}>
          {content}
        </NavLink>
      )
    } else {
      return (
        <div
          key={bucket.key}
          className={classnames(styles.bucket, {[styles.bucketOpen]: openKey === bucket.key})}
          title={bucket.label}
          onClick={() => { this.setState({openKey: bucket.key}) }}>
          {content}
        </div>
      )
    }
  }

  renderBuckets () {
    const { renderBucket } = this
    const { bottomKeys, items, logo } = this.props
    const topItems = items.filter(item => !bottomKeys.includes(item.key))
    const bottomItems = items.filter(item => bottomKeys.includes(item.key))

    return (
      <div className={styles.buckets}>
        <div className={styles.logoBucket}>
          <Icon className={styles.logo} name={logo.icon} />
        </div>
        <div className={styles.topBuckets}>
          {topItems.map(item => renderBucket(item))}
        </div>
        <div className={styles.bottomBuckets}>
          {bottomItems.map(item => renderBucket(item))}
        </div>
      </div>
    )
  }

  renderList (list) {
    return (
      <div className={styles.list}
        key={list.key}>
        {list.items && (
          <Fragment>
            <span className={styles.listHeading}>{list.title}</span>
            {list.items.map(item => (
              <NavLink
                className={styles.listItem}
                key={item.key}
                to={item.route}>
                {item.label}
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
