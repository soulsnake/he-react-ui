import SubNavigation from '../'

export default {
  component: SubNavigation,
  url: '/feedback',
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
