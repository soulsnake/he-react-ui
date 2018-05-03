import React from 'react'
import PropTypes from 'prop-types'

export default function Logout (props) {
  const { className, width, height, ...restProps } = props

  return (
    <svg className={className} width={width} height={height} {...restProps} viewBox="0 1 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Symbols" stroke="#5C7783" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5,6.16666667 L6.5,3.16666667 C6.5,2.61466667 6.948,2.16666667 7.5,2.16666667 L14.5,2.16666667 C15.052,2.16666667 15.5,2.61466667 15.5,3.16666667 L15.5,15.1666667 C15.5,15.7186667 15.052,16.1666667 14.5,16.1666667 L7.5,16.1666667 C6.948,16.1666667 6.5,15.7186667 6.5,15.1666667 L6.5,12.1666667" id="Shape" />
        <path d="M11.5,9.16666667 L0.5,9.16666667" id="Shape" />
        <polyline id="Shape" points="3.5 6.16666667 0.5 9.16666667 3.5 12.1666667" />
      </g>
    </svg>
  )
}

Logout.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}
