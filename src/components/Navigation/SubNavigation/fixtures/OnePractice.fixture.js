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
    },
    locations: [
      {
        value: 'Location A',
        label: 'Location A',
      },
    ],
    logoutRoute: '/logout',
  },
};
