import React from 'react'
import TimeSelector from '../'
import GenericFormElementWrapper from '../../GenericFormElementWrapper'

function TimeSelectorWrapped (props) {
  const {...all} = props
  return (
    <GenericFormElementWrapper component={TimeSelector} props={all} />
  )
}

export default {
  component: TimeSelectorWrapped,
  props: {
    id: 'demo', name: 'demo', hourly: false
  }
}
