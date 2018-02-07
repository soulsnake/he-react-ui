'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledTextFieldBlock = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    font-size: ', ';\n    display: inline-block;\n    position: relative;\n    background-color: transparent;\n    cursor: auto;\n    color: ', ';\n\n    .input-floating-label{\n        position: absolute;\n        top: 25px;\n        transition: transform 250ms ease;\n        z-index: 1;\n        transform: scale(1) translate(0px, 0px);\n        transform-origin: left top 0px;\n        pointer-events: none;\n        user-select: none;\n        color: ', ';\n        &.focused{\n            position: absolute;\n            top: 28px;\n            transform: scale(0.875) translate(0px, -20px);\n            transform-origin: left top 0px;\n            pointer-events: none;\n            user-select: none;\n        }\n    }\n    input{\n        padding: 0px;\n        position: relative;\n        width: 100%;\n        border: none;\n        outline: none;\n        background-color: rgba(0, 0, 0, 0);\n        color: rgba(0, 0, 0, 0.87);\n        opacity: 1;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        height: 24px;\n        box-sizing: border-box;\n        margin-top: 0px;\n        font-size: ', ';\n        &.focused{\n            margin-top: 10px;\n        }\n    }\n    .input-invalid-text{\n        color: ', ';\n    }\n'], ['\n    font-size: ', ';\n    display: inline-block;\n    position: relative;\n    background-color: transparent;\n    cursor: auto;\n    color: ', ';\n\n    .input-floating-label{\n        position: absolute;\n        top: 25px;\n        transition: transform 250ms ease;\n        z-index: 1;\n        transform: scale(1) translate(0px, 0px);\n        transform-origin: left top 0px;\n        pointer-events: none;\n        user-select: none;\n        color: ', ';\n        &.focused{\n            position: absolute;\n            top: 28px;\n            transform: scale(0.875) translate(0px, -20px);\n            transform-origin: left top 0px;\n            pointer-events: none;\n            user-select: none;\n        }\n    }\n    input{\n        padding: 0px;\n        position: relative;\n        width: 100%;\n        border: none;\n        outline: none;\n        background-color: rgba(0, 0, 0, 0);\n        color: rgba(0, 0, 0, 0.87);\n        opacity: 1;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        height: 24px;\n        box-sizing: border-box;\n        margin-top: 0px;\n        font-size: ', ';\n        &.focused{\n            margin-top: 10px;\n        }\n    }\n    .input-invalid-text{\n        color: ', ';\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    border: thin solid ', ';\n    padding: 20px;\n    box-sizing: border-box;\n    border-radius: 5px;\n    height: 64px;\n    &.focused{\n        border-color: ', ';\n        .input-floating-label{\n            color: ', ';\n        }\n    }\n    &.invalid{\n        border-color: ', ';\n        background-color: ', ';\n        .input-floating-label{\n            color: ', ';\n        }\n    }\n    &.disabled{\n        border-color: ', ';\n        background-color: ', ';\n        .input-floating-label{\n            color: ', ';\n        }\n    }\n'], ['\n    border: thin solid ', ';\n    padding: 20px;\n    box-sizing: border-box;\n    border-radius: 5px;\n    height: 64px;\n    &.focused{\n        border-color: ', ';\n        .input-floating-label{\n            color: ', ';\n        }\n    }\n    &.invalid{\n        border-color: ', ';\n        background-color: ', ';\n        .input-floating-label{\n            color: ', ';\n        }\n    }\n    &.disabled{\n        border-color: ', ';\n        background-color: ', ';\n        .input-floating-label{\n            color: ', ';\n        }\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../../styles/colors');

var colors = _interopRequireWildcard(_colors);

var _sizes = require('../../../styles/sizes');

var sizes = _interopRequireWildcard(_sizes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTextField = _styledComponents2.default.div(_templateObject, sizes.fontsize_body, colors.navy_2, colors.navy_2, sizes.fontsize_body, colors.sp_red);

var StyledTextFieldBlock = exports.StyledTextFieldBlock = _styledComponents2.default.div(_templateObject2, colors.n_grey_3, colors.teal_1, colors.teal_1, colors.sp_red, colors.sp_light_red, colors.sp_red, colors.n_grey_3, colors.n_grey_4, colors.n_grey_1);
exports.default = StyledTextField;