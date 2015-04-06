var path = require('path');

var rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  csso = require('gulp-csso');

module.exports = function(gulp, config){
  return function minify(){
    return gulp.src(path.join(config.dest, config.name + '.css'))
      .pipe(rename(config.name + '.min.css'))
      .pipe(sourcemaps.init({loadMaps: true, debug: true}))
      .pipe(csso())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.dest));
  };
};
