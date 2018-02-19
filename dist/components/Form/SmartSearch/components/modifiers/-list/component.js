'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = _ember2.default.get,
    set = _ember2.default.set,
    observer = _ember2.default.observer,
    computed = _ember2.default.computed,
    run = _ember2.default.run;
exports.default = _ember2.default.Component.extend({
  layout: _template2.default,
  currentIndex: -1,
  classNames: ['hint-menu-container'],
  isVisible: computed.bool('token.hints.length'),

  correctScroll: observer('currentIndex', function () {
    run.scheduleOnce('afterRender', this, function () {
      var currentIndex = get(this, 'currentIndex');
      if (currentIndex === -1 || !this.element) {
        return;
      }
      var $listItem = this.$('li').eq(currentIndex);
      var $list = $listItem.parent('.slack-search-input-list');

      var scroll = $list.scrollTop();
      var listHeight = $list.height();

      var itemHeight = $listItem.outerHeight();
      var top = $listItem.position().top;
      var bottom = top + itemHeight;

      if (top < 0) {
        $list.scrollTop(scroll + top);
      } else if (listHeight < bottom) {
        $list.scrollTop(scroll + top - listHeight + itemHeight);
      }
    });
  }),

  select: observer('enterClicked', function () {
    var list = get(this, 'flatList');
    var currentIndex = get(this, 'currentIndex');
    if (currentIndex !== -1) {
      var item = list.objectAt(currentIndex);
      var token = get(this, 'token');
      run.schedule('sync', this, function () {
        this.attrs.changeTokenModel(token, item, true);
      });
    }
  }),

  goUp: observer('upClicked', function () {
    var len = get(this, 'flatList.length');
    if (!len) {
      return;
    }
    var currentIndex = get(this, 'currentIndex') % len;
    if (currentIndex <= 0) {
      set(this, 'currentIndex', len - 1);
    } else {
      set(this, 'currentIndex', currentIndex - 1);
    }
    this.attrs['on-focus']();
  }),

  goDown: observer('downClicked', function () {
    var len = get(this, 'flatList.length');
    if (!len) {
      return;
    }
    var currentIndex = get(this, 'currentIndex');
    if (currentIndex >= len - 1) {
      set(this, 'currentIndex', 0);
    } else {
      set(this, 'currentIndex', currentIndex + 1);
    }
    this.attrs['on-focus']();
  }),

  flatList: computed('listGrouped', function () {
    return get(this, 'listGrouped').reduce(function (sum, item) {
      return sum.concat(item.list);
    }, []);
  }),

  listGrouped: computed('token.hints', function () {
    var hints = get(this, 'token.hints');
    if (!hints) {
      return [];
    }
    var list = hints.reduce(function (sum, listItem) {
      var section = listItem.section;
      if (section) {
        if (sum[section]) {
          sum[section].push(listItem);
        } else {
          sum[section] = [listItem];
        }
      } else {
        sum['untitled'].push(listItem);
      }
      return sum;
    }, { 'untitled': [] });

    var listArray = [];
    for (var key in list) {
      listArray.push({ section: key, list: list[key] });
    }
    listArray.findBy('section', 'untitled').section = '';
    var t = 0;
    var array = listArray.sortBy('section').reverse().map(function (section) {
      section.list = section.list.map(function (list) {
        set(list, 'index', t++);
        return list;
      });
      return section;
    });
    return array;
  }),

  actions: {
    selectItem: function selectItem(index) {
      set(this, 'currentIndex', index);
      this.select();
      return false;
    }
  }

});