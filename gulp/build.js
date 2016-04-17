const gulp = require('gulp'),
      typescript = require('gulp-typescript'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      sass = require('gulp-sass'),
      del = require('del'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      inject = require('gulp-inject'),
      gulpif = require('gulp-if'),
      argv = require('yargs').argv,
      wiredep = require('wiredep');




// version
var _setTaskVersion = function(_version) {
  argv.task = _version;
};
gulp.task('argvTask:serve', function(){ _setTaskVersion('serve') });
gulp.task('argvTask:build', function(){ _setTaskVersion('build') });



// clean
gulp.task('clean', function() {
  console.log('===> clean');
  return del(['./dist']);
});

// styles
gulp.task('styles', function() {
  console.log('===> styles');
  return gulp.src('./client/src/{app,components}/**/*.scss')
    .pipe(concat('app.css'))
    .pipe(gulpif(argv.task==='serve', sass({outputStyle: 'nested'})
     .on('error', sass.logError)))
    .pipe(gulpif(argv.task==='build', sass({outputStyle: 'compressed'})
     .on('error', sass.logError)))
    .pipe(gulp.dest('./dist'));
});







// compile ts
gulp.task('compile', function() {
  console.log('===> compile');
  const tscConfig = require('../tsconfig.json');

  return gulp.src(['./client/src/{app,components}/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

// update the tsconfig files based on the glob pattern
/*gulp.task('tsconfig-glob', function () {
  const tsconfig = require('./tsconfig-glob');

  return tsconfig({
    configPath: '.',
    indent: 2
  });
});*/






// html
gulp.task('html', function() {
  console.log('===> html');
  const bowerDeps = wiredep({
    cwd: './client',
    directory: 'client/src/bower_components',
    dependencies: true,
    devDependencies: false
  });

  const bowerCssPaths = (bowerDeps.css)? bowerDeps.css : [];
  const bowerJsPaths = (bowerDeps.js)? bowerDeps.js : [];

  const appJsPaths = [
    'dist/app/**/*.js'
  ];


  return gulp.src('./server/views/index-template.html')
    .pipe(rename('index.html'))
    // bower css
    .pipe(inject(gulp.src(bowerCssPaths), {
      addPrefix: 'client',
      ignorePath: ['client/src'],
      starttag: '<!-- inject:css (bower) -->',
      endtag: '<!-- inject:css (app) -->'
    }))
    // bower js
    .pipe(inject(gulp.src(bowerJsPaths), {
      addPrefix: 'client',
      ignorePath: 'client/src',
      starttag: '<!-- inject:js (bower) -->',
      endtag: '<!-- endinject -->'
    }))
    // dest
    .pipe(gulp.dest('./server/views'));
});










