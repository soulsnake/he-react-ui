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
    link: PropTypes.bool,
    small: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    submit: false,
    link: false,
    color: '',
    children: <div> Button</div>,
    lg: true,
    disabled: false
  }
  render () {
    const { small, link, color, className, submit, ...fieldProps } = this.props
    const btnClass = classnames('btn', { 'btn-link': link, 'btn-small': small, [`btn-${color}`]: color, [className]: className })
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
