import React, {Fragment} from 'react'
import Notification from '../'

export default {
  component: Notification,
  props: {
    canClose: true,
    type: 'warning'
  },
  children: <Fragment>Warning text. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</Fragment>
}
