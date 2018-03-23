import React from 'react'
import PropTypes from 'prop-types'

export default function Ellipsis (props) {
  return (
    <svg className={props.className} width={`${props.width}px`} height={`${props.height}px`} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 8.000000)" fill={props.color}>
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
