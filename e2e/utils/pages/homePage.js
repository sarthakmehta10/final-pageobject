'use strict';

var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var HomePage = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
            elements: {
                insuranceType: {
                    css: '.header-text h2',
                    isSingle: false
                }
            }
        };
};

inheritance.inherits(Page, HomePage);

module.exports = HomePage;