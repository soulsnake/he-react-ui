import React from 'react'
import PopUp from '../'
import { Button } from '../..'

export default {
  component: PopUp,
  props: {
    showing: true
  },
  children: <div>
    <h1>Wow!</h1>
    <p>What a story, Mark!</p>
    <p>I can't wait to hear more about all of it later.</p>
    <Button>Useless button</Button>
  </div>
}
