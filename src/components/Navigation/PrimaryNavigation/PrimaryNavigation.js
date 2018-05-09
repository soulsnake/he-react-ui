/**
 *
 * Primary Navigation
 *
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import isExternal from 'is-url-external'
import { matchPath } from 'react-router'
import { NavLink } from 'react-router-dom'
import onClickOutside from 'react-onclickoutside'
import SubNavigation from '../SubNavigation'
import HashRoute from '../../HashRoute'

import styles from './PrimaryNavigation.scss'
import Icon from '../../Icon'
import Bucket from '../Bucket'
import List from '../List'

const SUPPORTED_BADGES = ['NEW', 'FREE']

class PrimaryNavigation extends Component {
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
        badge: PropTypes.oneOf(SUPPORTED_BADGES),
        notifications: PropTypes.number,
        items: PropTypes.arrayOf(PropTypes.shape({
          key: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          route: PropTypes.string.isRequired
        }))
      }))
    })).isRequired,
    practices: PropTypes.array,
    handleLocationChange: PropTypes.func,
    logoutRoute: PropTypes.string.isRequired
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
    this.renderBuckets = this.renderBuckets.bind(this)
    this.renderSlider = this.renderSlider.bind(this)
    this.renderSliders = this.renderSliders.bind(this)
    this.toggleBucket = this.toggleBucket.bind(this)
    this.renderSubNav = this.renderSubNav.bind(this)
  }

  closeBucket () {
    this.setState({openKey: null})
  }

  toggleBucket (key) {
    const { openKey } = this.state

    this.setState({openKey: key === openKey ? null : key})
  }

  renderBuckets () {
    const { closeBucket, toggleBucket } = this
    const { bottomKeys, items, logo } = this.props
    const { openKey } = this.state
    const topItems = items.filter(item => !bottomKeys.includes(item.key))
    const bottomItems = items.filter(item => bottomKeys.includes(item.key))

    return (
      <div className={styles.buckets}>
        <NavLink className={styles.logoBucket} to={logo.route}
          onClick={closeBucket}>
          <Icon className={styles.logo} name={logo.icon} />
        </NavLink>
        {topItems.map(item => <Bucket open={item.key === openKey} onClickParent={() => toggleBucket(item.key)} onClickRoute={closeBucket} {...item} />)}
        <div className={styles.bucketFiller} onClick={closeBucket} />
        {bottomItems.map(item => <Bucket open={item.key === openKey} onClickParent={toggleBucket} onClickRoute={closeBucket} {...item} />)}
      </div>
    )
  }

  renderSlider (item, top) {
    const { openKey } = this.state
    const { closeBucket } = this

    return (<div
      className={classnames(styles.slider, {
        [styles.sliderOpen]: openKey === item.key,
        [styles.topSlider]: top,
        [styles.bottomSlider]: !top
      })}
      key={item.key}>
      <div className={styles.sliderFiller} />
      <List className={styles.list} onSelect={closeBucket} {...item} />
    </div>)
  }

  renderSliders () {
    const { renderSlider } = this
    const { bottomKeys, items } = this.props
    const topItems = items.filter(item => !bottomKeys.includes(item.key))
    const bottomItems = items.filter(item => bottomKeys.includes(item.key))

    return (
      <div className={styles.sliders}>
        {topItems.map(item => renderSlider(item, true))}
        {bottomItems.map(item => renderSlider(item, false))}
      </div>
    )
  }

  handleClickOutside = () => {
    this.setState({openKey: null})
  }

  renderRoutes (item, practices, onLocationChange, logoutRoute, exact) {
    return (
      <HashRoute
        key={'Subnav_' + item.key}
        exact={item.route === '/'} // Slash will match anything so we need to be exact in that case.
        path={item.route}
        render={
          () => (<SubNavigation item={item} logoutRoute={logoutRoute} practices={practices} onLocationChange={onLocationChange} />)
        }
      />
    )
  }

  renderSubNav (items, practices, handleLocationChange, logoutRoute) {
    const { renderRoutes } = this
    return items.map((item) => {
      switch (item.items && item.items.length > 0) {
      case true:
        return item.items.map(child => renderRoutes(child, practices, handleLocationChange, logoutRoute))
      default:
        return renderRoutes(item, practices, handleLocationChange, logoutRoute)
      }
    })
  }

  render () {
    const { renderBuckets, renderSliders, renderSubNav } = this
    const { items, practices, handleLocationChange, logoutRoute } = this.props

    return (
      <div className={styles.outer}>
        <div className={styles.nav}>
          {renderBuckets()}
          {renderSliders()}
        </div>
        <div className={styles.spacer}>&nbsp;</div>
        <div className={styles.content}>
          {renderSubNav(items, practices, handleLocationChange, logoutRoute)}
        </div>
      </div>
    )
  }
}

export default onClickOutside(PrimaryNavigation)
