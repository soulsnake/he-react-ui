'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _adapter = require('./components/modifiers/-date/adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _adapter3 = require('./components/modifiers/-list/adapter');

var _adapter4 = _interopRequireDefault(_adapter3);

var _adapter5 = require('./components/modifiers/-default/adapter');

var _adapter6 = _interopRequireDefault(_adapter5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var token = function token(_ref) {
    var _this = this;

    var _ref$configHash = _ref.configHash,
        configHash = _ref$configHash === undefined ? {} : _ref$configHash,
        _ref$fullText = _ref.fullText,
        fullText = _ref$fullText === undefined ? '' : _ref$fullText;

    _classCallCheck(this, token);

    this.setFullText = function (val) {
        var configs = _this.configHash;
        if (configs) {
            var modifier = void 0;
            if (val.substr(0, 1) === '+') {
                modifier = '+';
            } else {
                for (var k in configs) {
                    if (val.substr(0, k.length) === k) {
                        modifier = k;
                        break;
                    }
                }
            }
            if (modifier) {
                var value = val.substr(modifier.length);
                _this.modifier = modifier;
                _this.value = value;
            } else if (val) {
                _this.modifier = '';
                _this.value = val;
            }
        }
        return val;
    };

    this.fullText = function () {
        return _this.modifier + _this.value;
    };

    this.adapter = function (type) {
        if (type === 'list' || type === 'modifier-list') {
            return _adapter4.default;
        } else if (type === 'date') {
            return _adapter2.default;
        } else {
            return _adapter6.default;
        }
    };

    this.firstHint = function () {
        return _this.hints()[0];
    };

    this.subHint = function () {
        var value = _this.value;
        var adapter = _this.adapter(_this.type);
        var firstHint = _this.firstHint();
        var hint = typeof firstHint === 'string' ? firstHint : adapter.serialize(firstHint);
        var valueLength = value.length;

        if (valueLength && hint && hint.indexOf(value) === 0) {
            return hint.substr(valueLength);
        }
    };

    this.hints = function () {
        var value = _this.value;
        var adapter = _this.adapter(_this.type);
        return _this.config ? adapter.getHints(value, _this.config.content) || [] : [];
    };

    this.hint = function () {
        return _this.value.length ? _this.subHint() : _this.config.defaultHint;
    };

    this.model = function (value, isValueValid, adapter) {
        return 'model';
    };

    this.isValueValid = function (value, adapter) {
        return adapter.validate(value, content);
    };

    this.autoComplete = function () {
        var hint = _this.firstHint();
        var subHint = _this.subHint();
        if (hint && subHint) {
            var hintValue = typeof hint === 'string' ? hint : hint.value;
            if (hint.modifier) {
                _this.setFullText(hintValue);
            } else {
                _this.value = hintValue;
            }
            return true;
        }
        return false;
    };

    this.configHash = configHash;
    this.setFullText(fullText);
    if (this.modifier) {
        this.config = this.configHash[this.modifier];
    } else if (this.value && this.value !== ' ') {
        this.config = this.configHash['_default'];
    }
    this.type = this.config ? this.config.type || 'space' : 'space';
    this.sectionTitle = this.config ? this.config.sectionTitle : '';
};

exports.default = token;