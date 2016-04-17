var gulp = require('gulp'),
    fs = require('fs'),
    runSequence = require('run-sequence');



fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
  require('./gulp/'+task);
});


gulp.task('basicGulpBuild', function(callback) {
  runSequence(
    'clean',
    'styles',
    'compile',
    'html',
    callback
  );
});

gulp.task('build', ['argvTask:build', 'basicGulpBuild']);
gulp.task('serve', ['argvTask:serve', 'basicGulpBuild'], function() {
  gulp.start('nodemon');
  gulp.watch('./client/src/{app,components}/**/*.scss', ['styles']);
  gulp.watch('./client/src/{app,components}/**/*.ts', ['compile']);
});