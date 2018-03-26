import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import BackView from '../'

function BackViewWrapped (props) {
  const {...all} = props
  return (
    <BrowserRouter>
      <div style={{marginTop: '40px'}}>
        <BackView {...all} />
      </div>
    </BrowserRouter>)
}

BackView.propTypes = {
  heading: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
}

export default {
  component: BackViewWrapped,
  props: {
    heading: 'Heading',
    route: '..'
  }
}
