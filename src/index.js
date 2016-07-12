'use strict'

const escapeString = require('escape-string-regexp')


function makeRegExp (str, leading, repeat = true) {
  let escaped = escapeString(str)

  if (repeat) {
    escaped = `(?:${escaped})*`
  }

  if (leading) {
    escaped = '^' + escaped
  } else {
    escaped = escaped + '$'
  }

  return new RegExp(escaped)
}


exports.ensureLeading = (str, prefix) => {
  let regex = makeRegExp(prefix, true, false)

  if (regex.test(str)) {
    return str
  }

  return prefix + str
}


exports.removeLeading = (str, prefix) => {
  return str.replace(makeRegExp(prefix, true), '')
}


exports.ensureEnding = (str, suffix) => {
  let regex = makeRegExp(suffix, false, false)

  if (regex.test(str)) {
    return str
  }

  return str + suffix
}


exports.removeEnding = (str, suffix) => {
  return str.replace(makeRegExp(suffix, false), '')
}
