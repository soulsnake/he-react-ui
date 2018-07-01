// @flow

import PropTypes from 'prop-types';
import React from 'react';

export default function ParentLayoutProxy(props: *) {
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

ParentLayoutProxy.propTypes = {
  nextProxy: PropTypes.object,
  fixture: PropTypes.object,
};
