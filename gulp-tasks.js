var gulp = require('gulp'),
  args = require('yargs').argv,
  browserSync = require('browser-sync'),
  config = require('./build/build.config')(),
  del = require('del'),
  embedTemplates = require('@scci-itops/gulp-ng-embed-template'),
  Minimize = require('minimize'),
  minimize = new Minimize(),
  $ = require('gulp-load-plugins')({ lazy: true }),
  path = require('path'),
  tsProject;

var workingDir = process.cwd();

module.exports = function () {

  let isDebug = args.debug;
  const isProd = args.prod;
  if (!isProd) {
    isDebug = true;
  }
  const isWatchMode = args.watch;
  const isNotWatchMode = !isWatchMode;
  const canCreateSourceMap = isDebug || args.sourcemaps;
  const canCreateReport = isDebug || args.report;
  const canUglify = isProd || args.uglify;
  var port = process.env.PORT || config.port;

  const buildOnce = gulp
    .series(
      compile,
      optimize,
      copyIndex);
  const autoBuild = (done) => gulp.watch(config.watchFiles, buildOnce);

  const autoTest = gulp.parallel(
    (done) => startTests(false/* singleRun */, done)
  );
  const autoCompile = (done) => gulp.watch(config.watchFiles, compile).on('end', () => done());
  const buildLib = gulp.series(optimizeVendor);
  var cleanCode = gulp.series(cleanDist);
  const build = args.watch ? autoBuild : buildOnce;
  const test = gulp.parallel(
    (done) => startTests(true /* singleRun */, done)
  );

  var tasks = {
    autoTest: autoTest,
    compile: args.watch ? autoCompile : compile,
    clean: cleanCode,
    build: build,
    buildOnce: buildOnce,
    buildLib: buildLib,
    cleanBuild: gulp.series(
      cleanCode,
      gulp.parallel(buildLib, build)),
    serve: serve,
    serveDev: gulp.series(compile, () => serve(true/* isDev */)),
    test: test
  };

  return tasks;

  function copyIndex(done) {
    gulp
      .src(config.index)
      .pipe(gulp.dest(config.dest))
      .on('end', () => done());
  }

  function cleanDist(done) {
    clean(config.dest + '**/*.{html,css,js}', done);
  }

  function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path).then(() => done());
  }

  function changeEvent(event) {
    var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');
    log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
  }

  function compile(done) {
    log('Compiling Typescripts to JS in ' + getRunMode() + ' mode');
    if (canCreateSourceMap) {
      log('Creating sourcemaps');
    }

    var reporter;

    if (!tsProject) {
      tsProject = $.typescript.createProject('tsconfig.json', {
        typescript: require('typescript')
      });
    }

    if (canCreateReport) {
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
      .pipe($.if(canCreateSourceMap, $.sourcemaps.init()))
      .pipe($.plumber())
      .pipe($.ifElse(canCreateReport, tsProject.bind(tsProject, reporter), tsProject))
      .js
      .pipe($.if(canCreateSourceMap, $.sourcemaps.mapSources()))
      .pipe($.if(canCreateSourceMap, $.sourcemaps.write()))
      .pipe($.ngAnnotate())
      .pipe(embedTemplates(embedOptions))
      .pipe(gulp.dest(config.root))
      .on('end', () => done())
      .on('error', (e) => done && done(e));
  }

  function getRunMode() {
    return isDebug ? 'debug' : 'prod';
  }

  function inject(done) {
    gulp
      .src(config.index)
      .pipe($.inject(gulp.src(config.getAllJs(), { read: false }), { name: 'inject:client' }))
  }

  function addRoot(sourcePath) {
    return path.join(workingDir, '/', config.root, sourcePath);
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

  function optimize(done) {
    log('Optimizing code in ' + getRunMode() + ' mode');

    const allSrc = config.getAllJs();
    return gulp
      .src(allSrc)
      .pipe($.concat(config.output.client))
      .pipe($.plumber())
      .pipe($.if(canUglify, $.uglify()))
      .pipe(gulp.dest(config.dest))
      .on('end', () => done())
      .on('error', (e) => done(e));
  }

  function optimizeVendor(done) {
    log('Optimizing vendor code in ' + getRunMode() + ' mode');

    const allSrc = config.libs;

    return gulp
      .src(allSrc)
      .pipe($.concat(config.output.vendor))
      .pipe($.plumber())
      .pipe($.if(canUglify, $.uglify()))
      .pipe(gulp.dest(config.dest))
      .on('end', () => done())
      .on('error', (e) => done(e));
  }

  // function startSingleRunTests(done) {
  //   startTests(true, done);
  // }

  // function startAutoTests(done) {
  //   log('Karma: started auto tests');

  //   startTests(false, done);
  // }

  // function test(done) {
  //   var singleRun = args.singleRun ? true : false;
  //   var msg = singleRun ? 'Karma: started  with Single Run ' : 'Karma: started with Auto Test';

  //   log(msg);

  //   var config = {
  //     configFile: workingDir + '/karma.conf.js',
  //     singleRun: singleRun
  //   };

  //   new Server(config, karmaCompleted).start();

  //   function karmaCompleted(karmaResult) {
  //     log('karma completed!');

  //     if (karmaResult === 1) {
  //       done('karma: tests failed with code ' + karmaResult);
  //     } else {
  //       done();
  //     }
  //   }
  // }
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
      singleRun: !!singleRun
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

  function serve(isDev, specRunner) {
    var nodeOptions = {
      script: config.nodeServer,
      delayTime: 1,
      env: {
        'PORT': port,
        'NODE_ENV': isDev ? 'dev' : 'build'
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

    log('Starting browser-sync on port ' + port);

    if (isDev) {
      // gulp.watch([config.less], ['styles'])
      //   .on('change', changeEvent);
    } else {
      gulp.watch([
        config.less,
        config.js,
        config.html],
        gulp.series(optimize, browserSync.reload))
        .on('change', changeEvent);
    }

    var options = {
      proxy: 'localhost:' + port,
      port: 3000,
      files: isDev ? [
        config.client + '**/*.js',
        '!' + config.less,
        config.temp + '**/*.css',
        config.index
      ] : [],
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
      options.startPath = config.specRunnerFile;
    }

    browserSync(options);
  }

}


