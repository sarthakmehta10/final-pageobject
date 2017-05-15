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
                departure: {
                    css: '#flt_origin_text',
                    isSingle: true
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
    
    _this.initMenu = function(name) {
        var menu = {
            'BOOK A FLIGHT': 0,
            'MY BOOKING': 1,
            'ONLINE CHECK-IN': 2
        }
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.menu).get(menu[name]).click();
    };
    
    _this.selectDate = function(value) {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.date).filter(function (date) {
            return date.getText()
                .then(function(text) {
                return text === value;
            });
        }).click();
    };

};

inheritance.inherits(Page, HomePage);

module.exports = HomePage;
