import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Default.fixture';

const { mount, getWrapper, unmount } = createTestContext({ fixture });

beforeEach(mount);
afterEach(unmount);

test('<Notification type="default" /> rendered correctly with fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper.find('div')).toHaveLength(2);
  expect(wrapper.find('svg')).toHaveLength(0);
  expect(wrapper).toMatchSnapshot();
});
