var path = require('path');
var shell = require('shelljs');

module.exports = function (options) {
  var srcdir = path.join(options.projectDir, 'src');
  var cfg = path.join(__dirname, '.eslintrc');
  var bin = path.join(options.nofatRootDir, 'node_modules/.bin/eslint');
  shell.exec(bin + ' -c ' + cfg + ' ' + srcdir + ' ');
};
