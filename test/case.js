/* global describe, it */
var wordomat = require('../')
var should = require('should')

var fieldTrip = ['Riley', 'orange juice', 'Marisol', 'pretzels', 'Dan', 'beer', 'Spencer', 'water', 'Kenneth', 'coffee', 'Frances', 'snacks']
var opts = { requiredLetters: 'oiS', sort: 'alphabetical', minLength: 1, maxLength: 100 }

describe('case', function () {
  it('keep', function (done) {
    opts.case = 'keep'
    var mat = wordomat(opts, fieldTrip)
    should(mat.result.length).equal(5)
    should(mat.result.indexOf('coffee')).be.above(-1)
    should(mat.result.indexOf('Coffee')).equal(-1)
    should(mat.result.indexOf('COFFEE')).equal(-1)
    should(mat.result.indexOf('Marisol')).be.above(-1)
    should(mat.result.indexOf('marisol')).equal(-1)
    should(mat.result.indexOf('MARISOL')).equal(-1)
    should(mat.result.indexOf('orange juice')).be.above(-1)
    should(mat.result.indexOf('Riley')).be.above(-1)
    should(mat.result.indexOf('Spencer')).be.above(-1)

    // should(mat.result[0]).equal('coffee')
    // should(mat.result[1]).equal('Marisol')
    // should(mat.result[2]).equal('orange juice')
    // should(mat.result[3]).equal('Riley')
    // should(mat.result[4]).equal('Spencer')
    done()
  })
  it('capital', function (done) {
    opts.case = 'capital'
    var mat = wordomat(opts, fieldTrip)
    should(mat.result.length).equal(5)
    should(mat.result.indexOf('coffee')).equal(-1)
    should(mat.result.indexOf('Coffee')).be.above(-1)
    should(mat.result.indexOf('COFFEE')).equal(-1)
    should(mat.result.indexOf('Marisol')).be.above(-1)
    should(mat.result.indexOf('marisol')).equal(-1)
    should(mat.result.indexOf('MARISOL')).equal(-1)
    should(mat.result.indexOf('orange juice')).equal(-1)
    should(mat.result.indexOf('Orange Juice')).be.above(-1)
    should(mat.result.indexOf('ORANGE JUICE')).equal(-1)
    should(mat.result.indexOf('Riley')).be.above(-1)
    should(mat.result.indexOf('riley')).equal(-1)
    should(mat.result.indexOf('Spencer')).be.above(-1)
    should(mat.result.indexOf('SPENCER')).equal(-1)

    // should(mat.result[0]).equal('coffee')
    // should(mat.result[1]).equal('Marisol')
    // should(mat.result[2]).equal('orange juice')
    // should(mat.result[3]).equal('Riley')
    // should(mat.result[4]).equal('Spencer')
    done()
  })
  it('lower', function (done) {
    opts.case = 'lower'
    var mat = wordomat(opts, fieldTrip)
    should(mat.result.length).equal(5)
    should(mat.result.indexOf('coffee')).be.above(-1)
    should(mat.result.indexOf('Coffee')).equal(-1)
    should(mat.result.indexOf('COFFEE')).equal(-1)
    should(mat.result.indexOf('Marisol')).equal(-1)
    should(mat.result.indexOf('marisol')).be.above(-1)
    should(mat.result.indexOf('MARISOL')).equal(-1)
    should(mat.result.indexOf('orange juice')).be.above(-1)
    should(mat.result.indexOf('Orange Juice')).equal(-1)
    should(mat.result.indexOf('ORANGE JUICE')).equal(-1)
    should(mat.result.indexOf('Riley')).equal(-1)
    should(mat.result.indexOf('riley')).be.above(-1)
    should(mat.result.indexOf('Spencer')).equal(-1)
    should(mat.result.indexOf('SPENCER')).equal(-1)
    done()
  })
  it('upper', function (done) {
    opts.case = 'upper'
    var mat = wordomat(opts, fieldTrip)
    should(mat.result.length).equal(5)
    should(mat.result.indexOf('coffee')).equal(-1)
    should(mat.result.indexOf('Coffee')).equal(-1)
    should(mat.result.indexOf('COFFEE')).be.above(-1)
    should(mat.result.indexOf('Marisol')).equal(-1)
    should(mat.result.indexOf('marisol')).equal(-1)
    should(mat.result.indexOf('MARISOL')).be.above(-1)
    should(mat.result.indexOf('orange juice')).equal(-1)
    should(mat.result.indexOf('Orange Juice')).equal(-1)
    should(mat.result.indexOf('ORANGE JUICE')).be.above(-1)
    should(mat.result.indexOf('Riley')).equal(-1)
    should(mat.result.indexOf('riley')).equal(-1)
    should(mat.result.indexOf('Spencer')).equal(-1)
    should(mat.result.indexOf('SPENCER')).be.above(-1)
    done()
  })
  it('upper with required letters only', function (done) {
    opts.requiredLetters = 'ff'
    opts.case = 'upper'
    opts.requiredLettersOnly = true
    var mat = wordomat(opts, fieldTrip)
    should(mat.result.length).equal(1)
    should(mat.result.indexOf('coffee')).equal(-1)
    should(mat.result.indexOf('Coffee')).equal(-1)
    should(mat.result.indexOf('COFFEE')).be.above(-1)
    done()
  })
  it('upper with UTF-8', function (done) {
    opts.requiredLetters = 'î'
    opts.case = 'upper'
    opts.requiredLettersOnly = true
    var mat = wordomat(opts, [ 'île', 'gît', 'îles', 'naît', 'aîné' ])
    should(mat.result.length).equal(5)
    should(mat.result.indexOf('île')).equal(-1)
    should(mat.result.indexOf('Île')).equal(-1)
    should(mat.result.indexOf('ÎLE')).be.above(-1)
    should(mat.result.indexOf('aîné')).equal(-1)
    should(mat.result.indexOf('Aîné')).equal(-1)
    should(mat.result.indexOf('AÎNÉ')).be.above(-1)
    done()
  })
})
