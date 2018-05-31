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
  },
};
