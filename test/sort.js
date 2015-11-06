/* global describe, it */
var wordomat = require('../')
var should = require('should')

describe('sort', function () {
  it('random', function (done) {
    var opts = { requiredLetters: 'aein', sort: 'random' }
    var mat = wordomat(opts)
    should(mat.result.length).be.above(1)
    done()
  })
  it('alphabetical', function (done) {
    var opts = { sort: 'alphabetical' }
    var mat = wordomat(opts, ['Tommaso', 'Nelma', 'Abraham', 'Airplane', 'Vevey'])
    should(mat.result.length).equal(5)
    should(mat.result[0]).equal('Abraham')
    should(mat.result[1]).equal('Airplane')
    should(mat.result[2]).equal('Nelma')
    should(mat.result[3]).equal('Tommaso')
    should(mat.result[4]).equal('Vevey')
    done()
  })
  it('phrases', function (done) {
    var opts = { sort: 'alphabetical', maxLength: 100 }
    var lyrics = [
      'I don’t wanna bore you with how I feel',
      'But when the walls came down, the shit got real',
      'I never thought I would ever be here',
      'Looking out on my life as if there was no there there'
    ]
    var mat = wordomat(opts, lyrics)
    should(mat.result[0]).equal('But when the walls came down, the shit got real')
    should(mat.result[1]).equal('I don’t wanna bore you with how I feel')
    should(mat.result[2]).equal('I never thought I would ever be here')
    should(mat.result[3]).equal('Looking out on my life as if there was no there there')
    done()
  })
})
