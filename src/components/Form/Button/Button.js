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
import {n_grey_1, teal_1, teal_2, sp_blue, sp_green, sp_red, white} from '../../../styles/colors.js'

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

  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  hoverOn = () => {
    this.setState({hover: true})
  }

  hoverOff = () => {
    this.setState({hover: false})
  }

  getIconColor = () => {
    const {color, disabled, link, keyline} = this.props
    if (disabled) {
      return n_grey_1
    }
    if ((keyline && !this.state.hover) || link) {
      switch (this.props.color) {
      case 'teal': return teal_1
      case 'blue': return sp_blue
      case 'green': return sp_green
      case 'red': return sp_red
      case 'white': return white
      }
    } else {
      if (color == 'white' && ((this.state.hover && keyline) || !(keyline || link))) {
        return teal_2
      }
      return white
    }
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
        onMouseOver={this.hoverOn}
        onMouseLeave={this.hoverOff}
        {...rest}>
        {label}
        {icon && <Icon
          className={style.icon}
          name={icon}
          color={this.getIconColor(color)}
          width="24"
          height="24" />}
      </button>
    )
  }
}

export default Button
