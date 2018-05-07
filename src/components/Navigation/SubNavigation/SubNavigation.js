/*
 * SubNavigation
 */

// Vendor
import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Heading from '../../Layout/Heading'
import Icon from '../../Icon'
import SingleSelect from '../../Form/SingleSelect'

import style from './SubNavigation.scss'

class SubNavigation extends Component {
  static propTypes = {
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

  renderItems (items) {
    return items.map((item, index) => (
      <NavLink
        key={index}
        className={style.item}
        activeClassName={style.selected}
        exact
        to={item.route}
        title={item.label}
      >
        <span>{item.label}</span>
      </NavLink>
    ))
  }

  renderSubNav (item, practices, handleLocationChange, logoutRoute) {
    return (
      <div className={style.bar}>
        <div className={style.top}>
          <Heading h1 className={style.heading}>{item.title}</Heading>
          <div className={style.controls}>
            {practices && practices.length > 1 &&
            (
              <span className={style.rightControlOption}>
                <SingleSelect className={style.locationSelector} id="locationSelector" name="location" options={practices} onChange={handleLocationChange} />
              </span>
            )}
            <NavLink
              key="logout"
              to={logoutRoute}
              className={style.topNavLink}
              title="Logout"
            >
              <span className={style.rightControlOption}>
                <Icon className={style.icon} name="Logout" />Logout
              </span>
            </NavLink>
          </div>
        </div>
        {item.items && item.items.length > 0 && (
          <div className={style.items}>
            {this.renderItems(item.items)}
          </div>
        )}
      </div>
    )
  }

  renderRoutes (item, practices, handleLocationChange, logoutRoute) {
    return (
      <Route path={item.route} render={() => this.renderSubNav(item, practices, handleLocationChange, logoutRoute)} />
    )
  }

  render () {
    const { items, practices, handleLocationChange, logoutRoute } = this.props
    return items.map((item) => {
      return item.items && item.items.map((item) => {
        return this.renderRoutes(item, practices, handleLocationChange, logoutRoute)
      })
    })
  }
}

export default SubNavigation
