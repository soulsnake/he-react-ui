/**
*
* Button
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../../Icon'
import style from './Button.scss'

class Button extends React.Component {
  static propTypes = {
    submit: PropTypes.bool,
    color: PropTypes.oneOf(['teal', 'blue', 'green', 'red', 'white']),
    link: PropTypes.bool,
    small: PropTypes.bool,
    onClick: PropTypes.func,
    keyline: PropTypes.bool,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    squared: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    submit: false,
    link: false,
    color: 'teal',
    icon: '',
    keyline: false,
    label: 'Button',
    disabled: false,
    squared: false
  }

  render () {
    const { color, className, disabled, icon, keyline, label, link, small, squared, submit, ...rest } = this.props
    const btnClass = classnames(style.button, {
      [style[color]]: color,
      [style.small]: small,
      [style.disabled]: disabled,
      [style.keyline]: keyline,
      [style.link]: link,
      [style.squared]: squared,
      [className]: className})

    return (
      <button
        className={btnClass}
        type={submit ? 'submit' : 'button'}
        {...rest}>
        {label}
        {icon && <Icon
          className={style.icon}
          name={icon}
          width={24}
          height={24} />}
      </button>
    )
  }
}

export default Button
