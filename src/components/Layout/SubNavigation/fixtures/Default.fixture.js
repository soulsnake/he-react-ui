import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SubNavigation from '../'

function SubNavigationWrapped (props) {
  const {...all} = props
  return (
    <BrowserRouter>
      <SubNavigation {...all} />
    </BrowserRouter>)
}

SubNavigationWrapped.propTypes = SubNavigation.propTypes

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
    },
    practices: [
      'Location A',
      'Location B'
    ].map((practice) => ({value: practice, label: practice})),
    logoutRoute: '/admin/auth/logout'
  }
}
