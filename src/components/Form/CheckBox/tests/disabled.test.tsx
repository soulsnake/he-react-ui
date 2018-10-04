import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/disabled.fixture.js';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<Checkbox /> rendered correctly with disabled fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper).toMatchSnapshot();

  wrapper
    .find('label')
    .first()
    .simulate('click');
});
