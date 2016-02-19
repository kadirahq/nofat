var fs = require('fs');
var path = require('path');
var sh = require('shelljs');

module.exports = function (args, srcd, libd) {
  sh.cd(__rootdir);
  sh.rm('-rf', libd);
  sh.exec('babel -s -d ' + libd + ' ' + srcd + ' ' + args.join(' '));
};
