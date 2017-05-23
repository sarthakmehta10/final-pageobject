'use strict';
var HomePage = require('./homePage'),
    PetInsurance = require('./ResultPages/petInsurance'),
    OwnerDetails = require('./ResultPages/ownerDetails'),
    InsuranceResult = require('./ResultPages/insuranceResult');

var PageFactory = function(world){
    
    var _this = this;

    _this.currentPage = 'undefined';

    _this.getPage = function(page){
        var pages = {
            'home': HomePage,
            'pet-insurance': PetInsurance,
            'pet-details': PetInsurance,
            'owner-details': OwnerDetails,
            'insurance-result': InsuranceResult
        };
        if(!pages[page]){
            throw new Error('Wrong page name: ' + pages[page]);
        }
        _this.currentPage = new pages[page](world);
        return _this.currentPage.waitForPageToLoad();
    };
};

module.exports = PageFactory;