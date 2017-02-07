#!/usr/bin/env node

var path = require('path')
var shelljs = require('shelljs')
var Fuseki = require('fuseki')

var server = new Fuseki({pipeOutput: true})

server.start()

server.wait().then(function () {
  return server.createDataset('/alod', 'tdb')
}).then(function () {
  shelljs.exec('curl -v -X POST --form files[]=@input/sample.nq http://localhost:3030/alod/upload')
}).catch(function (err) {
  console.error(err.stack || err.message)
})
