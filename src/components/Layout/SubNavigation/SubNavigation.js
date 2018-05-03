/*
 * SubNavigation
 */

// Vendor
import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Heading from '../Heading'
import Icon from '../../Icon'
import SingleSelect from '../../Form/SingleSelect'

import style from './SubNavigation.scss'

const SUPPORTED_BADGES = ['NEW', 'FREE']

class SubNavigation extends Component {
  static propTypes = {
    item: PropTypes.shape({
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
    }),
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

  render () {
    const { item, practices, handleLocationChange, logoutRoute } = this.props

    return (
      <Fragment>
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
                  <Icon className={style.icon} name="Logout" width={16} height={16} />Logout
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
      </Fragment>
    )
  }
}

export default SubNavigation
