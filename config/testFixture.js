// @flow

import * as React from 'react';
import createTestContext from 'react-cosmos-test/enzyme';

type Fixture<T> = {
  component: React.ComponentType<T>,
};

export default function testFixture<T>(fixture: Fixture<T>, variant: string) {
  const { mount, getWrapper } = createTestContext({ fixture });
  const { component } = fixture;
  const { displayName, name } = component;
  mount();
  test(`<${displayName ||
    name} /> rendered correctly with ${variant} fixture`, () =>
    expect(getWrapper()).toMatchSnapshot());
}
