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
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    error: PropTypes.string,
    inline: PropTypes.bool,
    label: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        child: PropTypes.any,
        showChild: PropTypes.bool
      })).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    error: '',
    inline: false,
    onChange: () => {}
  }

  constructor (props) {
    super(props)

    this.generateOptions = this.generateOptions.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  generateOptions = () => {
    const { name, options, value } = this.props

    return options.map((option) => (
      <div key={option.value} className={classnames(style.option, {[style.selected]: value === option.value})}
        onClick={() => this.handleClick(option.value)}>
        <input
          className={style.input}
          value={option.value}
          type="radio"
          name={name}
          checked={value === option.value}
          onChange={() => null} />
        <Icon className={classnames(style.icon, style.empty)} name="RadioUnchecked" width={20} height={20} />
        <Icon className={classnames(style.icon, style.full)} name="RadioChecked" width={20} height={20} />
        {option.label && <label className={style.tag}>{option.label}</label>}
        {(option.child && (option.showChild || value === option.value)) &&
          <div className={style.child}>{option.child}</div>}
      </div>
    ))
  }

  handleClick = (value) => {
    const oldValue = this.props.value

    if (oldValue !== value) {
      const event = {
        value: value,
        props: this.props
      }

      this.props.onChange(event)
    }
  }

  render () {
    const { generateOptions } = this
    const { id, className, error, inline, label, onChange, value, ...restProps } = this.props
    const classes = classnames(style.outer, {
      [style.inline]: inline,
      [className]: className
    })

    return (
      <div className={classes} id={id} {...restProps}>
        {label && <Label className={style.label} htmlFor={id}>{label}</Label>}
        <div className={style.options}>
          {generateOptions()}
        </div>
        {error && <Label className={style.error} error>{error}</Label>}
      </div>
    )
  }
}

export default Radio
