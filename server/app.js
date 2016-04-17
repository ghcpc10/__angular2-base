var express = require('express'),
    path = require('path'),
    ejs = require('ejs'),
    morgan = require('morgan')
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    moment = require('moment'),
    config = require('./config/config');


module.exports = function() {
  var app = express();

  app.set('port', process.env.PORT || 3302);
  app.set('views', path.join(config.path.server, './views'));
  app.set('root', config.path.root);

  app.engine('html', ejs.renderFile);
  app.set('view engine', 'html');

  app.use(morgan('dev'));

  app.use(methodOverride());
  app.use(cookieParser('bella-beaute-secret'));
  app.use(session({
    secret: 'angular2-base-secret',
    cookie: {},
    resave: true,
    saveUninitialized: true
  }));

  // routes
  app.use( require('./routes/static')() );
  app.use( require('./routes/routes')() );

  if (app.get('env') === 'development') {
    app.use(errorHandler());
  }





  return app;
};