'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var PetInsurance = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
        elements: {
            pageTitle: {
                css: '.bar-title',
                isSingle: true
            },
            getQuote: {
                css: '.fancy-button.fancy-button--purple.fancy-button--arrow',
                isSingle: true
            },
            radioButtons: {
                css: '.pseudo-radio',
                isSingle: false
            },
            petName: {
                css: '#questions_pet_0_name',
                isSingle: true
            },
            monthDate: {
                css: '#questions_pet_0_dob___month',
                isSingle: true
            },
            monthOption: {
                css: '#questions_pet_0_dob___month option',
                isSingle: false
            },
            yearDate: {
                css: '#questions_pet_0_dob___year',
                isSingle: true
            },
            yearOption: {
                css: '#questions_pet_0_dob___year option',
                isSingle: false
            },
            dayDate: {
                css: '#questions_pet_0_dob___day',
                isSingle: true
            },
            dayOption: {
                css: '#questions_pet_0_dob___day option',
                isSingle: false
            },
            petBreed: {
                css: '#questions_cat_0_pedigree_selected',
                isSingle: true
            },
            ragdoll: {
                css: '#ragdoll',
                isSingle: true
            },
            petCost: {
                css: '#questions_pet_0_cost',
                isSingle: true
            },
            stepOneSubmit: {
                css: '#questions_submit',
                isSingle: true
            },
            errorRows: {
                css: 'li[class="question question-form__row error"]',
                isSingle: false
            },
            errorNumber: {
                css: '.error-count',
                isSingle: true
            }
        }
    };
    
    _this.initYesNO = function(type, value) {
        var radioButtons = {
            'neutered': 0,
            'chipped': 1,
            'vaccines': 2,
            'medical-conditions': 3,
            'legal-action': 4,
            'business-connected': 5,
            'alcohol': 6,
            'other-pets': 7
        }
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.radioButtons).filter(function (choice) {
            return choice.getText()
                .then(function(text) {
                return text.includes(value);
            });
        }).get(radioButtons[type]).click();
    };
    
    _this.getErrorCount = function() {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.errorRows).count();
    };
    
    _this.getErrorNumber = function() {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.errorNumber).getText();
    }
    
};

inheritance.inherits(Page, PetInsurance);

module.exports = PetInsurance;