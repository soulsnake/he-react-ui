import React from 'react';
import ActionSet from '..';
import ActionIcon from '../../ActionIcon';

const actions = [
  <ActionIcon icon="Delete" title="Delete" color="red" />,
  <ActionIcon icon="Edit" title="Edit" />,
  <ActionIcon icon="Sync" title="Sync" color="green" />,
];

export default {
  parentLayout: {
    width: 200,
    height: 100,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  component: ActionSet,
  props: {},
  children: actions,
};
