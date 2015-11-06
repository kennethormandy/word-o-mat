/* global describe, it */
var wordomat = require('../')
var should = require('should')

var opts = { wordCount: 10, sort: 'alphabetical' }

describe('language', function () {
  it('none specified', function (done) {
    opts.lang = false
    var mat = wordomat(opts)
    should(mat.result.length).equal(10)
    should(mat.result[4]).not.equal('Arabië')
    done()
  })
  it('dutch', function (done) {
    opts.lang = 'dutch'
    var mat = wordomat(opts)
    should(mat.result.length).equal(10)
    should(mat.result[4]).equal('Arabië')
    done()
  })
  it('Catalan', function (done) {
    opts.lang = 'catalan'
    var mat = wordomat(opts)
    should(mat.result.length).equal(10)
    should(mat.result[4]).equal('abadane')
    done()
  })
  it('Latin', function (done) {
    opts.lang = 'latin'
    var mat = wordomat(opts)
    should(mat.result.length).equal(10)
    should(mat.result[0]).equal('Abdēra')
    done()
  })
  it('Polish', function (done) {
    opts.lang = 'polish'
    var mat = wordomat(opts)
    should(mat.result.length).equal(10)
    should(mat.result[0]).equal('absolutnie')
    done()
  })
  it('Vietnamese', function (done) {
    opts.lang = 'vietnamese'
    var mat = wordomat(opts)
    should(mat.result.length).equal(10)
    should(mat.result[0]).equal('Bình')
    done()
  })
})
