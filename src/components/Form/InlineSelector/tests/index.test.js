import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../InlineSelector.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<InlineSelector /> rendered correctly with fixture', () => {
  let wrapper = getWrapper()
  Object.keys(fixture.props.options).forEach(key => {
    expect(wrapper.text()).toContain(fixture.props.options[key].label)
  })

  expect(wrapper.find('.select-group-btn')).toHaveLength(Object.keys(fixture.props.options).length)

  expect(wrapper).toMatchSnapshot()
})