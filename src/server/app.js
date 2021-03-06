/*jshint node:true*/
'use strict';
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');
var errorHandler = require('./routes/utils/error-handler')();
var favicon = require('serve-favicon');
var logger = require('morgan');
var port = process.env.PORT || 2333;
var routes;
const thirdPartyAssets = ['./node_modules/IAM/assets/']

var environment = process.env.NODE_ENV;

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(compress());
app.use(logger('dev'));
app.use(cors());
app.use(errorHandler.init);

routes = require('./routes/index')(app);

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function (req, res, next) {
  console.log(req.body);
  res.send('pong');
});

switch (environment) {
  case 'prod':
    console.log('** PROD **');
    app.use(express.static('./dist/'));
    app.use('/*', express.static('./dist/index.html'));
    break;
  default:
    console.log('** DEV **');
    app.use(express.static('./src/client'));

    app.use(express.static('./'));
    app.use(express.static('./tmp'));
    thirdPartyAssets.forEach(function (assets) {
      app.use('/assets', express.static(
        assets
      ));
    });
    app.use('/*', express.static('./src/client/index.html'));
    break;
}

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
  console.log('\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());
});
