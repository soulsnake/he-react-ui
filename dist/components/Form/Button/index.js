'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key] } } } return target }

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _propTypes = require('prop-types')

var _propTypes2 = _interopRequireDefault(_propTypes)

var _styles = require('./styles')

var _styles2 = _interopRequireDefault(_styles)

var _classnames2 = require('classnames')

var _classnames3 = _interopRequireDefault(_classnames2)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

function _objectWithoutProperties (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i] } return target }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called') } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Button = (function (_React$Component) {
  _inherits(Button, _React$Component)

  function Button () {
    _classCallCheck(this, Button)

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments))
  }

  _createClass(Button, [{
    key: 'render',
    value: function render () {
      var _classnames

      var _props = this.props,
        small = _props.small,
        link = _props.link,
        color = _props.color,
        className = _props.className,
        submit = _props.submit,
        disabled = _props.disabled,
        rest = _objectWithoutProperties(_props, ['small', 'link', 'color', 'className', 'submit', 'disabled'])

      var btnClass = (0, _classnames3.default)('btn', (_classnames = { 'btn-link': link, 'btn-small': small }, _defineProperty(_classnames, 'btn-' + color, color), _defineProperty(_classnames, 'disabled', disabled), _defineProperty(_classnames, className, className), _classnames))
      return _react2.default.createElement(
        _styles2.default,
        _extends({
          className: btnClass,
          type: submit ? 'submit' : 'button'
        }, rest),
        this.props.children
      )
    }
  }])

  return Button
}(_react2.default.Component))

Button.propTypes = {
  submit: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  link: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  className: _propTypes2.default.string
}
Button.defaultProps = {
  submit: false,
  link: false,
  color: '',
  children: _react2.default.createElement(
    'div',
    null,
    ' Button'
  ),
  lg: true,
  disabled: false
}
exports.default = Button
