import React from 'react';
import Radio from '../';

import SingleSelect from '../../SingleSelect';

const other = (
  <SingleSelect
    options={[
      { value: 'A', label: 'A' },
      { value: 'B', label: 'B' },
      { value: 'C', label: 'C' },
    ]}
  />
);

export default {
  component: Radio,
  formWrapper: {},
  props: {
    name: 'demo',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Other...', value: '4', child: other, showChild: true },
    ],
    value: '1',
  },
};
