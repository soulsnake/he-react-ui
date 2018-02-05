/**
*
* Input
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import InputGroup from './styles'

class Input extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    className: PropTypes.string,
    buttonLabel: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func
  }

  static defaultProps = {
    buttonLabel: '',
    onChange: () => null,
    onClick: () => null
  }

  render () {
    const { className, buttonLabel, value, onChange, onClick, ...restProps } = this.props
    return (
      <InputGroup className={classnames('input-group', { [className]: className })}>
        <input
          className='form-control'
          type='text'
          value={value}
          onChange={onChange}
          {...restProps} />
        {buttonLabel &&
          <span className='input-group-btn'>
            <button className='btn search-btn' type='button' onClick={onClick}>{buttonLabel}</button>
          </span>
        }
      </InputGroup>
    )
  }
}

export default Input
