'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var escapeString = require('escape-string-regexp');

var check = function check(str) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'str';

  if (typeof str !== 'string') {
    throw new TypeError(name + ' must be a string, but got ' + str);
  }
};

var make = function make(str, fix, remove, leading) {
  check(str);

  var name = leading ? 'prefix' : 'suffix';

  check(fix, name);

  var escaped = escapeString(fix);

  if (remove) {
    escaped = '(?:' + escaped + ')*';
  }

  if (leading) {
    escaped = '^' + escaped;
  } else {
    escaped = escaped + '$';
  }

  return [str, new RegExp(escaped)];
};

var remove = function remove(str, regex) {
  return str.replace(regex, '');
};

var ensure = function ensure(str, regex, fix, leading) {
  return regex.test(str) ? str : leading ? fix + str : str + fix;
};

exports.ensureLeading = function (str, prefix) {
  return ensure.apply(undefined, _toConsumableArray(make(str, prefix, false, true)).concat([prefix, true]));
};

exports.removeLeading = function (str, prefix) {
  return remove.apply(undefined, _toConsumableArray(make(str, prefix, true, true)));
};

exports.ensureEnding = function (str, suffix) {
  return ensure.apply(undefined, _toConsumableArray(make(str, suffix)).concat([suffix]));
};

exports.removeEnding = function (str, suffix) {
  return remove.apply(undefined, _toConsumableArray(make(str, suffix, true)));
};