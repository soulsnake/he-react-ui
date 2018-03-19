/**
*
* Radio
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Icon from '../../Icon'
import Label from '../Label'
import style from './Radio.scss'

class Radio extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    error: '',
    onChange: () => {}
  }

  constructor (props) {
    super(props)
    let value = props.value || props.options[0].value
    this.state = {
      value: value
    }
  }

  generateOptions = () => {
    const { name, options } = this.props
    const { value } = this.state

    return options.map((option) => (
      <div key={option.value} className={classnames(style.option, {[style.selected]: value === option.value})}
        onClick={() => this.handleClick(option.value)}>
        <input
          className={style.input}
          value={option.value}
          type="radio"
          name={name}
          checked={value === option.value} />
        <Icon className={classnames(style.icon, style.empty)} name="RadioUnchecked" width={20} height={20} />
        <Icon className={classnames(style.icon, style.full)} name="RadioChecked" width={20} height={20} />
        <label className={style.tag}>{option.label}</label>
      </div>
    ))
  }

  handleClick = (value) => {
    const oldValue = this.state.value

    this.setState({
      value: value
    })
    if (oldValue !== value) {
      this.props.onChange({
        value: value,
        props: this.props
      })
    }
  }

  render () {
    const { name, className, error, label, onChange, value, ...restProps } = this.props
    const classes = classnames(style.outer, {
      [style[className]]: className
    })

    return (
      <div className={classes} {...restProps}>
        {label && <Label className={style.label}>{label}</Label>}
        <div className={style.options}>
          {this.generateOptions()}
        </div>
        {error && <Label className={style.error} error>{error}</Label>}
      </div>
    )
  }
}

export default Radio
