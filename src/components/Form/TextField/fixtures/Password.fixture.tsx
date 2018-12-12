import TextField from '../';

export default {
  name: 'Password',
  formWrapper: { value: '' },
  component: TextField,
  props: {
    id: 'demo',
    name: 'demo',
    label: 'Password',
    password: true,
  },
};
