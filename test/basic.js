/* global describe, it */
var wordomat = require('../')
var should = require('should')

describe('basic', function () {
  it('should exist', function (done) {
    should.exist(wordomat())
    should(typeof wordomat()).equal('object')
    done()
  })
  it('should have default options', function (done) {
    should.exist(wordomat().options)
    done()
  })
  it('should have override default options', function (done) {
    var opts = { case: 'uppercase' }
    var mat = wordomat(opts)
    should.exist(mat.options)
    should(mat.options.case).equal('uppercase')
    should(mat.options.case).not.equal(false)
    should(mat.options.requiredLetters).equal(false)
    done()
  })
  it('should return the correct number of words', function (done) {
    var opts = { wordCount: 5 }
    var mat = wordomat(opts)
    should(mat.result.length).equal(5)
    done()
  })
  it('should return words that are within the same specified length', function (done) {
    var opts = { minLength: 5, maxLength: 5 }
    var mat = wordomat(opts)
    should(mat.result.length).be.above(1)
    mat.result.forEach(function (word) {
      should(word.length).equal(5)
      should(word.length).not.be.above(5)
      should(word.length).not.be.below(5)
    })
    done()
  })
  it('should return words that are within different specified lengths', function (done) {
    var opts = { minLength: 2, maxLength: 10 }
    var mat = wordomat(opts)
    should(mat.result.length).be.above(1)
    mat.result.forEach(function (word) {
      should(word.length).not.be.above(10)
      should(word.length).not.be.below(2)
    })
    done()
  })
  // TODO
  // it('should return a nice error when word lengths don’t make sense', function (done) {
  //   var opts = { minLength: 2, maxLength: 1 }
  //   var mat = wordomat(opts)
  //   done()
  // })
  it('should limit to words that contain certain characters', function (done) {
    var opts = { requiredLetters: 'aein', requiredLettersOnly: false }
    var mat = wordomat(opts)
    should(mat.result.length).be.above(1)
    mat.result.forEach(function (word) {
      if (should(word.match(/a/)).not.equal(null)) {
        return true
      } else if (should(word.match(/e/)).not.equal(null)) {
        return true
      } else if (should(word.match(/i/)).not.equal(null)) {
        return true
      } else if (should(word.match(/n/)).not.equal(null)) {
        return true
      } else {
        return false
      }
    })
    done()
  })
  it('should limit to words that contain all the required characters', function (done) {
    var opts = { requiredLetters: 'aein', requiredLettersOnly: true }
    var mat = wordomat(opts)
    should(mat.result.length).be.above(1)
    mat.result.forEach(function (word) {
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
    should(mat.result.length).equal(2)
    mat.result.forEach(function (word) {
      should(word.match(/a/)).not.equal(null)
      should(word.match(/e/)).not.equal(null)
      should(word.match(/i/)).not.equal(null)
      should(word.match(/n/)).not.equal(null)
    })
    done()
  })

  // it('should not return an error', function (done) {
  //   should(wordomat(function (err, result) {
  //     should.not.exist(err)
  //     should.exist(result)
  //     console.log('err', err)
  //     console.log('result', result)
  //     done()
  //   }))
  // })

})
