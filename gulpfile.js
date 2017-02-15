var gulp = require('gulp')
var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var mkdirp = require('mkdirp')
var postcss = require('gulp-postcss')
var cssnano = require('cssnano')
require('shelljs/global')

gulp.task('default', function() {
  console.log('---------gulp start---------')
  genStyles()
  var processors = [
    require('postcss-salad')({
      browsers: ['ie > 8', 'last 2 versions'],
      features: {
        'bem': {
          'shortcuts': {
            'component': 'b',
            'modifier': 'm',
            'descendent': 'e'
          },
          'separators': {
            'descendent': '__',
            'modifier': '--'
          }
        }
      }
    }),
    require('postcss-discard-comments')({removeAll: true}),
    require('postcss-px2rem')({remUnit: 40})
  ];
  gulp.src('./src/styles/*.css')
    .pipe(postcss(processors))
    .pipe(require('gulp-cssmin')())
    .pipe(gulp.dest('./lib/styles'));
});

function genStyles() {
  var p = path.resolve(__dirname, './src/styles/')
  var pathStyles = path.resolve(__dirname, './lib/styles/')
  mkdirp(pathStyles,function () {
  })
  fs.readdir(p, function (err, files) {
    if (err) {
      throw err
    }
    files.filter(function (file) {
      return fs.statSync(path.join(p, file)).isFile()
    }).forEach(function (file) {
      buildStyles(file)
    })
  })
}
function buildStyles (file) {
  /*var fromPath = path.resolve(__dirname, `../src/styles/${file}`)
  var toPath = path.resolve(__dirname, `../dist/styles/${file}`)
  var code = fs.readFileSync(fromPath)
  code = code.toString()*/
  mkdirp('./lib/styles/', function () {
    touch('./lib/styles/' + file)
  })

}
