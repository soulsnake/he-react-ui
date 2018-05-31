import React, { Fragment } from 'react';
import Notification from '../';

export default {
  component: Notification,
  props: {
    canClose: true,
    children: (
      <Fragment>
        Practice Admin is getting a style refresh! To get a sneak-peek at the
        upcoming changes or find out more, <a key="clickHere">click here</a>.
      </Fragment>
    ),
    closed: false,
    type: 'default',
  },
};
