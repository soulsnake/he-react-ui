import React from 'react';
import Footer from '.';
import Button from '../../Form/Button';

const content = (
  <React.Fragment>
    <p>This product will change everything.</p>
    <Button large>Activate now</Button>
    <Button large color="white" keyline>
      Find out more
    </Button>
  </React.Fragment>
);

export default {
  component: Footer,
  props: {
    header: 'Ready for this product?',
  },
  children: content,
};
