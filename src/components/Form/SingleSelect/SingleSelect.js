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
import {navy_tint_2, navy_2} from '../../../styles/colors.js'

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
    options: PropTypes.array,
    onChange: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    error: '',
    required: false,
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.placeholder ? undefined : props.options[0].value
    }
  }

  onChange = (event) => {
    this.setState({value: event.target.value})
    this.props.onChange(event)
  }

  generateOptions = () => {
    return this.props.options.map((option) =>
      <option key={option.value} value={option.value}>{option.label}</option>
    )
  }

  render () {
    const { id, name, className, required, disabled, error, label, placeholder, onChange, ...restProps } = this.props
    return (
      <div className={style.outer}>
        {label && <Label className={style.label} htmlFor={id} label={label} />}
        <select
          id={id}
          name={name}
          className={classnames(style.select, {[style.error]: error, [style.disabled]: disabled, [className]: className})}
          disabled={disabled}
          required={required}
          onChange={this.onChange}
          value={this.state.value}
          {...restProps}>
          {placeholder && <option hidden>{placeholder}</option>}
          {this.generateOptions()}
        </select>
        <Icon className={style.caret} name="DropDown" color={disabled ? navy_tint_2 : navy_2 } />
        {error && <Label className={style.errorMessage} htmlFor={id} label={error} error />}
      </div>
    )
  }
}

export default SingleSelect
