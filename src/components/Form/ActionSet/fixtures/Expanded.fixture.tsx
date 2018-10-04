import React from 'react';
import ActionSet from '..';
import ActionIcon from '../../ActionIcon';

const actions = [
  <ActionIcon icon="Delete" title="Delete" color="red" />,
  <ActionIcon icon="Edit" title="Edit" />,
  <ActionIcon icon="Sync" title="Sync" color="green" />,
];

export default {
  component: ActionSet,
  props: {
    expanded: true,
  },
  children: actions,
};
