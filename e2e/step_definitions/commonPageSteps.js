'use strict';

var steps = function () {
    this.setDefaultTimeout(60000);
    
    this.When(/^I select '(.+)' option from the menu$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.clickAction(field);
    });
    
    this.When(/^I (?:select|choose) '(.+)' as '(.+)'$/, function (field, value) {
        var _this = this;
        return _this.pageFactory.currentPage.getOption(field, value);
    });
    
    this.When(/^I (?:select|choose) bike makers as '(.+)'$/, function (value) {
        var _this = this;
        return _this.pageFactory.currentPage.selectBike(value);
    });
    
    this.When(/^I enter in '(.+)' field with value '(.+)'$/, function (field, value) {
        var _this = this;
        return _this.pageFactory.currentPage.sendInputs(field, value);
    });
    
    this.When(/^I click on '(.+)' (?:field|button)$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.clickAction(field);
    });
    
    this.When(/^I set '(.+)' radio button as '(.+)'$/, function (element, value) {
        var _this = this;
        return _this.pageFactory.currentPage.getOption(element, value);
    });
    
    this.When(/^I select '(.+)' with '(.+)'(?:st|th|nd|rd) day ahead of today$/, function(element, value) {
        var _this = this;
        process.env.DATE = moment().add(value, 'd').format('DD');
        return _this.pageFactory.currentPage.selectDate(process.env.DATE);
    });
    
    this.Then(/^I should verify '(.+)' text is '(.+)'$/, function (type, message) {
        var _this = this;
        return _this.pageFactory.currentPage.getTextValue(type)
        .then(function (text) {
            return expect(text).to.equal(message);
        });
    });
    
    this.When(/^I wait for '(.+)' to get closed/, function (element) {
        var _this = this;
        return _this.pageFactory.currentPage.waitForElementToClose(element);
    });
}

module.exports = steps;