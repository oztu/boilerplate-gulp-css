var path = require('path');
var gulp = require('gulp');
var boilerplate = require('./main');

boilerplate(gulp, {
  name: 'example',
  entry: path.join(__dirname, '/example/main.less'),
  sources: path.join(__dirname + '/example/**/*.less')
});
