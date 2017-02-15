var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var mkdirp = require('mkdirp')
require('shelljs/global')
function clearDist() {
  var distPath = path.resolve(__dirname, '../lib/')
  mkdirp(distPath,function () {
  })
  rm('-rf', distPath)
}
clearDist()
function genComponents () {
  var p = path.resolve(__dirname, '../src/components/')

  fs.readdir(p, function (err, files) {
    if (err) {
      throw err
    }
    files.filter(function (file) {
      return fs.statSync(path.join(p, file)).isDirectory()
    }).forEach(function (file) {
      buildComponents(file)
    })
  })
}
function buildComponents(name) {
  let file = path.join(__dirname, `../src/components/${name}/index`)
  let _config = require('./webpack.base.conf')
  _config.entry = {}
  _config.entry[name] = file
  _config.output.filename = 'index.js'
  _config.output.libraryTarget = 'umd'
  _config.output.library = 'vui' + name
  _config.output.path = path.resolve(__dirname, '../lib/components/' + name.toLowerCase() + '/')

  touchDir(_config.output.path)

  webpack(_config, function () {
  })
}
genComponents()

function touchDir(filePath) {
  mkdirp(filePath, function () {
  })
}

