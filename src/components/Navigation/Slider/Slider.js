/**
 *
 * Navigation Slider
 *
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Slider.scss'
import List from '../List'

class Slider extends Component {
  static propTypes = {
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    route: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      route: PropTypes.string.isRequired,
      notifications: PropTypes.number})),
    open: PropTypes.bool,
    top: PropTypes.bool,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    onSelect: () => null,
    open: false,
    top: true
  }

  render () {
    const { key, open, top, ...restProps } = this.props

    return (<div
      className={classnames(styles.slider, {
        [styles.open]: open,
        [styles.top]: top,
        [styles.bottom]: !top
      })}
      key={key}>
      <div className={styles.filler} />
      <List className={styles.list} {...restProps} />
    </div>)
  }
}

export default Slider
