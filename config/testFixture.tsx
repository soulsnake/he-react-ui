import * as React from 'react';
import createTestContext from 'react-cosmos-test/enzyme';

type Fixture = {
  component: React.ComponentType<any>;
  name?: string;
};

function testOneFixture(fixture: Fixture, variant: string = 'a') {
  const { mount, getWrapper } = createTestContext({ fixture });
  const { component } = fixture;
  const { displayName, name } = component as any;
  mount();
  test(`<${displayName || name} /> rendered correctly with ${fixture.name ||
    variant} fixture`, () => expect(getWrapper()).toMatchSnapshot());
}

// TODO: use real type guard functions to discriminate one fixture vs an array of them

export default function testAllFixtures(fixtures: any, variant?: string) {
  if (!('forEach' in fixtures)) {
    testOneFixture(fixtures as Fixture, variant);
  } else if (typeof fixtures.forEach === 'function') {
    (fixtures as Fixture[]).forEach(it => testOneFixture(it));
  }
}
