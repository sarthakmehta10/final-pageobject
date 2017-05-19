'use strict';

var BrowserUtils = function(world){
    var _this = this;

    _this._data = {
        urls: {
            'home': 'http://www.lufthansa.com/uk/en/Homepage',
            'destination': 'https://www.airbaltic.com/en/destinations',
            'flight-details': 'https://book.lufthansa.com/lh/dyn/air-lh/revenue/viewFlights',
            'baggage-type': 'https://www.airbaltic.com/en/baggage',
            'baggage-info': 'https://www.airbaltic.com/en/checked-baggage'
        }
    };

    _this.navigateTo = function(page){
        return browser.driver.get(_this._data.urls[page])
        .then(function() {
            return world.pageFactory.getPage(page);
//        })
//        .then(function() {
//            return browser.ignoreSynchronization = false;
        });
    };
    
    _this.takenTo = function(page) {
        return world.pageFactory.getPage(page);
    }
    
    _this.currentPagePresent = function(page) {
        return browser.getCurrentUrl()
            .then(function(url) {
            if(_this._data.urls[page] === url) {
                return true;
            }else {
                return false;
            }
        });
    };
};

module.exports = BrowserUtils;