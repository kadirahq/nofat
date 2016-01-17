#!/usr/bin/env node

var path = require('path');
var tasks = require('./tasks');

// set global variables
__rootdir = __dirname;

// get user parameters
var base = process.cwd();
var srcd = path.join(base, 'src');
var libd = path.join(base, 'lib');
var args = process.argv.slice(2);
var task = args.shift();

// run the task
if (tasks[task]) {
  tasks[task](args, srcd, libd);
} else {
  console.error('unknown task');
  process.exit(1);
}
