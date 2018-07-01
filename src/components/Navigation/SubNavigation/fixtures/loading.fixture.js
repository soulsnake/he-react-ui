// @flow
import SubNavigation from '../';

export default {
  component: SubNavigation,
  url: '/feedback',
  props: {
    item: {
      items: [],
      key: 'placeholder',
      title: '',
      route: '#',
    },
    locations: [],
    loading: true,
    logoutRoute: '/logout',
  },
};
