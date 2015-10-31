(function () {
  var extend = require('extend')
  var dutch = require('./resources/dutch.json')
  var buildRegex = require('build-regex-group')
  var contains = require('lodash.contains')

  function wordomat (opts, dictionary) {
    var self = this

    self.options = extend({
      wordCount: 20, // whole number
      minLength: 4,  // whole number
      maxLength: 12, // whole number
      bannedRepetitions: false, // bool
      bannedLetters: false, // string or false
      requiredLetters: false, // string, array, or regex
      requiredLettersOnly: false, // bool
      language: false, // string or false
      case: false, // ie. “keep”
    }, (opts || {}))

    // self.textfiles = ['catalan', 'czech', 'danish', 'dutch', 'ukacd', 'finnish', 'french', 'german', 'hungarian', 'icelandic', 'italian', 'latin', 'norwegian', 'polish', 'slovak', 'spanish', 'vietnamese']
    // self.languageNames = ['Catalan', 'Czech', 'Danish', 'Dutch', 'English', 'Finnish', 'French', 'German', 'Hungarian', 'Icelandic', 'Italian', 'Latin', 'Norwegian', 'Polish', 'Slovak', 'Spanish', 'Vietnamese syllables']

    self.dictionary = dictionary || dutch

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

    self.filter = function (dict) {
      var result = []
      // var match = (self.options.requiredLetters.length > 1) ? buildRegex(self.options.requiredLetters.split(), 'g') : self.options.requiredLetters
      var match = false
      if (self.options.requiredLetters.length > 1) {
        if (self.options.requiredLettersOnly === true) {
          // Build the regexp that matches ALL required letters, not any
          match = self.options.requiredLetters.split('')
        } else {
          match = buildRegex(self.options.requiredLetters.split(''), 'g')
        }
      }

      dict.forEach(function (word, index) {
        if ((self.options.minLength <= word.length) && (word.length <= self.options.maxLength)) {
          if (self.options.requiredLettersOnly !== true) {
            if (!match || match.test(word)) {
              result.push(word)
            }
          } else {
            if (self.includeAny(word, self.options.requiredLetters.split(''))) {
              result.push(word)
            }
          }
        }
      })
      return result.slice(0, self.options.wordCount)
    }

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
