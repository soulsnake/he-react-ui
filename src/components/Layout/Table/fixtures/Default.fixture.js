import React from 'react'
import Table from '../'
import { ActionIcon, ActionSet } from '../../../Form'

const actions = (
  <ActionSet>
    <ActionIcon icon="Delete" title="Delete" color="red" />
    <ActionIcon icon="Edit" title="Edit" />
    <ActionIcon icon="Sync" title="Sync" />
  </ActionSet>)

export default {
  component: Table,
  props: {
    columns: [
      {title: 'Name'},
      {title: 'Specialty'},
      {title: 'Date of Birth', width: 'narrow'},
      {title: 'Status', width: 'extraNarrow'},
      {title: '', width: 'extraNarrow'}
    ],
    body: [
      [{content: 'Barry Fullerman'}, {content: 'Chiropractor'}, {content: '23/11/1991'}, {content: 'Active'}, {content: actions}],
      [{content: 'Tom Ackerman'}, {content: 'Psychologist'}, {content: '05/04/1975'}, {content: 'Active'}, {content: actions}],
      [{content: '???'}, {content: '???'}, {content: '23/06/1021'}, {content: 'Immortal'}, {content: actions}],
      [{content: 'Mary Tillerman'}, {content: 'General Practitioner'}, {content: '15/09/1984'}, {content: 'Inactive'}, {content: actions}],
      [{content: 'Nick Wickerman'}, {content: 'Investigative Journalist'}, {content: '02/08/1987'}, {content: 'Bees'}, {content: actions}]
    ]
  }
}
