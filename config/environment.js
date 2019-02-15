'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'watermelon-juice',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    EmberHammertime: {
      touchActionSelectors: ['button', 'input', 'a', 'textarea'],
      touchActionProperties: 'touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;'
    },

    apiHost:process.env.API_HOST,
    logEntriesKey:process.env.LOG_ENTRIES_KEY
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' https://cdn.mxpnl.com  *.googleapis.com *.cloudflare.com *", // Allow scripts from https://cdn.mxpnl.com
    'font-src': "'self' data: *.gstatic.com *.googleapis.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    'connect-src': "'self' http://localhost:3000 *", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
    'img-src': "'self' data: *.gstatic.com *.googleapis.com",
    'style-src': "'self' 'unsafe-inline' *.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
    'media-src': "'self'"
  }

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'login',
    routeAfterAuthentication: 'route-plans',
    routeIfAlreadyAuthenticated: 'route-plans'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.apiHost = "";

    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
