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
 * serve-dev: it will serve the index.html from client folder
 */
gulp.task('serve-dev', tasks.serveDev);

/**
 * serve-dev: it will serve the index.html from destination folder
 */
gulp.task('serve-build', tasks.serveBuild);

/**
 * test: it run tests
 * @watch : continous tests
 */
gulp.task('test', tasks.test);



