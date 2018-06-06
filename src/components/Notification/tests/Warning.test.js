import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Warning.fixture';

const { mount, getWrapper, unmount } = createTestContext({ fixture });

beforeEach(mount);
afterEach(unmount);

test('<Notification type="warning" /> rendered correctly with fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper.find('Alert')).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
});
