import React from 'react'
import PopUp from '../'
import { Button } from '../..'

export default {
  component: PopUp,
  props: {
    showing: true,
    modal: true,
    style: {
      padding: 0,
      backgroundImage: 'url(\'https://i.imgur.com/5JGZrYe.jpg\')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      color: 'white',
      height: '400px'
    }
  },
  children: <div>
    <h1>Wow!</h1>
    <p>Look how versatile you can make the pop-up window.</p>
  </div>
}
