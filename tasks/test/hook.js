require('babel-polyfill');
require('source-map-support/register');
require('babel-register')({
  presets: [ 'es2015', 'stage-3' ],
});
