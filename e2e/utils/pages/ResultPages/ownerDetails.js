'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var OwnerDetails = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
        elements: {
            pageTitle: {
                css: '.bar-title',
                isSingle: true
            },
            radioButtons: {
                css: '.pseudo-radio',
                isSingle: false
            },
            ownerTitle: {
                css: '#questions_owner_title',
                isSingle: true
            },
            titleOption: {
                css: '#questions_owner_title option',
                isSingle: false
            },
            firstName: {
                css: '#questions_first_name',
                isSingle: true
            },
            lastName: {
                css: '#questions_last_name',
                isSingle: true
            },
            postCode: {
                css: '#questions_owner_address___postcode',
                isSingle: true
            },
            findAddress: {
                css: '#questions_owner_address___lookup',
                isSingle: true
            },
            addressOption: {
                css: '#questions_owner_address___select option',
                isSingle: false
            },
            date: {
                css: '#questions_policy_start_date',
                isSingle: true
            },
            datePicker: {
                css: 'a[class="ui-state-default"]',
                isSingle: false
            },
            birthDay: {
                css: '#questions_owner_dob___day',
                isSingle: true
            },
            birthMonth: {
                css: '#questions_owner_dob___month',
                isSingle: true
            },
            birthYear: {
                css: '#questions_owner_dob___year',
                isSingle: true
            },
            phoneNumber: {
                css: '#questions_owner_phone',
                isSingle: true
            },
            eMail: {
                css: '#questions_owner_email',
                isSingle: true
            },
            confirmMail: {
                css: '#questions_verify_email',
                isSingle: true
            },
            checkBox: {
                css: '.pseudo-radio.pseudo-radio__check',
                isSingle: false
            },
            submit: {
                css: '#questions_submit',
                isSingle: true
            }
        }
    };
    
    _this.initYesNO = function(type, value) {
        var radioButtons = {
            'your-pet': 0,
            'address': 1,
            'full-time': 2
        }
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.radioButtons).filter(function (choice) {
            return choice.getText()
                .then(function(text) {
                return text.includes(value);
            });
        }).get(radioButtons[type]).click();
    };
    
    _this.selectAddress = function(address) {
        browser.sleep(2000);
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.addressOption).filter(function (choice) {
            return choice.getText()
                .then(function(text) {
                return text.includes(address);
            });
        }).click();
    };
    
    _this.selectDate = function(date) {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.datePicker).filter(function (choice) {
            return choice.getText()
                .then(function(text) {
                return text.includes(date);
            });
        }).click();
    };
    
};

inheritance.inherits(Page, OwnerDetails);

module.exports = OwnerDetails;