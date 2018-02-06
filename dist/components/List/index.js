'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _time = require('../../utils/time');

var _time2 = _interopRequireDefault(_time);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * List
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.columnRender = function (col) {
      switch (col.type) {
        case 'text':
          return col.data;
          break;
        case 'action':
          return _react2.default.createElement(
            'a',
            { href: '#' },
            col.data
          );
          break;
        case 'date':
          return (0, _time2.default)(new Date(col.data));
          break;

        default:
          return col.data;
          break;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function


  _createClass(List, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          data = _props.data,
          restProps = _objectWithoutProperties(_props, ['className', 'data']);

      var colWidth = 100 / data.headers.length + '%';
      return _react2.default.createElement(
        _styles2.default,
        { className: (0, _classnames3.default)('list-container', _defineProperty({}, className, className)) },
        _react2.default.createElement(
          _styles.Grid,
          null,
          _react2.default.createElement(
            _styles.Row,
            { className: 'list-header' },
            data.headers.map(function (header, index) {
              return _react2.default.createElement(
                _styles.Col,
                { key: index, width: colWidth, className: 'list-header-cell' },
                header
              );
            })
          ),
          data.rows.map(function (row, rIndex) {
            return _react2.default.createElement(
              _styles.Row,
              { key: rIndex, className: 'list-row' },
              row.map(function (col, cIndex) {
                return _react2.default.createElement(
                  _styles.Col,
                  { key: cIndex, width: colWidth, className: 'list-row-cell' },
                  _this2.columnRender(col)
                );
              })
            );
          })
        )
      );
    }
  }]);

  return List;
}(_react2.default.Component);

List.propTypes = {
  className: _propTypes2.default.string,
  data: _propTypes2.default.object
};
List.defaultProps = {
  data: {}
};
exports.default = List;