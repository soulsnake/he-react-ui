/**
 *
 * Primary Navigation
 *
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import onClickOutside from 'react-onclickoutside'
import SubNavigation from '../SubNavigation'
import HashRoute from '../../HashRoute'

import styles from './PrimaryNavigation.scss'
import Icon from '../../Icon'
import Bucket from '../Bucket'
import Slider from '../Slider'

const SUPPORTED_BADGES = ['NEW', 'FREE']

class PrimaryNavigation extends Component {
  static propTypes = {
    bottomKeys: PropTypes.arrayOf(PropTypes.string),
    logo: PropTypes.shape({
      icon: PropTypes.any.isRequired,
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
    locations: PropTypes.array,
    handleLocationChange: PropTypes.func,
    logoutRoute: PropTypes.string.isRequired
  }

  static defaultProps = {
    bottomKeys: [],
    logo: {
      icon: <Icon className={styles.logo} name="HealthEngine" />,
      route: '/'
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      openKey: null
    }

    this.closeBucket = this.closeBucket.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.renderBuckets = this.renderBuckets.bind(this)
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
          <div className={styles.logo}>
            {logo.icon}
          </div>
        </NavLink>
        {topItems.map(item => <Bucket open={item.key === openKey} onClickParent={() => toggleBucket(item.key)} onClickRoute={closeBucket} {...item} />)}
        <div className={styles.bucketFiller} onClick={closeBucket} />
        {bottomItems.map(item => <Bucket open={item.key === openKey} onClickParent={() => toggleBucket(item.key)} onClickRoute={closeBucket} {...item} />)}
      </div>
    )
  }

  renderSliders () {
    const { closeBucket } = this
    const { bottomKeys, items } = this.props
    const { openKey } = this.state
    const topItems = items.filter(item => !bottomKeys.includes(item.key))
    const bottomItems = items.filter(item => bottomKeys.includes(item.key))

    return (
      <div className={styles.sliders}>
        {topItems.map(item => <Slider open={openKey === item.key} onSelect={closeBucket} {...item} />)}
        {bottomItems.map(item => <Slider bottom open={openKey === item.key} onSelect={closeBucket} {...item} />)}
      </div>
    )
  }

  handleClickOutside = () => {
    this.setState({openKey: null})
  }

  renderRoutes (item, locations, onLocationChange, logoutRoute, exact) {
    return (
      <HashRoute
        key={'Subnav_' + item.key}
        exact={item.route === '/'} // Slash will match anything so we need to be exact in that case.
        path={item.route}
        render={
          () => (<SubNavigation item={item} logoutRoute={logoutRoute} locations={locations} onLocationChange={onLocationChange} />)
        }
      />
    )
  }

  renderSubNav (items, locations, handleLocationChange, logoutRoute) {
    const { renderRoutes } = this
    return items.map((item) => {
      switch (item.items && item.items.length > 0) {
      case true:
        return item.items.map(child => renderRoutes(child, locations, handleLocationChange, logoutRoute))
      default:
        return renderRoutes(item, locations, handleLocationChange, logoutRoute)
      }
    })
  }

  render () {
    const { closeBucket, renderBuckets, renderSliders, renderSubNav } = this
    const { items, locations, handleLocationChange, logoutRoute } = this.props

    return (
      <div className={styles.outer}>
        <div className={styles.nav}>
          {renderBuckets()}
          {renderSliders()}
        </div>
        <div className={styles.spacer}>&nbsp;</div>
        <div className={styles.content} onClick={closeBucket}>
          {renderSubNav(items, locations, handleLocationChange, logoutRoute)}
        </div>
      </div>
    )
  }
}

export default onClickOutside(PrimaryNavigation)
