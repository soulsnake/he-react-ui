// @flow
import SubNavigation from '../';

export default {
  component: SubNavigation,
  url: '/feedback',
  props: {
    item: {
      key: 'PARENT',
      title: 'Parent title',
      label: 'Parent',
      route: '/parent',
      badge: 'FREE',
      items: [],
    },
    locations: [
      {
        value: 'Location A',
        label: 'Location A',
      },
      {
        value: 'Location B',
        label: 'Location B',
      },
    ],
    logoutRoute: '/logout',
  },
};
