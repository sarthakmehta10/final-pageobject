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
    
    this.When(/^I enter invalid '(.+)' as '(.+)'$/, function (field, value) {
        var _this = this;
        return _this.pageFactory.currentPage.sendInputs(field, value);
    });
    
    this.When(/^I click on '(.+)' (?:field|button)$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.clickAction(field);
    });
    
    this.Then(/^I should get '(.+)' message as '(.+)'$/, function (type, message) {
        var _this = this;
        return _this.pageFactory.currentPage.getTextValue(type)
        .then(function (text) {
            return expect(text).to.equal(message);
        });
    });
}

module.exports = steps;