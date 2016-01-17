var sh = require('shelljs');
var build = require('./build');

module.exports = function (args, srcd, libd) {
  build(args, srcd, libd);
  sh.exec('node ' + libd);
};
