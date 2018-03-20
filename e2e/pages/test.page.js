let Base = require('./base.page.js');
let path = require('path');

let TestPage = {

  tapButton : {get: function () { return browser.element(`~tapButton`);}},
  hoorraayLabel : {get: function () { return browser.element(`~hoorraayLabel`);}},

  firstNameTextField : {get: function () { return browser.element(`~inputUserFirstName`);}},
  lastNameTextField : {get: function () { return browser.element(`~inputUserLastName`);}},
  emailTextField : {get: function () { return browser.element(`~inputUserEmail`);}},
  passwordTextField : {get: function () { return browser.element(`~inputUserPassword`);}},

  launchAndTap: {
    value: function() {
      browser.launch();
      var i = 0;
      while (i < 3){
        this.tapButton.click();
        browser.pause();
        i++;
      }

    }
  },

  fillInTextFields: {
  value: function() {
    this.passwordTextField.setValue("Password");
    browser.pause(4000);
    browser.hideDeviceKeyboard();

    this.firstNameTextField.setValue("First Name");
    browser.pause(4000);
    browser.hideDeviceKeyboard();

    this.lastNameTextField.setValue("Last Name");
    browser.pause(4000);
    browser.hideDeviceKeyboard();

    this.emailTextField.setValue("Email");
    browser.pause(4000);
    browser.hideDeviceKeyboard();

    console.log("SUCCESS");
  }},

  testSuccess: {
  value: function() {
    expect(this.hoorraayLabel.getText()).to.contain('Hoorraaay');
  }

}
};
module.exports = Object.create(Base, TestPage);
