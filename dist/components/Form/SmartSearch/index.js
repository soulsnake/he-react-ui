'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _util = require('./util');

var _token = require('./token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * SmartSearch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var configHash = {
  '@': {
    type: 'list',
    defaultHint: 'any user',
    sectionTitle: 'Users',
    content: [{ value: 'abrahm', label: 'Abrahm Micanski' }, { value: 'lilly', label: 'Lilly Richards' }, { value: 'emma', label: 'Emma Roberts' }]
  },

  'before:': {
    type: 'date',
    defaultHint: 'a date'
  },

  'after:': {
    type: 'date',
    defaultHint: 'a date'
  }
};

var SmartSearch = function (_React$Component) {
  _inherits(SmartSearch, _React$Component);

  function SmartSearch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SmartSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmartSearch.__proto__ || Object.getPrototypeOf(SmartSearch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      firstTimeFocus: false,
      cursorLocation: -1,
      enterClicked: false,
      upClicked: false,
      downClicked: false,
      activeToken: null,
      inputValue: ''
    }, _this.tokenConfig = (0, _util.prepareConfig)(configHash), _this.activeToken = null, _this.tokens = [], _this.getTokens = function (value) {
      return (0, _util.tokenize)(value, _this.tokenConfig);
    }, _this.getActiveToken = function (activeTokenIndex, tokens) {
      return tokens[activeTokenIndex];
    }, _this.isLastTokenSelected = function (activeTokenIndex, tokens) {
      var tokensCount = tokens.length;
      return tokensCount && tokensCount - 1 === activeTokenIndex;
    }, _this.setCursor = function (newLocation) {
      _this.setState({
        cursorLocation: newLocation
      });
    }, _this.activeTokenIndex = function (tokens, cursorLocation) {
      var sumIndex = 0;
      var token = void 0,
          startIndex = void 0,
          endIndex = void 0;
      var length = tokens.length;
      for (var i = 0; i < length; i++) {
        token = tokens[i];
        startIndex = sumIndex;
        endIndex = token.fullText().length + startIndex;
        sumIndex = endIndex;
        if (startIndex < cursorLocation && cursorLocation <= endIndex) {
          return i;
        }
      }
      return -1;
    }, _this.onFocusIn = function () {
      _this.setState({
        firstTimeFocus: true
      });
      _this.props.focusIn();
    }, _this.onKeyDown = function (e) {
      var target = e.target,
          keyCode = e.keyCode;

      if (keyCode === _util.KEYS.ENTER) {
        e.preventDefault();
        _this.setState({ enterClicked: !_this.state.enterClicked });
      } else if (keyCode === _util.KEYS.ESC) {
        e.preventDefault();
      } else if (keyCode === _util.KEYS.UP) {
        e.preventDefault();
        _this.setState({ upClicked: !_this.state.upClicked });
      } else if (keyCode === _util.KEYS.DOWN) {
        e.preventDefault();
        _this.setState({ downClicked: !_this.state.downClicked });
      } else {
        if (keyCode === _util.KEYS.TAB) {
          e.preventDefault();
        }
        _this.tokens = _this.getTokens(target.value);
        var activeTokenIndex = _this.activeTokenIndex(_this.tokens, target.selectionStart);
        _this.activeToken = _this.getActiveToken(activeTokenIndex, _this.tokens);
        if (_this.activeToken) {
          var tokenType = _this.activeToken.type; // token type before autocomplete
          if (_this.activeToken.autoComplete()) {
            var hasVal = _this.activeToken.value;
            var isLastTokenSelected = _this.isLastTokenSelected(activeTokenIndex, _this.tokens);
            var cursorLocation = _this.getTokenEndCursorPos(_this.activeToken, _this.tokens);
            if (hasVal) {
              if (isLastTokenSelected) {
                _this.tokens.push(new _token2.default({ fullText: ' ' }));
              }
              cursorLocation += 1;
            }

            var tokensString = _this.getTokensString(_this.tokens);
            _this.setState({
              proxyValue: tokensString
            });
            _this.setCursor(cursorLocation);
            if (tokenType !== 'default') {}
          } else if (_this.activeToken.type !== 'date') {
            _this.setState({
              downClicked: !_this.state.downClicked
            });
          }
        }
        _this.setState({
          inputValue: target.value,
          cursorLocation: target.selectionStart,
          firstTimeFocus: false
        });
      }

      var queryString = target.value;
      var modifiers = (0, _util.deserializeQueryString)(queryString, _this.tokenConfig);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function


  _createClass(SmartSearch, [{
    key: 'getTokenEndCursorPos',
    value: function getTokenEndCursorPos(token, tokens) {
      var sum = 0;
      var t = void 0;
      for (var i = 0; i < tokens.length; i++) {
        t = tokens[i];
        sum += t.value.length;
        if (t === token) {
          break;
        }
      }
      return sum;
    }
  }, {
    key: 'getTokensString',
    value: function getTokensString(tokens) {
      return tokens.reduce(function (sum, token) {
        sum += token.value;
        return sum;
      }, '');
    }
  }, {
    key: 'onFocusOut',
    value: function onFocusOut() {
      this.setState({
        cursorLocation: -1
      });
      // TODO: scrollBackground
      this.scrollBackground(0);
      this.props.focusOut();
    }
  }, {
    key: 'renderRows',
    value: function renderRows(list) {
      return list.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { key: index, className: '' },
          _react2.default.createElement(
            'b',
            null,
            item.label
          ),
          ' ',
          _react2.default.createElement(
            'span',
            { className: 'modifier-value' },
            item.value
          )
        );
      });
    }
  }, {
    key: 'renderHintList',
    value: function renderHintList(hintValues) {
      var _this2 = this;

      var list = _.values(_.groupBy(hintValues, 'section'));
      var current = null;
      return list.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'div',
            { className: 'section-header' },
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'span',
              { className: 'header-label' },
              item[0].section
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'slack-search-input-list' },
            _this2.renderRows(item)
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['className']);

      var hintValue = '';
      var hintValues = [];
      if (this.activeToken) {
        hintValues = this.activeToken.hints();
        hintValue = this.activeToken.hint();
      }
      return _react2.default.createElement(
        _styles2.default,
        {
          className: (0, _classnames3.default)(_defineProperty({}, className, className)) },
        _react2.default.createElement('input', {
          autoComplete: 'off',
          spellCheck: false,
          onKeyDown: this.onKeyDown,
          className: 'main-input' }),
        _react2.default.createElement(
          'div',
          { className: 'background-container' },
          this.tokens.map(function (token, index) {
            return _react2.default.createElement(
              'div',
              { key: index },
              _react2.default.createElement(
                'span',
                { className: 'modifier' },
                token.modifier,
                token.value
              )
            );
          }),
          _react2.default.createElement(
            'span',
            { className: 'hint-value' },
            hintValue
          )
        ),
        hintValues.length > 0 && _react2.default.createElement(
          'div',
          { className: 'hint-menu-container' },
          _react2.default.createElement('span', { className: 'arrow' }),
          _react2.default.createElement('span', { className: 'arrow-border' }),
          _react2.default.createElement(
            'div',
            { className: 'hint-menu with-help' },
            this.renderHintList(hintValues)
          )
        )
      );
    }
  }]);

  return SmartSearch;
}(_react2.default.Component);

exports.default = SmartSearch;