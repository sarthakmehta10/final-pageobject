'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var BikeDetails = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
        elements: {
            stepPageLogo: {
                css: '.header-logo',
                isSingle: true
            },
            ownerTitle: {
                css: 'button[id*="ID_QX_PERSON_PER_TITLE_"]',
                isSingle: false
            },
            firstName: {
                css: '#ID_QX_PERSON_PER_FORENAME',
                isSingle: true
            },
            lastName: {
                css: '#ID_QX_PERSON_PER_SURNAME',
                isSingle: true
            },
            dayDate: {
                css: '#DOB_INPUT_DAY',
                isSingle: true
            },
            monthDate: {
                css: '#DOB_INPUT_MONTH',
                isSingle: true
            },
            yearDate: {
                css: '#DOB_INPUT_YEAR',
                isSingle: true
            },
            ownerGender: {
                css: 'button[id*="ID_QX_PERSON_PER_SEX_"]',
                isSingle: false
            },
            maritalStatus: {
                css: 'button[id*="ID_QX_PERSON_PER_MARITALSTATUS_"]',
                isSingle: false
            },
            occupation: {
                css: 'button[id*="ID_QX_PERSON_PER_EMPLOYMENTCATEGORYFULLTIME_"]',
                isSingle: false
            },
            jobName: {
                css: '#ID_QX_PERSON_PER_OCCUPATIONFULLTIMEDESC',
                isSingle: true
            },
            jobNameOption: {
                css: '#ui-id-1 li',
                isSingle: false
            },
            industryName: {
                css: '#ID_QX_PERSON_PER_EMPLOYMENTFULLTIMEDESC',
                isSingle: true
            },
            industryNameOption: {
                css: '#ui-id-2 li',
                isSingle: false
            },
            otherJob: {
                css: 'button[id*="ID_QX_PERSON_PER_EMPLOYMENTCATEGORYPARTTIME_"]',
                isSingle: false
            },
            permanentResident: {
                css: 'button[id*="ID_QX_CONTROL_FIELDS_QXF_RESIDENCY_"]',
                isSingle: false
            },
            homeOwner: {
                css: 'button[id*="ID_QX_PERSON_PER_HOMEOWNER_0_"]',
                isSingle: false
            },
            postCode: {
                css: '#ID_QX_CONTACTDETAILS_CD_POSTCODE',
                isSingle: true
            },
            findAddress: {
                css: '.btn.btn-find.btn-address-lookup',
                isSingle: true
            },
            address: {
                css: '#ID_CD_POSTCODE_LOOKUP_chosen a',
                isSingle: true
            },
            addressOption: {
                css: '#ID_CD_POSTCODE_LOOKUP_chosen li',
                isSingle: false
            },
            keepHome: {
                css: 'button[id*="ID_QX_CONTROL_FIELDS_QXF_CONTROL_KEPTATHOME_"]',
                isSingle: false
            },
            bikeParking: {
                css: 'button[id*="ID_QX_VEHICLE_VEH_KEPT_"]',
                isSingle: false
            },
            licenseKind: {
                css: 'button[id*="ID_QX_DRIVERS_DR_LICENCE_"]',
                isSingle: false
            },
            licenseYear: {
                css: '#ID_QX_DRIVERS_DR_LICDATEYY_chosen a',
                isSingle: true
            },
            licenseYearOption: {
                css: '#ID_QX_DRIVERS_DR_LICDATEYY_chosen li',
                isSingle: false
            },
            continuousRideYear: {
                css: '#ID_QX_DRIVERS_DR_CONTINUOUSEXPYEARS_chosen a',
                isSingle: true
            },
            continuousRideYearOption: {
                css: '#ID_QX_DRIVERS_DR_CONTINUOUSEXPYEARS_chosen li',
                isSingle: false
            },
            noClaimsYear: {
                css: '#ID_QX_POLICYVEHICLE_VPO_NCB_chosen a',
                isSingle: true
            },
            noClaimsYearOption: {
                css: '#ID_QX_POLICYVEHICLE_VPO_NCB_chosen li',
                isSingle: false
            },
            ownCar: {
                css: 'button[id*="ID_QX_DRIVERS_DR_OTHERACCESS_"]',
                isSingle: false
            },
            phoneNumber: {
                css: '#ID_QX_CONTACTDETAILS_CD_DAYTIMETELEPHONENUMBER',
                isSingle: true
            },
            eMail: {
                css: '#ID_QX_CONTACTDETAILS_CD_EMAILADDRESS',
                isSingle: true
            },
            confirmMail: {
                css: '#ID_CONTROL_CONTROL_EMAILCONFIRM',
                isSingle: true
            },
            bestPrice: {
                css: 'button[id*="ID_QX_CONTACTDETAILS_CD_CONTACTPREFERENCE_"]',
                isSingle: false
            },
            contactMode: {
                css: '.toggle-checkbox.toggle-checkbox-full',
                isSingle: false
            },
            stepTwoSubmit: {
                css: 'input[value="get quotes"]',
                isSingle: true
            }
        }
    };
    
    _this.selectAddress = function(address) {
        var myElement = _this.world.getter.elementGetter(_this._root, _this._data.elements.addressOption);
        return browser.wait(function () {
            return myElement.count()
                .then(function(num) {
                return num > 0;
            })
        }, 80000)
            .then(function() {
            return myElement.filter(function (choice) {
                return choice.getText()
                    .then(function(text) {
                    return text.includes(address);
                });
            }).get(0).click();
        });
    };

};

inheritance.inherits(Page, BikeDetails);

module.exports = BikeDetails;