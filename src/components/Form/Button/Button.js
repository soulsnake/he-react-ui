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
    children: PropTypes.array,
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
    disabled: false,
    squared: false,
    onClick: () => null
  }

  handleClick = (event) => {
    if (!this.props.disabled) {
      this.props.onClick(event)
    }
  }

  render () {
    const { children, className, color, disabled, icon, keyline, link, onClick, small, squared, submit, ...rest } = this.props
    const classes = classnames(style.button, {
      [style[color]]: color,
      [style.small]: small,
      [style.disabled]: disabled,
      [style.keyline]: keyline,
      [style.link]: link,
      [style.squared]: squared,
      [style[className]]: className})

    return (
      <button
        className={classes}
        type={submit ? 'submit' : 'button'}
        onClick={this.handleClick}
        {...rest}>
        {children}
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
