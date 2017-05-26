'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var BikeInsuranceResult = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
        elements: {
            loadingBox: {
                css: '#loading-donk h2',
                isSingle: true
            },
            voluntaryExcess: {
                css: '#ID_QX_POLICYVEHICLE_VPO_VOLXS_chosen a',
                isSingle: true
            },
            insuranceCover: {
                css: '#ID_QX_POLICYVEHICLE_VPO_COVER_chosen a',
                isSingle: true
            }
        }
    };

};

inheritance.inherits(Page, BikeInsuranceResult);

module.exports = BikeInsuranceResult;