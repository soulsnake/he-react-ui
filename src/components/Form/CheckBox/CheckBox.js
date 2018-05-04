/**
*
* CheckBox
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../../Icon'
import style from './CheckBox.scss'

class CheckBox extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    special: PropTypes.bool,
    value: PropTypes.bool,
    warning: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    checked: false,
    disabled: false,
    error: '',
    special: false,
    onChange: () => {}
  }

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    if (this.props.disabled) {
      return
    }
    const event = {
      value: !this.props.value,
      props: this.props
    }
    this.props.onChange(event)
  }

  render () {
    const { handleClick } = this
    const { id, className, disabled, label, special, value, warning, onChange, ...restProps } = this.props
    const classes = {
      [style.disabled]: disabled,
      [className]: className
    }

    return (
      <div className={classnames(style.outer, classes)} id={id} {...restProps}>
        <label className={style.label} htmlFor={id} onClick={handleClick}>
          <Icon
            className={classnames(style.checkbox, style.empty, {[style.special]: special})}
            name="CheckBoxUnchecked" />
          <Icon
            className={classnames(style.checkbox, style.full, {[style.checked]: value, [style.special]: special})}
            name="CheckBoxChecked" />
          <span className={style.text}>{label}</span>
        </label>
        {warning && <Icon
          className={style.warning}
          name="Alert" />}
      </div>
    )
  }
}

export default CheckBox
