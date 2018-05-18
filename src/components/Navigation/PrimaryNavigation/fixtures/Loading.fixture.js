import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrimaryNavigation from '../'

function PrimaryNavigationLoadingWrapped (props) {
  const {...all} = props
  return (
    <BrowserRouter basePath="/loader/index.html/">
      <PrimaryNavigation {...all} />
    </BrowserRouter>)
}

export default {
  component: PrimaryNavigationLoadingWrapped,
  props: {
    loading: true,
    logoutRoute: '/logout',
    locations: [],
    items: []
  }
}
