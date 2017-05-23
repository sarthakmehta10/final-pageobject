'use strict';

var steps = function () {
    this.setDefaultTimeout(60000);
    
    this.When(/^I click on '(.+)' button with value '(.+)'$/, function (field, value) {
        var _this = this;
        return _this.pageFactory.currentPage.getOption(value);
    });
    
};

module.exports = steps;