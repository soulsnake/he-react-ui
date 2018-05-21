import PrimaryNavigation from '../'

export default {
  component: PrimaryNavigation,
  url: '/',
  props: {
    loading: true,
    logoutRoute: '/logout',
    locations: [],
    items: []
  }
}
