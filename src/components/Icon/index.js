import React from 'react'
import PropTypes from 'prop-types'

import Add from './Add'
import Alarm from './Alarm'
import Alert from './Alert'
import {ArrowLeft, ArrowRight, ArrowUp, ArrowDown} from './Arrows'
import CaretRight from './CaretRight'
import {CheckBoxChecked, CheckBoxUnchecked, RadioChecked, RadioUnchecked} from './CheckBoxes'
import Cross from './Cross'
import DropDown from './DropDown'
import Edit from './Edit'
import Search from './Search'
import Settings from './Settings'
import Sync from './Sync'
import Tick from './Tick'
import View from './View'

function createIcon (props) {
  switch (props.name) {
  case 'Add':
    return <Add {...props} />
  case 'Alarm':
    return <Alarm {...props} />
  case 'Alert':
    return <Alert {...props} />
  case 'ArrowLeft':
    return <ArrowLeft {...props} />
  case 'ArrowRight':
    return <ArrowRight {...props} />
  case 'ArrowUp':
    return <ArrowUp {...props} />
  case 'ArrowDown':
    return <ArrowDown {...props} />
  case 'CaretRight':
    return <CaretRight {...props} />
  case 'CheckBoxChecked':
    return <CheckBoxChecked {...props} />
  case 'CheckBoxUnchecked':
    return <CheckBoxUnchecked {...props} />
  case 'Cross':
    return <Cross {...props} />
  case 'DropDown':
    return <DropDown {...props} />
  case 'Edit':
    return <Edit {...props} />
  case 'RadioChecked':
    return <RadioChecked {...props} />
  case 'RadioUnchecked':
    return <RadioUnchecked {...props} />
  case 'Search':
    return <Search {...props} />
  case 'Settings':
    return <Settings {...props} />
  case 'Sync':
    return <Sync {...props} />
  case 'Tick':
    return <Tick {...props} />
  case 'View':
    return <View {...props} />
  default:
    return <Cross {...props} />
  }
}

createIcon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
}

export default class Icon extends React.Component {
  static defaultProps = {
    width: 32,
    height: 32,
    name: 'Cross'
  }

  render () {
    const icon = createIcon(this.props)
    return icon
  }
}
