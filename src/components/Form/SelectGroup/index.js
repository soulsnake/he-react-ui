/**
*
* SelectGroup
*
*/

import React from 'react'
import classnames from 'classnames'
import StyledSelectGroup from './styles'
import PropTypes from 'prop-types'

class SelectGroup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    vertical: PropTypes.bool,
    options: PropTypes.array,
    onClickOption: PropTypes.func
  }

  static defaultProps = {
    vertical: false,
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
    const { vertical, className, options } = this.props
    const { selected } = this.state
    const classes = {
      [className]: className,
      'vertical': vertical
    }

    return (
      <StyledSelectGroup className={classnames('select-group', classes)}>
        {options.map((opt, index) =>
          <div
            key={index}
            className={classnames('select-group-btn', {'selected': opt.value === selected})}
            onClick={() => this.onClickOption(opt)}>{opt.label}</div>
        )}
      </StyledSelectGroup>
    )
  }
}

export default SelectGroup
