/* global describe, it */
var wordomat = require('../')
var should = require('should')

var fieldTrip = ['Riley', 'orange juice', 'Marisol', 'pretzels', 'Dan', 'beer', 'Spencer', 'water', 'Kenneth', 'coffee', 'Frances', 'snacks']
var opts = { requiredLetters: 'oiS', sort: 'alphabetical', minLength: 1, maxLength: 100 }

describe('case', function () {
  it('keep', function (done) {
    opts.case = 'keep'
    var mat = wordomat(opts, fieldTrip)
    should(mat.data.length).equal(5)
    should(mat.data.indexOf('coffee')).be.above(-1)
    should(mat.data.indexOf('Coffee')).equal(-1)
    should(mat.data.indexOf('COFFEE')).equal(-1)
    should(mat.data.indexOf('Marisol')).be.above(-1)
    should(mat.data.indexOf('marisol')).equal(-1)
    should(mat.data.indexOf('MARISOL')).equal(-1)
    should(mat.data.indexOf('orange juice')).be.above(-1)
    should(mat.data.indexOf('Riley')).be.above(-1)
    should(mat.data.indexOf('Spencer')).be.above(-1)

    // should(mat.data[0]).equal('coffee')
    // should(mat.data[1]).equal('Marisol')
    // should(mat.data[2]).equal('orange juice')
    // should(mat.data[3]).equal('Riley')
    // should(mat.data[4]).equal('Spencer')
    done()
  })
  it('capital', function (done) {
    opts.case = 'capital'
    var mat = wordomat(opts, fieldTrip)
    should(mat.data.length).equal(5)
    should(mat.data.indexOf('coffee')).equal(-1)
    should(mat.data.indexOf('Coffee')).be.above(-1)
    should(mat.data.indexOf('COFFEE')).equal(-1)
    should(mat.data.indexOf('Marisol')).be.above(-1)
    should(mat.data.indexOf('marisol')).equal(-1)
    should(mat.data.indexOf('MARISOL')).equal(-1)
    should(mat.data.indexOf('orange juice')).equal(-1)
    should(mat.data.indexOf('Orange Juice')).be.above(-1)
    should(mat.data.indexOf('ORANGE JUICE')).equal(-1)
    should(mat.data.indexOf('Riley')).be.above(-1)
    should(mat.data.indexOf('riley')).equal(-1)
    should(mat.data.indexOf('Spencer')).be.above(-1)
    should(mat.data.indexOf('SPENCER')).equal(-1)

    // should(mat.data[0]).equal('coffee')
    // should(mat.data[1]).equal('Marisol')
    // should(mat.data[2]).equal('orange juice')
    // should(mat.data[3]).equal('Riley')
    // should(mat.data[4]).equal('Spencer')
    done()
  })
  it('lower', function (done) {
    opts.case = 'lower'
    var mat = wordomat(opts, fieldTrip)
    should(mat.data.length).equal(5)
    should(mat.data.indexOf('coffee')).be.above(-1)
    should(mat.data.indexOf('Coffee')).equal(-1)
    should(mat.data.indexOf('COFFEE')).equal(-1)
    should(mat.data.indexOf('Marisol')).equal(-1)
    should(mat.data.indexOf('marisol')).be.above(-1)
    should(mat.data.indexOf('MARISOL')).equal(-1)
    should(mat.data.indexOf('orange juice')).be.above(-1)
    should(mat.data.indexOf('Orange Juice')).equal(-1)
    should(mat.data.indexOf('ORANGE JUICE')).equal(-1)
    should(mat.data.indexOf('Riley')).equal(-1)
    should(mat.data.indexOf('riley')).be.above(-1)
    should(mat.data.indexOf('Spencer')).equal(-1)
    should(mat.data.indexOf('SPENCER')).equal(-1)
    done()
  })
  it('upper', function (done) {
    opts.case = 'upper'
    var mat = wordomat(opts, fieldTrip)
    should(mat.data.length).equal(5)
    should(mat.data.indexOf('coffee')).equal(-1)
    should(mat.data.indexOf('Coffee')).equal(-1)
    should(mat.data.indexOf('COFFEE')).be.above(-1)
    should(mat.data.indexOf('Marisol')).equal(-1)
    should(mat.data.indexOf('marisol')).equal(-1)
    should(mat.data.indexOf('MARISOL')).be.above(-1)
    should(mat.data.indexOf('orange juice')).equal(-1)
    should(mat.data.indexOf('Orange Juice')).equal(-1)
    should(mat.data.indexOf('ORANGE JUICE')).be.above(-1)
    should(mat.data.indexOf('Riley')).equal(-1)
    should(mat.data.indexOf('riley')).equal(-1)
    should(mat.data.indexOf('Spencer')).equal(-1)
    should(mat.data.indexOf('SPENCER')).be.above(-1)
    done()
  })
  it('upper with required letters only', function (done) {
    opts.requiredLetters = 'ff'
    opts.case = 'upper'
    opts.requiredLettersOnly = true
    var mat = wordomat(opts, fieldTrip)
    should(mat.data.length).equal(1)
    should(mat.data.indexOf('coffee')).equal(-1)
    should(mat.data.indexOf('Coffee')).equal(-1)
    should(mat.data.indexOf('COFFEE')).be.above(-1)
    done()
  })
  it('upper with UTF-8', function (done) {
    opts.requiredLetters = 'î'
    opts.case = 'upper'
    opts.requiredLettersOnly = true
    var mat = wordomat(opts, ['île', 'gît', 'îles', 'naît', 'aîné'])
    should(mat.data.length).equal(5)
    should(mat.data.indexOf('île')).equal(-1)
    should(mat.data.indexOf('Île')).equal(-1)
    should(mat.data.indexOf('ÎLE')).be.above(-1)
    should(mat.data.indexOf('aîné')).equal(-1)
    should(mat.data.indexOf('Aîné')).equal(-1)
    should(mat.data.indexOf('AÎNÉ')).be.above(-1)
    done()
  })
})
