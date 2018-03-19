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
    onChange: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    error: '',
    required: false,
    onChange: () => {}
  }

  constructor (props) {
    super(props)
    let value = props.value || (props.placeholder ? undefined : props.options[0].value)
    this.state = {
      value: value,
      expanded: false
    }
  }

  getDisplay = () => {
    let option = this.props.options.find(option => option.value === this.state.value)
    return option ? option.label : (this.props.placeholder || this.props.options[0].label)
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

  generateOptions = () => {
    return this.props.options.map((option) =>
      <option key={option.value} value={option.value}>{option.label}</option>
    )
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

  generateList = () => {
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
    const { id, name, className, required, disabled, error, label, placeholder, onChange, value, ...restProps } = this.props
    return (
      <div className={classnames(style.outer, {[style.expanded]: this.state.expanded})} {...restProps}>
        {label && <Label className={style.label} htmlFor={id}>{label}</Label>}
        <select
          id={id}
          name={name}
          className={style.input}
          disabled={disabled}
          required={required}
          value={this.state.value}
          onChange={() => {}}>
          {placeholder && <option hidden>{placeholder}</option>}
          {this.generateOptions()}
        </select>
        <div
          className={classnames(style.select, {[style.error]: error, [style.disabled]: disabled, [className]: className})}
          onClick={this.toggleExpand}>
          <span>{this.getDisplay()}</span>
          <Icon className={style.caret} name="DropDown" />
        </div>
        <ul className={style.options}>
          {this.generateList()}
        </ul>
        {error && <Label className={style.errorMessage} htmlFor={id} error>{error}</Label>}
      </div>
    )
  }
}

export default onClickOutside(SingleSelect)
