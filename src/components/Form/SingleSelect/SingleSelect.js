/**
*
* SingleSelect
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
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
    let option = props.options.find(option => option.value === value)
    let display = option ? option.label : (props.placeholder || props.options[0].label)
    this.state = {
      value: value,
      display: display,
      expanded: false
    }
  }

  toggleExpand = (event) => {
    this.setState({expanded: this.props.disabled ? false : !this.state.expanded})
  }

  hideExpand = (event) => {
    this.setState({expanded: false})
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
      display: option.label,
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
    return this.props.options.map((option) =>
      <li className={style.option} key={option.value} onClick={() => this.selectOption(option)}>{option.label}</li>
    )
  }

  render () {
    const { id, name, className, required, disabled, error, label, placeholder, onChange, value, ...restProps } = this.props
    return (
      <div className={style.outer} {...restProps} onMouseLeave={this.hideExpand}>
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
          className={classnames(style.select, {[style.expanded]: this.state.expanded,[style.error]: error, [style.disabled]: disabled, [className]: className})}
          onClick={this.toggleExpand}>
          <span>{this.state.display}</span>
          <Icon className={style.caret} name="DropDown" />
        </div>
        {this.state.expanded && <ul className={style.options}>
          {this.generateList()}
        </ul>}
        {error && <Label className={style.errorMessage} htmlFor={id} error>{error}</Label>}
      </div>
    )
  }
}

export default SingleSelect
