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
//    browser.sleep(2000);
    var myElement = this.world.getter.elementGetter(this._root, this._data.elements[element]);
//    var myElement = element(by.css(this._data.elements[element].css));
//        return this.world.getter.elementGetter(this._root, this._data.elements[element]).click();
        return browser.wait(function () {
            return myElement.isDisplayed();
        }, 6000).then(function() {
            return myElement.click();
        });
//    return browser.executeScript('arguments[0].click()', myElement);
};

Page.prototype.waitForPageToLoad = function() {
    return browser.sleep(2000);
};

Page.prototype.waitForElementToLoad = function(element) {
    var myElement = this.world.getter.elementGetter(this._root, this._data.elements[element]);
    return browser.wait(function () {
        return myElement.isDisplayed();
    }, 6000);
};

Page.prototype.getOption = function(element, value) {
//    browser.sleep(5000);
    var myElement = this.world.getter.elementGetter(this._root, this._data.elements[element]);
    return myElement.filter(function (option){
        return option.getText().then(function (text) {
//            console.log(text);
            return text.includes(value);
        });
    }).click().then(function () {
        return browser.sleep(4000);
    });
};

module.exports = Page;