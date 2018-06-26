import React from 'react';
import Banner from '.';
import Button from '../../Form/Button/Button';

const content = (
  <React.Fragment>
    <p>
      This is a paragraph of text made to emulate a quick description of the
      item being promoted.
    </p>
    <Button large>Activate now</Button>
    <Button large color="white" keyline>
      Find out more
    </Button>
  </React.Fragment>
);

export default {
  component: Banner,
  props: {
    title: 'The Heading',
  },
  children: content,
};
