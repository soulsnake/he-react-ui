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
      key: 'PARENT',
      title: 'Parent title',
      label: 'Parent',
      route: '/parent',
      badge: 'FREE',
      items: [
        {
          'key': 'MAIN',
          'label': 'Main',
          'route': '/parent'
        },
        {
          'key': 'SECONDARY',
          'label': 'Secondary',
          'route': '/parent/secondary'
        }
      ]
    },
    locations: [
      'Location A',
      'Location B'
    ].map((location) => ({value: location, label: location})),
    logoutRoute: '/logout'
  }
}
