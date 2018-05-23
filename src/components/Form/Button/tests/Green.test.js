import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Green.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Button /> rendered correctly with green fixture', () => {
  let wrapper = getWrapper()
  expect(wrapper.find('button')).toHaveLength(1)

  expect(wrapper).toMatchSnapshot()
})
