var sh = require('shelljs');
var build = require('./build');

module.exports = function (args, srcd, libd) {
  build([], srcd, libd);
  sh.exec('node ' + libd + ' ' + args.join(' '));
};
