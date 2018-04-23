/**
*
* InlineSelector
*
*/

import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import style from './InlineSelector.scss'

import Label from '../Label'

class InlineSelector extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    vertical: PropTypes.bool,
    options: PropTypes.array,
    onChange: PropTypes.func,
    value: PropTypes.string
  }

  static defaultProps = {
    vertical: false,
    options: [],
    onChange: () => null
  }

  handleClick = (option) => {
    const oldValue = this.props.value

    if (oldValue !== option.value) {
      this.props.onChange({
        value: option.value,
        props: this.props
      })
    }
  }

  render () {
    const { className, id, label, onChange, options, value, vertical, ...restProps } = this.props
    const classes = classnames(style.outer, {
      [style.vertical]: vertical,
      [className]: className
    })

    return (
      <div className={classes} id={id} {...restProps}>
        {label && <Label className={style.label} htmlFor={id}>{label}</Label>}
        <div className={style.options}>
          {options.map((option, index) =>
            (<div
              key={index}
              className={classnames(style.option, {[style.selected]: option.value === value})}
              onClick={() => this.handleClick(option)}>{option.label}</div>)
          )}
        </div>
      </div>
    )
  }
}

export default InlineSelector
