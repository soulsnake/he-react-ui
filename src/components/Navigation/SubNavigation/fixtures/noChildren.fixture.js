// @flow
import SubNavigation from '../';

export default {
  component: SubNavigation,
  url: '/',
  props: {
    item: {
      key: 'HOME',
      label: 'Home',
      icon: 'Home',
      title: 'Welcome home',
      route: '/',
      items: [],
    },
    logoutRoute: '/logout',
  },
};
