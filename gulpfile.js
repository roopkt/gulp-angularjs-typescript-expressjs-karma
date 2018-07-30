var gulp = require('gulp'),
  tasks = require('./gulp/gulp-tasks')();


gulp.task('build', tasks.build);
/**
 * compile: it compiles javascript
 * @watch : continous compiles
 */
gulp.task('compile', tasks.compile);

/**
 * clean: it cleans destination folder and other temp folders
 */
gulp.task('clean', tasks.clean);

/**
 * serve: compile typescript and run browser
 * @isDev?: true, it will serve index.html from clientapp location
 * @isDev?: false, it will serve index.html from destination location
 */
gulp.task('serve', tasks.serve);

/**
 * test: it run tests
 * @watch : continous tests
 */
gulp.task('test', tasks.test);



