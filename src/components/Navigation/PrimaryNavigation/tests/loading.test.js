import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Loading.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<PrimaryNavigation /> rendered correctly with fixture', () => {
  let wrapper = getWrapper()

  expect(wrapper).toMatchSnapshot()
})
