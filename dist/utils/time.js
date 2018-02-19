'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = timeSince;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var intervals = [{ label: 'year', seconds: 31536000 }, { label: 'month', seconds: 2592000 }, { label: 'day', seconds: 86400 }, { label: 'hour', seconds: 3600 }, { label: 'minute', seconds: 60 }, { label: 'second', seconds: 0 }];

function timeSince(dateStr) {
  var seconds = Math.floor((_moment2.default.utc().format('x') - _moment2.default.utc(dateStr).format('x')) / 1000);
  var interval = intervals.find(function (i) {
    return i.seconds < seconds;
  });
  if (!interval || interval.seconds === 0) {
    return 'Just now';
  } else {
    var count = Math.floor(seconds / interval.seconds);
    return count + ' ' + interval.label + (count !== 1 ? 's' : '') + ' ago';
  }
}