
module.exports = function crateConfig() {
  const path = require('path');
  var root = './src/';
  var report = './report/';
  var basePath = path.join(__dirname, 'src/');
  var client = './src/client/';
  var clientApp = './src/client/app/';
  var dest = "./dist/";
  var out = './out/';
  var index = root + 'index.html';
  var temp = "./.temp/";
  var specRunnerFile = root + 'specs.html';
  var server = './src/server/';
  var config = {
    allTests: [
      client + '**/*.tests.js',
      client + '**/*.spec.js'
    ],
    basePath: basePath,
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
    shouldUseBasePath: false,
    specHelpers: [client + 'test-helpers/*.js'],
    temp: temp,
    watchFiles: [
      clientApp + "**/*.ts",
      clientApp + "**/*.html"
    ]
  };

  config.karma = getKarmaOptions();
  return config;

  function getKarmaOptions() {
    var options = {
      files: [].concat(
        config.specHelpers,
        root + 'lib/angular/angular.js',
        root + 'lib/angular/angular-route.js',
        root + 'lib/angular/angular-mocks.js',
        client + '**/*.module.js',
        client + '**/*.js',
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


