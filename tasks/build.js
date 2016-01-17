var fs = require('fs');
var path = require('path');
var sh = require('shelljs');

module.exports = function (args, srcd, libd) {
  var command = [
    'babel',
    '--presets es2015,stage-3',
    '--source-maps',
    '--no-babelrc',
    '-d ' + libd,
    srcd,
  ].join(' ');

  sh.cd(__rootdir);
  sh.exec(command);

  // inject nofat runtime into index.js
  var code = fs.readFileSync(path.join(libd, 'index.js'), 'utf-8');
  var lines = code.split('\n');
  lines.splice(1, 0, '\nrequire(\'nofat/runtime\');');
  fs.writeFileSync(path.join(libd, 'index.js'), lines.join('\n'));
};
