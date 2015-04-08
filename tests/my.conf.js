// Karma configuration
// Generated on Sat Apr 04 2015 12:29:51 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../client/app/www/lib/angular/angular.js',
      '../client/app/www/lib/angular-animate/angular-animate.js',
      // '../client/app/www/lib/angular-cookies/angular-cookies.js',
      '../client/app/www/lib/angular-mocks/angular-mocks.js',
      '../client/app/www/lib/angular-sanitize/angular-sanitize.min.js',
      '../client/app/www/lib/angular-touch/angular-touch.min.js',
      '../client/app/www/lib/angular-ui-router/release/angular-ui-router.js',
      '../client/app/www/lib/ionic/js/ionic.js',
      '../client/app/www/lib/ionic/js/ionic-angular.min.js',
      '../client/app/www/js/*.js',
      './**/*.tests.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../client/app/www/js/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nyan', 'unicorn', 'coverage'],

    nyanReporter: {
      suppressErrorReport: false
    },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};