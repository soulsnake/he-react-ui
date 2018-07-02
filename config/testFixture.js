// @flow

import * as React from 'react';
import createTestContext from 'react-cosmos-test/enzyme';

type Fixture<T> = {
  component: React.ComponentType<T>,
  name?: string,
};

function testOneFixture<T>(fixture: Fixture<T>, variant: string) {
  const { mount, getWrapper } = createTestContext({ fixture });
  const { component } = fixture;
  const { displayName, name } = component;
  mount();
  test(`<${displayName || name} /> rendered correctly with ${fixture.name ||
    variant} fixture`, () => expect(getWrapper()).toMatchSnapshot());
}

export default function testAllFixtures(
  fixtures: Fixture | Fixture[],
  variant: string = 'a',
) {
  if (typeof fixtures.forEach === 'function') {
    fixtures.forEach(it => testOneFixture(it));
  } else {
    testOneFixture(fixtures, variant);
  }
}
