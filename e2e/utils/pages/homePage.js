'use strict';

var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var HomePage = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
            elements: {
                menu: {
                    css: 'a.tab-link',
                    isSingle: false
                },
                'menu-link': {
                    css: '#menu-link',
                    isSingle: true
                },
                menuOption: {
                    css: 'a[href="#"]',
                    isSingle: false
                },
                'menu-email': {
                    css: '.mmenu-email input',
                    isSingle: true
                },
                'menu-password': {
                    css: '.mmenu-password input',
                    isSingle: true
                },
                'menu-login': {
                    css: '.btn.button-green.login-button strong',
                    isSingle: true
                },
                departure: {
                    css: '#flt_origin_text',
                    isSingle: true
                },
                portInput: {
                    css: '.mobileDropdownInputField',
                    isSingle: false
                },
                countryList: {
                    css: '.countryList>li span',
                    isSingle: false
                },
                cityList: {
                    css: '.airport',
                    isSingle: false
                },
                airport: {
                    css: '.tt-airport',
                    isSingle: false
                },
                destination: {
                    css: '#flt_destin_text',
                    isSingle: true
                },
                roundTrip: {
                    css: '#round_trip-styler',
                    isSingle: true
                },
                'one-way': {
                    css: '#one_way-styler',
                    isSingle: true
                },
                depDate: {
                    css: '#flt_leaving_on',
                    isSingle: true
                },
                retDate: {
                    css: '#flt_returning_on',
                    isSingle: true
                },
                date: {
                    css: 'a[class="ui-state-default"]',
                    isSingle: false
                },
                passengers: {
                    css: '.dropdown-toggle.needsclick',
                    isSingle: false
                },
                adults: {
                    css: '#mCSB_1_container a',
                    isSingle: false
                },
                children: {
                    css: '#mCSB_2_container a',
                    isSingle: false
                },
                infants: {
                    css: '#mCSB_3_container a',
                    isSingle: false
                },
                findFlights: {
                    css: 'button[type="submit"] span[class="flights-and-fares needsclick"]',
                    isSingle: true
                },
                myAirbaltic: {
                    css: '#myairbaltic-href',
                    isSingle: true
                },
                email: {
                    css: '#loginFormLogin',
                    isSingle: true
                },
                password: {
                    css: '#loginFormPassword',
                    isSingle: true
                },
                LogIn: {
                    css: '#login-btn',
                    isSingle: true
                },
                error: {
                    css: '#login-errors span',
                    isSingle: true
                },
                'menu-error': {
                    css: '.light-error-div span',
                    isSingle: true
                }
            }
        };
    
    _this.initPassengers = function(name) {
        var passengers = {
            'adults': 0,
            'children': 1,
            'infants': 2
        }
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.passengers).get(passengers[name]).click();
    };
    
    _this.initPort = function(field, value) {
        var portInput = {
            'depInput': 1,
            'destInput': 2
        }
        browser.sleep(2000);
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.portInput).get(portInput[field]).sendKeys(value);
    };
    
    _this.initMenuOption = function(name) {
        var menuOption = {
            'My airBaltic': 0,
            'United Kingdom': 1
        }
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.menuOption).get(menuOption[name]).click()
    };
    
    _this.selectDate = function(value) {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.date).filter(function (date) {
            return date.getText()
                .then(function(text) {
                return text === value;
            });
        }).click();
    };
    
    _this.getMenu = function(element, name) {
        return browser.actions().mouseDown(_this.world.getter.elementGetter(this._root, this._data.elements[element])
        .filter(function (option){
            return option.getText()
                    .then(function (text) {
                    return text === name;
                });
        }).get(0)).perform();
    };
    
    _this.getAirport = function(value) {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.cityList).filter(function (airport) {
            return airport.getText()
                .then(function(text) {
                return text === value;
            });
        }).click();
    };

};

inheritance.inherits(Page, HomePage);

module.exports = HomePage;