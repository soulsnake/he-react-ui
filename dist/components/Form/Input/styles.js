'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  width: 100%;\n  .form-control{\n      display: block;\n      width: 100%;\n      padding: .375rem .75rem;\n      font-size: 1rem;\n      line-height: 1.5;\n      color: #495057;\n      background-color: #fff;\n      background-image: none;\n      background-clip: padding-box;\n      border: 1px solid ', ';\n      border-radius: .25rem;\n      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n      outline: none;\n      &.has-suggestion{\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n      }\n      &:focus{\n          border: 1px solid ', ';\n      }\n  }\n  .input-group-btn {\n      position: relative;\n      -ms-flex-align: stretch;\n      align-items: stretch;\n      font-size: 0;\n      white-space: nowrap;\n  }\n  .btn {\n      display: inline-block;\n      font-weight: 400;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      border: 1px solid transparent;\n          border-top-color: transparent;\n          border-right-color: transparent;\n          border-bottom-color: transparent;\n          border-left-color: transparent;\n      padding: .375rem .75rem;\n      font-size: 1rem;\n      line-height: 1.6;\n      border-radius: .25rem;\n          border-top-left-radius: 0.25rem;\n          border-bottom-left-radius: 0.25rem;\n      transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  }\n  .search-btn{\n      background-color: #868e96;\n      border-color: #868e96;\n      margin-left: -3px;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n  }\n'], ['\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  width: 100%;\n  .form-control{\n      display: block;\n      width: 100%;\n      padding: .375rem .75rem;\n      font-size: 1rem;\n      line-height: 1.5;\n      color: #495057;\n      background-color: #fff;\n      background-image: none;\n      background-clip: padding-box;\n      border: 1px solid ', ';\n      border-radius: .25rem;\n      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n      outline: none;\n      &.has-suggestion{\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n      }\n      &:focus{\n          border: 1px solid ', ';\n      }\n  }\n  .input-group-btn {\n      position: relative;\n      -ms-flex-align: stretch;\n      align-items: stretch;\n      font-size: 0;\n      white-space: nowrap;\n  }\n  .btn {\n      display: inline-block;\n      font-weight: 400;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      border: 1px solid transparent;\n          border-top-color: transparent;\n          border-right-color: transparent;\n          border-bottom-color: transparent;\n          border-left-color: transparent;\n      padding: .375rem .75rem;\n      font-size: 1rem;\n      line-height: 1.6;\n      border-radius: .25rem;\n          border-top-left-radius: 0.25rem;\n          border-bottom-left-radius: 0.25rem;\n      transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  }\n  .search-btn{\n      background-color: #868e96;\n      border-color: #868e96;\n      margin-left: -3px;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../../styles/colors');

var colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputGroup = _styledComponents2.default.div(_templateObject, colors.n_grey_1, colors.sp_blue);

exports.default = InputGroup;