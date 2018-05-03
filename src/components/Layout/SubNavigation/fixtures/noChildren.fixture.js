import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SubNavigation from '../'

function SubNavigationWrapped (props) {
  const {...all} = props
  return (
    <BrowserRouter>
      <SubNavigation {...all} />
    </BrowserRouter>)
}

SubNavigationWrapped.propTypes = SubNavigation.propTypes

export default {
  component: SubNavigationWrapped,
  props: {
    item: {
      key: 'HOME',
      label: 'Home',
      icon: 'Home',
      title: 'Practice admin',
      route: '/',
      items: []
    }
  }
}
