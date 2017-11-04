/* global describe, it */
var wordomat = require('../')
var should = require('should')

describe('required', function () {
  it('should limit to words that contain certain characters', function (done) {
    var opts = { requiredLetters: 'aein', requiredLettersOnly: false }
    var mat = wordomat(opts)
    should(mat.data.length).be.above(1)
    mat.data.forEach(function (word) {
      should(word.match(/a|e|i|n/g)).not.equal(null)
      should(word.match(/a|e|i|n/g).length).be.above(0)
    })
    done()
  })
  it('should limit to words that contain all the required characters', function (done) {
    var opts = { requiredLetters: 'aein', requiredLettersOnly: true }
    var mat = wordomat(opts)
    should(mat.data.length).be.above(1)
    mat.data.forEach(function (word) {
      should(word.match(/a/)).not.equal(null)
      should(word.match(/e/)).not.equal(null)
      should(word.match(/i/)).not.equal(null)
      should(word.match(/n/)).not.equal(null)
    })
    done()
  })
  it('should limit to words that contain all the required characters with custom word list', function (done) {
    var opts = { requiredLetters: 'aein', requiredLettersOnly: true }
    var mat = wordomat(opts, ['abcd', 'neia', 'nin', 'aeeinna'])
    should(mat.data.length).equal(2)
    mat.data.forEach(function (word) {
      should(word.match(/a/)).not.equal(null)
      should(word.match(/e/)).not.equal(null)
      should(word.match(/i/)).not.equal(null)
      should(word.match(/n/)).not.equal(null)
    })
    done()
  })
  it('should process short phrases', function (done) {
    var opts = { requiredLetters: 'a' }
    var mat = wordomat(opts, ['Mission Gothic', 'Abraham Lincoln', 'Mission Script', 'Majesti Banner', 'Dude Hank Pro', 'Klinic Slab'])
    should(mat.data.length).equal(4)
    should(mat.data.indexOf('Mission Gothic')).equal(-1)
    should(mat.data.indexOf('Mission Script')).equal(-1)
    should(mat.data.indexOf('Abraham Lincoln')).be.above(-1)
    should(mat.data.indexOf('Dude Hank Pro')).be.above(-1)
    should(mat.data.indexOf('Majesti Banner')).be.above(-1)
    should(mat.data.indexOf('Klinic Slab')).be.above(-1)
    done()
  })
  it('should process short phrases with more complicated required letters', function (done) {
    var opts = { requiredLetters: 'aMnA' }
    var mat = wordomat(opts, ['Mission Gothic', 'Abraham Lincoln', 'Mission Script', 'Dude Hank Pro', 'Klinic Slab', 'Majesti Ban       ner', 'Dude Kitty', 'D’u*d e        W i l l i e'])
    should(mat.data.length).equal(6)
    should(mat.data.indexOf('Mission Gothic')).be.above(-1)
    should(mat.data.indexOf('Mission Script')).be.above(-1)
    should(mat.data.indexOf('Abraham Lincoln')).be.above(-1)
    should(mat.data.indexOf('Dude Hank Pro')).be.above(-1)
    should(mat.data.indexOf('Majesti Ban       ner')).be.above(-1)
    should(mat.data.indexOf('Klinic Slab')).be.above(-1)
    should(mat.data.indexOf('Dude June')).equal(-1)
    should(mat.data.indexOf('D’u*d e        W i l l i e')).equal(-1)
    should(mat.data.indexOf('Dude Willie')).equal(-1)
    done()
  })
})
