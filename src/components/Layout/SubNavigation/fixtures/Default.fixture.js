import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import SubNavigation from '../'

function SubNavigationWrapped (props) {
  const {...all} = props
  return (
    <BrowserRouter>
      <div style={{marginTop: '40px'}}>
        <SubNavigation {...all} />
      </div>
    </BrowserRouter>)
}

SubNavigationWrapped.propTypes = {
  heading: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired
    })
  )
}

export default {
  component: SubNavigationWrapped,
  props: {
    item: {
      key: 'FEEDBACK',
      title: 'Patient feedback',
      label: 'Patient feedback',
      route: '/feedback',
      badge: 'FREE',
      items: [
        {
          'key': 'SUMMARY',
          'label': 'Summary',
          'route': '/feedback'
        },
        {
          'key': 'PREFERENCES',
          'label': 'Preferences',
          'route': '/feedback/settings'
        }
      ]
    }
  }
}
