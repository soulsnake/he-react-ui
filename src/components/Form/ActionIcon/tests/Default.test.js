// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Default.fixture.js';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<ActionIcon /> rendered correctly with default fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper).toMatchSnapshot();
  wrapper.find('button').simulate('click');
});
