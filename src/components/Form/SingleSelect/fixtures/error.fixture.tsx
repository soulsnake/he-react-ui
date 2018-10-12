import SingleSelect from '../';

export default {
  component: SingleSelect,
  formWrapper: { value: null },
  props: {
    id: 'demo',
    name: 'demo',
    error: "That selection wasn't great",
    placeholder: 'Select from the list',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
};
