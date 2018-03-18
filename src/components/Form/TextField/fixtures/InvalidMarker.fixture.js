import Input from '../'

export default {
  component: Input,
  props: {
    id: 'demo',
    name: 'demo',
    label: 'First Name',
    description: 'Optional descriptive label',
    error: 'Something isn\'t right',
    marker: true,
    validateFunc: () => false
  },
  state: {
    isValid: false,
    value: 'Bruce'
  }
}
