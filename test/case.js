/* global describe, it */
var wordomat = require('../')
var should = require('should')

var fieldTrip = ['Riley', 'orange juice', 'Marisol', 'pretzels', 'Dan', 'beer', 'Spencer', 'water', 'Kenneth', 'coffee', 'Frances', 'snacks']

describe('case', function () {
  it('keep', function (done) {
    var opts = { requiredLetters: 'oiS', sort: 'alphabetical', case: 'keep', minLength: 1, maxLength: 100 }
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
  it('keep', function (done) {
    var opts = { requiredLetters: 'oiS', sort: 'alphabetical', case: 'capitalize', minLength: 1, maxLength: 100 }
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
})
