'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    .select-group-btn{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        background-image: none;\n        border: 1px solid #ccc;\n        white-space: nowrap;\n        padding: 10px 20px;\n        font-size: 14px;\n        line-height: 1.42857143;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        color: #333;\n        background-color: #fff;\n        margin-left: -1px;\n        &:first-child{\n            border-radius: 4px 0 0 4px;\n        }\n        &:last-child{\n            border-radius: 0 4px 4px 0;\n        }\n        &.selected{\n            background-color: #008ec8;\n            border: 1px solid #008ec8;\n            color: #fff;\n        }\n    }\n\n    &.vertical{\n        flex-direction: column;\n        .select-group-btn{\n            margin-left: 0;\n            margin-top: -1px;\n            &:first-child{\n                border-radius: 4px 4px 0 0;\n            }\n            &:last-child{\n                border-radius: 0 0 4px 4px;\n            }\n        }\n    }\n'], ['\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    .select-group-btn{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        background-image: none;\n        border: 1px solid #ccc;\n        white-space: nowrap;\n        padding: 10px 20px;\n        font-size: 14px;\n        line-height: 1.42857143;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        color: #333;\n        background-color: #fff;\n        margin-left: -1px;\n        &:first-child{\n            border-radius: 4px 0 0 4px;\n        }\n        &:last-child{\n            border-radius: 0 4px 4px 0;\n        }\n        &.selected{\n            background-color: #008ec8;\n            border: 1px solid #008ec8;\n            color: #fff;\n        }\n    }\n\n    &.vertical{\n        flex-direction: column;\n        .select-group-btn{\n            margin-left: 0;\n            margin-top: -1px;\n            &:first-child{\n                border-radius: 4px 4px 0 0;\n            }\n            &:last-child{\n                border-radius: 0 0 4px 4px;\n            }\n        }\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../../styles/colors');

var colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSelectGroup = _styledComponents2.default.div(_templateObject);

exports.default = StyledSelectGroup;