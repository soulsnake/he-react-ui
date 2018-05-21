// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import LoadingStrip from '../../Loading/LoadingStrip'
import style from './Paragraph.scss'

class Paragraph extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
  }

  render () {
    const { className, children, ...restProps } = this.props
    const classes = classnames(style.paragraph, {
      [className]: className
    })

    if (children) {
      return (<p className={classes} {...restProps}>{children}</p>)
    } else {
      return (<div>
        <LoadingStrip className={style.loading} />
        <LoadingStrip className={style.loading} />
        <LoadingStrip className={style.loading} />
      </div>)
    }
  }
}

export default Paragraph
