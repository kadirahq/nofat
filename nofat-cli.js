#!/usr/bin/env node

var path = require('path');
var sh = require('shelljs');
var tasks = require('./tasks');

// set global variables
__rootdir = __dirname;

// update the PATH variable to include local node modules bins
process.env.PATH += ':' + path.join(__dirname, 'node_modules/.bin');

// get user parameters
var base = path.join(__dirname, 'temp');
var srcd = path.join(base, 'src');
var libd = path.join(base, 'lib');
var args = process.argv.slice(2);
var task = args.shift();

// ensure symlink
sh.rm('-rf', base);
sh.ln('-s', process.cwd(), base);

// run the task
if (tasks[task]) {
  tasks[task](args, srcd, libd);
} else {
  console.error('unknown task');
  process.exit(1);
}
