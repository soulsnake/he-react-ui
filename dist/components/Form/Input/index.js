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

var _classnames2 = require('classnames')

var _classnames3 = _interopRequireDefault(_classnames2)

var _styles = require('./styles')

var _styles2 = _interopRequireDefault(_styles)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

function _objectWithoutProperties (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i] } return target }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called') } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Input
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Input = (function (_React$Component) {
  _inherits(Input, _React$Component)

  function Input () {
    _classCallCheck(this, Input)

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments))
  }

  _createClass(Input, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render () {
      var _props = this.props,
        className = _props.className,
        buttonLabel = _props.buttonLabel,
        value = _props.value,
        onChange = _props.onChange,
        onClick = _props.onClick,
        restProps = _objectWithoutProperties(_props, ['className', 'buttonLabel', 'value', 'onChange', 'onClick'])

      return _react2.default.createElement(
        _styles2.default,
        { className: (0, _classnames3.default)('input-group', _defineProperty({}, className, className)) },
        _react2.default.createElement('input', _extends({
          className: 'form-control',
          type: 'text',
          value: value,
          onChange: onChange
        }, restProps)),
        buttonLabel && _react2.default.createElement(
          'span',
          { className: 'input-group-btn' },
          _react2.default.createElement(
            'button',
            { className: 'btn search-btn', type: 'button', onClick: onClick },
            buttonLabel
          )
        )
      )
    }
  }])

  return Input
}(_react2.default.Component))

Input.propTypes = {
  className: _propTypes2.default.string,
  buttonLabel: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func
}
Input.defaultProps = {
  buttonLabel: '',
  onChange: function onChange () {
    return null
  },
  onClick: function onClick () {
    return null
  }
}
exports.default = Input
