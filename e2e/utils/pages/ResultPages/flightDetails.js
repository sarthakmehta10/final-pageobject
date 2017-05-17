'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var FlightDetails = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
        elements: {
            outbound: {
                css: '.availability-step-1 .flight-path',
                isSingle: true
            },
//            return: {
//                css: ''
//            }
        }
    };
    
};

inheritance.inherits(Page, FlightDetails);

module.exports = FlightDetails;