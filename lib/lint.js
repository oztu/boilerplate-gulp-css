var recess = require('gulp-recess');

module.exports = function(gulp, config){
  return function lint(){
    return gulp.src(config.sources)
      .pipe(recess(config.recess));
  };
};
