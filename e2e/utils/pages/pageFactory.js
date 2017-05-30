'use strict';
var HomePage = require('./homePage'),
    PetInsurance = require('./ResultPages/petInsurance'),
    OwnerDetails = require('./ResultPages/ownerDetails'),
    BikeInsurance = require('./ResultPages/bikeInsurance'),
    BikeDetails = require('./ResultPages/bikeDetails'),
    PetInsuranceResult = require('./ResultPages/petInsuranceResult'),
    BikeInsuranceResult = require('./ResultPages/bikeInsuranceResult');

var PageFactory = function(world){
    
    var _this = this;

    _this.currentPage = 'undefined';

    _this.getPage = function(page, logo){
        var pages = {
            'home': HomePage,
            'pet-insurance': PetInsurance,
            'pet-details': PetInsurance,
            'owner-details': OwnerDetails,
            'pet-insurance-result': PetInsuranceResult,
            'bike-insurance': BikeInsurance,
            'bike-details': BikeInsurance,
            'more-bike-details': BikeDetails,
            'bike-insurance-result': BikeInsuranceResult
        };
        if(!pages[page]){
            throw new Error('Wrong page name: ' + pages[page]);
        }
        _this.currentPage = new pages[page](world);
        return _this.currentPage.waitForLogo(logo);
    };
};

module.exports = PageFactory;