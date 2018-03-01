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
import {n_grey_1, sp_dark_green, teal_1, sp_orange} from '../../../styles/colors.js'

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
    onCheck: PropTypes.func,
    onUncheck: PropTypes.func,
    onClick: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    error: '',
    required: false,
    special: false,
    onCheck: () => {},
    onUncheck: () => {},
    onClick: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      hover: false
    }
  }

  onMouseEnter = (event) => {
    if (this.props.disabled) {
      return
    }
    this.setState({hover: true})
  }

  onMouseLeave = (event) => {
    this.setState({hover: false})
  }

  onClick = (event) => {
    if (this.props.disabled) {
      return
    }
    this.setState({checked: !this.state.checked})
    this.props.onClick(event)
    if (this.state.checked) {
      this.props.onCheck(event)
    } else {
      this.props.onUncheck(event)
    }
  }

  render () {
    const { id, name, className, disabled, label, required, special, warning, onCheck, onClick, onUncheck, ...restProps } = this.props
    return (
      <div className={classnames(style.outer, {[style.disabled]: disabled, [className]: className})}>
        <input
          id={id}
          name={name}
          type="checkbox"
          className={style.input}
          disabled={disabled}
          required={required}
          value={this.state.checked ? 'on' : 'off'}
          onClick={this.onClick}
          {...restProps} />
        <label
          htmlFor={id}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}>
          <Icon
            className={style.checkbox}
            name={this.state.checked ? 'CheckBoxChecked' : 'CheckBoxUnchecked'}
            color={!this.state.checked && !this.state.hover ? n_grey_1 : (special ? sp_dark_green : teal_1)}
            width={20}
            height={20} />
          <span className={style.label}>{label}</span>
        </label>
        {warning && <Icon
          className={style.warning}
          name="Alert"
          color={sp_orange}
          width={20}
          height={20} />}
      </div>
    )
  }
}

export default CheckBox
