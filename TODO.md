# TODO

![word-o-mat screenshot](/screenshot.png)

New in major version 2.2:

- [ ] **GREP pattern matching**: As an alternative to specifying lists of required letters (which is still there and unchanged), word-o-mat now also supports pattern matching with regular expressions for more fine-grained control. (Please make sure your regex does not contradict parameters set in the “Basic settings” panel, as the script does not [yet] cleverly check for such things.)
- [x] **Language support**: Additional option to get words in **any** available language (mind that this will be slower). Also new wordlists for Latin, Polish, Icelandic, Vietnamese syllables (the latter is a rather short list, but I thought it may still be useful to include). Implemented correct capitalization of German ß to SS.
- [x] word-o-mat is UTF-8 compliant, so you can also use it for languages other than English (I’ve only tested it for Latin-based languages for now). This uses the Unicode info of the glyphs, so make sure you have your codepoints assigned properly.

- [x] Limit to # of words
- [x] Between # and # characters
- [x] Select language(s)
- [x] Define key characters: ______ (case sensitive)
- [x] Allow characters other than key characters: yes/no
- [x] Change case: keep, all uppercase, all lowercase, capitalize
- [ ] Filter proper nouns: yes/no (filter by case?)
- [ ] Filter words, phrases, or both
- [x] Sort results alphabetically
- [x] By word length (# of letters)
- [ ] or by # of key characters contained
- [ ] GREP pattern matching
- [x] Word-o-Mat word lists
- [x] Custom word list

e.g. Input: gaoesf

Output: flagpoles flages poles foes lop …
