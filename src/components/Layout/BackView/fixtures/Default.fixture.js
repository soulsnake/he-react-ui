import BackView from '../';

export default {
  component: BackView,
  parentLayout: { marginTop: 40 },
  url: '/',
  props: {
    heading: 'Heading',
    route: '..',
  },
};
