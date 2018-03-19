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

class InlineSelector extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
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

  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  handleClick = (option) => {
    const oldValue = this.state.value

    this.setState({
      value: option.value
    })
    if (oldValue !== option.value) {
      this.props.onChange({
        value: option.value,
        props: this.props
      })
    }
  }

  render () {
    const { vertical, className, label, onChange, options, value, ...restProps } = this.props
    const classes = classnames(style.outer, {
      [style.vertical]: vertical,
      [style[className]]: className
    })

    return (
      <div className={classes} {...restProps}>
        {label && <Label className={style.label}>{label}</Label>}
        <div className={style.options}>
          {options.map((option, index) =>
            (<div
              key={index}
              className={classnames(style.option, {[style.selected]: option.value === this.state.value})}
              onClick={() => this.handleClick(option)}>{option.label}</div>)
          )}
        </div>
      </div>
    )
  }
}

export default InlineSelector
