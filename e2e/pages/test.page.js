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
    this.firstNameTextField.setValue("First Name");
    this.lastNameTextField.setValue("Last Name");
    this.emailTextField.setValue("Email");

    console.log("SUCCESS");
  }},

  testSuccess: {
  value: function() {
    expect(this.hoorraayLabel.getText()).to.contain('Hoorraaay');
  }

}
};
module.exports = Object.create(Base, TestPage);
