let testPage = require('../pages/test.page.js');

module.exports = function() {

  this.When(/^User launches the app and taps the button 3 times$/, () => {
    testPage.launchAndTap();
  });

  this.Then(/^Hoorraaay$/, () => {
    testPage.testSuccess();
  });
};
