/*
 * Navigation
 */

// Vendor
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import PrimaryNavigation from '../PrimaryNavigation'

const SUPPORTED_BADGES = ['NEW', 'FREE']

class Navigation extends Component {
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
    })).isRequired
  }
  render () {
    return (
      <Fragment>
        <PrimaryNavigation {...this.props} />
      </Fragment>
    )
  }
}

export default Navigation
