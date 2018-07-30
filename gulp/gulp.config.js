
module.exports = function crateConfig() {
  const path = require('path');
  const workingDir = process.cwd();
  var root = path.join(workingDir, 'src/');
  var report = path.join(workingDir, 'report/');
  var dest = path.join(workingDir, 'dist/');
  var out = path.join(workingDir, 'out/');
  var temp = path.join(workingDir, '.temp/');

  var client = path.join(root, 'client/');
  var clientApp = path.join(client, 'app/');
  var index = path.join(client, 'index.html');
  var specRunnerFile = path.join(root, 'specs.html');
  var server = path.join(root, 'server/');

  var config = {
    allTests: [
      client + '**/*.tests.js',
      client + '**/*.spec.js'
    ],
    browserReloadDelay: 1000,
    client: client,
    clientApp: clientApp,
    dest: dest,
    filesToWatch: [
      path.join(clientApp, '**/*.js'),
      path.join(clientApp, '**/*.html'),
      path.join(clientApp, '**/*.css'),
      index,
    ],
    icon: path.join(__dirname, './gulp.png'),
    html: clientApp + '**/*.html',
    index: index,
    js: [
      clientApp + '**/*.module.js',
      clientApp + '**/*.js',
      '!' + clientApp + '**/*.spec.js'
    ],
    less: [],
    nodeServer: './src/server/app.js',
    out: out,
    optimized: {
      app: 'app.js',
      lib: 'lib.js'
    },
    port: 2333,
    root: root,
    server: server,
    serverIntegrationSpecs: [],
    specRunner: specRunnerFile,
    shouldUseroot: false,
    specHelpers: [client + 'test-helpers/*.js'],
    temp: temp,
    watchFiles: [
      '!' + clientApp + "**/*spec.ts",
      clientApp + "**/*.ts",
      clientApp + "**/*.html",
      index
    ],
    watchFilesForTest: [
      clientApp + "**/*spec.ts",
      clientApp + "**/*.ts",
      clientApp + "**/*.html",
      index
    ]
  };

  config.karma = getKarmaOptions();
  return config;

  function getKarmaOptions() {
    var options = {
      files: [].concat(
        config.specHelpers,
        workingDir + '/lib/angular/angular.js',
        workingDir + '/lib/angular/angular-route.js',
        workingDir + '/lib/angular/angular-mocks.js',
        clientApp + '**/*.module.js',
        clientApp + '**/*.js',
      ),
      exclude: [],
      coverage: {
        dir: report + 'coverage',
        reporters: [
          { type: 'html', subdir: 'report-html' },
          { type: 'lcov', subdir: 'report-lcov' },
          { type: 'text-summary' }
        ]
      },
      preprocessors: {}
    };
    options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
    return options;
  }

}


