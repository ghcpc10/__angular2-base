var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
    ext: 'js html',
    ignore: ['client/*', 'gulp/*', 'server/views/*', 'dist/*']
  })
});