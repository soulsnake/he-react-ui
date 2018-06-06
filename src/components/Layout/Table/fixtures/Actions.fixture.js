import React from 'react';
import Table from '../';
import { ActionIcon, ActionSet } from '../../../Form';

const actions = (
  <ActionSet>
    <ActionIcon icon="Delete" title="Delete" color="red" />
    <ActionIcon icon="Edit" title="Edit" />
    <ActionIcon icon="Sync" title="Sync" />
  </ActionSet>
);

export default {
  component: Table,
  props: {
    columns: [
      { title: 'Name' },
      { title: 'Specialty' },
      { title: 'Date of Birth', width: 'narrow' },
      { title: 'Status', width: 'extraNarrow' },
      { title: '', width: 'extraNarrow' },
    ],
    body: [
      {
        content: [
          'Barry Fullerman',
          'Chiropractor',
          '23/11/1991',
          'Active',
          actions,
        ],
      },
      {
        content: [
          'Tom Ackerman',
          'Psychologist',
          '05/04/1975',
          'Active',
          actions,
        ],
      },
      { content: ['???', '???', '23/06/1021', 'Immortal', actions] },
      {
        content: [
          'Mary Tillerman',
          'General Practitioner',
          '15/09/1984',
          'Inactive',
          actions,
        ],
      },
      {
        content: [
          'Nick Wickerman',
          'Investigative Journalist',
          '02/08/1987',
          'Bees',
          actions,
        ],
      },
    ],
  },
};
