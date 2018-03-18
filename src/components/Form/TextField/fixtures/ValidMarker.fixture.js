import Input from '../'

export default {
  component: Input,
  props: {
    id: 'demo',
    name: 'demo',
    label: 'First Name',
    description: 'Optional descriptive label',
    marker: true
  },
  state: {
    value: 'Bruce'
  }
}
