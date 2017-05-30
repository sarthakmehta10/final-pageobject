'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var PetInsurance = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
        elements: {
            logo: {
                css: '.header__logo-responsive',
                isSingle: true
            },
            stepPageLogo: {
                css: '.site-header.transparent img',
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
            petSpecies: {
                css: '#qs_questions_pet_0_species .pseudo-radio',
                isSingle: false
            },
            petName: {
                css: '#questions_pet_0_name',
                isSingle: true
            },
            petGender: {
                css: '#qs_questions_pet_0_sex .pseudo-radio',
                isSingle: false
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
            catType: {
                css: '#qs_questions_cat_0_type .pseudo-radio',
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
            petNeutered: {
                css: '#qs_questions_pet_0_neutered .pseudo-radio',
                isSingle: false
            },
            petChipped: {
                css: '#qs_questions_pet_0_chipped .pseudo-radio',
                isSingle: false
            },
            petVaccine: {
                css: '#qs_questions_pet_0_vaccinated .pseudo-radio',
                isSingle: false
            },
            petMedical: {
                css: '#qs_questions_pet_0_pre_existing .pseudo-radio',
                isSingle: false
            },
            petComplaints: {
                css: '#qs_questions_pet_0_complaints .pseudo-radio',
                isSingle: false
            },
            petBusinessConnection: {
                css: '#qs_questions_pet_0_business .pseudo-radio',
                isSingle: false
            },
            petAlcoholEnvironment: {
                css: '#qs_questions_pet_0_alcohol .pseudo-radio',
                isSingle: false
            },
            otherPets: {
                css: '#qs_questions_pet_0_add_pet .pseudo-radio',
                isSingle: false
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
    
    _this.getErrorCount = function() {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.errorRows).count();
    };
    
    _this.getErrorNumber = function() {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.errorNumber).getText();
    };
    
};

inheritance.inherits(Page, PetInsurance);

module.exports = PetInsurance;