// ISC via http://git.io/vlOXz

var fs = require('fs')
var path = require('path')
var inpath = path.resolve(__dirname + '/node_modules/word-o-mat/word-o-mat.roboFontExt/resources')

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
  var outfile = path.resolve(__dirname + '/lib/resources/' + infile.split(path.extname(infile))[0] + '.json')
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
