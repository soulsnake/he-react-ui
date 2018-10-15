// @flow
import Button from '../';

export default {
  component: Button,
  centered: true,
  props: {
    buttonProps: {
      'data-cta': 'Call to Action',
      'data-event': 'Event',
    },
    submit: false,
    to: '#',
  },
  children: 'Button',
  simulateSubmission: true,
};
