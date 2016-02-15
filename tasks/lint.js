var sh = require('shelljs');

module.exports = function (args, srcd, libd) {
  sh.cd(__rootdir);
  sh.exec('eslint -c ./.eslintrc ' + srcd + ' ' + args.join(' '));
};
