'use strict';

var _enzyme = require('react-cosmos-test/enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _SelectGroup = require('../SelectGroup.fixture');

var _SelectGroup2 = _interopRequireDefault(_SelectGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createTestContext = (0, _enzyme2.default)({ fixture: _SelectGroup2.default }),
    mount = _createTestContext.mount,
    getWrapper = _createTestContext.getWrapper;

beforeEach(mount);

test('<SelectGroup /> rendered correctly with fixture', function () {
  var wrapper = getWrapper();
  Object.keys(_SelectGroup2.default.props.options).forEach(function (key) {
    expect(wrapper.text()).toContain(_SelectGroup2.default.props.options[key].label);
  });

  expect(wrapper.find('.select-group-btn')).toHaveLength(Object.keys(_SelectGroup2.default.props.options).length);

  expect(wrapper).toMatchSnapshot();
});