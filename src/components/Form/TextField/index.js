/**
*
* TextField
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import StyledTextField, { StyledTextFieldBlock } from './styles'

class TextField extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    descriptiveText: PropTypes.string,
    invalidText: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    validateFunc: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    label: 'Field',
    disabled: false,
    descriptiveText: '',
    invalidText: 'Please enter a valid response',
    onChange: () => null,
    validateFunc: (value) => value !== ''
  }
  state = {
    focused: false,
    inputEmpty: true,
    isValid: true
  }
  onFocus = () => {
    this.setState({
      focused: true
    })
  }
  onBlur = () => {
    this.setState({
      focused: false
    })
  }
  onChange = (e) => {
    this.props.onChange(e)
    this.setState({
      inputEmpty: e.target.value === '',
      isValid: this.props.validateFunc(e.target.value)
    })
  }
  render() {
    const { className, label, descriptiveText, invalidText, value, disabled, ...restProps } = this.props
    const { focused, inputEmpty, isValid } = this.state
    let isFocusedAndNotEmpty = { 'focused': focused || !inputEmpty }
    let textFieldStyles = { 'focused': focused, 'invalid': !isValid, 'disabled': disabled }
    return (
      <StyledTextField
        className={classnames({ [className]: className })}>
        <StyledTextFieldBlock
          className={classnames(textFieldStyles)}>
          <label className={classnames('input-floating-label', isFocusedAndNotEmpty)}>{label}</label>
          <input
            className={classnames(isFocusedAndNotEmpty)}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
            disabled={disabled} />
        </StyledTextFieldBlock>
        {disabled
          ? <div className='input-disabled-text'>You don't need to fill this one in</div>
          : isValid
            ? <div className='input-help-text'>{descriptiveText}</div>
            : <div className='input-invalid-text'>{invalidText}</div>
        }
      </StyledTextField>
    )
  }
}

export default TextField
