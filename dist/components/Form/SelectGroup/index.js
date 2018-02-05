'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * SelectGroup
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SelectGroup = function (_React$Component) {
  _inherits(SelectGroup, _React$Component);

  function SelectGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectGroup.__proto__ || Object.getPrototypeOf(SelectGroup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selected: null
    }, _this.onClickOption = function (opt) {
      _this.props.onClickOption(opt);
      _this.setState({
        selected: opt.value
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function


  _createClass(SelectGroup, [{
    key: 'render',
    value: function render() {
      var _classes,
          _this2 = this;

      var _props = this.props,
          vertical = _props.vertical,
          className = _props.className,
          options = _props.options;
      var selected = this.state.selected;

      var classes = (_classes = {}, _defineProperty(_classes, className, className), _defineProperty(_classes, 'vertical', vertical), _classes);

      return _react2.default.createElement(
        _styles2.default,
        { className: (0, _classnames2.default)('select-group', classes) },
        options.map(function (opt, index) {
          return _react2.default.createElement(
            'div',
            {
              key: index,
              className: (0, _classnames2.default)('select-group-btn', { 'selected': opt.value === selected }),
              onClick: function onClick() {
                return _this2.onClickOption(opt);
              } },
            opt.label
          );
        })
      );
    }
  }]);

  return SelectGroup;
}(_react2.default.Component);

SelectGroup.propTypes = {
  vertical: _propTypes2.default.bool,
  options: _propTypes2.default.array,
  onClickOption: _propTypes2.default.func
};
SelectGroup.defaultProps = {
  vertical: false,
  options: [],
  onClickOption: function onClickOption() {
    return null;
  }
};
exports.default = SelectGroup;