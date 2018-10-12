import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Default.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<InlineSelector /> rendered correctly with fixture', () => {
  const wrapper = getWrapper();

  fixture.props.options.forEach(option => {
    expect(wrapper.text()).toContain(option.label);
  });

  expect(wrapper.find('div')).toHaveLength(fixture.props.options.length + 2);

  expect(wrapper).toMatchSnapshot();
});
