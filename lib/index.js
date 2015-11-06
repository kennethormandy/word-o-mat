(function () {
  var extend = require('extend')
  var dutch = require('./resources/dutch.json')
  var buildRegex = require('build-regex-group')
  var contains = require('lodash.contains')
  var shuffle = require('array-shuffle')
  var alphabetical = require('alpha-sort')
  var toCase = require('to-case')

  function wordomat (opts, dictionary) {
    var self = this

    self.options = extend({
      wordCount: 20, // whole number
      minLength: 4,  // whole number
      maxLength: 30, // whole number
      bannedRepetitions: false, // bool
      bannedLetters: false, // string or false
      requiredLetters: false, // string, array, or regex
      requiredLettersOnly: false, // bool
      language: false, // string or false
      case: false, // ie. “keep”
      sort: 'random', // alphabetical, word length, # key chars (this is more complicated), random
      regex: false
    }, (opts || {}))

    self.includeAny = function (word, charList) {
      var wordSplit = word.split('')
      var passed = true
      var check = charList.forEach(function (char) {
        if (!contains(wordSplit, char)) {
          return passed = false
        }
      })
      return passed
    }

    self.sortList = function (list) {
      if (self.options.sort === 'random') {
        return shuffle(list)
      } else if (self.options.sort === 'alphabetical') {
        return list.sort(alphabetical.asc)
      } else {
        return list
      }
    }

    self.regex = function () {
      var match = false
      if (self.options.requiredLetters.length >= 1) {
        match = self.options.requiredLetters.split('').sort(alphabetical.asc)

        if (self.options.requiredLettersOnly !== true) {
          // Build the regexp that matches ALL required letters, not any
          match = buildRegex(match, 'g')
        }
      } else {
        match = true
      }
      return self.options.regex || match
    }

    self.setCase = function (word) {
      // Do filter case seperately, this should
      // just be for converting cases

      var result = word
      if (!self.options.case || self.options.case === 'keep') {
        return result
      } else if (self.options.case === 'capital') {
        return toCase.capital(word)
      } else if (self.options.case === 'lower') {
        return toCase.lower(word)
      } else if (self.options.case === 'upper') {
        return toCase.upper(word)
      } else {
        return
      }
    }

    self.filter = function (dict) {
      var result = []

      dict.forEach(function (word, index) {
        if ((self.options.minLength <= word.length) && (word.length <= self.options.maxLength)) {
          if ((self.options.requiredLettersOnly !== true)) {
            if (self.options.regex === true || word.match(self.options.regex)) {
              result.push(self.setCase(word))
            }
          } else {
            if (self.includeAny(word, self.options.requiredLetters.split(''))) {
              result.push(word)
            }
          }

        }
      })
      return self.sortList(result).slice(0, self.options.wordCount)
    }

    // self.textfiles = ['catalan', 'czech', 'danish', 'dutch', 'ukacd', 'finnish', 'french', 'german', 'hungarian', 'icelandic', 'italian', 'latin', 'norwegian', 'polish', 'slovak', 'spanish', 'vietnamese']
    // self.languageNames = ['Catalan', 'Czech', 'Danish', 'Dutch', 'English', 'Finnish', 'French', 'German', 'Hungarian', 'Icelandic', 'Italian', 'Latin', 'Norwegian', 'Polish', 'Slovak', 'Spanish', 'Vietnamese syllables']

    // Init
    // Set dictionary
    self.dictionary = dictionary || dutch
    // Set regex option one wasn’t passed in using `self.regex()`?
    self.options.regex = self.options.regex || self.regex()
    // TODO Turn string of comma, space, or nothing seperated `requiredLetters` into an Array, or keep as array

    return {
      options: self.options,
      result: self.filter(self.dictionary)
    }
  }

  if (typeof module === 'object' && typeof module.exports !== 'undefined') {
    module.exports = wordomat
  } else {
    window.wordomat = wordomat
  }
})()
