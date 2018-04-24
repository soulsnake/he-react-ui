import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Add from './Add'
import Alarm from './Alarm'
import Alert from './Alert'
import {ArrowLeft, ArrowRight, ArrowUp, ArrowDown} from './Arrows'
import Calendar from './Calendar'
import CaretRight from './CaretRight'
import {CheckBoxChecked, CheckBoxUnchecked, RadioChecked, RadioUnchecked} from './CheckBoxes'
import {ChevronLeft, ChevronRight, ChevronUp, ChevronDown} from './Chevrons'
import Clock from './Clock'
import Cross from './Cross'
import Delete from './Delete'
import DropDown from './DropDown'
import Edit from './Edit'
import Ellipsis from './Ellipsis'
import Search from './Search'
import Settings from './Settings'
import Sync from './Sync'
import Tick from './Tick'
import View from './View'

import style from './Icon.scss'

function createIcon (iconProps) {
  const { width, height, color, className, name, ...restProps } = iconProps
  const classes = classnames(style.icon, {
    [style[color]]: color,
    [className]: className
  })
  const props = {
    width: width,
    height: height,
    className: classes,
    ...restProps
  }

  switch (name) {
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
  case 'Calendar':
    return <Calendar {...props} />
  case 'CaretRight':
    return <CaretRight {...props} />
  case 'CheckBoxChecked':
    return <CheckBoxChecked {...props} />
  case 'CheckBoxUnchecked':
    return <CheckBoxUnchecked {...props} />
  case 'ChevronLeft':
    return <ChevronLeft {...props} />
  case 'ChevronRight':
    return <ChevronRight {...props} />
  case 'ChevronUp':
    return <ChevronUp {...props} />
  case 'ChevronDown':
    return <ChevronDown {...props} />
  case 'Clock':
    return <Clock {...props} />
  case 'Cross':
    return <Cross {...props} />
  case 'Delete':
    return <Delete {...props} />
  case 'DropDown':
    return <DropDown {...props} />
  case 'Edit':
    return <Edit {...props} />
  case 'Ellipsis':
    return <Ellipsis {...props} />
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
  color: PropTypes.oneOf(['teal', 'blue', 'green', 'red', 'white']),
  className: PropTypes.string
}

export default class Icon extends React.Component {
  static defaultProps = {
    width: 32,
    height: 32,
    name: 'Cross'
  }

  render () {
    return createIcon(this.props)
  }
}
