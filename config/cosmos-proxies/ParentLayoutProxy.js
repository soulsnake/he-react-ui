import React from 'react'
import PropTypes from 'prop-types'


export class ParentLayoutProxy extends React.Component {
  static propTypes = {
    nextProxy: PropTypes.object,
    fixture: PropTypes.object
  }

  onChange = ({ value }) => this.setState({ value })

  render () {
    const { nextProxy, fixture, ...nextProps } = this.props
    const { parentLayout } = fixture

    const child = (
      <nextProxy.value
        {...nextProps}
        nextProxy={nextProxy.next()}
        fixture={fixture}
      />
    )

    return parentLayout ? <div style={parentLayout}>{child}</div> : child
  }
}