var path = require('path');
var shell = require('shelljs');

module.exports = function (options) {
  var srcdir = path.join(options.projectDir, 'src');
  var target = path.join(srcdir, '**/__tests__/**/*.js');
  var hook = path.join(__dirname, 'hook.js');
  var args = options.arguments.join(' ');
  var bin = path.join(options.nofatRootDir, 'node_modules/.bin/mocha');
  shell.exec(bin + ' --require ' + hook + ' ' + target + ' ' + args);
};
