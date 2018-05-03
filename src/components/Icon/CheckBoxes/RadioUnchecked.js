import React from 'react'
import PropTypes from 'prop-types'

export default function RadioUnchecked (props) {
  const {className, ...restProps} = props

  return (
    <svg className={className} {...restProps} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.66 0.36L13.89 0.79L15.05 1.37L16.11 2.08L17.07 2.93L17.92 3.89L18.63 4.95L19.21 6.11L19.64 7.34L19.91 8.64L20 10L19.91 11.36L19.64 12.66L19.21 13.89L18.63 15.05L17.92 16.11L17.07 17.07L16.11 17.92L15.05 18.63L13.89 19.21L12.66 19.64L11.36 19.91L10 20L8.64 19.91L7.34 19.64L6.11 19.21L4.95 18.63L3.89 17.92L2.93 17.07L2.08 16.11L1.37 15.05L0.79 13.89L0.36 12.66L0.09 11.36L0 10L0.09 8.64L0.36 7.34L0.79 6.11L1.37 4.95L2.08 3.89L2.93 2.93L3.89 2.08L4.95 1.37L6.11 0.79L7.34 0.36L8.64 0.09L10 0L11.36 0.09L12.66 0.36ZM7.46 2.4L6.31 2.89L5.27 3.54L4.34 4.34L3.54 5.27L2.89 6.31L2.4 7.46L2.1 8.69L1.99 9.98L2.1 11.28L2.4 12.51L2.89 13.65L3.54 14.7L4.34 15.63L5.27 16.43L6.31 17.08L7.46 17.56L8.69 17.87L9.98 17.97L11.28 17.87L12.51 17.56L13.65 17.08L14.7 16.43L15.63 15.63L16.43 14.7L17.08 13.65L17.56 12.51L17.87 11.28L17.97 9.98L17.87 8.69L17.56 7.46L17.08 6.31L16.43 5.27L15.63 4.34L14.7 3.54L13.65 2.89L12.51 2.4L11.28 2.1L9.98 1.99L8.69 2.1L7.46 2.4Z" />
    </svg>
  )
}

RadioUnchecked.propTypes = {
  className: PropTypes.string
}
