var gulp = require('gulp'),
    args = require('yargs').argv,
    browserSync = require('browser-sync'),
    config = require('./gulp.config')(),
    del = require('del'),
    embedTemplates = require('@scci-itops/gulp-ng-embed-template'),
    Minimize = require('minimize'),
    minimize = new Minimize(),
    $ = require('gulp-load-plugins')({ lazy: true }),
    path = require('path'),
    _ = require('lodash'),
    tsProject;

var workingDir = process.cwd();

module.exports = function() {
    //PROPERTIES
    let isDebug = args.debug;
    const isProd = args.prod;
    if (!isProd) {
        isDebug = true;
    }
    const canCreateSourceMap = isDebug || args.sourcemaps;
    const canCreateReport = isDebug || args.report;
    const canUglify = isProd || args.uglify;
    const canTestAlways = args.watch || args.sr;
    const canServeDev = args.dev ? true : false;
    var port = process.env.PORT || config.port;
    const tsconfig = args.tsconfig || 'tsconfig.json';

    //FUNCTIONS
    const startCompileOnce = (done) => compileOnce(done);
    const autoCompile = () => gulp.watch(config.watchFiles, startCompileOnce);
    var cleanCode = gulp.series(cleanDist);
    const compile = args.watch ? autoCompile : compileOnce;
    const startTestOnce = (done) => startTests(true /* singleRun */, done);
    const startTestAlways = (done) => {
        gulp.watch(config.watchFilesForTest, startCompileOnce);
        startTests(false/* singleRun */, done)
    };
    const testOnce = gulp.series(compileOnce, startTestOnce);
    const testAlways = gulp.series(compileOnce, startTestAlways);
    const test = canTestAlways ? testAlways : testOnce;
    const optimize = gulp.series(gulp.parallel(compileOnce, testOnce), startOptimize)
    const build = gulp.series(optimize, startBuild);
    const startServeDev = () => startServe(true/* isDev */);
    const startServeBuild = () => startServe(false/* isDev */);
    const serveDev = gulp.series(compileOnce, startServeDev);
    const serveBuild = gulp.series(compileOnce, optimize, startServeBuild);
    const serve = canServeDev ? serveDev : serveBuild;

    //TASKS
    var tasks = {
        build: build,
        compile: compile,
        clean: cleanCode,
        serve: serve,
        serveDev: serveDev,
        serveBuild: serveBuild,
        test: test,
        optimize: optimize,
    };

    return tasks;

    function cleanDist(done) {
        clean(config.dest + '**/*.{html,css,js}', done);
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
        log('Compiling Typescripts using config: ' + tsconfig);
        if (canCreateSourceMap) {
            log('Creating sourcemaps');
        }

        var reporter;

        if (!tsProject) {
            tsProject = $.typescript.createProject(tsconfig, {
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

    function notify(options) {
        var notifier = require('node-notifier');
        var notifyOptions = {
            sound: 'Bottle',
            contentImage: config.icon,
            icon: config.icon
        };
        _.assign(notifyOptions, options);
        notifier.notify(notifyOptions);
    }

    function startBuild(done) {
        log('Building everything');
        const subTitle = 'Deployed to the ' + config.dest + ' folder.';
        var msg = {
            title: 'gulp build',
            message: subTitle + '\n Running `gulp serve-build`',
        };
        del(config.temp);
        log(msg);
        notify(msg);
        done();
    }

    function startOptimize() {
        log('Optimizing javascript, css, html in ' + getRunMode() + ' mode');

        return gulp
            .src(config.index)
            .pipe($.plumber())
            .pipe($.useref())
            .pipe(
                $.if('**/' + config.optimized.app, $.if(canUglify, $.uglify())))
            .pipe(gulp.dest(config.dest));
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
                'PORT': port,
                'NODE_ENV': isDev ? 'dev' : 'build'
            },
            watch: [config.server]
        };

        return $.nodemon(nodeOptions)
            .on('restart', function(ev) {
                log('*** nodemon restarted');
                log('files changed on restart:\n' + ev);
                setTimeout(function() {
                    browserSync.notify('reloading now ...');
                    browserSync.reload({ stream: false });
                }, config.browserReloadDelay);
            })
            .on('start', function() {
                log('*** nodemon started');
                startBrowserSync(isDev, specRunner);
            })
            .on('crash', function() {
                log('*** nodemon crashed: script crashed for some reason');
            })
            .on('exit', function() {
                log('*** nodemon exited cleanly');
            });
    }

    function startBrowserSync(isDev, specRunner) {
        if (args.nosync || browserSync.active) {
            return;
        }

        log('Starting browser-sync on port ' + port);
        // log('Watching files : \n' + config.watchFiles)

        if (isDev) {
            gulp.watch(config.watchFiles,
                gulp.series(compileOnce, reloadBrowser))
                .on('change', changeEvent);
        } else {
            gulp.watch(config.watchFiles,
                gulp.series(optimize, reloadBrowser))
                .on('change', changeEvent);
        }

        var options = {
            proxy: 'localhost:' + port,
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
            options.startPath = config.specRunnerFile;
        }

        browserSync(options);
    }

    function reloadBrowser(done) {
        browserSync.reload();
        done();
    }

}


