/**
*
* DatePicker
*
*/

import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import style from './DatePicker.scss'

import Label from '../Label'

class DatePicker extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
  }

  static defaultProps = {
    disabled: false,
    onChange: () => null
  }

  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  render () {
    const { id, className, disabled, error, label, onChange, value, ...restProps } = this.props
    const classes = classnames(style.outer, {
      [style.error]: error,
      [style.disabled]: disabled,
      [style[className]]: className
    })

    return (
      <div id={id} className={classes} {...restProps}>
        {label && <Label className={style.label}>{label}</Label>}
        <div className={style.picker}>
          Wowie
        </div>
        {error && <Label className={style.errorMessage} htmlFor={id} error>{error}</Label>}
      </div>
    )
  }
}

export default DatePicker
