import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrimaryNavigation from '../'

function PrimaryNavigationWrapped (props) {
  const {...all} = props
  return (
    <BrowserRouter basePath="/loader/index.html/">
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
        key: 'BOOKINGS',
        label: 'Bookings',
        icon: 'Bookings',
        title: 'Bookings',
        items: [
          {
            key: 'ONLINE_BOOKINGS',
            title: 'Online bookings',
            label: 'Online bookings',
            route: '/online-bookings',
            items: [
              {
                key: 'BOOKINGS',
                label: 'Bookings',
                route: '/online-bookings'
              },
              {
                key: 'PREFERENCES',
                label: 'Preferences',
                route: '/online-bookings/preferences'
              }
            ]
          },
          {
            key: 'REMINDERS',
            title: 'Reminders',
            label: 'Reminders',
            route: '/reminders',
            notifications: 23,
            items: [
              {
                key: 'DASHBOARD',
                label: 'Dashboard',
                route: '/reminders'
              },
              {
                key: 'PENDING',
                label: 'Add / delete',
                route: '/reminders/pending'
              },
              {
                key: 'HISTORY',
                label: 'History',
                route: '/reminders/history'
              },
              {
                key: 'PREFERENCES',
                label: 'Preferences',
                route: '/reminders/settings'
              }
            ]
          },
          {
            key: 'PULSE',
            title: 'Patient pulse',
            label: 'Patient pulse',
            route: '/feedback/#/free',
            badge: 'FREE',
            items: [
              {
                key: 'SUMMARY',
                label: 'Summary',
                route: '/feedback/#/free'
              },
              {
                key: 'PREFERENCES',
                label: 'Preferences',
                route: '/feedback/#/free/settings'
              }
            ]
          },
          {
            key: 'REVIEWS',
            title: 'Reviews',
            label: 'Reviews',
            route: '/reviews/summary',
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
        key: 'CARE',
        label: 'Care',
        icon: 'Patients',
        title: 'Care',
        items: [
          {
            key: 'RECALLS',
            title: 'Recalls',
            label: 'Recalls',
            route: '/recalls',
            notifications: 104,
            items: [
              {
                key: 'ACTIONS',
                label: 'Actions',
                route: '/recalls#actions'
              },
              {
                key: 'TEMPLATES',
                label: 'Templates',
                route: '/feedback#templates'
              },
              {
                key: 'PREFERENCES',
                label: 'Preferences',
                route: '/recalls#settings'
              }
            ]
          },
          {
            key: 'PRESCRIPTIONS',
            title: 'Prescriptions',
            label: 'Prescriptions',
            route: '/prescriptions',
            badge: 'NEW'
          }
        ]
      },
      {
        key: 'MARKETING',
        label: 'Marketing',
        icon: 'Megaphone',
        title: 'Marketing',
        items: [
          {
            key: 'PROFESSIONAL_PROFILE',
            title: 'Professional profile',
            label: 'Practice profile',
            route: '/profile',
            items: [
              {
                key: 'PRACTICE_PROFILE',
                label: 'Practice profile',
                route: '/profile'
              },
              {
                key: 'PRACTITIONER_PROFILES',
                label: 'Practitioner profiles',
                route: '/profile/practitioners'
              },
              {
                key: 'VIEW_PROFILE',
                label: 'VIEW',
                route: 'http://external.url/'
              }
            ]
          },
          {
            key: 'PATIENT_MATCH',
            title: 'Patient match',
            label: 'Patient match',
            route: '/patient-match'
          },
          {
            key: 'MARKETING_RESOURCES',
            title: 'Marketing resources',
            label: 'Marketing resources',
            route: '/marketing-resources'
          }
        ]
      },
      {
        key: 'HELP',
        label: 'Help centre',
        title: 'Help centre',
        icon: 'Help',
        route: 'https://external.url/'
      },
      {
        key: 'SETTINGS',
        label: 'Settings',
        icon: 'Settings',
        title: 'Settings',
        items: [
          {
            key: 'PERMISSIONS',
            title: 'Logins & permissions',
            label: 'Logins & permissions',
            route: '/permissions'
          },
          {
            key: 'NOTIFICATIONS',
            title: 'Notifications',
            label: 'Notifications',
            route: '/notifications'
          },
          {
            key: 'INSTALLATION_RESOURCES',
            title: 'Installation resources',
            label: 'Installation resources',
            route: '/installation-resources'
          },
          {
            key: 'AVAILABILITY',
            title: 'Manage availability',
            label: 'Manage availability',
            route: '/availability',
            items: [
              {
                key: 'CALENDAR',
                label: 'Calendar',
                route: '/availability'
              },
              {
                key: 'AUTOMATIC',
                label: 'Automatic',
                route: '/automatic'
              }
            ]
          },
          {
            key: 'APPOINTMENT_TYPES',
            title: 'Appointment types',
            label: 'Appointment types',
            route: '/appointment-types'
          }
        ]
      }
    ]
  }
}
