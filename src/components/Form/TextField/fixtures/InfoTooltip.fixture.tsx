import React from 'react';
import TextField from '../';

export default {
  name: 'InfoTooltip',
  component: TextField,
  props: {
    id: 'demo',
    name: 'demo',
    label: 'First Name',
    marker: 'info',
    markerTooltip: <div>Test HTML</div>,
  },
};
