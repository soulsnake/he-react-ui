// Vendor
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './Footer.scss'

class Footer extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  }

  render () {
    const {children, ...restProps} = this.props

    return (
      <div className={style.footer} {...restProps}>
        {children}
      </div>
    )
  }
}

export default Footer
