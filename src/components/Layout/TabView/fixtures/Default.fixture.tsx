import TabView from '../';

export default {
  component: TabView,
  url: '/',
  parentLayout: { marginTop: 40 },
  props: {
    heading: 'Heading',
    tabs: [
      { title: 'Root', route: '/', exact: true },
      { title: 'Somewhere', route: '/somewhere' },
      { title: 'Elsewhere', route: '/elsewhere' },
    ],
  },
};
