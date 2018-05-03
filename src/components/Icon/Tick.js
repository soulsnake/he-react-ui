import React from 'react'
import PropTypes from 'prop-types'

export default function Tick (props) {
  const {className, ...restProps} = props

  return (
    <svg className={className} {...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(4.000000, 3.000000) translate(7.915660, 7.415660) rotate(45.000000) translate(-7.915660, -7.415660)">
        <path d="M9.74204164,1.7591673 C9.74184193,1.20688259 10.1893953,0.759005475 10.74168,0.75880577 C11.2939647,0.758606065 11.7418418,1.20615939 11.7420415,1.75844411 L11.7461325,13.0721526 C11.7463323,13.6245785 11.2985585,14.0725142 10.7461326,14.0725142 L5.08518732,14.0725142 C4.53290257,14.0725142 4.08518732,13.624799 4.08518732,13.0725142 C4.08518732,12.5202295 4.53290257,12.0725142 5.08518732,12.0725142 L9.74577092,12.0725142 L9.74204164,1.7591673 Z" />
      </g>
    </svg>
  )
}

Tick.propTypes = {
  className: PropTypes.string
}
