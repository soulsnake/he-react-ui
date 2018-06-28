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
    locations: ['Location A', 'Location B'].map(location => ({
      value: location,
      label: location,
    })),
    logoutRoute: '/logout',
  },
};
