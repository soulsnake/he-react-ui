'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    .select-group-btn{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        background-image: none;\n        border: 1px solid ', ';\n        white-space: nowrap;\n        padding: 10px 20px;\n        font-size: 14px;\n        line-height: 1.42857143;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        color: ', ';\n        background-color: ', ';\n        margin-left: -1px;\n        &:first-child{\n            border-radius: 4px 0 0 4px;\n        }\n        &:last-child{\n            border-radius: 0 4px 4px 0;\n        }\n        &:not(.disabled):hover{\n            border: 1px solid ', ';\n            z-index: 1;\n        }\n        &:not(.disabled).selected{\n            background-color: ', ';\n            border: 1px solid ', ';\n            color: ', ';\n            &:hover{\n                background-color: ', ';\n                border: 1px solid ', ';\n            }\n        }\n    }\n\n    &.vertical{\n        flex-direction: column;\n        .select-group-btn{\n            margin-left: 0;\n            margin-top: -1px;\n            &:first-child{\n                border-radius: 4px 4px 0 0;\n            }\n            &:last-child{\n                border-radius: 0 0 4px 4px;\n            }\n        }\n    }\n'], ['\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    .select-group-btn{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        background-image: none;\n        border: 1px solid ', ';\n        white-space: nowrap;\n        padding: 10px 20px;\n        font-size: 14px;\n        line-height: 1.42857143;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        color: ', ';\n        background-color: ', ';\n        margin-left: -1px;\n        &:first-child{\n            border-radius: 4px 0 0 4px;\n        }\n        &:last-child{\n            border-radius: 0 4px 4px 0;\n        }\n        &:not(.disabled):hover{\n            border: 1px solid ', ';\n            z-index: 1;\n        }\n        &:not(.disabled).selected{\n            background-color: ', ';\n            border: 1px solid ', ';\n            color: ', ';\n            &:hover{\n                background-color: ', ';\n                border: 1px solid ', ';\n            }\n        }\n    }\n\n    &.vertical{\n        flex-direction: column;\n        .select-group-btn{\n            margin-left: 0;\n            margin-top: -1px;\n            &:first-child{\n                border-radius: 4px 4px 0 0;\n            }\n            &:last-child{\n                border-radius: 0 0 4px 4px;\n            }\n        }\n    }\n'])

var _styledComponents = require('styled-components')

var _styledComponents2 = _interopRequireDefault(_styledComponents)

var _colors = require('../../../styles/colors')

var colors = _interopRequireWildcard(_colors)

function _interopRequireWildcard (obj) { if (obj && obj.__esModule) { return obj } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key] } } newObj.default = obj; return newObj } }

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _taggedTemplateLiteral (strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })) }

var StyledInlineSelector = _styledComponents2.default.div(_templateObject, colors.n_grey_2, colors.navy_1, colors.white, colors.teal_1, colors.teal_1, colors.teal_1, colors.white, colors.teal_2, colors.teal_2)

exports.default = StyledInlineSelector
