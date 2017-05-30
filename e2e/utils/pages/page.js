'use strict';

var Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype.getTextValue = function(element) {
    return this.world.getter.elementGetter(this._root, this._data.elements[element]).getText();
};

Page.prototype.sendInputs = function(element, value) {
    return this.world.getter.elementGetter(this._root, this._data.elements[element]).sendKeys(value);
};

Page.prototype.clickAction = function(element) {
    var myElement = this.world.getter.elementGetter(this._root, this._data.elements[element]);
    return browser.wait(function () {
        return myElement.isDisplayed();
    }, 80000)
    .then(function() {
        return myElement.click();
    });
};

Page.prototype.waitForLogo = function(logo) {
    var myElement = this.world.getter.elementGetter(this._root, this._data.elements[logo]);
    return browser.wait(function () {
        return myElement.isDisplayed();
    }, 80000)
};

Page.prototype.waitForElementToClose = function(element) {
    var myElement = this.world.getter.elementGetter(this._root, this._data.elements[element]);
    return browser.wait(function () {
        return myElement.isDisplayed()
        .then(function(present) {
            return !present;
        })
    }, 120000);
};

Page.prototype.getOption = function(element, value) {
    var myElement = this.world.getter.elementGetter(this._root, this._data.elements[element]);
    return browser.wait(function () {
        return myElement.count()
        .then(function(num) {
            return num > 0;
        })
    }, 80000)
    .then(function() {
        return myElement.filter(function (option){
            return option.getText().then(function (text) {
                return text === value;
            });
        }).get(0).click();
    });
};

module.exports = Page;