import React from 'react'
import FormSection from '../'
import SingleSelect from '../../../Form/SingleSelect'

export default {
  component: FormSection,
  props: {
    heading: 'Section Heading',
    description: 'This is generally provides some further explanation about what the user can / should do.'
  },
  children: <SingleSelect id="demo" name="demo" label="Pick one" options={[{value: '1', label: 'One'}]} />
}
