'use strict';

var steps = function (world) {
    this.setDefaultTimeout(60000);
    
    this.Then(/^I should check '(.+)' title$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.getTextValue(field)
        .then(function(text){
            console.log(text);
        });
    });
    
    
};

module.exports = steps;