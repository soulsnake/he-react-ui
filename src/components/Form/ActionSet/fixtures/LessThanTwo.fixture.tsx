import React from 'react';
import ActionSet from '..';
import ActionIcon from '../../ActionIcon';
import parentLayout from './parentLayout';

const actions = [
  <ActionIcon icon="Delete" title="Delete" color="red" />,
  <ActionIcon icon="Edit" title="Edit" />,
];

export default {
  parentLayout,
  component: ActionSet,
  props: {},
  children: actions,
};
