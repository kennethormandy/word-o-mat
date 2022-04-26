// ISC via https://github.com/npm/npm-expansions/blob/5322c9dd9716927622fffa89e8756931faa11d9c/bin/build.js

var fs = require('fs')
var path = require('path')
var inpath = path.resolve('./node_modules/word-o-mat/word-o-mat.roboFontExt/resources')

fs.readdir(inpath, function (err, files) {
  if (err) {
    console.error(err)
  } else {
    files.forEach(function (file) {
      // console.log(file)
      convert(file)
    })
  }
})

var convert = function (infile) {
  var filename = infile.split(path.extname(infile))[0] + '.json'
  var outfile = path.resolve('./lib/resources/', filename)
  var list = fs
    .readFileSync(path.resolve(inpath, infile), 'utf8')
    .split('*****')[1]
    .split('\n')
    .map(function (e) { return e.trim() })
    .filter(function (e) { return (e.length > 0) })
    // .filter(function (e) { return e.charAt(0).toLowerCase() === 'n' })
    .sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase())
    })
  fs.writeFileSync(outfile, JSON.stringify(list, null, 2))
}
