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
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    className: '',
    color: 'teal',
    onClick: () => null
  }

  render () {
    const { className, color, icon, onClick, title, ...rest } = this.props
    const classes = classnames(style.button, {
      [style[color]]: color,
      [style[className]]: className})

    return (
      <button
        className={classes}
        type="button"
        onClick={onClick}
        title={title}
        {...rest}>
        <Icon
          className={style.icon}
          name={icon}
          width={24}
          height={24} />
      </button>
    )
  }
}

export default ActionIcon
