import moment from 'moment';
import DateRangePicker from '..';

const LAST_MONTH = {
  label: 'Last month',
  value: [
    moment()
      .subtract(1, 'month')
      .startOf('month'),
    moment()
      .subtract(1, 'month')
      .endOf('month'),
  ],
};

export default [
  {
    name: 'base',
    component: DateRangePicker,

    props: {
      options: [
        LAST_MONTH,

        {
          label: 'Last 3 months',
          value: [
            moment()
              .subtract(3, 'month')
              .startOf('month'),
            moment()
              .subtract(1, 'month')
              .endOf('month'),
          ],
        },

        {
          label: 'Last 12 months',
          value: [
            moment()
              .subtract(12, 'month')
              .startOf('month'),
            moment()
              .subtract(1, 'month')
              .endOf('month'),
          ],
        },
      ],
    },

    parentLayout: {
      margin: 40,
      padding: 40,
      border: 'solid 1px silver',
      background: 'white',
      boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
    },

    formWrapper: {
      value: LAST_MONTH.value,
    },
  },
];
