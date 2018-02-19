'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KEYS = undefined;
exports.sanitizeTokens = sanitizeTokens;
exports.sanitizeToken = sanitizeToken;
exports.getDefaultContent = getDefaultContent;
exports.tokenize = tokenize;
exports.prepareConfig = prepareConfig;
exports.deserializeQueryString = deserializeQueryString;
exports.getMatch = getMatch;
exports.setCursor = setCursor;

var _token = require('./token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEYS = exports.KEYS = {
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ENTER: 13,
  TAB: 9
};

function sanitizeTokens(tokens) {
  return tokens.reduce(function (sum, token) {
    var t = sanitizeToken(token);
    if (t) {
      if (sum[t.modifier]) {
        sum[t.modifier].push(t);
      } else {
        sum[t.modifier] = [t];
      }
    }
    return sum;
  }, Object.create(null));
}

function sanitizeToken(token) {
  var type = token.type;
  if (type !== 'space' && type !== 'default') {
    return token;
  }
  return null;
}

function getDefaultContent(configHash, modifiersList) {
  var key = void 0,
      val = void 0,
      list = void 0;
  var allList = [];

  for (key in configHash) {
    val = configHash[key];
    if (val.type === 'list' && val.content) {
      list = val.content.map(function (item) {
        // jshint ignore:line
        return {
          label: item.label,
          value: key + item.value,
          section: val.sectionTitle
        };
      });
      allList = allList.concat(list);
    }
  }
  var modifiers = modifiersList.map(function (item) {
    item.section = 'modifiers';
    return item;
  });
  return allList.concat(modifiers);
}

function getAllModifiers(configHash) {
  var modifiers = [];
  for (var key in configHash) {
    var config = configHash[key];
    var section = config.type === 'date' ? 'time' : 'others';
    modifiers.push({
      value: key,
      label: config.defaultHint,
      modifier: true,
      section: section
    });
  }
  return modifiers;
}

function tokenize(text, configHash) {
  var tokens = [];
  var mem = '';
  var i = 0;

  for (i = 0; i <= text.length; i++) {
    var character = text[i];
    if (character === ' ' || !character) {
      if (mem) {
        tokens.push(new _token2.default({ configHash: configHash, fullText: mem }));
      }
      if (character) {
        tokens.push(new _token2.default({ configHash: configHash, fullText: ' ' }));
      }
      mem = '';
    } else if (character !== ' ') {
      mem += character;
    }
  }
  return tokens;
}

function prepareConfig(configHash) {
  var modifiers = getAllModifiers(configHash);
  configHash['+'] = { type: 'modifier-list', content: modifiers };
  configHash['_default'] = {
    type: 'default', content: getDefaultContent(configHash, modifiers)
  };
  return configHash;
}

function deserializeQueryString(string, configHash) {
  return sanitizeTokens(tokenize(string, configHash));
}

function getMatch(subString, array, key) {
  return array.filter(function (string) {
    if (key) {
      string = string[key];
    }
    return string.toLowerCase().indexOf(subString.toLowerCase()) > -1 && subString.length < string.length;
  });
}

function setCursor(node, pos) {
  if (node) {
    if (node.createTextRange) {
      var textRange = node.createTextRange();
      textRange.collapse(true);
      textRange.moveEnd(pos);
      textRange.moveStart(pos);
      textRange.select();
      return true;
    } else if (node.setSelectionRange) {
      node.setSelectionRange(pos, pos);
      return true;
    }
  }
  return false;
}