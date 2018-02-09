let Base = require('./base.page.js');
let path = require('path');

let TestPage = {

  tapButton : {get: function () { return browser.element(`~tapButton`);}},
  hoorraayLabel : {get: function () { return browser.element(`~hoorraayLabel`);}},


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

  testSuccess: {
  value: function() {
    expect(this.hoorraayLabel.getText()).to.contain('Hoorraaay');
  }

}
};
module.exports = Object.create(Base, TestPage);
