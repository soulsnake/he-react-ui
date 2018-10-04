import Label from '../';

export default {
  component: Label,
  props: {
    error: true,
    htmlFor: 'demo',
  },
  children: 'There was a problem',
};
