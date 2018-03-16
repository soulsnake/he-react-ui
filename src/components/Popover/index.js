/**
*
* Popover
*
*/
import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import PopoverWrap from './styles'
import styles from './index.scss'

class Popover extends React.Component {
  static propTypes = {
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    positionTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    positionLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    arrowOffsetTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    arrowOffsetLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any
  }

  static defaultProps = {
    placement: 'right'
  }
  render () {
    const {
      placement,
      positionTop,
      positionLeft,
      arrowOffsetTop,
      arrowOffsetLeft,
      title,
      className,
      style,
      children,
      ...props
    } = this.props

    const classes = {
      [styles.popover]: true,
      [styles[placement]]: true
    }

    const outerStyle = {
      display: 'block',
      top: positionTop,
      left: positionLeft,
      ...style
    }

    const arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    }

    return (
      <div
        {...props}
        role="tooltip"
        className={classnames(className, classes)}
        style={outerStyle}
      >
        <div className={styles.arrow} style={arrowStyle} />

        {title && <h3 className={styles.title}>{title}</h3>}

        <div className={styles.content}>{children}</div>
      </div>
    )
  }
}

export default Popover
