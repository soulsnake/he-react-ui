import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Default.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<PrimaryNavigation /> rendered correctly with default fixture', () => {
  let wrapper = getWrapper()

  expect(wrapper).toMatchSnapshot()
})
