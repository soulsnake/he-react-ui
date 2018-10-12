import Table from '../';

export default {
  component: Table,
  props: {
    columns: [
      { title: 'Name', sortable: true },
      { title: 'Specialty', sortable: true },
      { title: 'Date of Birth', width: 'narrow' },
      { title: 'Status', sortable: true, width: 'extraNarrow' },
    ],
    body: [
      { content: ['Barry Fullerman', 'Chiropractor', '23/11/1991', 'Active'] },
      { content: ['Barry Fullerman', 'Donkologist', '24/12/1992', 'Active'] },
      { content: ['Tom Ackerman', 'Psychologist', '05/04/1975', 'Active'] },
      { content: ['???', '???', '23/06/1021', 'Immortal'] },
      {
        content: [
          'Mary Tillerman',
          'General Practitioner',
          '15/09/1984',
          'Inactive',
        ],
      },
      {
        content: [
          'Nick Wickerman',
          'Investigative Journalist',
          '02/08/1987',
          'Bees',
        ],
      },
    ],
  },
};
