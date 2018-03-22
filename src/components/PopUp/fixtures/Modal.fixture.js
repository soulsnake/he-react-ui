import React from 'react'
import PopUp from '../'
import { Button } from '../..'

export default {
  component: PopUp,
  props: {
    showing: true,
    modal: true
  },
  children: <div>
    <p>This modal popup can't be closed without a parent interferring.</p>
    <p>If only the <pre>showing</pre> state were set to false.</p>
  </div>
}
