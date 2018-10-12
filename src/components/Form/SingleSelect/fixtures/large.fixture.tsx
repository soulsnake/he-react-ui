import SingleSelect from '../';

export default {
  component: SingleSelect,
  formWrapper: { value: null },
  props: {
    id: 'demo',
    name: 'demo',
    large: true,
    options: [
      { label: 'Apple', value: '1' },
      { label: 'Banana', value: '2' },
      { label: 'Cabbage', value: '3' },
      { label: 'Date', value: '4' },
      {
        label: 'Elephant ear',
        value: '5',
      },
      { label: 'Fig', value: '6' },
      { label: 'Grape', value: '7' },
      { label: 'Hive (bee)', value: '8' },
      { label: 'Ivy', value: '9' },
      { label: 'Jackfruit', value: '10' },
      {
        label:
          'Test long option a b c d e f c d e f g h i j k l m n o p q r s t u v w x y z',
        value: '11',
      },
    ],
  },
};
