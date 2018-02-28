import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../Input.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Input /> rendered correctly with fixture', () => {
  let wrapper = getWrapper()
  expect(wrapper.find('.input-group').length).toEqual(2)
  expect(wrapper.find('.input-group-btn').length).toEqual(1)

  expect(wrapper).toMatchSnapshot()
})
