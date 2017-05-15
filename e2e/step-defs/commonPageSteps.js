'use strict';

var steps = function () {
    this.setDefaultTimeout(60000);
    
    this.When(/^I select '(.+)' option from the menu$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.clickAction(field);
    });
    
    this.When(/^I select '(.+)' as '(.+)'$/, function (field, value) {
        var _this = this;
        return _this.pageFactory.currentPage.getOption(field, value);
    });
    
//    this.When(/^I choose menu as '(.+)'$/, function (value) {
//        var _this = this;
//        return _this.pageFactory.currentPage.initMenu(value);
//    });
    
    this.When(/^I click on '(.+)'$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.initPassengers(field);
    });
}

module.exports = steps;