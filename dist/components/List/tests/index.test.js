'use strict'

var _enzyme = require('react-cosmos-test/enzyme')

var _enzyme2 = _interopRequireDefault(_enzyme)

var _Input = require('../Input.fixture')

var _Input2 = _interopRequireDefault(_Input)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var _createTestContext = (0, _enzyme2.default)({ fixture: _Input2.default }),
  mount = _createTestContext.mount,
  getWrapper = _createTestContext.getWrapper

beforeEach(mount)

test('<Input /> rendered correctly with fixture', function () {
  var wrapper = getWrapper()
  expect(wrapper.find('.input-group').length).toEqual(2)
  expect(wrapper.find('.input-group-btn').length).toEqual(1)

  expect(wrapper).toMatchSnapshot()
})
