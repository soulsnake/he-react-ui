import React, { Fragment } from 'react'
import Notification from '../'

export default {
  component: Notification,
  children: <Fragment>Practice Admin is getting a style refresh! To get a sneak-peek at the upcoming changes or find out more, <a>click here</a>.</Fragment>,
  props: {
    canClose: true
  }
}
