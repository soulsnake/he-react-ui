import InlineSelector from '../';

export default {
  component: InlineSelector,
  formWrapper: { value: null },
  props: {
    id: 'demo',
    name: 'demo',
    options: [
      { label: 'General Exam and Clean', value: '1' },
      { label: 'Toothache', value: '2' },
      { label: 'Loose Filling', value: '3' },
      { label: 'Loose Crown', value: '4' },
      { label: 'Teeth Whitening', value: '5' },
    ],
    vertical: true,
  },
};
