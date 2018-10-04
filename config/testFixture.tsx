import * as React from 'react';
import createTestContext from 'react-cosmos-test/enzyme';

type Fixture<T> = {
  component: React.ComponentType<T>;
  name?: string;
};

type FixtureList<T> = Fixture<T>[];

function testOneFixture<T>(fixture: Fixture<T>, variant: string = 'a') {
  const { mount, getWrapper } = createTestContext({ fixture });
  const { component } = fixture;
  const { displayName, name } = component as any;
  mount();
  test(`<${displayName || name} /> rendered correctly with ${fixture.name ||
    variant} fixture`, () => expect(getWrapper()).toMatchSnapshot());
}

// TODO: use real type guard functions to discriminate one fixture vs an array of them

export default function testAllFixtures<T>(
  fixtures: Fixture<T> | FixtureList<T>,
  variant?: string,
) {
  if (!('forEach' in fixtures)) {
    testOneFixture(fixtures as any, variant);
  } else if (typeof fixtures.forEach === 'function') {
    fixtures.forEach(it => testOneFixture(it as any));
  }
}
