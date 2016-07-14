[![Build Status](https://travis-ci.org/kaelzhang/node-pre-suf.svg?branch=master)](https://travis-ci.org/kaelzhang/node-pre-suf)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/node-pre-suf?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/node-pre-suf)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/pre-suf.svg)](http://badge.fury.io/js/pre-suf)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/pre-suf.svg)](https://www.npmjs.org/package/pre-suf)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/node-pre-suf.svg)](https://david-dm.org/kaelzhang/node-pre-suf)
-->

# pre-suf

Manipulate strings with prefixes and suffixes.

## Install

```sh
$ npm install pre-suf --save
```

## Usage

```js
const presuf = require('pre-suf')

presuf.ensureLeading('path/to', '/')    // '/path/to'
presuf.removeEnding('/path/to//', '/')  // '/path/to'
```

### presuf.ensureLeading(str, prefix)

Ensures that the new string will have `prefix` at the beginning of `str`.

If `str` does not begin with `prefix`, `prefix` will be added to the beggining of `str`.

### presuf.removeLeading(str, prefix)

Removes the leading `prefix` of `str`.

```js
presuf.removeLeading('/abc', '/a')       // 'bc'
presuf.removeLeading('/a/abc', '/a')     // 'bc'. removes 2 groups of '/a'
```

### presuf.ensureEnding(str, suffix)

### presuf.removeEnding(str, suffix)

## License

MIT
