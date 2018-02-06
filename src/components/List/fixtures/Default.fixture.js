import List from '../'

export default {
  component: List,
  props: {
    data: {
      headers: ['Status', 'User', 'Ticket', 'Sent'],
      rows: [
        [
          { type: 'text', data: 'OPEN' },
          { type: 'text', data: 'John Doe' },
          { type: 'text', data: 'Some questions about booking' },
          { type: 'date', data: '2018-01-02 11:11:11'}
        ],
        [
          { type: 'text', data: 'CLOSED' },
          { type: 'text', data: 'Jane Doe' },
          { type: 'text', data: 'Support on booking appointment' },
          { type: 'date', data: '2018-01-02 11:11:11'}
        ]
      ]
    }
  }
}
