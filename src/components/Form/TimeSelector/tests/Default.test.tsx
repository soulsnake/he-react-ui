import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Default.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<TimeSelector /> rendered correctly with default fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper).toMatchSnapshot();
  wrapper.find('div.select').simulate('click');
});
