'use strict';

var BrowserUtils = function(world){
    var _this = this;

    _this._data = {
        urls: {
            'home': 'http://www.moneysupermarket.com/insurance',
            'pet-insurance': 'https://www.moneysupermarket.com/pet-insurance/',
            'pet-details': 'https://www.moneysupermarket.com/pet-insurance/questions/',
            'owner-details': 'https://www.moneysupermarket.com/pet-insurance/questions/',
            'pet-insurance-result': 'https://www.moneysupermarket.com/pet-insurance/questions/results',
            'bike-insurance': 'https://www.moneysupermarket.com/motorbike-insurance/',
            'bike-details': 'https://www.moneysupermarket.com/motorbike-insurance/quoting.php',
            'more-bike-details': 'https://www.moneysupermarket.com/motorbike-insurance/quoting.php',
            'bike-insurance-result': 'https://www.moneysupermarket.com/motorbike-insurance/quoting.php'
        }
    };

    _this.navigateTo = function(page, logo){
        return browser.get(_this._data.urls[page])
        .then(function() {
            return world.pageFactory.getPage(page, logo);
        });
    };
    
    _this.takenTo = function(page, logo) {
        return world.pageFactory.getPage(page, logo);
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