var sourcemaps = require('gulp-sourcemaps'),
  less = require('gulp-less'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename');

module.exports = function(gulp, config){
  return function bundle(){
    return gulp.src(config.entry)
      .pipe(sourcemaps.init())
      .pipe(less(config.less))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(rename(config.name + '.css'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dest));
  };
};
