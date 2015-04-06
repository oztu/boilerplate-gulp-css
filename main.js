var path = require('path');

module.exports = function(gulp, config){
  //***************//
  // Configuration //
  //***************//
  config = config || {};

  var DEFAULTS = {
    entry: './lib/main.less',
    sources: './lib/**/*.less',
    dest: './build',
    recess: {},
    less: {},
    autoprefixer: {}
  };

  // Populate options with defaults if it doesn't contain them
  Object.keys(DEFAULTS).forEach(function(key){
    if(!(key in config)) config[key] = DEFAULTS[key];
  });

  // If an explicit name isn't set, use the name of the entry file
  if(!('name' in config)) config.name = path.basename(config.entry, '.less');


  //***************//
  //     Tasks     //
  //***************//

  // Deletes generated CSS files (and source maps) from the build directory.
  gulp.task('bpcss:clean', require('./lib/clean')(gulp, config));

  // Generates a CSS bundle of cssMain and its dependencies using LESS
  // in the build directory with an embedded source map.
  gulp.task('bpcss:bundle', require('./lib/bundle')(gulp, config));

  // Generates a minified CSS bundle in the build directory with an accompanying
  // source map.
  gulp.task('bpcss:minify', require('./lib/minify')(gulp, config));

  gulp.task('bpcss:lint', require('./lib/lint')(gulp, config));

  gulp.task('bpcss:watch', function watch(){
    gulp.watch(config.sources, gulp.parallel(
      'bpcss:lint',
      'bpcss:bundle'
    ));
  });

  //***************//
  //  Dependencies //
  //***************//
  gulp.task('bpcss:build', gulp.parallel(
    'bpcss:lint',
    gulp.series(
      'bpcss:clean',
      'bpcss:bundle',
      'bpcss:minify'
    )
  ));

  gulp.task('bpcss:dev', gulp.parallel('bpcss:build', 'bpcss:watch'));
};
