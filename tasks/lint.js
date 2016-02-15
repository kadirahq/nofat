var sh = require('shelljs');

module.exports = function (args, srcd, libd) {
  sh.cd(__rootdir);
  var res = sh.exec('eslint -c ./.eslintrc ' + srcd + ' ' + args.join(' '));
  console.log(res.output);
};
