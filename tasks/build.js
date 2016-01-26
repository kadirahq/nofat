var fs = require('fs');
var path = require('path');
var sh = require('shelljs');

module.exports = function (args, srcd, libd) {
  sh.cd(__rootdir);
  sh.rm('-rf', libd);
  sh.exec('babel -s -d ' + libd + ' ' + srcd + ' ' + args.join(' '));

  // inject nofat runtime into index.js
  var code = fs.readFileSync(path.join(libd, 'index.js'), 'utf-8');
  var lines = code.split('\n');
  lines.splice(1, 0, '\nrequire(\'nofat-runtime\');');
  fs.writeFileSync(path.join(libd, 'index.js'), lines.join('\n'));
};
