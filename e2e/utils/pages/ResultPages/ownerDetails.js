'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var OwnerDetails = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
        elements: {
            stepPageLogo: {
                css: '.site-header.transparent img',
                isSingle: true
            },
            radioButtons: {
                css: '.pseudo-radio',
                isSingle: false
            },
            ownerKeeper: {
                css: '#qs_questions_owner_keeper .pseudo-radio',
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
            ownerProperty: {
                css: '#qs_questions_owner_kept_at_property .pseudo-radio',
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
            maritalStatus: {
                css: '#qs_questions_owner_marital_status .pseudo-radio',
                isSingle: false
            },
            ukResident: {
                css: '#qs_questions_owner_uk_resident .pseudo-radio',
                isSing: false
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
                css: '#qs_questions_contactPreferences .pseudo-radio.pseudo-radio__check',
                isSingle: false
            },
            submit: {
                css: '#questions_submit',
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
    
    _this.selectDate = function(date) {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.datePicker).filter(function (choice) {
            return choice.getText()
                .then(function(text) {
                return text.includes(date);
            });
        }).get(0).click();
    };
    
};

inheritance.inherits(Page, OwnerDetails);

module.exports = OwnerDetails;