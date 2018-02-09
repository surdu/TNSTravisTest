let merge = require('deepmerge');
let wdioConfBase = require('./wdio.conf.base.js');
var APP_PATH = './builds/TNSTravisTest-debug.apk';
var device_Name = 'Android Emulator';

exports.config = merge(wdioConfBase.config, {
  host: '127.0.0.1',
  port: '4723',

  capabilities: [{
    automationName: "appium",
    commandTimeout: '7200',
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
      address: '127.0.0.1',
      commandTimeout: '7200',
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
