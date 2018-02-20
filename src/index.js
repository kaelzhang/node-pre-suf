const escapeString = require('escape-string-regexp')

const check = (str, name = 'str') => {
  if (typeof str !== 'string') {
    throw new TypeError(`${name} must be a string, but got ${str}`)
  }
}

const make = (str, fix, remove, leading) => {
  check(str)

  const name = leading
    ? 'prefix'
    : 'suffix'

  check(fix, name)

  let escaped = escapeString(fix)

  if (remove) {
    escaped = `(?:${escaped})*`
  }

  if (leading) {
    escaped = '^' + escaped
  } else {
    escaped = escaped + '$'
  }

  return [str, new RegExp(escaped)]
}

const remove = (str, regex) => str.replace(regex, '')

const ensure = (str, regex, fix, leading) => regex.test(str)
  ? str
  : leading
    ? fix + str
    : str + fix

exports.ensureLeading = (str, prefix) =>
  ensure(...make(str, prefix, false, true), prefix, true)

exports.removeLeading = (str, prefix) =>
  remove(...make(str, prefix, true, true))

exports.ensureEnding = (str, suffix) =>
  ensure(...make(str, suffix), suffix)

exports.removeEnding = (str, suffix) =>
  remove(...make(str, suffix, true))
