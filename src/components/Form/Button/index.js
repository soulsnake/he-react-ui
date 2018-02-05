/**
*
* Button
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './styles'
import classnames from 'classnames'

class Button extends React.Component {
  static propTypes = {
    submit: PropTypes.bool,
    color: PropTypes.string,
    lg: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    submit: false,
    color: 'green',
    children: <div> Button</div>,
    lg: true,
    disabled: false
  }
  render () {
    const { lg, color, className, submit, ...fieldProps } = this.props
    const btnClass = classnames('btn', { 'btn-lg': lg, [`btn-${color}`]: color, [className]: className })
    return (
      <StyledButton
        className={btnClass}
        type={submit ? 'submit' : 'button'}
        {...fieldProps}>
        {this.props.children}
      </StyledButton>
    )
  }
}

export default Button
