'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('../../../util');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  serialize: function serialize(model) {
    return model && model.value;
  },
  deserialize: function deserialize(label, list) {
    if (list) {
      return list.findBy('value', label);
    } else {
      return label;
    }
  },
  validate: function validate(string, list) {
    if (list) {
      return list.any(function (item) {
        return this.serialize(item) === string;
      }, this);
    } else {
      return string;
    }
  },
  getHints: function getHints(string, list) {
    if (list && list.length) {
      var labelMatches = (0, _util.getMatch)(string, list, 'label');
      var valueMatches = (0, _util.getMatch)(string, list, 'value');

      var matches = _lodash2.default.union(labelMatches, valueMatches).filter(function (item) {
        return item.value !== string;
      });

      if (matches.length) {
        return matches;
      }
    }
    return [];
  }
};