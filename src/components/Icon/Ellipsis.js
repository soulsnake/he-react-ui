import React from 'react'
import PropTypes from 'prop-types'

export default function Ellipsis (props) {
  const { className, color, width, height, ...restProps } = props

  return (
    <svg className={className} width={`${width}px`} height={`${height}px`} {...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 8.000000)" fill={color}>
        <circle cx="2" cy="2" r="2" />
        <circle cx="10" cy="2" r="2" />
        <circle cx="18" cy="2" r="2" />
      </g>
    </svg>
  )
}

Ellipsis.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
}
