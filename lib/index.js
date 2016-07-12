'use strict';

var escapeString = require('escape-string-regexp');

function makeRegExp(str, leading) {
  var repeat = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

  var escaped = escapeString(str);

  if (repeat) {
    escaped = '(?:' + escaped + ')*';
  }

  if (leading) {
    escaped = '^' + escaped;
  } else {
    escaped = escaped + '$';
  }

  return new RegExp(escaped);
}

exports.ensureLeading = function (str, prefix) {
  var regex = makeRegExp(prefix, true, false);

  if (regex.test(str)) {
    return str;
  }

  return prefix + str;
};

exports.removeLeading = function (str, prefix) {
  return str.replace(makeRegExp(prefix, true), '');
};

exports.ensureEnding = function (str, suffix) {
  var regex = makeRegExp(suffix, false, false);

  if (regex.test(str)) {
    return str;
  }

  return str + suffix;
};

exports.removeEnding = function (str, suffix) {
  return str.replace(makeRegExp(suffix, false), '');
};