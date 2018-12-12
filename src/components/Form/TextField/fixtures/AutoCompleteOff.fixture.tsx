import TextField from '../';

export default {
    name: 'Autocomplete off',
    component: TextField,
    props: {
      id: 'firstname',
      name: 'firstname',
      label: 'First Name',
      autoComplete: 'off',
    },
};
