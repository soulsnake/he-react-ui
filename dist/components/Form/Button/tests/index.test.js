'use strict'

var _enzyme = require('react-cosmos-test/enzyme')

var _enzyme2 = _interopRequireDefault(_enzyme)

var _Button = require('../Button.fixture')

var _Button2 = _interopRequireDefault(_Button)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var _createTestContext = (0, _enzyme2.default)({ fixture: _Button2.default }),
  mount = _createTestContext.mount,
  getWrapper = _createTestContext.getWrapper

beforeEach(mount)

test('<Button /> rendered correctly with fixture', function () {
  var wrapper = getWrapper()
  expect(wrapper.find('button')).toHaveLength(1)

  expect(wrapper).toMatchSnapshot()
})
