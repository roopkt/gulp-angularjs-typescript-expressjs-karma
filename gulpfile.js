var gulp = require('gulp'),
  tasks = require('./gulp-tasks')();

gulp.task('compile', tasks.compile);
gulp.task('test', tasks.test);
gulp.task('clean', tasks.clean);
gulp.task('build', tasks.build);
gulp.task('build-once', tasks.buildOnce);
gulp.task('clean-build', tasks.cleanBuild);
gulp.task('build-lib', tasks.buildLib);
gulp.task('serve-dev', tasks.serveDev);
gulp.task('auto-test', tasks.autoTest);
gulp.task('test', tasks.test);



