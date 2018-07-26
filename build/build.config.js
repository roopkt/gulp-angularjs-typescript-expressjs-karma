
module.exports = function crateConfig() {
  const path = require('path');
  var deps = require('./deps.json');

  var root = './src/';
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
    deps: deps,
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
    libs: deps.libs,
    less: [],
    nodeServer: './src/server/app.js',
    out: out,
    output: {
      client: 'client.bundle.js',
      vendor: 'vendor.bundle.js',
    },
    port: 2333,
    root: root,
    server: server,
    specRunner: specRunnerFile,
    shouldUseBasePath: false,
    temp: temp,
    watchFiles: [
      clientApp + "**/*.ts",
      clientApp + "**/*.html"
    ]
  };

  config.getAllJs = function () {
    var deps = config.deps;
    var allJs = [];
    for (var js in deps) {
      if (js !== 'libs') {
        allJs = allJs.concat(deps[js]);
      }
    }
    return allJs;
  }
  return config;
}


