import TextField from '../';

export default {
  name: 'InvalidMarker',
  component: TextField,
  props: {
    id: 'demo',
    name: 'demo',
    label: 'First Name',
    error: "Something isn't right",
    marker: 'tick-cross',
    value: 'Bruce',
    isValid: false,
  },
};
