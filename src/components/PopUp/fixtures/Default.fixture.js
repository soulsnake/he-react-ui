import React from 'react'
import PopUp from '../'
import { Button } from '../..'
import { Heading, Paragraph } from '../..'

export default {
  component: PopUp,
  props: {
    showing: true
  },
  children: <div>
    <Heading h3>Wow!</Heading>
    <Paragraph>What a story, Mark!</Paragraph>
    <Paragraph>I can't wait to hear more about all of it later.</Paragraph>
    <Button>Useless button</Button>
  </div>
}
