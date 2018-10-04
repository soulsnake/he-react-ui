import InlineSelector from '../';

export default {
  component: InlineSelector,
  formWrapper: { value: null },
  props: {
    id: 'demo',
    name: 'demo',
    label: 'What time of day?',
    options: [
      { label: 'Any', value: '1' },
      { label: 'AM', value: '2' },
      { label: 'PM', value: '3' },
      { label: 'After Hours', value: '4' },
    ],
  },
};
