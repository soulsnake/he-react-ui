'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  width: 220px;\n  min-width: 160px;\n  .menu-link {\n    font-size: 13px;\n    color: #595959;\n    line-height: 1.1;\n    padding: 7px 15px;\n    background-color: transparent;\n    text-decoration: none;\n    display: flex;\n    justify-content: flex-start;\n    transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);\n    cursor: pointer;\n    &:hover {\n      background-color: #f5f6f8;\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  width: 220px;\n  min-width: 160px;\n  .menu-link {\n    font-size: 13px;\n    color: #595959;\n    line-height: 1.1;\n    padding: 7px 15px;\n    background-color: transparent;\n    text-decoration: none;\n    display: flex;\n    justify-content: flex-start;\n    transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);\n    cursor: pointer;\n    &:hover {\n      background-color: #f5f6f8;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuWrapper = _styledComponents2.default.div(_templateObject);
exports.default = {
  component: _2.default,
  props: {
    placement: "bottom",
    positionLeft: 200,
    positionTop: 50
  },
  children: _react2.default.createElement(
    MenuWrapper,
    null,
    _react2.default.createElement(
      'a',
      { 'class': 'menu-link' },
      _react2.default.createElement(
        'span',
        null,
        'Settings'
      )
    ),
    _react2.default.createElement(
      'a',
      { 'class': 'menu-link' },
      _react2.default.createElement(
        'span',
        null,
        'Feedback'
      )
    ),
    _react2.default.createElement(
      'a',
      { 'class': 'menu-link' },
      _react2.default.createElement(
        'span',
        null,
        'Help'
      )
    ),
    _react2.default.createElement(
      'a',
      { 'class': 'menu-link' },
      _react2.default.createElement(
        'span',
        null,
        'Logout'
      )
    )
  )
};