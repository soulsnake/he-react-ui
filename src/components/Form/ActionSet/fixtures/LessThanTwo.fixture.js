import ActionSet from '../'

export default {
  component: ActionSet,
  props: {
    actions: [
      {title:'Edit', icon:'Edit'},
      {title:'Sync', icon:'Sync', color: 'green'}
    ]
  }
}
