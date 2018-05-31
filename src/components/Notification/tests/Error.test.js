import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Error.fixture';

const { mount, getWrapper, unmount } = createTestContext({ fixture });

beforeEach(mount);
afterEach(unmount);

test('<Notification type="error" /> rendered correctly with fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper.find('Cross')).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
});
