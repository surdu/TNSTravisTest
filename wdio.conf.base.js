var fs = require('fs');
var chai = require('chai');

exports.config = {

  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
    './e2e/features/*.feature'
  ],

  suites: {

    smoke: [
      './e2e/features/testFeature.feature'
    ]
  },

  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 2,

  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,
  //
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'verbose',
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  //baseUrl: 'some_url',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 150000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  // reporters: ['spec', 'junit'],

  // Some reporter require additional information which should get defined here
  // reporterOptions: {
  //   junit: {
  //     outputDir: './e2e/reports/'
  //   }
  // },

  plugins: {
    'wdio-screenshot': {}
  },

  framework: 'cucumber',
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  // reporters: ['dot'],//
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    require: [
      './e2e/steps/'
    ], // <string[]> (file/dir) require files before executing features
    backtrace: false, // <boolean> show full backtrace for errors
    compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: true, // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: true, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: false, // <boolean> fail if there are any undefined or pending steps
    timeout: 20000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
  },

  before: function() {
    global.expect = chai.expect;
    chai.Should();

    global.type = process.env.type;
  },

  // deleteFolderRecursive: function(path) {
  //   var self = this;
  //
  //   if (fs.existsSync(path) && path != '/') {
  //     fs.readdirSync(path).forEach(function(file, index) {
  //       var curPath = path + "/" + file;
  //       if (fs.lstatSync(curPath).isDirectory()) { // recurse
  //         self.deleteFolderRecursive(curPath);
  //       } else { // delete file
  //         fs.unlinkSync(curPath);
  //       }
  //     });
  //     fs.rmdirSync(path);
  //   }
  // },

  // onPrepare: function() {
  //
  //   if (fs.existsSync(__dirname + '/e2e/reports'))
  //     this.deleteFolderRecursive(__dirname + '/e2e/reports');
  //
  //   if (!fs.existsSync(__dirname + '/e2e/reports')) {
  //     fs.mkdirSync(__dirname + '/e2e/reports');
  //     fs.mkdirSync(__dirname + '/e2e/reports/screenShots');
  //   }
  // },

  // afterStep: function(step) {
  //   if (step.getStatus() === 'failed') {
  //     let stepName = step.getStep().getName();
  //     let featureName = step.getStep().getScenario().getFeature().getName();
  //     let screenShot = './e2e/reports/screenShots/' + new Date().getTime() + featureName + ' ' + stepName + ' ' + '.png';
  //     console.log('Screenshot was added: ' + screenShot);
  //     browser.saveViewportScreenshot(screenShot);
  //   }
  // },

  services: ['selenium-standalone']
};
