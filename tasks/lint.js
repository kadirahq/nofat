var path = require('path');
var sh = require('shelljs');
var build = require('./build');

module.exports = function (args, srcd, libd) {
  sh.cd(__rootdir);
  sh.exec('eslint -c ./.eslintrc ' + srcd);
};
