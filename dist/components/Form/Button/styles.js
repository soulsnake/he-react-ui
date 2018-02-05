'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer;\n  color: #fff;\n  padding: 0px 20px 0px 20px;\n  display: block;\n  border: none;\n  border-radius: 5px;\n  text-align: left;\n  height: 36px;\n  margin: auto;\n  position: relative;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  outline: none;\n  div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg{\n      margin-right: 10px;\n    }\n  }\n  &:hover{\n    filter: brightness(90%);\n  }\n  &.btn-white{\n    background: ', ';\n    color: ', ';\n    border: thin solid ', ';\n    svg{\n      fill: ', ';\n    }\n  }\n  &.btn-default{\n    background: ', ';\n  }\n  &.btn-green{\n    background: ', ';\n  }\n  &.btn-red{\n    background: ', ';\n  }\n  &.btn-teal{\n    background: ', ';\n  }\n  &.btn-small{\n    max-width: 130px;\n    height: 24px;\n    font-size: 12px;\n  }\n  &.btn-disabled{\n    background: ', ';\n    color: ', ';\n    cursor: default;\n    &:hover{\n      filter: brightness(100%);\n    }\n  }\n  &.btn-back-nav{\n    background: transparent;\n    max-width: 570px;\n    font-size: 30px;\n    float: left;\n    justify-content: left;\n    padding: 0;\n    svg{\n      margin-top: 2px;\n      margin-right: 15px;\n    }\n    &:hover{\n      filter: brightness(100%);\n    }\n  }\n'], ['\n  cursor: pointer;\n  color: #fff;\n  padding: 0px 20px 0px 20px;\n  display: block;\n  border: none;\n  border-radius: 5px;\n  text-align: left;\n  height: 36px;\n  margin: auto;\n  position: relative;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  outline: none;\n  div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg{\n      margin-right: 10px;\n    }\n  }\n  &:hover{\n    filter: brightness(90%);\n  }\n  &.btn-white{\n    background: ', ';\n    color: ', ';\n    border: thin solid ', ';\n    svg{\n      fill: ', ';\n    }\n  }\n  &.btn-default{\n    background: ', ';\n  }\n  &.btn-green{\n    background: ', ';\n  }\n  &.btn-red{\n    background: ', ';\n  }\n  &.btn-teal{\n    background: ', ';\n  }\n  &.btn-small{\n    max-width: 130px;\n    height: 24px;\n    font-size: 12px;\n  }\n  &.btn-disabled{\n    background: ', ';\n    color: ', ';\n    cursor: default;\n    &:hover{\n      filter: brightness(100%);\n    }\n  }\n  &.btn-back-nav{\n    background: transparent;\n    max-width: 570px;\n    font-size: 30px;\n    float: left;\n    justify-content: left;\n    padding: 0;\n    svg{\n      margin-top: 2px;\n      margin-right: 15px;\n    }\n    &:hover{\n      filter: brightness(100%);\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../../styles/colors');

var colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject, colors.white, colors.he_black, colors.border_grey, colors.he_black, colors.he_teal, colors.he_green, colors.secondary_red, colors.new_teal, colors.disabled_grey, colors.label_grey);

exports.default = StyledButton;