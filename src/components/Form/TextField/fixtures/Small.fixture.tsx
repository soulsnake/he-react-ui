import TextField from '../';

export default {
  name: 'Small',
  formWrapper: { value: '' },
  component: TextField,
  props: {
    id: 'demo',
    name: 'demo',
    label: 'First Name',
    small: true,
  },
};
