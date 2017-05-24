'use strict';

var BrowserUtils = function(world){
    var _this = this;

    _this._data = {
        urls: {
            'home': 'http://www.moneysupermarket.com/insurance',
            'pet-insurance': 'https://www.moneysupermarket.com/pet-insurance/',
            'pet-details': 'https://www.moneysupermarket.com/pet-insurance/questions/?',
            'owner-details': 'https://www.moneysupermarket.com/pet-insurance/questions/?step=2',
            'insurance-result': 'https://www.moneysupermarket.com/pet-insurance/questions/results',
        }
    };

    _this.navigateTo = function(page){
        return browser.get(_this._data.urls[page])
        .then(function() {
            return world.pageFactory.getPage(page);
        });
    };
    
    _this.takenTo = function(page) {
        return world.pageFactory.getPage(page);
    }
    
    _this.currentPagePresent = function(page) {
        return browser.getCurrentUrl()
            .then(function(url) {
            if(url.includes(_this._data.urls[page])) {
                return true;
            }else {
                return false;
            }
        });
    };
};

module.exports = BrowserUtils;
