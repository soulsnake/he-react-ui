import Table from '../';

export default {
  component: Table,
  props: {
    columns: [
      { title: 'Name' },
      { title: 'Specialty' },
      { title: 'Date of Birth', width: 'narrow' },
      { title: 'Status', width: 'extraNarrow' },
    ],
    body: [
      { content: ['Barry Fullerman', 'Chiropractor', '23/11/1991', 'Active'] },
      { content: ['Tom Ackerman', 'Psychologist', '05/04/1975', 'Active'] },
      { content: ['???', '???', '23/06/1021', 'Immortal'], inactive: true },
      {
        content: [
          'Mary Tillerman',
          'General Practitioner',
          '15/09/1984',
          'Inactive',
        ],
        inactive: true,
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
