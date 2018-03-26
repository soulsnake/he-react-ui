import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import TabView from '../'

function TabViewWrapped (props) {
  const {...all} = props
  return (
    <BrowserRouter>
      <div style={{marginTop: '40px'}}>
        <TabView {...all} />
      </div>
    </BrowserRouter>)
}

TabViewWrapped.propTypes = {
  heading: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired
    })
  )
}

export default {
  component: TabViewWrapped,
  props: {
    heading: 'Heading',
    tabs: [
      {title: 'Somewhere', route: '/somewhere'},
      {title: 'Elsewhere', route: '/elsewhere'}
    ]
  }
}
