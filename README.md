# CSS Module Builder

> Eliminates boilerplate required to lint, compiles, prefix, and minify LESS files.

# Provided Tasks
```sh
# Lints, compiles, prefixes, and minifies LESS files and puts the artifacts in the ./build folder
gulp bpcss:build

# Watches source files and rebuilds when they are modified
gulp bpcss:dev
```

# Use
Execute `npm install --save-dev gulp boilerplate-gulp-css`, then modify your `Gulpfile.js` like so (or create one):

```javascript
var gulp = require('gulp'),
  bpcss = require('boilerplate-gulp-css');

bpcss(gulp, {
  // This will be used to name the built artifact (e.g., MyModule.css)
  name: 'MyModule',

  // The root of your LESS module
  entry: path.join(__dirname, 'src/main.less'),

  // The sources for your project (used in linting)
  sources: path.join(__dirname, 'src/**/*.less'),

  // The destination to write the built files
  dest: path.join(__dirname, 'build')
});

// Rest of your gulp file, potentially overwriting the boilerplate-gulp tasks...
```

# Capabilities
* Compiles [LESS](http://lesscss.org/) files into a single file. Produces both an unminified version and a minified version with  source maps.
* Automatically prefixes CSS as nescessary ([autoprefixer](https://github.com/postcss/autoprefixer))
* Optimizes and minifies CSS ([csso](http://css.github.io/csso/))
* Lints CSS ([recess](http://twitter.github.io/recess/))
