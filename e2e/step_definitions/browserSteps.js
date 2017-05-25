'use strict';

var steps = function () {
    this.setDefaultTimeout(60000);

    this.When(/^I navigate to '(.+)' page$/, function (page) {
        var _this = this;
        return _this.browserUtils.navigateTo(page);
    });
    
    this.When(/^I land on '(.+)' page$/, function (page) {
        var _this = this;
        return _this.browserUtils.takenTo(page);
    });
    
    this.Then(/^I should land on '(.+)' results page$/, function (page) {
        var _this = this;
        return _this.browserUtils.currentPagePresent(page)
        .then(function(bool){
            return expect(bool).to.be.true;
        });
    });
    
    this.Then(/^I should be taken to '(.+)' page$/, function (page) {
        var _this = this;
        return _this.browserUtils.takenTo(page)
        .then(function () {
            return _this.browserUtils.currentPagePresent(page)
        })
        .then(function(bool){
            return expect(bool).to.be.true;
        });
    });
};

module.exports = steps;