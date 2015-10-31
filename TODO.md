# TODO

![word-o-mat screenshot](/screenshot.png)

New in major version 2.2:

- **GREP pattern matching**: As an alternative to specifying lists of required letters (which is still there and unchanged), word-o-mat now also supports pattern matching with regular expressions for more fine-grained control. (Please make sure your regex does not contradict parameters set in the “Basic settings” panel, as the script does not [yet] cleverly check for such things.)
- **Language support**: Additional option to get words in **any** available language (mind that this will be slower). Also new wordlists for Latin, Polish, Icelandic, Vietnamese syllables (the latter is a rather short list, but I thought it may still be useful to include). Implemented correct capitalization of German ß to SS.
- word-o-mat is UTF-8 compliant, so you can also use it for languages other than English (I’ve only tested it for Latin-based languages for now). This uses the Unicode info of the glyphs, so make sure you have your codepoints assigned properly.

- x words
- x–x letters
- language
- case: keep, all uppercase, all lowercase, capitalise
- key characters:
- only allow key characters [bool]



- Select language(s)
- Define key characters: ______ (case sensitive)
- Allow characters other than key characters: yes/no
- Allow proper nouns: yes/no
- Allow words, phrases, or both
- Sort results: alphabetically, by word length (# of letters), or by # of key characters contained
-- e.g. Input: gaoesf

Output: flagpoles flages poles foes lop …
