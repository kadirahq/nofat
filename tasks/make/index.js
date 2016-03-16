var fs = require('fs');
var path = require('path');
var glob = require('glob');
var babel = require('babel-core');
var shell = require('shelljs');
shell.config.fatal = true;

var HEADERS = [
  'require(\'babel-polyfill\');',
  'require(\'source-map-support/register\');',
].join('\n');

module.exports = function (options) {
  var srcdir = path.join(options.projectDir, 'src');
  var libdir = path.join(options.projectDir, 'lib');

  shell.rm('-rf', libdir);
  shell.mkdir(libdir);

  var files = glob.sync('**/*.*', {cwd: srcdir, strict: true, nodir: true});

  files.forEach(function (fpath) {
    if (/__tests__/.test(fpath)) {
      return;
    }

    var srcfile = path.join(srcdir, fpath);
    var libfile = path.join(libdir, fpath);
    shell.mkdir('-p', path.dirname(libfile));

    var extension = path.extname(fpath).toUpperCase();
    if (extension !== '.JS') {
      shell.cp(srcfile, libfile);
      return;
    }

    var babelopts = {
      presets: [ 'es2015', 'stage-3' ],
      sourceMaps: 'inline',
      sourceRoot: options.projectDir,
    };

    babel.transformFile(srcfile, babelopts, function (err, res) {
      if (err) {
        throw err;
      }

      var lines = res.code.split('\n');
      lines.splice(1, 0, '\n' + HEADERS);
      var content = lines.join('\n');

      fs.writeFile(libfile, content, function (err) {
        if (err) {
          throw err;
        }
      });
    });
  });
};
