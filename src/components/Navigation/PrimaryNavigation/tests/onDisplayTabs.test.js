// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import defaultFixture from '../fixtures/Default.fixture';
import fixtureWithTabs from '../fixtures/withSubNav.fixture';

function mountWithCallback(fixture, onDisplayTabs) {
  const wrappedFixture = {
    ...fixture,
    props: {
      ...fixture.props,
      onDisplayTabs,
    },
  };
  const { mount, getWrapper } = createTestContext({ fixture: wrappedFixture });
  mount();
  return getWrapper();
}

test('PrimaryNavigation should invoke onDisplayTabs iff tabs are shown', () => {
  const onDisplayTabs = jest.fn(() => {});
  mountWithCallback(defaultFixture, onDisplayTabs);
  expect(onDisplayTabs).toHaveBeenCalledTimes(0);
  mountWithCallback(fixtureWithTabs, onDisplayTabs);
  expect(onDisplayTabs).toHaveBeenCalledTimes(1);
});
