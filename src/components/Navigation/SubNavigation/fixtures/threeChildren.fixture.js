import SubNavigation from '../'

export default {
  component: SubNavigation,
  url: '/recalls',

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
