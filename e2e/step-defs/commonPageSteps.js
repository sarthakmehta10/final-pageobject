'use strict';

var steps = function () {
    this.setDefaultTimeout(60000);
    
    this.When(/^I select '(.+)' option from the menu$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.clickAction(field);
    });
    
    this.When(/^I (?:select|choose) '(.+)' as '(.+)'$/, function (field, value) {
        var _this = this;
//        browser.sleep(6000);
        return _this.pageFactory.currentPage.getOption(field, value);
    });
    
    this.When(/^I enter in '(.+)' field with value '(.+)'$/, function (field, value) {
        var _this = this;
//        return _this.pageFactory.currentPage.sendInputs(field, value)
//        .then(function() {
//            browser.sleep(3000);
//        });
        return _this.pageFactory.currentPage.keyDown(field, value);
    });
    
    this.When(/^I click on '(.+)' (?:field|button)$/, function (field) {
        var _this = this;
//        browser.sleep(4000);
        browser.pause();
            return _this.pageFactory.currentPage.clickAction(field)
                .then(function () {
                return browser.sleep(2000);
            });
    });
    
    this.Then(/^I should get '(.+)' message as '(.+)'$/, function (type, message) {
        var _this = this;
        return _this.pageFactory.currentPage.getTextValue(type)
        .then(function (text) {
            return expect(text).to.equal(message);
        });
    });
    
    this.Then(/^I should wait for '(.+)' to open$/, function (element) {
        var _this = this;
//        browser.sleep(5000);
//        browser.pause();
        return _this.pageFactory.currentPage.waitForElementToLoad(element)
        .then(function (bool) {
            console.log(bool);
            return expect(bool).to.be.true;
        });
    });
}

module.exports = steps;