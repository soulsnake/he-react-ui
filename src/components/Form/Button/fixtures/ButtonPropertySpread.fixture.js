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
  },
  children: 'Button',
  simulateSubmission: true,
};
