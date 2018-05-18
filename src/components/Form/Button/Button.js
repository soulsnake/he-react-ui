/**
*
* Button
*
*/

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../../Icon'
import style from './Button.scss'
import LoadingSpinner from '../../Loading/LoadingSpinner'

let iconDeprecationShown = false
function showIconDeprecation () {
  if (!iconDeprecationShown) {
    console.error('Button.icon is deprecated. Please use iconLeft or iconRight instead, which take an element rather than a string.')
    iconDeprecationShown = true
  }
}
class Button extends React.Component {
  static propTypes = {
    submit: PropTypes.bool,
    color: PropTypes.oneOf(['teal', 'blue', 'green', 'red', 'white']),
    link: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    onClick: PropTypes.func,
    keyline: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element,
    squared: PropTypes.bool,
    submitting: PropTypes.bool,
    done: PropTypes.bool,
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

  constructor (props) {
    super(props)
    if (props.icon) {
      showIconDeprecation()
    }
  }

  render () {
    const { children, className, color, disabled, icon, iconLeft, iconRight, keyline, link, onClick, small, large, squared, submit, submitting, done, ...rest } = this.props

    /* FIXME */ console.log(...[
      {done, submitting},
      '{done, submitting}'
    ].reverse()) /* FIXME */
    

    const buttonClasses = classnames(style.button, {
      [style.green]: done,
      [style[color]]: color,
      [style.disabled]: disabled,
      [style.keyline]: keyline,
      [style.link]: link,
      [style.squared]: squared,
      [style.done]: done,
      [style.submitting]: submitting,
      [className]: className})

    const containerClasses = classnames(style.buttonContainer, {
      [style.small]: small,
      [style.large]: large
    })

    const statusIcon = done ? <Icon name="Tick" /> : submitting ? <LoadingSpinner size={24} /> : null

    return (<div className={containerClasses}>
      <button
        className={buttonClasses}
        type={submit ? 'submit' : 'button'}
        onClick={this.handleClick}
        {...rest}>

        {statusIcon ? <div className={style.iconLeft}>{statusIcon}</div> : <Fragment>
          {iconLeft && <div className={style.iconLeft}>{iconLeft}</div>}

          <div className={style.content}>
            {children}

            {icon && <Icon
              className={style.legacyIcon}
              name={icon} />}
          </div>

          {iconRight && <div className={style.iconRight}>{iconRight}</div>}
        </Fragment>}
      </button>
    </div>
    )
  }
}

export default Button
