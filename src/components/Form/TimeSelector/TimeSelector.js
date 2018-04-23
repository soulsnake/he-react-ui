/**
*
* TimeSelector
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import onClickOutside from 'react-onclickoutside'

import Icon from '../../Icon'
import Label from '../Label'
import style from './timeSelector.scss'

class TimeSelector extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    inline: PropTypes.bool,
    hourly: PropTypes.bool,
    hours: PropTypes.array,
    minutes: PropTypes.array,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    eventTypes: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    outsideClickIgnoreClass: PropTypes.string,
    preventDefault: PropTypes.bool,
    stopPropagation: PropTypes.bool,
    disableOnClickOutside: PropTypes.func,
    enableOnClickOutside: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    error: '',
    inline: false,
    required: false,
    hourly: false,
    onChange: () => {},
    hours: (() => {
      return [...Array(24).keys()].map((n) => {
        return {label: n.toString(), value: n.toString()}
      })
    })(),
    minutes: (() => {
      return [...Array(60).keys()].map((n) => {
        return {label: n.toString().padStart(2, '0'), value: n.toString().padStart(2, '0')}
      })
    })()
  }

  constructor (props) {
    super(props)

    this.state = {
      value: undefined,
      hour: undefined,
      minute: undefined,
      expanded: false
    }
    this.getDisplay = this.getDisplay.bind(this)
    this.toggleExpand = this.toggleExpand.bind(this)
    this.hideExpand = this.hideExpand.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.generateOptions = this.generateOptions.bind(this)
    this.generateList = this.generateList.bind(this)
    this.selectMinute = this.selectMinute.bind(this)
    this.selectHour = this.selectHour.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  getDisplay = function () {
    const { value } = this.state
    const { hours, minutes } = this.props
    const firstLabel = (hours && hours[0] && hours[0].label) + ':' + (minutes && minutes[0] && minutes[0].label)

    return value || this.props.placeholder || firstLabel
  }

  toggleExpand = function (event) {
    this.setState({expanded: this.props.disabled ? false : !this.state.expanded})
  }

  hideExpand = function (event) {
    this.setState({expanded: false})
  }

  handleClickOutside = function () {
    this.hideExpand()
  }

  generateOptions = function (options) {
    return options.map((option) =>
      <option key={option.value} value={option.value}>{option.label}</option>
    )
  }

  selectMinute = function (option) {
    const { hour } = this.state
    this.setState({
      minute: option.value,
      value: `${hour || '0'}:${option.value}`
    })
  }

  selectHour = function (option) {
    const { minute } = this.state
    this.setState({
      hour: option.value,
      value: `${option.value}:${minute || '00'}`
    })
  }

  generateList = function (options, selectOption, padding) {
    const { hourly } = this.props
    return options.map((option) => {
      const selected = this.state.value === option.value
      let ref = null
      if (this.state.value === option.value) {
        ref = (item) => {
          if (item) {
            setTimeout(() => {
              item.parentNode.scrollTop = item.offsetTop - item.parentNode.offsetTop
            }, 200)
          }
        }
      }
      return (<li className={classnames(style.option, {[style.selected]: selected})} key={option.value} onClick={() => selectOption(option)} ref={ref}>
        {`${hourly ? option.label + ':00' : option.label}`}
      </li>)
    })
  }

  render () {
    const { id, name, className, required, disabled, error, label, placeholder, onChange, value, inline, minutes, hours, hourly,
      eventTypes, outsideClickIgnoreClass, preventDefault, stopPropagation, disableOnClickOutside, enableOnClickOutside,
      ...restProps } = this.props
    const classes = classnames(style.outer, {
      [style.expanded]: this.state.expanded,
      [style.inline]: inline,
      [style[className]]: className,
      [style.hourly]: hourly,
    })

    return (
      <div
        className={classes}
        {...restProps}>
        {label && <Label className={style.label} htmlFor={id}>{label}</Label>}
        <div
          className={classnames(style.select, {[style.error]: error, [style.disabled]: disabled})}
          onClick={this.toggleExpand}>
          <span>{this.getDisplay()}</span>
          <Icon className={style.clock} name="Clock" />
        </div>
        <div className={style.options}>
          <ul>
            {this.generateList(hours, this.selectHour, true)}
          </ul>
          { !hourly &&
            (<ul>
              {this.generateList(minutes, this.selectMinute)}
            </ul>)
          }
        </div>
        {error && <Label className={style.errorMessage} htmlFor={id} error>{error}</Label>}
      </div>
    )
  }
}

export default onClickOutside(TimeSelector)
