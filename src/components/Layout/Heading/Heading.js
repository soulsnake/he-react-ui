// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './Heading.scss'

class Heading extends React.Component {
  static propTypes = {
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    h4: PropTypes.bool,
    nav: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string
  }

  static defaultProps = {
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    nav: false
  }

  render () {
    const { className, children, h1, h2, h3, h4, nav, ...restProps } = this.props
    const classes = classnames(style.heading, {
      [style.nav]: nav,
      [className]: className
    })

    if (h2 === true) {
      return (<h2 className={classes} {...restProps}>{children}</h2>)
    }
    if (h3 === true) {
      return (<h3 className={classes} {...restProps}>{children}</h3>)
    }
    if (h4 === true) {
      return (<h4 className={classes} {...restProps}>{children}</h4>)
    }
    return (<h1 className={classes} {...restProps}>{children}</h1>)
  }
}

export default Heading
