'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _ = require('../')

var _2 = _interopRequireDefault(_)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

exports.default = {
  component: _2.default,
  props: {
    vertical: false,
    onClickOption: function onClickOption (opt) {
      return console.log(opt)
    },
    options: [{ label: 'General Exam and Clean', value: 1 }, { label: 'Toothache', value: 2 }, { label: 'Loose Filling', value: 3 }, { label: 'Loose Crown', value: 4 }, { label: 'Teeth Whitening', value: 5 }]
  }
}
