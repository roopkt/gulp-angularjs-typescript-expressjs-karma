var gulp = require('gulp'),
  tasks = require('./gulp/gulp-tasks')();


gulp.task('build', tasks.build);
/**
 * clean: it cleans destination folder and other temp folders
 */
gulp.task('clean-code', tasks.cleanCode);
gulp.task('images', tasks.images);

/**
 * serve: compile typescript and run browser
 * @isDev?: true, it will serve index.html from clientapp location
 * @isDev?: false, it will serve index.html from destination location
 */
gulp.task('serve', tasks.serve);
gulp.task('styles', tasks.styles);

/**
 * test: it run tests
 * @watch : continous tests
 */
gulp.task('test', tasks.test);



