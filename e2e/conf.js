var platforms = {
    mobile: '--window-size=500,800',
    desktop: '--start-maximized'
};

exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: process.env.BROWSER,
        chromeOptions : {
            args: [platforms[process.env.PLATFORM]]
        }
    },
    specs: [ 'features/*.feature' ],
    cucumberOpts: {
        require: [
            'step-definitions/*.js',
            'step-definitions/**/*.js',
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
    }
};