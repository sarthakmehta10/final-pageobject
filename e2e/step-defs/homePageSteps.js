'use strict';

var steps = function () {
    this.setDefaultTimeout(60000);
    
    this.When(/^I select my trip mode as '(.+)'$/, function(value) {
        var _this = this;
        return _this.pageFactory.currentPage.clickAction(value);
    });
    
    this.When(/^I choose '(.+)' with title '(.+)'$/, function(field, value) {
        var _this = this;
        return _this.pageFactory.currentPage.getMenu(field, value);
    });
    
    this.When(/^I set '(.+)' as '(.+)'$/, function(field, value) {
        var _this = this;
        return _this.pageFactory.currentPage.initPort(field, value)
    });
    
    this.When(/^I click on '(.+)'$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.initPassengers(field);
    });
    
    this.When(/^I select menu-option as '(.+)'$/, function (value) {
        var _this = this;
        return _this.pageFactory.currentPage.initMenuOption(value);
    });
    
    this.When(/^I enter departure '(.+)' as '(.+)'(?:st|th|nd|rd) day ahead of today$/, function(element, value) {
        var _this = this;
        process.env.DATE = moment().add(value, 'd').format('DD');
//        return _this.pageFactory.currentPage.sendInputs(element, value);
        return _this.pageFactory.currentPage.selectDate(process.env.DATE);
    });
    
    this.When(/^I enter return '(.+)' as '(.+)'(?:st|th|nd|rd) day ahead of today$/, function(element, value) {
        var _this = this;
        process.env.DATE = moment().add(value, 'd').format('DD');
//        return _this.pageFactory.currentPage.sendInputs(element, process.env.DATE);
        return _this.pageFactory.currentPage.selectDate(process.env.DATE);
    });
};

module.exports = steps;