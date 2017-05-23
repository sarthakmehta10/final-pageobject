'use strict';

var steps = function (world) {
    this.setDefaultTimeout(60000);

    this.Then(/^I should check total results count is more than '(.+)' results count$/, function (element) {
        var _this = this;
        if(process.env.PLATFORM === 'desktop') {
            return _this.pageFactory.currentPage.getResultsCount(element)
            .then(function (bool) {
                expect(bool).to.be.true;
            });
        }else {
            return _this.pageFactory.currentPage.getResultsCountMobile(element)
            .then(function (bool) {
                expect(bool).to.be.true;
            });
        }
    });
};

module.exports = steps;