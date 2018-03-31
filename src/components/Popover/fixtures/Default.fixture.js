import Popover from '../'

export default {
  component: Popover,
  props: {
    placement: 'bottom',
    positionLeft: 200,
    positionTop: 50
  },
  children: 'The patient associated with this recall does not have a valid Australian mobile number.'
}
