'use strict';

var steps = function () {
    this.setDefaultTimeout(60000);

    this.When(/^I navigate to '(.+)' page and see '(.+)' or '(.+)' is visible$/, function (page, logo, logoMobile) {
        var _this = this;
        if(process.env.PLATFORM === 'desktop') {
            return _this.browserUtils.navigateTo(page, logo);
        }else {
            return _this.browserUtils.navigateTo(page,logoMobile);
        }
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
    
    this.Then(/^I should be taken to '(.+)' page and see '(.+)' is visible$/, function (page, logo) {
        var _this = this;
        return _this.browserUtils.takenTo(page, logo)
        .then(function () {
            return _this.browserUtils.currentPagePresent(page)
        })
        .then(function(bool){
            return expect(bool).to.be.true;
        });
    });
};

module.exports = steps;