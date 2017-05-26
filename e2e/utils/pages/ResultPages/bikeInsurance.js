'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var BikeInsurance = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
        elements: {
            getQuote: {
                css: '.fancy-button.fancy-button.fancy-button',
                isSingle: true
            },
            registeredBike: {
                css: 'button[id*="ID_QX_CONTROL_FIELDS_QXF_CONTROL_REGISTRATION_"]',
                isSingle: false
            },
            registeredYear: {
                css: '#ID_QX_VEHICLE_VEH_MANUYEAR_chosen a',
                isSingle: true
            },
            registeredYearOption: {
                css: '#ID_QX_VEHICLE_VEH_MANUYEAR_chosen li',
                isSingle: false
            },
            bikeMaker: {
                css: '#ID_QX_VEHICLE_VEH_MAKE_chosen a',
                isSingle: true
            },
            bikeMakerOption: {
                css: '#ID_QX_VEHICLE_VEH_MAKE_chosen li',
                isSingle: false
            },
            bikeModel: {
                css: '#ID_QX_VEHICLE_VEH_MODEL_chosen a',
                isSingle: true
            },
            bikeModelOption: {
                css: '#ID_QX_VEHICLE_VEH_MODEL_chosen li',
                isSingle: false
            },
            bikeCode: {
                css: '#ID_QX_VEHICLE_VEH_CODE_chosen a',
                isSingle: true
            },
            bikeCodeOption: {
                css: '#ID_QX_VEHICLE_VEH_CODE_chosen li',
                isSingle: false
            },
            ownBike: {
                css: 'button[id*="ID_QX_VEHICLE_VEH_BROUGHT_"]',
                isSingle: false
            },
            firstInsurance: {
                css: 'button[id*="ID_QX_POLICYVEHICLE_VPO_PREVINS_"]',
                isSingle: false
            },
            bikeCost: {
                css: '#ID_QX_VEHICLE_VEH_VALUE',
                isSingle: true
            },
            ukBike: {
                css: 'button[id*="ID_QX_VEHICLE_VEH_IMPORT_"]',
                isSingle: false
            },
            sideCar: {
                css: 'button[id*="ID_QX_VEHICLE_VEH_SIDECAR_"]',
                isSingle: false
            },
            bikeSecurity: {
                css: 'button[id*="ID_QX_VEHICLE_VEH_TAGGED_"]',
                isSingle: false
            },
            additionalSecurity: {
                css: 'button[id*="ID_QX_CONTROL_FIELDS_QXF_CONTROL_SECURITY_"]',
                isSingle: false
            },
            bikeChanged: {
                css: 'button[id*="ID_QX_CONTROL_FIELDS_QXF_CONTROL_MODIFICATIONS_"]',
                isSingle: false
            },
            bikeUsage: {
                css: '#ID_QX_POLICYVEHICLE_VPO_USE_chosen a',
                isSingle: true
            },
            bikeUsageOption: {
                css: '#ID_QX_POLICYVEHICLE_VPO_USE_chosen li',
                isSingle: false
            },
            bikeDistance: {
                css: '#ID_QX_POLICYVEHICLE_VPO_ANNUALMILES',
                isSingle: true
            },
            insuranceCover: {
                css: 'button[id*="ID_QX_POLICYVEHICLE_VPO_COVER_"]',
                isSingle: false
            },
            voluntaryExcess: {
                css: '#ID_QX_POLICYVEHICLE_VPO_VOLXS_chosen a',
                isSingle: true
            },
            voluntaryExcessOption: {
                css: '#ID_QX_POLICYVEHICLE_VPO_VOLXS_chosen li',
                isSingle: false
            },
            policyPayment: {
                css: 'button[id*="ID_QX_POLICYVEHICLE_VPO_PAYMENTFREQUENCY_"]',
                isSingle: false
            },
            pillionPassenger: {
                css: 'button[id*="ID_QX_POLICYVEHICLE_VPO_COVERPILLION_"]',
                isSingle: false
            },
            policyStart: {
                css: 'button[id*="ID_QX_POLICYVEHICLE_VPO_INCEPDATE_"]',
                isSingle: false
            },
            stepOneSubmit: {
                css: '.btn.next-button',
                isSingle: true
            }
        }
    };

};

inheritance.inherits(Page, BikeInsurance);

module.exports = BikeInsurance;