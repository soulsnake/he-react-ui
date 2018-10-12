import React from 'react';

type Props = {
  nextProxy: any;
  fixture: any;
};

export default class FormWrapperProxy<T> extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    const { formWrapper } = props.fixture;
    if (formWrapper && typeof formWrapper === 'object') {
      this.state.value = formWrapper.value;
    }
  }

  state = { value: 0 };

  onChange = ({ value }: { value: T }) => {
    this.setState({ value });
  };

  render() {
    const { nextProxy, fixture, ...nextProps } = this.props;

    const { onChange } = this;
    const { value } = this.state;

    const wrappedFixture = fixture.formWrapper
      ? {
          ...fixture,
          props: { ...fixture.props, onChange, value },
        }
      : fixture;

    return (
      <nextProxy.value
        {...nextProps}
        nextProxy={nextProxy.next()}
        fixture={wrappedFixture}
      />
    );
  }
}
