import React from 'react';

type Props = {
  nextProxy: any;
  fixture: any;
};

export default class WrapperProxy extends React.Component<Props> {
  render() {
    const { nextProxy, fixture, ...nextProps } = this.props;
    const { wrapper } = fixture;

    const child = (
      <nextProxy.value
        {...nextProps}
        nextProxy={nextProxy.next()}
        fixture={fixture}
      />
    );

    if (!wrapper) return child;

    const { tag: Component = 'div', ...props } = wrapper;

    return <Component {...props}>{child}</Component>;
  }
}
