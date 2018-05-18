
import SubNavigation from '../'

export default {
  component: SubNavigation,
  url: '/',
  props: {
    item: {
      key: 'HOME',
      label: 'Home',
      icon: 'Home',
      title: 'Practice admin',
      route: '/',
      items: []
    },
    logoutRoute: '/admin/auth/logout'
  }
}
