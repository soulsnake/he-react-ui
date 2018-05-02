import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrimaryNavigation from '../'

function PrimaryNavigationWrapped (props) {
  const {...all} = props
  return (
    <BrowserRouter>
      <PrimaryNavigation {...all} />
    </BrowserRouter>)
}

export default {
  component: PrimaryNavigationWrapped,
  props: {
    bottomKeys: [ 'HELP', 'SETTINGS' ],
    logo: {
      icon: 'HealthEngine',
      route: '/'
    },
    items: [
      {
        key: 'HOME',
        label: 'Home',
        icon: 'Home',
        title: 'Practice admin',
        route: '/'
      },
      {
        key: 'PATIENTS',
        label: 'Patients',
        icon: 'Patients',
        title: 'Our patients',
        items: [
          {
            key: 'FEEDBACK',
            title: 'Patient feedback',
            label: 'Patient feedback',
            route: '/feedback',
            badge: 'FREE',
            items: [
              {
                key: 'SUMMARY',
                label: 'Summary',
                route: '/feedback'
              },
              {
                key: 'PREFERENCES',
                label: 'Preferences',
                route: '/feedback/settings'
              }
            ]
          },
          {
            key: 'REVIEWS',
            title: 'Reviews',
            label: 'Reviews',
            route: '/reviews/summary',
            notifications: 4,
            items: [
              {
                key: 'SUMMARY',
                label: 'Reviews',
                route: '/reviews/summary'
              },
              {
                key: 'PREFERENCES',
                label: 'Preferences',
                route: '/reviews/settings'
              }
            ]
          }
        ]
      },
      {
        key: 'HELP',
        label: 'Help centre',
        title: 'Help centre',
        icon: 'Help',
        route: 'https://external.url/'
      }
    ]
  }
}
