import React from 'react';
import Footer from '../';
import Button from '../../../Form/Button';

export default {
  component: Footer,
  props: {},
  children: (
    <div>
      <span style={{ float: 'left' }}>
        {'The footer is useful for creating padding at the bottom of a view.'}
      </span>
      <Button icon="ArrowRight" color="green" style={{ float: 'right' }}>
        Next page
      </Button>
    </div>
  ),
};
