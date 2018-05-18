import createWrapperProxy from 'react-cosmos-wrapper-proxy'

export const centeredProxy = createWrapperProxy({
  fixtureKey: 'centered',
  component: 'div',
  props: {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    }
  }
})

export const layoutParentProxy = createWrapperProxy({
  fixtureKey: 'layoutParent',
  component: 'div',
  props: {}
})

export default [layoutParentProxy, centeredProxy]
