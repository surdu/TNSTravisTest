let testPage = require('../pages/test.page.js');

module.exports = function() {

  this.When(/^User launches the app and taps the button 3 times$/, () => {
    testPage.launchAndTap();
  });

  this.When(/^User launches the app and fills in the 4 text fields$/, () => {
    testPage.fillInTextFields();
  });

  this.Then(/^Hoorraaay$/, () => {
    testPage.testSuccess();
  });
};
