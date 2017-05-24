'use-strict';

module.exports = function () {
    this.setDefaultTimeout(60000);
    
    this.After(function () {
        return browser.executeScript('window.localStorage.clear();')
        .then(function() {
            browser.manage().deleteAllCookies();
        });
    });

};
