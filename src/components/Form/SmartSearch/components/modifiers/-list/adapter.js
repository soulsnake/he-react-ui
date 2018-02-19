import { getMatch } from '../../../util'
import _ from 'lodash'

export default {
  serialize(model) {
    return model && model.value;
  },

  deserialize(label, list) {
    if (list) {
      return list.findBy('value', label);
    } else {
      return label;
    }
  },

  validate(string, list) {
    if (list) {
      return list.any(function(item) {
        return this.serialize(item) === string;
      }, this);
    } else {
      return string;
    }
  },

  getHints(string, list) {
    if (list && list.length) {
      let labelMatches = getMatch(string, list, 'label');
      let valueMatches = getMatch(string, list, 'value');

      let matches = _.union(labelMatches, valueMatches)
        .filter((item) => (item.value !== string))

      if (matches.length) {
        return matches;
      }
    }
    return [];
  }
};
