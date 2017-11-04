# word-o-mat

Looking for words that contain _q_ but not _u_? Or French words that use an _a_, a _g_? Generate a list of words, based on your specific requirements, for type specimens, type sketching, spacing, and more. This is an npm module based on [Nina Stössinger’s amazing RoboFont extension](https://github.com/ninastoessinger/word-o-mat).

## Getting started

To install word-o-mat, with a recent version of [Node.js installed](https://nodejs.org), run the following command in your terminal:

```sh
npm install --save word-o-mat
```

The module is now a dependency of your project. Next, `require` it and pass in your desired options:

```js
var wordomat = require('word-o-mat')

var mat = wordomat({
  wordCount: 5
})

console.log(mat.data)
// Returns something like…
// ['económicamente', 'számára', 'ascents', 'mataran', 'spalla']
```

From here, you can start to pass in your own options to get the exact kind of words or phrases you are looking for:

```js
var wordomat = require('word-o-mat')

var mat = wordomat({
  wordCount: 5,               // Total number of words
  minLength: 8,               // Shortest permitted word length
  maxLength: 30,              // Longest permitted word length
  requiredLetters: 'înc',     // Words with “î,” “n,” and “c”
  requiredLettersOnly: true,  // …and must have all of them
  lang: 'french',             // Use the French word-o-mat list
  case: 'upper',              // Convert them to uppercase
  sort: 'alphabetical'        // And sort them alphabetically
})

console.log(mat.data)
// Returns something like…
// ['CONNAÎTRA', 'CONNAÎTRE', 'CONNAÎTREZ', 'CONTREMAÎTRE', 'DÉCHAÎNÉ']
```

<!--

## API

-->

## Word Lists

This module includes the up-to-date word lists built into the original word-o-mat plugin, manually corrected by the following people where noted:

<!--
- English
-->
- Catalan ([Joancarles Casasín](https://github.com/casasin))
- Czech
- Danish
- Dutch (Nina Stössinger)
- Finnish
- French ([La Police Type Foundry](https://github.com/LaPolice) and David Hodgetts)
- German (Nina Stössinger)
- Hungarian
- Icelandic
- Italian ([Roberto Arista](https://github.com/roberto-arista))
- Latin ([Tobias Frere-Jones](http://www.frerejones.com/))
- Norwegian ([Sindre Bremnes](https://monokrom.no/))
- Polish
- Slovak
- Spanish
- Vietnamese syllables

Word lists usually contain between 5,000 and 30,000 words each (only the Vietnamese one is much shorter) and are derived from various open/CC licensed sources; please check the individual files in the [original repo](https://github.com/ninastoessinger/word-o-mat) for details.

If you’d like to update the word lists, please open a Pull Request against Nina’s repo, rather than this one. The included JSON files are build from those source files automatically.

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014–2015 [Nina Stössinger](http://ninastoessinger.com/)<br>
Copyright © 2015–2017 [Kenneth Ormandy](http://kennethormandy.com/)
