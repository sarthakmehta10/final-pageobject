var platforms = {
    mobile: {
        width: 500,
        height: 800
    }
};

exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: process.env.BROWSER,
        'marionette': true
    },
    specs: [ 'features/*.feature' ],
    cucumberOpts: {
        require: [
            'step_definitions/*.js',
            'step_definitions/**/*.js',
            'utils/world.js'
        ],
        format: 'pretty',
        tags: process.env.TAGS
    },
    onPrepare: function() {
        var chai = require('chai');
        chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(chaiAsPromised);
        moment = require('moment');
        browser.ignoreSynchronization = true;
        if(process.env.PLATFORM === 'desktop') {
            browser.driver.manage().window().maximize();
        }else {
            browser.driver.manage().window().setSize(platforms[process.env.PLATFORM['width']], platforms[process.env.PLATFORM['height']]);
        }
    }
};
