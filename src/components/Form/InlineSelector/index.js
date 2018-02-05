/**
*
* InlineSelector
*
*/

import React from 'react'
import classnames from 'classnames'
import StyledInlineSelector from './styles'
import PropTypes from 'prop-types'

class InlineSelector extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    vertical: PropTypes.bool,
    options: PropTypes.array,
    disabled: PropTypes.bool,
    onClickOption: PropTypes.func
  }

  static defaultProps = {
    vertical: false,
    disabled: true,
    options: [],
    onClickOption: () => null
  }
  state = {
    selected: null
  }
  onClickOption = (opt) => {
    this.props.onClickOption(opt)
    this.setState({
      selected: opt.value
    })
  }
  render () {
    const { vertical, className, options, disabled } = this.props
    const { selected } = this.state
    const classes = {
      [className]: className,
      'vertical': vertical
    }

    return (
      <StyledInlineSelector className={classnames('select-group', classes)}>
        {options.map((opt, index) =>
          <div
            key={index}
            className={classnames('select-group-btn', {'selected': opt.value === selected, 'disabled': disabled})}
            onClick={() => this.onClickOption(opt)}>{opt.label}</div>
        )}
      </StyledInlineSelector>
    )
  }
}

export default InlineSelector
