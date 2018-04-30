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
    inline: PropTypes.bool,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    marker: PropTypes.bool,
    validateFunc: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func
  }

  static defaultProps = {
    label: 'Field',
    disabled: false,
    inline: false,
    marker: false,
    value: '',
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    validateFunc: () => true
  }

  constructor (props) {
    super(props)
    this.state = {
      focused: false,
      isValid: true
    }
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    const { value } = nextProps

    if (value) {
      this.setState({ value })
    }
  }

  handleFocus = e => {
    const event = {
      value: e.target.value,
      props: this.props
    }

    this.setState({
      focused: true
    })
    this.props.onFocus(event)
  }

  handleBlur = e => {
    const value = e.target.value
    const event = {
      value,
      props: this.props
    }

    this.setState({
      focused: false,
      isValid: this.props.validateFunc(value)
    })
    this.props.onBlur(event)
  }

  handleChange = e => {
    const value = e.target.value
    const event = {
      value,
      props: this.props
    }

    this.setState({
      isValid: this.props.validateFunc(value)
    })
    this.props.onChange(event)
  }

  render () {
    const {
      className,
      id,
      name,
      label,
      description,
      value,
      disabled,
      error,
      inline,
      marker,
      onBlur,
      onChange,
      onFocus,
      validateFunc,
      ...restProps
    } = this.props
    const { focused, isValid } = this.state
    const floating = focused || value !== ''
    const classes = classnames(style.outer, {
      [style.invalid]: !isValid,
      [style.disabled]: disabled,
      [style.inline]: inline,
      [style.focused]: focused,
      [style.hasMarker]: marker,
      [className]: className
    })

    return (
      <div className={classes} {...restProps}>
        <div className={style.block}>
          <label
            className={classnames(style.label, { [style.floating]: floating })}
            htmlFor={id}
          >
            {label}
          </label>
          <input
            className={style.input}
            id={id}
            name={name}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            disabled={disabled}
            value={value}
          />
          {marker &&
            value !== '' && (
              <Icon
                name={isValid ? 'Tick' : 'Cross'}
                className={style.marker}
              />
            )}
        </div>
        {(description || error) && (
          <label htmlFor={id} className={style.description}>
            {error || description}
          </label>
        )}
      </div>
    )
  }
}

export default TextField
