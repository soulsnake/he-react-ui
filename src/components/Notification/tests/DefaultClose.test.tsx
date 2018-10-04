import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/DefaultClose.fixture';

const { mount, getWrapper, unmount } = createTestContext({ fixture });

beforeEach(mount);
afterEach(unmount);

test('<Notification canClose=true type="default" /> rendered correctly with fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper.find('div')).toHaveLength(2);
  expect(wrapper.find('Cross')).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
});

test('can close', () => {
  let wrapper = getWrapper();

  expect(wrapper).toMatchSnapshot();

  wrapper.find('Cross').simulate('click');

  wrapper = getWrapper();

  expect(wrapper).toMatchSnapshot();
});
