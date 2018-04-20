/**
*
* SingleSelect
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import onClickOutside from 'react-onclickoutside'

import Icon from '../../Icon'
import Label from '../Label'
import style from './SingleSelect.scss'

class SingleSelect extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array.isRequired,
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
    onChange: () => {}
  }

  constructor (props) {
    super(props)
    const firstValue = (props.options && props.options[0] && props.options[0].value) || undefined
    const value = props.value || (props.placeholder ? undefined : firstValue)

    this.state = {
      value: value,
      expanded: false
    }
    this.getDisplay = this.getDisplay.bind(this)
    this.toggleExpand = this.toggleExpand.bind(this)
    this.hideExpand = this.hideExpand.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.selectOption = this.selectOption.bind(this)
    this.generateOptions = this.generateOptions.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  getDisplay = () => {
    const { options } = this.props
    const option = options.find(option => option.value === this.state.value)
    const firstLabel = (options && options[0] && options[0].label) || ''

    return option ? option.label : (this.props.placeholder || firstLabel)
  }

  toggleExpand = (event) => {
    this.setState({expanded: this.props.disabled ? false : !this.state.expanded})
  }

  hideExpand = (event) => {
    this.setState({expanded: false})
  }

  handleClickOutside = () => {
    this.hideExpand()
  }

  selectOption = (option) => {
    const oldValue = this.state.value
    this.setState({
      value: option.value,
      expanded: false
    })
    if (oldValue !== option.value) {
      const event = {
        value: option.value,
        props: this.props
      }

      this.props.onChange(event)
    }
  }

  generateOptions = () => {
    return this.props.options.map((option) => {
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
      return (<li className={classnames(style.option, {[style.selected]: selected})} key={option.value} onClick={() => this.selectOption(option)} ref={ref}>
        {option.label}
      </li>)
    })
  }

  render () {
    const { id, name, className, required, disabled, error, inline, label, placeholder, onChange, value,
      eventTypes, outsideClickIgnoreClass, preventDefault, stopPropagation, disableOnClickOutside, enableOnClickOutside,
      ...restProps } = this.props
    const classes = classnames(style.outer, {
      [style.expanded]: this.state.expanded,
      [style.inline]: inline,
      [className]: className
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
          <Icon className={style.caret} name="DropDown" />
        </div>
        <ul className={style.options}>
          {this.generateOptions()}
        </ul>
        {error && <Label className={style.errorMessage} htmlFor={id} error>{error}</Label>}
      </div>
    )
  }
}

export default onClickOutside(SingleSelect)
