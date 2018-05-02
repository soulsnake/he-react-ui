/*
 * SubNavigation
 */

// Vendor
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import style from './SubNavigation.scss'
import Heading from '../Heading'

class SubNavigation extends Component {
  static propTypes = {
    item: PropTypes.shape({
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
    })
  }

  renderItems = (items) => {
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
    const { item } = this.props

    return (
      <div>
        <div className={style.barOuter}>
          <div className={style.barInner}>
            <Heading h1 className={style.heading}>{item.title}</Heading>
            <div className={style.items}>
              {this.renderItems(item.items)}
            </div>
          </div>
        </div>
        <div className={style.contentPusher} />
      </div>
    )
  }
}

export default SubNavigation
