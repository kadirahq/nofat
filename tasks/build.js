var fs = require('fs');
var glob = require('glob');
var path = require('path');
var sh = require('shelljs');

module.exports = function (args, srcd, libd) {
  sh.cd(__rootdir);
  sh.exec('rm -rf '+ libd +' || :');
  sh.exec('babel -s -D -d ' + libd + ' ' + srcd + ' ' + args.join(' '));

  var headers = [
    'require(\'babel-polyfill\');',
    'require(\'source-map-support/register\');',
  ];

  var files = glob.sync('**/*.js', {
    cwd: libd,
    strict: true,
    nodir: true,
  });

  files.forEach(function (file) {
    var filepath = path.join(libd, file);
    var code = fs.readFileSync(filepath, 'utf-8');
    var lines = code.split('\n');
    lines.splice(1, 0, '\n' + headers.join('\n'));
    fs.writeFileSync(filepath, lines.join('\n'));
  });
};
