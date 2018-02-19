'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _ember = require('ember')

var _ember2 = _interopRequireDefault(_ember)

var _template = require('./template')

var _template2 = _interopRequireDefault(_template)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var get = _ember2.default.get,
  observer = _ember2.default.observer,
  on = _ember2.default.on,
  run = _ember2.default.run,
  computed = _ember2.default.computed
exports.default = _ember2.default.Component.extend({
  classNames: ['hint-menu-container'],
  layout: _template2.default,

  cursor: -1,

  initComponent: on('didInsertElement', function () {
    run.schedule('afterRender', this, function () {
      var el = this.$('.datetimepicker-container').datetimepicker({
        inline: true,
        sideBySide: true,
        useCurrent: false,
        date: get(this, 'token.model')
      }).on('dp.change', run.bind(this, 'onDateChange'))
      this._picker = el.data('DateTimePicker')
    })
  }),

  setPickerDate: observer('token.model', function () {
    run.schedule('afterRender', this, function () {
      if (this._picker) {
        this._picker.date(get(this, 'token.model'))
      }
    })
  }),

  cursorLocationType: computed('cursor', 'token.length', function () {
    var cursor = get(this, 'cursor')
    var keyLength = get(this, 'token.modifier.length')
    if (cursor >= keyLength) {
      if (cursor < keyLength + 5) {
        return 'year'
      } else if (cursor < keyLength + 8) {
        return 'month'
      } else if (cursor < keyLength + 11) {
        return 'day'
      } else if (cursor < keyLength + 14) {
        return 'hour'
      } else if (cursor < keyLength + 17) {
        return 'minute'
      }
    }
  }),

  goUp: observer('upClicked', function () {
    var date = get(this, 'token.model')
    var cursorLocationType = get(this, 'cursorLocationType')
    if (date && cursorLocationType) {
      date.add(1, cursorLocationType)
      run.once(this, function () {
        this.attrs.changeTokenModel(get(this, 'token'), date)
        this.propertyDidChange('token.model')
      })
    }
  }),

  goDown: observer('downClicked', function () {
    var date = get(this, 'token.model')
    var cursorLocationType = get(this, 'cursorLocationType')
    if (date && cursorLocationType) {
      date.subtract(1, cursorLocationType)
      run.once(this, function () {
        this.attrs.changeTokenModel(get(this, 'token'), date)
        this.propertyDidChange('token.model')
      })
    }
  }),

  onDateChange: function onDateChange (_ref) {
    var date = _ref.date

    var tokenDate = get(this, 'token.model')
    if (date && !date.isSame(tokenDate)) {
      var isTimeChanged = !tokenDate ? false : date.hours() !== tokenDate.hours() || date.minutes() !== tokenDate.minutes()
      this.attrs.changeTokenModel(get(this, 'token'), date, !isTimeChanged)
    }
  },

  tearDown: on('willDestroyElement', function () {
    if (this._picker) {
      this._picker.destroy()
    }
  })

})
