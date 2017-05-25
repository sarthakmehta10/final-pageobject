'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var InsuranceResult = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
        elements: {
            resultCount: {
                css: '#numQuotes',
                isSingle: true
            },
            allResults: {
                css: '.extra-link.allquotes',
                isSingle: true
            },
            'accidentOnly': {
                css: '#more-info-bronze-link',
                isSingle: true
            },
            'timeLimited': {
                css: '#more-info-silver-link',
                isSingle: true
            },
            'perCondition': {
                css: '#more-info-gold-link',
                isSingle: true
            },
            'lifetime': {
                css: '#more-info-platinum-link',
                isSingle: true
            },
            filter: {
                css: '#filters-trigger',
                isSingle: true
            },
            editQuote: {
                css: '.col-xs-12>a',
                isSingle: true
            },
            loadingBox: {
                css: '#loading-donk h2',
                isSingle: true
            }
        }
    };
    
    _this.getResultsCount = function(resultField) {
        var resultOne,
            resultTwo;
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.allResults).click()
        .then(function () {
            return _this.world.getter.elementGetter(_this._root, _this._data.elements.resultCount).getText()
            .then(function (text) {
                resultOne = parseInt(text);
            });
        })
        .then(function () {
            return _this.world.getter.elementGetter(_this._root, _this._data.elements[resultField]).click()
            .then(function () {
                return _this.world.getter.elementGetter(_this._root, _this._data.elements.resultCount).getText()
                    .then(function (text) {
                    resultTwo = parseInt(text);
                });
            });
        })
        .then(function() {
            if(resultOne > resultTwo) {
                return true;
            }else {
                return false;
            }
        });
    };
    
    _this.getResultsCountMobile = function(resultField) {
        var resultOne,
            resultTwo;
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.filter).click()
        .then(function() {
            return _this.world.getter.elementGetter(_this._root, _this._data.elements.allResults).click()
            .then(function () {
                return _this.world.getter.elementGetter(_this._root, _this._data.elements.resultCount).getText()
                .then(function (text) {
                    resultOne = parseInt(text);
                });
            });
        })
        .then(function() {
            return _this.world.getter.elementGetter(_this._root, _this._data.elements.filter).click();
        })
        .then(function () {
            return _this.world.getter.elementGetter(_this._root, _this._data.elements[resultField]).click()
            .then(function () {
                return _this.world.getter.elementGetter(_this._root, _this._data.elements.resultCount).getText()
                    .then(function (text) {
                    resultTwo = parseInt(text);
                });
            });
        })
        .then(function() {
            if(resultOne > resultTwo) {
                return true;
            }else {
                return false;
            }
        });
    };
    
};

inheritance.inherits(Page, InsuranceResult);

module.exports = InsuranceResult;