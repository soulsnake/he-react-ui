// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/ButtonPropertySpread.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<Button /> rendered correctly with buttonProps', () => {
  const wrapper = getWrapper();
  expect(wrapper.find('button')).toHaveLength(1);
  expect(
    wrapper
      .find('button')
      .getDOMNode()
      .getAttribute('data-cta'),
  ).toEqual('Call to Action');
  expect(
    wrapper
      .find('button')
      .getDOMNode()
      .getAttribute('data-event'),
  ).toEqual('Event');
});
