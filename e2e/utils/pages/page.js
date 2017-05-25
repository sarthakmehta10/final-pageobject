'use strict';

var Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype.getTextValue = function(element) {
    return this.world.getter.elementGetter(this._root, this._data.elements[element]).getText();
};

Page.prototype.sendInputs = function(element, value) {
    browser.sleep(2000);
    return this.world.getter.elementGetter(this._root, this._data.elements[element]).sendKeys(value);
};

Page.prototype.clickAction = function(element) {
    return this.world.getter.elementGetter(this._root, this._data.elements[element]).click();
};

Page.prototype.waitForPageToLoad = function() {
    return browser.sleep(2000);
};

Page.prototype.waitForElementToLoad = function(element) {
    var myElement = this.world.getter.elementGetter(this._root, this._data.elements[element]);
    return browser.wait(function () {
        return myElement.isDisplayed();
    }, 20000);
};

Page.prototype.getOption = function(element, value) {
    var myElement = this.world.getter.elementGetter(this._root, this._data.elements[element]);
    return myElement.filter(function (option){
        return option.getText().then(function (text) {
            return text === value;
        });
    }).get(0).click();
};

module.exports = Page;