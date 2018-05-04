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
      key: 'RECALLS',
      title: 'Recalls',
      label: 'Recalls',
      route: '/recalls',
      items: [
        {
          'key': 'ACTIONS',
          'label': 'Summary',
          'route': '/recalls'
        },
        {
          'key': 'TEMPLATES',
          'label': 'Templates',
          'route': '/recalls/templates'
        },
        {
          'key': 'PREFERENCES',
          'label': 'Preferences',
          'route': '/recalls/settings'
        }
      ]
    },
    logoutRoute: '/admin/auth/logout'
  }
}
