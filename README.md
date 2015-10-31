# word-o-mat

Looking for words that contain ‘q’ but not ‘u’? Or French words that use an ‘a’, a ‘g’, at least one ascender, and one diagonal, but only the ones you’ve marked green? Or words in which to see a specific letter combination, like ‘fk’ or ‘Yc’? This is the sort of thing that word-o-mat can help you with. It’s an npm module based on [Nina Stössinger’s RoboFont extension](https://github.com/ninastoessinger/word-o-mat) that generates words for use in type specimens, type sketching, spacing, testing etc.

This module includes the up-to-date word lists built into the original word-o-mat plugin, manually corrected by the following people where noted:

- English
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

Word lists usually contain between 5,000 and 30,000 words each (only the Vietnamese one is much shorter) and are derived from various open/CC licensed sources; please check the individual files for details. If you’d like to update the word lists, please open a Pull Request against Nina’s repo, rather than this one. The included JSON files are build from those source files by running `npm run build`.

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2015 [Kenneth Ormandy](http://kennethormandy.com/)
Copyright © 2014–2015 [Nina Stössinger](http://typologic.nl/)
