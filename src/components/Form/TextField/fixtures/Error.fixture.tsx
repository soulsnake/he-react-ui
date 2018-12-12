import TextField from '../';

export default {
  name: 'Error',
  component: TextField,
  props: {
    id: 'demo',
    name: 'demo',
    label: 'First Name',
    error: "Something isn't right",
    isValid: false,
  },
};
