var gulp = require('gulp'),
  args = require('yargs').argv,
  browserSync = require('browser-sync'),
  config = require('./gulp.config')(),
  del = require('del'),
  embedTemplates = require('@scci-itops/gulp-ng-embed-template'),
  Minimize = require('minimize'),
  minimize = new Minimize(),
  $ = require('gulp-load-plugins')({ lazy: true }),
  _ = require('lodash');


const devConfig = {
  sourcemaps: true,
  report: true,
  uglify: false,
  singlerun: false,
  dev: true,
  port: config.port,
  tsconfig: 'tsconfig.json',
  notify: true
};

const prodConfig = {
  sourcemaps: false,
  report: true,
  uglify: true,
  singlerun: true,
  dev: false,
  prod: true,
  port: config.port,
  tsconfig: 'tsconfig.prod.json',
  notify: false
}

function gulpTasks() {
  let taskConfig;
  //PROPERTIES
  let isDev = args.dev;
  const isProd = args.prod;
  log('args' + JSON.stringify(args));
  if (!isProd) {
    isDev = true;
  }

  if (isDev) {
    taskConfig = _.assign(devConfig, args);
  } else {
    taskConfig = _.assign(prodConfig, args);
  }

  //FUNCTIONS
  const testOnce = gulp.series(compileOnce, startTestOnce);
  const testAlways = gulp.series(compileOnce, autoTest);
  const optimize = gulp.series(testOnce, startOptimize);
  const serveDev = gulp.series(compileOnce, startServeDev);
  const serveBuild = gulp.series(compileOnce, optimize, startServeBuild);

  //TASKS
  var tasks = {
    build: gulp.series(cleanCode, gulp.parallel(copyPackageJson, gulp.series(optimize, startBuild))),
    cleanCode: cleanCode,
    serve: isDev ? serveDev : serveBuild,
    test: taskConfig.singlerun ? testOnce : testAlways
  };

  return tasks;

  function cleanCode(done) {
    const files = [].concat(
      config.dest + '**/*.*',
      config.temp + '**/*.*',
    )
    clean(files, done);
  }

  function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path).then(() => done());
  }

  function changeEvent(event) {
    if (event.path) {
      var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');
      log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
    } else {
      log('File ' + event);
    }
  }

  function compileOnce(done) {
    log('Compiling Typescripts to JS in ' +
      getRunMode() + ' mode');
    log('Compiling Typescripts using config: ' + taskConfig.tsconfig);
    if (taskConfig.sourcemaps) {
      log('Creating sourcemaps');
    }

    var reporter;

    const tsProject = $.typescript.createProject(taskConfig.tsconfig, {
      typescript: require('typescript')
    });

    if (taskConfig.report) {
      reporter = $.typescript.reporter.fullReporter();
    }

    const embedOptions = {
      minimize: minimize,
      jsTemplateBegin: config.jsTemplateBegin || 'template='
    };

    if (config.shouldUseBasePath) {
      embedOptions.basePath = config.basePath;
    }

    return tsProject
      .src()
      .pipe($.if(taskConfig.sourcemaps, $.sourcemaps.init()))
      .pipe($.plumber())
      .pipe($.ifElse(taskConfig.report, tsProject.bind(tsProject, reporter), tsProject))
      .js
      .pipe($.if(taskConfig.sourcemaps, $.sourcemaps.mapSources()))
      .pipe($.if(taskConfig.sourcemaps, $.sourcemaps.write()))
      .pipe($.ngAnnotate())
      .pipe(embedTemplates(embedOptions))
      .pipe(gulp.dest(config.root))
      .on('end', () => done())
      .on('error', (e) => done && done(e));
  }

  function copyPackageJson(done) {
    gulp
      .src(config.appPackageJson)
      .pipe(gulp.dest(config.dest));
    done();
  }

  function getRunMode() {
    return isDev ? 'dev' : 'prod';
  }

  function log(msg) {
    if (typeof (msg) === 'object') {
      for (var item in msg) {
        if (msg.hasOwnProperty(item)) {
          $.util.log($.util.colors.blue(msg[item]));
        }
      }
    } else {
      $.util.log($.util.colors.blue(msg));
    }
  }

  function logConfig() {
    log('===taskConfig===\n' + JSON.stringify(taskConfig));
  }

  function notify(options) {
    var notifier = require('node-notifier');
    var notifyOptions = {
      sound: 'Bottle',
      contentImage: options.icon,
      icon: options.icon
    };
    _.assign(notifyOptions, options);
    notifier.notify(notifyOptions);
  }

  function startBuild(done) {
    log('Building everything with options: ' + JSON.stringify(taskConfig));
    const subTitle = 'Deployed to the ' + config.dest + ' folder.';
    var msg = {
      title: 'gulp build',
      message: subTitle + '\n Running `gulp serve-build`',
    };
    del(config.temp);
    log(msg);
    if (taskConfig.notify) {
      notify(msg);
    }
    done();
  }

  function startOptimize() {
    log('Optimizing javascript, css, html in ' + getRunMode() + ' mode');

    return gulp
      .src(config.index)
      .pipe($.plumber())
      .pipe($.useref())
      .pipe(
        $.if('**/' + config.optimized.app, $.if(taskConfig.uglify, $.uglify())))
      .pipe(gulp.dest(config.dest));
  }

  function startTests(singleRun, done) {
    var child;
    var fork = require('child_process').fork;
    var Server = require('karma').Server;
    var excludeFiles = [];
    var serverSpecs = config.serverIntegrationSpecs;

    if (args.startServers) { // gulp test --startServers
      log('Starting server');
      var savedEnv = process.env;
      savedEnv.NODE_ENV = 'dev';
      savedEnv.PORT = 8888;
      child = fork(config.nodeServer);
    } else {
      if (serverSpecs && serverSpecs.length) {
        excludeFiles = serverSpecs;
      }
    }

    new Server({
      configFile: __dirname + '/karma.conf.js',
      exclude: excludeFiles,
      singleRun: singleRun
    }, karmaCompleted).start();

    function karmaCompleted(karmaResult) {
      log('Karma completed!');
      if (child) {
        log('Shutting down the child process');
        child.kill();
      }
      if (karmaResult === 1) {
        done(
          new $.util.PluginError('karma', {
            message: 'karma: tests failed with code ' + karmaResult
          })
        );
      } else {
        done();
      }
    }
  }

  function startServe(isDev, specRunner) {
    var nodeOptions = {
      script: config.nodeServer,
      delayTime: 1,
      env: {
        'PORT': taskConfig.port,
        'NODE_ENV': isDev ? 'dev' : 'prod'
      },
      watch: [config.server]
    };

    return $.nodemon(nodeOptions)
      .on('restart', function (ev) {
        log('*** nodemon restarted');
        log('files changed on restart:\n' + ev);
        setTimeout(function () {
          browserSync.notify('reloading now ...');
          browserSync.reload({ stream: false });
        }, config.browserReloadDelay);
      })
      .on('start', function () {
        log('*** nodemon started');
        startBrowserSync(isDev, specRunner);
      })
      .on('crash', function () {
        log('*** nodemon crashed: script crashed for some reason');
      })
      .on('exit', function () {
        log('*** nodemon exited cleanly');
      });
  }

  function startBrowserSync(isDev, specRunner) {
    if (args.nosync || browserSync.active) {
      return;
    }

    log('Starting browser-sync on port ' + taskConfig.port);
    // log('Watching files : \n' + config.watchFiles)

    if (isDev) {
      watchWhileServeDev();
    } else {
      watchWhileServeBuild();
    }

    var browserSyncOptions = {
      proxy: 'localhost:' + taskConfig.port,
      port: 3000,
      files: [],
      ghostMode: {
        clicks: true,
        location: false,
        forms: true,
        scroll: true
      },
      injectChanges: true,
      logFileChanges: true,
      logLevel: 'debug',
      logPrefix: 'gulp-patterns',
      notify: true,
      reloadDelay: 0
    };

    if (specRunner) {
      browserSyncOptions.startPath = config.specRunnerFile;
    }

    browserSync(browserSyncOptions);
  }

  function reloadBrowser(done) {
    browserSync.reload();
    done();
  }

  function watchWhileServeBuild() {
    const files = [
      config.localModules,
      config.testTs,
      config.less,
      config.ts,
      config.html,
      config.index
    ];
    gulp.watch(
      files,
      gulp.series(optimize, reloadBrowser))
      .on('change', changeEvent);
    log('watching files while serving: ' + JSON.stringify(files));
  }

  function watchWhileServeDev() {
    const files = [
      config.localModules,
      config.less,
      config.ts,
      config.html,
      config.index
    ];

    gulp.watch(
      files,
      gulp.series(compileOnce, reloadBrowser))
      .on('change', changeEvent);
    log('watching files while serving: ' + JSON.stringify(files));
  }

  function startServeDev() {
    logConfig();
    startServe(true/* isDev */);
  }

  function startServeBuild() {
    startServe(false/* isDev */);
  }

  function startCompileOnce(done) {
    compileOnce(done);
  }

  function startTestOnce(done) {
    logConfig();
    startTests(true /* singleRun */, done);
  }

  function autoTest(done) {
    logConfig();
    gulp.watch([config.index, config.html, config.ts, config.testTs], startCompileOnce);
    startTests(false/* singleRun */, done);
  };
}

module.exports = gulpTasks;
