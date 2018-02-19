'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _reactLoadable = require('react-loadable')

var _reactLoadable2 = _interopRequireDefault(_reactLoadable)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

exports.default = (0, _reactLoadable2.default)({
  loader: function loader () {
    return import('./index')
  },
  loading: function loading () {
    return null
  }
}) /**
     *
     * Asynchronously loads the component for Button
     *
     */
