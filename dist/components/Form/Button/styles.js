'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer;\n  color: ', ';\n  padding: 0px ', ' 0px ', ';\n  border: none;\n  border-radius: ', ';\n  text-align: left;\n  height: ', ';\n  margin: auto;\n  position: relative;\n  font-size: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  outline: none;\n  background: ', ';\n  div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg{\n      margin-right: ', ';\n    }\n  }\n  &:not(.disabled):hover{\n    filter: brightness(92%);\n  }\n  &:not(.disabled):active{\n    filter: brightness(84%);\n  }\n  &.btn-small{\n    height: ', ';\n  }\n  &.btn-red{\n    background: ', ';\n  }\n  &.btn-white{\n    background: ', ';\n    border: solid ', ' ', ';\n    color: ', ';\n  }\n  &.btn-grey{\n    background: ', ';\n    color: ', ';\n  }\n  &.btn-link{\n    background: none;\n    border: none;\n  }\n'], ['\n  cursor: pointer;\n  color: ', ';\n  padding: 0px ', ' 0px ', ';\n  border: none;\n  border-radius: ', ';\n  text-align: left;\n  height: ', ';\n  margin: auto;\n  position: relative;\n  font-size: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  outline: none;\n  background: ', ';\n  div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg{\n      margin-right: ', ';\n    }\n  }\n  &:not(.disabled):hover{\n    filter: brightness(92%);\n  }\n  &:not(.disabled):active{\n    filter: brightness(84%);\n  }\n  &.btn-small{\n    height: ', ';\n  }\n  &.btn-red{\n    background: ', ';\n  }\n  &.btn-white{\n    background: ', ';\n    border: solid ', ' ', ';\n    color: ', ';\n  }\n  &.btn-grey{\n    background: ', ';\n    color: ', ';\n  }\n  &.btn-link{\n    background: none;\n    border: none;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../../styles/colors');

var colors = _interopRequireWildcard(_colors);

var _sizes = require('../../../styles/sizes');

var sizes = _interopRequireWildcard(_sizes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject, colors.white, sizes.padding_small, sizes.padding_small, sizes.btn_height, sizes.btn_height, sizes.fontsize_body, colors.teal_1, sizes.padding_extra_small, sizes.btn_height_small, colors.sp_red, colors.white, sizes.border_width, colors.teal_1, colors.teal_1, colors.n_grey_3, colors.n_grey_1);

exports.default = StyledButton;