require('babel-polyfill');
require('app-module-path').addPath(process.cwd());
require('marko/node-require').install();
require('lasso/node-require-no-op').enable('.less', '.css', '.scss');

const Koa = require('koa');
const conditional = require('koa-conditional-get');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const favicon = require('koa-favicon');
const session = require('koa-session-minimal');
const flash = require('koa-flash-simple');
const helmet = require('koa-helmet');
const etag = require('koa-etag');
const uuid = require('uuid');
const router = require('koa-router')();
const passport = require('koa-passport');
const mount = require('koa-mount');
const cacheControl = require('koa-cache-control');
const Constants = require('./server/constants');

const Public = require('./server/routes.json').public;
const Protected = require('./server/routes.json').protected;
const Auth = require('./server/routes.json').auth;
const isProduction = Constants.APP.ENV === 'production';

require('marko/browser-refresh').enable();
require('lasso/browser-refresh').enable('*.marko *.css *.less *.styl *.scss *.sass *.png *.jpeg *.jpg *.gif *.webp *.svg *.variables *.overrides');
require('lasso').configure({
  require: {
    transforms: [
      {
        transform: 'lasso-babel-transform',
        config: {
          extensions: ['.js'],
          babelOptions: {
            presets: [ "env" ]
          }
        }
      }
    ]
  },
  plugins: [
    {
      plugin: 'lasso-less',
      config: {
        extensions: ['less', 'css', 'variables', 'overrides']
      }
    },
    {
      plugin: 'lasso-sass',
      config: {
        extensions: ['scss', 'css']
      }
    },
    {
      plugin: 'lasso-autoprefixer',
      config: {
        browsers: [
          'Chrome >= 45',
          'Firefox ESR',
          'Edge >= 12',
          'Explorer >= 10',
          'iOS >= 9',
          'Safari >= 9',
          'Android >= 4.4',
          'Opera >= 30'
        ]
      }
    },
    'lasso-marko'
  ],
  outputDir: `${__dirname}/static`,
  bundlingEnabled: isProduction,
  minify: isProduction,
  fingerprintsEnabled: isProduction,
  bundles: [
    {
      name: 'jquery',
      dependencies: [
        "jquery/dist/jquery.js",
      ]
    },
    {
      name: 'marko',
      dependencies: [
        'require: marko'
      ]
    },
    {
      name: 'marko-widgets',
      dependencies: [
        'require: marko-widgets'
      ]
    },
    {
      name: 'events',
      dependencies: [
        'require: events'
      ]
    }
  ]
});

const app = new Koa();
app.proxy = true;

app.use(cacheControl({
  noStore: true,
  noCache: true,
  mustRevalidate: true,
  staleWhileRevalidate: 320,
  staleIfError: 404
}));

app.use(favicon('./static/img/favicon.ico'));
app.use(conditional());
app.use(etag());
app.use(helmet());
app.use(bodyParser());
app.use(compress({
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}));

app.use(mount('/static', require('koa-static')('static')));

app.use(session({
  maxAge: 24 * 60 * 60 * 1000, // One Day,
  key: 'SSID'
}));
app.keys = [uuid.v4(), uuid.v4()];
app.use(flash());

app.use(router.allowedMethods());
app.use(passport.initialize());
app.use(passport.session());

Auth.forEach(r => app.use(require(r).routes()));
Public.forEach(r => app.use(require(r).routes()));

app.use((ctx, next) => { // User needs to be auth to access Protected routes
  if (ctx.isAuthenticated()) {
    return next()
  } else {
    return ctx.redirect('/' + (ctx.session.currentLanguage || 'en') + '/account/login')
  }
});

Protected.forEach(r => app.use(require(r).routes()));

app.on('error', (err) => {
  // TODO Send email with error stack
  console.warn('Server Error: ', err);
});
const PORT = isProduction ? Constants.PRD.PORT : Constants.DEV.PORT;
app.listen(PORT, () => {
  if (process.send) {
    process.send('online');
  }
});
