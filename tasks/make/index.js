var fs = require('fs');
var path = require('path');
var glob = require('glob');
var babel = require('babel-core');
var shell = require('shelljs');
shell.config.fatal = true;

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

    var extension = path.extname(fpath);
    if (extension.toUpperCase() !== '.JS') {
      shell.cp(srcfile, libfile);
      return;
    }

    var babelopts = {
      presets: [ 'es2015', 'stage-3' ],
      sourceMaps: 'inline',
      sourceRoot: srcdir,
    };

    babel.transformFile(srcfile, babelopts, function (err, res) {
      if (err) {
        throw err;
      }
      fs.writeFile(libfile, res.code, function (err) {
        if (err) {
          throw err;
        }
      });
    });
  });
};
