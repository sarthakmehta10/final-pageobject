'use strict';

var steps = function () {
    this.setDefaultTimeout(60000);

    this.When(/^I choose '(.+)' for selecting pet as '(.+)'$/, function (element, value) {
        var _this = this;
        return _this.pageFactory.currentPage.getOption(element, value);
    });
    
    this.When(/^I select address as '(.+)'$/, function (value) {
        var _this = this;
        return _this.pageFactory.currentPage.selectAddress(value);
    });
    
    this.Then(/^I should check the error rows count is equal to the number in error message$/, function() {
        var _this = this,
            numberOne,
            numberTwo;
        return _this.pageFactory.currentPage.getErrorCount()
        .then(function (number) {
            numberOne = number;
        })
        .then(function (text) {
            return _this.pageFactory.currentPage.getErrorNumber();
        })
        .then(function (text) {
            numberTwo = parseInt(text);
        })
        .then(function (text) {
            return expect(numberOne).to.equal(numberTwo);
        });
    });
    
};

module.exports = steps;
