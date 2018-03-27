/**
*
* ActionIcon
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../../Icon'
import style from './ActionIcon.scss'

class ActionIcon extends React.Component {
  static propTypes = {
    color: PropTypes.oneOf(['teal', 'blue', 'green', 'red', 'white']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    className: '',
    color: 'teal',
    disabled: false,
    onClick: () => null
  }

  handleClick = (event) => {
    if (!this.props.disabled) {
      this.props.onClick(event)
    }
  }

  render () {
    const { className, color, disabled, icon, onClick, title, ...rest } = this.props
    const classes = classnames(style.button, {
      [style[color]]: color,
      [style.disabled]: disabled,
      [className]: className
    })

    return (
      <button
        className={classes}
        type="button"
        onClick={this.handleClick}
        title={title}
        {...rest}>
        <Icon
          className={style.icon}
          name={icon}
          width={20}
          height={20} />
      </button>
    )
  }
}

export default ActionIcon
