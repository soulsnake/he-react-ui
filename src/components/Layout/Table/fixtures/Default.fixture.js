import Table from '../'

export default {
  component: Table,
  props: {
    columns: [
      {title: 'Name'},
      {title: 'Specialty'},
      {title: 'Date of Birth', width: 'narrow'},
      {title: 'Status', width: 'extraNarrow'}
    ],
    body: [
      [{content: 'Barry Fullerman'}, {content: 'Chiropractor'}, {content: '23/11/1991'}, {content: 'Active'}],
      [{content: 'Tom Ackerman'}, {content: 'Psychologist'}, {content: '05/04/1975'}, {content: 'Active'}],
      [{content: '???'}, {content: '???'}, {content: '23/06/1021'}, {content: 'Immortal'}],
      [{content: 'Mary Tillerman'}, {content: 'General Practitioner'}, {content: '15/09/1984'}, {content: 'Inactive'}],
      [{content: 'Nick Wickerman'}, {content: 'Investigative Journalist'}, {content: '02/08/1987'}, {content: 'Bees'}]
    ]
  }
}
