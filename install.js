/* global mkdir */

require('shelljs/global')

var fs = require('fs')
var path = require('path')

mkdir('-p', 'run/configuration')

var config = fs.readFileSync('travertin.ttl.template').toString()

config = config
  .split('${run}')
  .join(path.join(__dirname, 'run'))

fs.writeFileSync('run/configuration/travertin.ttl', config)
