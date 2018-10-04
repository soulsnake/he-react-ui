import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Default.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<TimeSelector /> rendered correctly with fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper.find('li')).toHaveLength(60 + 24); // 60 minutes and 24 hours

  expect(wrapper).toMatchSnapshot();
});
