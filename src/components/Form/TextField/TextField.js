/**
*
* TextField
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../../Icon'
import style from './TextField.scss'

class TextField extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    description: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    marker: PropTypes.bool,
    validateFunc: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    label: 'Field',
    disabled: false,
    marker: false,
    value: '',
    onChange: () => {},
    validateFunc: () => true
  }

  constructor (props) {
    super(props)
    this.state = {
      focused: false,
      isValid: true,
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

  onFocus = () => {
    this.setState({
      focused: true
    })
  }

  onBlur = () => {
    this.setState({
      focused: false
    })
  }

  onChange = (event) => {
    this.setState({
      isValid: this.props.validateFunc(event.target.value),
      value: event.target.value
    })
    this.props.onChange(event)
  }

  render () {
    const { className, id, name, label, description, disabled, error, marker, onChange, validateFunc, value, ...restProps } = this.props
    const { focused, isValid } = this.state
    const floating = focused || this.state.value !== ''
    const classes = classnames(style.outer, {
      [style.invalid]: !isValid,
      [style.disabled]: disabled,
      [style.focused]: focused,
      [style.hasMarker]: marker,
      [style[className]]: className
    })

    return (
      <div
        className={classes}
        {...restProps}>
        <div
          className={style.block}>
          <label
            className={classnames(style.label, { [style.floating]: floating })}
            htmlFor={id}>
            {label}
          </label>
          <input
            className={style.input}
            id={id}
            name={name}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
            disabled={disabled}
            value={this.state.value} />
          {(marker && this.state.value !== '') && <Icon name={isValid ? 'Tick' : 'Cross'} className={style.marker} />}
        </div>
        { (description || error) &&
          <label
            htmlFor={id}
            className={style.description}>
            {error || description}
          </label>
        }
      </div>
    )
  }
}

export default TextField
