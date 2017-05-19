'use strict';

var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var HomePage = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
            elements: {
                departure: {
                    css: '#flightmanagerFlightsFormOrigin',
                    isSingle: true
                },
                destination: {
                    css: '#flightmanagerFlightsFormDestination',
                    isSingle: true
                },
                airportLink: {
                    css: '.airport-atlas-link',
                    isSingle: false
                },
                originAirportLink: {
                    css: '#flightmanagerFlightsFormOriginPopupList li',
                    isSingle: true
                },
                destAirportLink: {
                    css: '#flightmanagerFlightsFormDestinationPopupList li',
                    isSingle: true
                },
//                menu: {
//                    css: 'a.tab-link',
//                    isSingle: false
//                },
//                'menu-link': {
//                    css: '#menu-link',
//                    isSingle: true
//                },
//                menuOption: {
//                    css: 'a[href="#"]',
//                    isSingle: false
//                },
//                'menu-email': {
//                    css: '.mmenu-email input',
//                    isSingle: true
//                },
//                'menu-password': {
//                    css: '.mmenu-password input',
//                    isSingle: true
//                },
//                'menu-login': {
//                    css: '.btn.button-green.login-button strong',
//                    isSingle: true
//                },
//                departure: {
//                    css: 'button#flightmanagerFlightsFormAirportAtlasOrigin',
//                    isSingle: true
//                },
                originModal: {
                    css: 'div[aria-labelledby="flmOriginAirportAtlasTitle"] div.modal-content',
                    isSingle: true
                },
                destModal: {
                    css: 'div[aria-labelledby="flmDestinationAirportAtlasTitle"] div.modal-content',
                    isSingle: true
                },
                originCountry: {
                    css: '#flmOriginAirportAtlasCountry',
                    isSingle: true
                },
                originCountryList: {
                    css: '#flmOriginAirportAtlasCountry option',
                    isSingle: false
                },
                destCountryList: {
                    css: '#flmDestinationAirportAtlasCountry option',
                    isSingle: false
                },
                originCity: {
                    css: '#flmOriginAirportAtlasCity',
                    isSingle: true
                },
                originCityList: {
                    css: '#flmOriginAirportAtlasCity option',
                    isSingle: false
                },
                destCityList: {
                    css: '#flmDestinationAirportAtlasCity option',
                    isSingle: false
                },
                originAirport: {
                    css: '#flmOriginAirportAtlasAirport',
                    isSingle: true
                },
                originAirportList: {
                    css: '#flmOriginAirportAtlasAirport option',
                    isSingle: false
                },
                destAirportList: {
                    css: '#flmDestinationAirportAtlasAirport option',
                    isSingle: false
                },
                selectButton: {
                    css: 'input.btn.btn-primary',
                    isSingle: true
                },
                selectDestination: {
                    css: 'input.btn.btn-primary',
                    isSingle: false
                },
//                destination: {
//                    css: 'button#flightmanagerFlightsFormAirportAtlasDestination',
//                    isSingle: true
//                },
                roundTrip: {
                    css: '#flightmanagerFlightsFormReturnLabel',
                    isSingle: true
                },
                oneWay: {
                    css: '#flightmanagerFlightsFormOnewayLabel',
                    isSingle: true
                },
                depDate: {
                    css: '#flightmanagerFlightsFormOutboundDateDisplay',
                    isSingle: true
                },
                retDate: {
                    css: '#flightmanagerFlightsFormInboundDateDisplay',
                    isSingle: true
                },
                date: {
                    css: '.day-body',
                    isSingle: false
                },
                adults: {
                    css: '#flightmanagerFlightsFormAdults',
                    isSingle: true
                },
                adultsOption: {
                    css: '#flightmanagerFlightsFormAdults option',
                    isSingle: false
                },
                otherOptions: {
                    css: '.lh-show-element',
                    isSingle: false
                },
                children: {
                    css: '#flightmanagerFlightsFormChildren',
                    isSingle: true
                },
                childrenOption: {
                    css: '#flightmanagerFlightsFormChildren option',
                    isSingle: false
                },
                infants: {
                    css: '#flightmanagerFlightsFormInfants',
                    isSingle: true
                },
                infantsOption: {
                    css: '#flightmanagerFlightsFormInfants option',
                    isSingle: false
                },
                findFlights: {
                    css: 'button.btn.btn-primary',
                    isSingle: false
                },
//                myAirbaltic: {
//                    css: '#myairbaltic-href',
//                    isSingle: true
//                },
//                email: {
//                    css: '#loginFormLogin',
//                    isSingle: true
//                },
//                password: {
//                    css: '#loginFormPassword',
//                    isSingle: true
//                },
//                LogIn: {
//                    css: '#login-btn',
//                    isSingle: true
//                },
//                error: {
//                    css: '#login-errors span',
//                    isSingle: true
//                },
//                'menu-error': {
//                    css: '.light-error-div span',
//                    isSingle: true
//                }
            }
        };
    
    _this.initOptions = function(name) {
        var otherOptions = {
            'travel_with_children': 0,
            'access_code': 1
        }
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.otherOptions).get(otherOptions[name]).click();
    };
    
    _this.initSelectButton = function(name) {
        var selectButton = {
            'destination': 0
        }
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.selectDestination).get(selectButton[name]).click()
    };
    
    _this.selectDate = function(value) {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.date).filter(function (date) {
            return date.getText()
                .then(function(text) {
                return text === value;
            });
        }).get(0).click();
    };
    
    _this.initAirportLink = function(link) {
        var airportLink = {
            'origin': 0,
            'dest': 1
        }
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.airportLink).get(airportLink[link]).click();
    };
    
//    _this.getMenu = function(element, name) {
//        return browser.actions().mouseDown(_this.world.getter.elementGetter(this._root, this._data.elements[element])
//        .filter(function (option){
//            return option.getText()
//                    .then(function (text) {
//                    return text === name;
//                });
//        }).get(0)).perform();
//    };
    
//    _this.getAirport = function(value) {
//        return _this.world.getter.elementGetter(_this._root, _this._data.elements.cityList).filter(function (airport) {
//            return airport.getText()
//                .then(function(text) {
//                return text === value;
//            });
//        }).click();
//    };
//    
    _this.keyDown = function(field, value) {
//        browser.sleep(1000);
        return _this.world.getter.elementGetter(_this._root, _this._data.elements[field]).sendKeys(value)
        .then(function() {
            browser.sleep(4000);
            return _this.world.getter.elementGetter(_this._root, _this._data.elements[field]).sendKeys(protractor.Key.ARROW_DOWN);
        })
        .then(function(){
            return browser.sleep(4000);
        });
    };
};

inheritance.inherits(Page, HomePage);

module.exports = HomePage;