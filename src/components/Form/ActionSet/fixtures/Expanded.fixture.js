import ActionSet from '../'

export default {
  component: ActionSet,
  props: {
    actions: [
      {title:'Delete', icon:'Delete', disabled: true},
      {title:'Edit', icon:'Edit'},
      {title:'Sync', icon:'Sync', color: 'green'}
    ],
    expanded: true
  }
}
