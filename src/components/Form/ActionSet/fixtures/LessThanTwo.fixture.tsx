import React from 'react';
import ActionSet from '..';
import ActionIcon from '../../ActionIcon';

const actions = [
  <ActionIcon icon="Delete" title="Delete" color="red" />,
  <ActionIcon icon="Edit" title="Edit" />,
];

export default {
  component: ActionSet,
  props: {},
  children: actions,
};
