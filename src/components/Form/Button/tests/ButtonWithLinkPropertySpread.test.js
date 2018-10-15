// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/ButtonWithLinkPropertySpread.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<Button /> with link rendered correctly with buttonProps', () => {
  const wrapper = getWrapper();
  expect(wrapper.find('a')).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
  expect(
    wrapper
      .find('a')
      .getDOMNode()
      .getAttribute('data-cta'),
  ).toEqual('Call to Action');
  expect(
    wrapper
      .find('a')
      .getDOMNode()
      .getAttribute('data-event'),
  ).toEqual('Event');
});
