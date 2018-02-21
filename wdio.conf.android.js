let merge = require('deepmerge');
let wdioConfBase = require('./wdio.conf.base.js');
var APP_PATH = './builds/app.apk';
var device_Name = 'Android Emulator';

exports.config = merge(wdioConfBase.config, {
  host: 'localhost',
  port: '4723',

  capabilities: [{
    automationName: "appium",
    commandTimeout: 20000,
    sessionOverride: true,
    debugLogSpacing: true,
    platformName: 'Android',
    showIosLog: true,
    deviceName:'Android Emulator',
    isolateSimDevice: true,
    autoLaunch: false,
    autoAcceptAlerts: true,
    unicodeKeyboard: true,
    resetKeyboard: true,
    app: APP_PATH
  }],

  services: ['appium'],
  appium: {
    args: {
      address: 'localhost',
      port: '4723',
      commandTimeout: 20000,
      sessionOverride: true,
      debugLogSpacing: true,
      platformName: 'Android',
      deviceName: 'Android Emulator',
      isolateSimDevice: true,
      autoAcceptAlerts: true,
      app: APP_PATH
    }
  },

  onPrepare: function() {
    let appiumController = require('appium-controller');
    appiumController.startAppium();
  }

});
