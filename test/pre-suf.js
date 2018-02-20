'use strict';

var expect = require('chai').expect
var presuf = require('../')

describe('presuf', function () {
  it('ensureLeading', function () {
    expect(presuf.ensureLeading('a', '/')).to.equal('/a')
    expect(presuf.ensureLeading('/a', '/')).to.equal('/a')
    expect(presuf.ensureLeading('/ab', '/a')).to.equal('/ab')
    expect(presuf.ensureLeading('b', '/a')).to.equal('/ab')
    expect(presuf.ensureLeading('/a/ab', '/a')).to.equal('/a/ab')
  })

  it('removeLeading', function () {
    expect(presuf.removeLeading('a', '/')).to.equal('a')
    expect(presuf.removeLeading('/a', '/')).to.equal('a')
    expect(presuf.removeLeading('/ab', '/a')).to.equal('b')
    expect(presuf.removeLeading('b', '/a')).to.equal('b')
    expect(presuf.removeLeading('/a/ab', '/a')).to.equal('b')
  })

  it('ensureEnding', function () {
    expect(presuf.ensureEnding('a', '/')).to.equal('a/')
    expect(presuf.ensureEnding('/a', '/')).to.equal('/a/')
    expect(presuf.ensureEnding('/ab', '/a')).to.equal('/ab/a')
    expect(presuf.ensureEnding('b', '/a')).to.equal('b/a')
    expect(presuf.ensureEnding('/a/ab', '/a')).to.equal('/a/ab/a')
  })

  it('removeEnding', function () {
    expect(presuf.removeEnding('a//', '/')).to.equal('a')
    expect(presuf.removeEnding('/a/', '/')).to.equal('/a')
    expect(presuf.removeEnding('/ab/a', '/a')).to.equal('/ab')
    expect(presuf.removeEnding('b/a/a', '/a')).to.equal('b')
    expect(presuf.removeEnding('/a/ab/a', '/a')).to.equal('/a/ab')
  })

  it('error',  function () {
    throws(function () {
      presuf.ensureLeading()
    }, 'str must be a string, but got undefined', 'ensureLeading str')

    throws(function () {
      presuf.ensureLeading('a')
    }, 'prefix must be a string, but got undefined', 'ensureLeading str')

    throws(function () {
      presuf.removeLeading()
    }, 'str must be a string, but got undefined', 'ensureLeading str')

    throws(function () {
      presuf.removeLeading('a')
    }, 'prefix must be a string, but got undefined', 'ensureLeading str')

    throws(function () {
      presuf.ensureEnding()
    }, 'str must be a string, but got undefined', 'ensureLeading str')

    throws(function () {
      presuf.ensureEnding('a')
    }, 'suffix must be a string, but got undefined', 'ensureLeading str')

    throws(function () {
      presuf.removeEnding()
    }, 'str must be a string, but got undefined', 'ensureLeading str')

    throws(function () {
      presuf.removeEnding('a')
    }, 'suffix must be a string, but got undefined', 'ensureLeading str')
  })
})

function throws (fn, message, d) {
  try {
    fn()
  } catch (e) {
    expect(e.message).to.equal(message)
    return
  }

  throw new Error('should fail: ' + d)
}
