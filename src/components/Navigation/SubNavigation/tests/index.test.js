import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Default.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<SubNavigation /> rendered correctly with fixture', () => {
  let wrapper = getWrapper()

  expect(wrapper).toMatchSnapshot()
})
