import React from 'react';
import EvenGrid from '../';
import CheckBox from '../../../Form/CheckBox';

const checkboxes: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
  <CheckBox id={`${i}`} name={`${i}`} label={`Checkbox ${i}`} />
));

export default {
  component: EvenGrid,
  props: {},
  children: checkboxes,
};
