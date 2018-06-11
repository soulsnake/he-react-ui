import PropTypes from 'prop-types';
import React from 'react';

export class FormWrapperProxy extends React.Component {
  static propTypes = {
    nextProxy: PropTypes.object,
    fixture: PropTypes.object 
  }

  state = { value: 0 }

  constructor (props) {
    super(props)
    const { formWrapper } = props.fixture
    if (formWrapper && typeof formWrapper === 'object') {
      this.state.value = formWrapper.value
    }
  }

  onChange = ({ value }) => {
    
    
    this.setState({ value })
  }

  render () {
    const { nextProxy, fixture, ...nextProps } = this.props

    const { onChange } = this
    const { value } = this.state

    const wrappedFixture = fixture.formWrapper
      ? {
        ...fixture,
        props: { ...fixture.props, onChange, value }
      }
      : fixture

    return (
      <nextProxy.value
        {...nextProps}
        nextProxy={nextProxy.next()}
        fixture={wrappedFixture}
      />
    )
  }
}