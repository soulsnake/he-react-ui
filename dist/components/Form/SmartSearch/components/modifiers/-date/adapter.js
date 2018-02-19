'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _util = require('../../../util')

var _moment = require('moment')

var _moment2 = _interopRequireDefault(_moment)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/* global moment */
var MONTHS = (0, _moment2.default)().format('m')
var ALLOWED_VALUES = ['yesterday', 'today'].concat(MONTHS)
var DATE_FORMAT = /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/
var DATE_FORMAT_FULL = /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}\:[0-9]{1,2}-[0-9]{1,2}$/

exports.default = {
  defaultHint: 'a date',

  serialize: function serialize (date) {
    if (!date) {
      return null
    }
    var format = 'YYYY-MM-DD'
    if (date.hours() !== 0 || date.minutes() !== 0) {
      format = 'YYYY-MM-DD:HH-mm'
    }
    return date.format(format)
  },
  deserialize: function deserialize (val) {
    if (val === 'yesterday') {
      return (0, _moment2.default)().startOf('day').subtract(1, 'day')
    } else if (val === 'today') {
      return (0, _moment2.default)().startOf('day')
    } else if (MONTHS.includes(val)) {
      return (0, _moment2.default)().month(val).startOf('month')
    } else if (DATE_FORMAT_FULL.test(val)) {
      return (0, _moment2.default)(val, 'YYYY-MM-DD:HH-mm')
    } else {
      return (0, _moment2.default)(val, 'YYYY-MM-DD')
    }
  },
  validate: function validate (string) {
    return string === 'yesterday' || string === 'today' || MONTHS.includes(string) || DATE_FORMAT.test(string) && (0, _moment2.default)(string, 'YYYY-MM-DD').isValid() || DATE_FORMAT_FULL.test(string) && (0, _moment2.default)(string, 'YYYY-MM-DD:HH-mm').isValid()
  },
  getHints: function getHints (string) {
    var possibleValues = [(0, _moment2.default)().format('YYYY-MM-DD')].concat(ALLOWED_VALUES)
    if (string) {
      return (0, _util.getMatch)(string, possibleValues)
    }
  }
}
