/* global describe, it */
var wordomat = require('../')
var should = require('should')

describe('sort', function () {
  it('random', function (done) {
    var opts = { requiredLetters: 'aein', sort: 'random' }
    var mat = wordomat(opts)
    should(mat.data.length).be.above(1)
    done()
  })
  it('alphabetical', function (done) {
    var opts = { sort: 'alphabetical' }
    var mat = wordomat(opts, ['Tommaso', 'Nelma', 'Abraham', 'Airplane', 'Vevey'])
    should(mat.data.length).equal(5)
    should(mat.data[0]).equal('Abraham')
    should(mat.data[1]).equal('Airplane')
    should(mat.data[2]).equal('Nelma')
    should(mat.data[3]).equal('Tommaso')
    should(mat.data[4]).equal('Vevey')
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
    should(mat.data[0]).equal('But when the walls came down, the shit got real')
    should(mat.data[1]).equal('I don’t wanna bore you with how I feel')
    should(mat.data[2]).equal('I never thought I would ever be here')
    should(mat.data[3]).equal('Looking out on my life as if there was no there there')
    done()
  })
  it('length', function (done) {
    var opts = { sort: 'length', minLength: 1, maxLength: 100, wordCount: 10 }
    var mat = wordomat(opts, [
      'Supercalifragilisticexpialidocious',
      'Pneumonoultramicroscopicsilicovolcanoconiosis',
      'Honorificabilitudinitatibus',
      'a',
      'Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft',
      'Δήμητρα μέΆπω Κόραν τε ΚΆυμένοιο άΆοΧον'
    ])
    for (var i = 0; i < (mat.data.length - 1); i++) {
      should(mat.data[i + 1].length).aboveOrEqual(mat.data[i].length)
    }
    should(mat.data[0]).equal('a')
    should(mat.data.length).equal(6)
    done()
  })
})
