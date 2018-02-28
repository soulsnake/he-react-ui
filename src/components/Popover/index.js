/**
*
* Popover
*
*/
import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import PopoverWrap from './styles'

class Popover extends React.Component {
  static propTypes = {
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    positionTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    positionLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    arrowOffsetTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    arrowOffsetLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.node
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
      [placement]: true
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
      <PopoverWrap
        role="tooltip"
        className={classnames(className, classes)}
        style={outerStyle}
      >
        <div className="arrow" style={arrowStyle} />

        {title && <h3 className={'title'}>{title}</h3>}

        <div className={'content'}>{children}</div>
      </PopoverWrap>
    )
  }
}

export default Popover
