import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Confirmation.fixture'

const { mount, getWrapper, unmount } = createTestContext({ fixture })

beforeEach(mount)
afterEach(unmount)

test('<Notification /> rendered correctly with fixture', () => {
  const wrapper = getWrapper()

  expect(wrapper.find('Tick')).toHaveLength(1)
  expect(wrapper).toMatchSnapshot()
})
