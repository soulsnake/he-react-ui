/**
*
* SingleSelect
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
    required: PropTypes.bool,
    special: PropTypes.bool,
    warning: PropTypes.bool,
    onChange: PropTypes.func,
    onCheck: PropTypes.func,
    onUncheck: PropTypes.func,
    checked: PropTypes.bool
  }

  static defaultProps = {
    disabled: false,
    error: '',
    required: false,
    special: false,
    onChange: () => {},
    onCheck: () => {},
    onUncheck: () => {}
  }

  constructor (props) {
    super(props)
    this.state = {
      checked: props.checked
    }
  }

  onChange = (event) => {
    if (this.props.disabled) {
      return
    }
    this.setState({checked: !this.state.checked})
    this.props.onChange(event)
    if (this.state.checked) {
      this.props.onCheck(event)
    } else {
      this.props.onUncheck(event)
    }
  }

  render () {
    const { id, name, className, disabled, label, required, special, warning, onChange, onCheck, onUncheck, ...restProps } = this.props
    const classes = {
      [style.disabled]: disabled,
      [style[className]]: className
    }

    return (
      <div className={classnames(style.outer, classes)}>
        <input
          id={id}
          name={name}
          type="checkbox"
          className={style.input}
          disabled={disabled}
          required={required}
          value={this.state.checked ? 'on' : 'off'}
          onChange={this.onChange}
          {...restProps} />
        <label className={style.label}
          htmlFor={id}>
          <Icon
            className={classnames(style.checkbox, style.empty, {[style.special]: special})}
            name="CheckBoxUnchecked"
            width={20}
            height={20} />
          <Icon
            className={classnames(style.checkbox, style.full, {[style.checked]: this.state.checked, [style.special]: special})}
            name="CheckBoxChecked"
            width={20}
            height={20} />
          <span className={style.text}>{label}</span>
        </label>
        {warning && <Icon
          className={style.warning}
          name="Alert"
          width={20}
          height={20} />}
      </div>
    )
  }
}

export default CheckBox
