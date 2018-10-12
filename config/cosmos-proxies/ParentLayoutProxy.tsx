import React from 'react';

type Props = {
  nextProxy: any;
  fixture: any;
};

export default function ParentLayoutProxy(props: Props) {
  const { nextProxy, fixture, ...nextProps } = props;
  const { parentLayout } = fixture;

  const child = (
    <nextProxy.value
      {...nextProps}
      nextProxy={nextProxy.next()}
      fixture={fixture}
    />
  );

  return parentLayout ? <div style={parentLayout}>{child}</div> : child;
}
