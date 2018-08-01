
module.exports = function crateConfig() {
  const path = require('path');
  const workingDir = process.cwd();
  const root = path.join(workingDir, 'src/');
  const report = path.join(workingDir, 'report/');
  const dest = path.join(workingDir, 'dist/');
  const temp = path.join(workingDir, '.temp/');
  const nodeDir = path.join(workingDir, 'node_modules/');
  const client = path.join(root, 'client/');
  const clientApp = path.join(client, 'app/');
  const index = path.join(client, 'index.html');
  const server = path.join(root, 'server/');
  const imagesDir = path.join(client, 'assets/images');
  const fontsDir = path.join(client, 'assets/fonts');

  const config = {
    allTs: [
      root + '**/*.ts',
      './*.ts'
    ],

    /**
     *  packagejson which will be copied in destination folder
     */
    appPackageJson: path.join(clientApp, 'package.json'),

    /**
     *  time to load browser sync
    */
    browserReloadDelay: 1000,
    css: temp + 'styles.css',
    client: client,
    clientApp: clientApp,

    /**
     * folder location where build artifacts will go
     */
    dest: dest,
    fontsDir: fontsDir,
    html: clientApp + '**/*.html',
    icon: path.join(__dirname, './gulp.png'),
    imagesDir: imagesDir,
    index: index,
    less: [
      client + 'styles/styles.less'
    ],
    nodeServer: './src/server/app.js',
    localModules: [

    ],
    optimized: {
      app: 'app.bundle.js',
      lib: 'lib.bundle.js'
    },
    assets: {
      imagesOutput: path.join(dest, 'assets/images/'),
      fontsOutput: path.join(dest, 'assets/fonts/'),
      images: [
        path.join(imagesDir, '**/*.*'),
        path.join(nodeDir, 'iam/assets/images/**/*.*'),
        path.join(nodeDir, 'iam1/assets/images/**/*.*')
      ],
      fonts: [
        path.join(fontsDir, '**/*.*'),
        path.join(nodeDir, 'iam/assets/fonts/**/*.*'),
        path.join(nodeDir, 'iam1/assets/fonts/**/*.*')
      ],
    },
    port: 2410,
    root: root,
    server: server,
    serverIntegrationSpecs: [],
    specRunner: '',
    specHelpers: [client + 'test-helpers/*.js'],
    temp: temp,
    ts: [
      clientApp + "**/*.ts",
      '!' + clientApp + "**/*.spec.ts"
    ],
    testTs: [
      clientApp + "**/*.spec.ts",
    ]
  };

  config.karma = getKarmaOptions();

  return config;

  function getKarmaOptions() {
    var options = {
      files: [].concat(
        clientApp + '_references.ts',
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


