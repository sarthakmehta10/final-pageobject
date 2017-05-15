'use strict';

var steps = function () {
    this.setDefaultTimeout(60000);
    
    this.When(/^I click on '(.+)' field$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.clickAction(field);
    });
    
    this.When(/^I choose '(.+)' as '(.+)'$/, function(field, value) {
        var _this = this;
        return _this.pageFactory.currentPage.getOption(field, value);
    });
    
    this.When(/^I select my trip mode as '(.+)'$/, function(value) {
        var _this = this;
        return _this.pageFactory.currentPage.clickAction(value);
    });
    
    this.When(/^I enter departure '(.+)' as '(.+)'th of current month$/, function(element, value) {
        var _this = this;
//        return _this.pageFactory.currentPage.sendInputs(element, value);
        return _this.pageFactory.currentPage.selectDate(value);
    });
    
    this.When(/^I enter return '(.+)' as '(.+)'th of current month$/, function(element, value) {
        var _this = this;
        return _this.pageFactory.currentPage.sendInputs(element, value);
//        return _this.pageFactory.currentPage.selectDate(value);
    });
};

module.exports = steps;