var path = require('path');
var sh = require('shelljs');

module.exports = function (args, srcd, libd) {
  sh.cd(__rootdir);
  sh.exec('mocha --require babel-polyfill ' + path.join(libd, '**/__tests__/**/*.js') + ' ' + args.join(' '));
};
