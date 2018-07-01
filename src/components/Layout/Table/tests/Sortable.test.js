// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Sortable.fixture.js';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<Table /> rendered correctly with sortable fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper).toMatchSnapshot();
  wrapper
    .find('div.heading')
    .first()
    .simulate('click');
});
