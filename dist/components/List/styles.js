'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.Col = exports.Row = exports.Grid = undefined

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    .list-header{\n        background-color: ', ';\n        padding: 10px;\n    }\n'], ['\n    width: 100%;\n    .list-header{\n        background-color: ', ';\n        padding: 10px;\n    }\n']),
  _templateObject2 = _taggedTemplateLiteral(['\n    width: 100%;\n'], ['\n    width: 100%;\n']),
  _templateObject3 = _taggedTemplateLiteral(['\n    padding: 10px;\n    margin-left: 0px;\n    margin-right: 0px;\n    background-color: ', ';\n    border-bottom: thin solid ', ';\n'], ['\n    padding: 10px;\n    margin-left: 0px;\n    margin-right: 0px;\n    background-color: ', ';\n    border-bottom: thin solid ', ';\n']),
  _templateObject4 = _taggedTemplateLiteral(['\n    width: ', ';\n'], ['\n    width: ', ';\n'])

var _styledComponents = require('styled-components')

var _styledComponents2 = _interopRequireDefault(_styledComponents)

var _colors = require('../../styles/colors')

var colors = _interopRequireWildcard(_colors)

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid')

function _interopRequireWildcard (obj) { if (obj && obj.__esModule) { return obj } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key] } } newObj.default = obj; return newObj } }

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _taggedTemplateLiteral (strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })) }

var InputGroup = _styledComponents2.default.div(_templateObject, colors.n_grey_1)
var Grid = exports.Grid = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Grid)(_templateObject2)
var Row = exports.Row = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Row)(_templateObject3, colors.white, colors.n_grey_2)
var Col = exports.Col = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Col)(_templateObject4, function (props) {
  return props.width ? props.width : 'auto'
})
exports.default = InputGroup
