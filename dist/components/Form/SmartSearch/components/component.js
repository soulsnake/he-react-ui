'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

var _token = require('../../token');

var _token2 = _interopRequireDefault(_token);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _set = _ember2.default.set,
    on = _ember2.default.on,
    run = _ember2.default.run,
    computed = _ember2.default.computed,
    get = _ember2.default.get;
exports.default = _ember2.default.Component.extend({
  layout: _template2.default,
  classNames: ['slack-search-input'],
  cursorLocation: -1,
  // used to pass event to child components
  enterClicked: false,
  maxlength: 250,
  upClicked: false,
  downClicked: false,
  isPopupHidden: false,
  isPopupFocused: false, // when popup focused not triggering enter event when enter clicked

  configHash: {},
  firstTimeFocus: true,
  showHelp: computed('inputValue', 'cursorLocation', 'firstTimeFocus', function () {
    return !get(this, 'inputValue') && get(this, 'cursorLocation') !== -1 && get(this, 'firstTimeFocus');
  }),

  tokenConfig: computed('configHash', function () {
    return (0, _util.prepareConig)(get(this, 'configHash'));
  }),

  excludedTokenTypes: ['default', 'modifier-list', 'space'],
  proxyValue: '',
  inputValue: computed({
    set: function set(key, val) {
      _set(this, 'proxyValue', val);
      return val;
    },
    get: function get() {
      return '';
    }
  }),

  popupComponent: computed('activeToken.type', function () {
    var type = get(this, 'activeToken.type');
    _set(this, 'isPopupFocused', false);
    if (type && type !== 'space') {
      return 'slack-search-input/modifiers/' + (type === 'modifier-list' ? '-list' : '-' + type);
    }
  }),

  onInitComponent: on('didInsertElement', function () {
    run.schedule('afterRender', this, function () {
      this._mainInput = this.$('.main-input');
      this._background = this.$('.background-container');
      this._mouseWheelListener = run.bind(this, 'onMouseMove');
      this._mainInput.on("mousewheel DOMMouseScroll", this._mouseWheelListener); // maybe to do with custom events ?
    });
  }),

  tearDown: on('willRemoveElement', function () {
    this._mainInput.off("mousewheel DOMMouseScroll", this._mouseWheelListener);
  }),

  onMouseMove: function onMouseMove(e) {
    this.scrollBackground(e.target.scrollLeft);
  },


  tokens: computed('inputValue', 'tokenConfig', function () {
    return (0, _util.tokenize)(get(this, 'inputValue'), get(this, 'tokenConfig'));
  }),

  getTokensString: function getTokensString() {
    var tokens = get(this, 'tokens');
    return tokens.reduce(function (sum, token) {
      sum += get(token, 'fullText');
      return sum;
    }, '');
  },
  setCursor: function setCursor(newLocation) {
    _set(this, 'cursorLocation', newLocation);
    run.schedule('afterRender', this, function () {
      (0, _util.setCursor)(this._mainInput[0], newLocation);
    });
  },
  scrollInputAndBackground: function scrollInputAndBackground(amount) {
    run.schedule('afterRender', this, function () {
      this._mainInput[0].scrollLeft = amount;
      this._background.scrollLeft(this._mainInput[0].scrollLeft);
    });
  },
  scrollBackground: function scrollBackground(amount) {
    run.schedule('afterRender', this, function () {
      this._background.scrollLeft(amount);
    });
  },


  activeTokenCursor: computed('cursorLocation', 'activeToken', function () {
    var activeToken = get(this, 'activeToken');
    var cursorLocation = get(this, 'cursorLocation');
    if (activeToken) {
      var tokenCursorEnd = this.getTokenEndCursorPos(activeToken);
      return cursorLocation - (tokenCursorEnd - get(activeToken, 'length'));
    } else {
      return -1;
    }
  }),

  activeToken: computed('activeTokenIndex', 'tokens', function () {
    return get(this, 'tokens')[get(this, 'activeTokenIndex')];
  }),

  activeTokenIndex: computed('cursorLocation', 'tokens.[]', function () {
    var cursorLocation = get(this, 'cursorLocation');
    var sumIndex = 0;
    var token = void 0,
        startIndex = void 0,
        endIndex = void 0;
    var tokens = get(this, 'tokens');
    var length = get(tokens, 'length');
    for (var i = 0; i < length; i++) {
      token = tokens[i];
      startIndex = sumIndex;
      endIndex = get(token, 'length') + startIndex;
      sumIndex = endIndex;
      if (startIndex < cursorLocation && cursorLocation <= endIndex) {
        return i;
      }
    }
    return -1;
  }),

  hintValue: computed('isLastTokenSelected', 'activeToken.hint', function () {
    if (get(this, 'isLastTokenSelected')) {
      return get(this, 'activeToken.hint');
    }
  }),

  isLastTokenSelected: computed('activeTokenIndex', 'tokens.length', function () {
    var tokensCount = get(this, 'tokens.length');
    return tokensCount && tokensCount - 1 === get(this, 'activeTokenIndex');
  }),

  getTokenEndCursorPos: function getTokenEndCursorPos(token) {
    var tokens = get(this, 'tokens');
    var sum = 0;
    var t = void 0;
    for (var i = 0; i < tokens.length; i++) {
      t = tokens[i];
      sum += get(t, 'length');
      if (t === token) {
        break;
      }
    }
    return sum;
  },


  actions: {
    inputPaste: function inputPaste(_ref) {
      var target = _ref.target;

      run.next(this, function () {
        _set(this, 'inputValue', target.value);
        _set(this, 'cursorLocation', target.selectionStart);
        this.scrollBackground(target.scrollLeft);
      });
    },
    inputCut: function inputCut(_ref2) {
      var target = _ref2.target;

      run.next(this, function () {
        _set(this, 'inputValue', target.value);
        _set(this, 'cursorLocation', target.selectionStart);
        this.scrollBackground(target.scrollLeft);
      });
    },
    concatToInputValue: function concatToInputValue(text) {
      var newStr = get(this, 'inputValue') + text;
      _set(this, 'inputValue', newStr);
      this._mainInput.focus();
      _set(this, 'cursorLocation', newStr.length);
      return false;
    },
    changeTokenModel: function changeTokenModel(token, model, shouldMoveCursor) {
      var tokenType = get(token, 'type');
      _set(token, 'model', model);
      var tokens = get(this, 'tokens');
      var isLastTokenSelected = tokens.indexOf(token) === get(this, 'activeTokenIndex');
      var cursorLocation = void 0;
      if (shouldMoveCursor) {
        if (!model.modifier && isLastTokenSelected) {
          tokens.pushObject(_token2.default.create({ fullText: ' ' }));
        }
        cursorLocation = this.getTokenEndCursorPos(token) + (model.modifier ? 0 : 1);
      } else {
        cursorLocation = get(this, 'cursorLocation');
      }

      var tokensString = this.getTokensString();
      _set(this, 'proxyValue', tokensString);
      this.setCursor(cursorLocation);
      if (isLastTokenSelected) {
        this.scrollInputAndBackground(Number.MAX_VALUE);
      } else {
        this.scrollBackground(this._mainInput.scrollLeft());
      }

      if ((tokenType !== 'default' || model.fullText) && this.attrs.modifierAutoComplete) {
        this.attrs.modifierAutoComplete(tokensString, (0, _util.sanitizeToken)(token));
      }
      if (this.attrs.valueChange) {
        this.attrs.valueChange(tokensString);
      }
    },
    onFocusIn: function onFocusIn() {
      _set(this, 'firstTimeFocus', true);
      if (this.attrs['focus-in']) {
        this.attrs['focus-in']();
      }
    },
    onFocusOut: function onFocusOut() {
      _set(this, 'cursorLocation', -1);
      this.scrollBackground(0);
      if (this.attrs['focus-out']) {
        this.attrs['focus-out']();
      }
    },
    onKeyDown: function onKeyDown(value, e) {
      var target = e.target,
          keyCode = e.keyCode;

      if (keyCode === _util.KEYS.ENTER) {
        e.preventDefault();
        this.toggleProperty('enterClicked');
        if (!get(this, 'isPopupFocused') && this.attrs.enter) {
          this.attrs.enter();
        }
      } else if (keyCode === _util.KEYS.ESC) {
        e.preventDefault();
        if (this.attrs.escape) {
          if (this.attrs.escape() === true) {
            this._mainInput.blur();
          }
        } else {
          this._mainInput.blur();
        }
      } else if (keyCode === _util.KEYS.UP) {
        e.preventDefault();
        this.toggleProperty('upClicked');
      } else if (keyCode === _util.KEYS.DOWN) {
        e.preventDefault();
        this.toggleProperty('downClicked');
      } else if (keyCode === _util.KEYS.TAB) {
        e.preventDefault();
        var activeToken = get(this, 'activeToken');
        var tokenType = get(activeToken, 'type'); // token type before autocomplete
        if (activeToken.autoComplete()) {
          var hasVal = get(activeToken, 'value');
          var tokens = get(this, 'tokens');
          var isLastTokenSelected = get(this, 'isLastTokenSelected');
          var cursorLocation = this.getTokenEndCursorPos(activeToken);
          if (hasVal) {
            if (isLastTokenSelected) {
              tokens.pushObject(_token2.default.create({ fullText: ' ' }));
            }
            cursorLocation += 1;
          }

          var tokensString = this.getTokensString();
          _set(this, 'proxyValue', tokensString);
          this.setCursor(cursorLocation);
          if (isLastTokenSelected) {
            this.scrollInputAndBackground(Number.MAX_VALUE);
          } else {
            this.scrollBackground(target.scrollLeft);
          }

          if (tokenType !== 'default' && this.attrs.modifierAutoComplete) {
            this.attrs.modifierAutoComplete(tokensString, (0, _util.sanitizeToken)(activeToken));
          }
          if (this.attrs.valueChange) {
            this.attrs.valueChange(tokensString);
          }
        } else if (get(activeToken, 'type') !== 'date') {
          this.toggleProperty('downClicked');
        }
      } else {
        run.next(this, function () {
          var val = target.value;
          if (val !== get(this, 'inputValue')) {
            _set(this, 'inputValue', val);
            if (this.attrs.valueChange) {
              this.attrs.valueChange(val);
            }
          }
          _set(this, 'cursorLocation', target.selectionStart);
          this.scrollBackground(target.scrollLeft);
          _set(this, 'firstTimeFocus', false);
        });
      }
    },
    onClick: function onClick(_ref3) {
      var target = _ref3.target;

      this.scrollBackground(target.scrollLeft);
      _set(this, 'cursorLocation', target.selectionStart);
    }
  }

});