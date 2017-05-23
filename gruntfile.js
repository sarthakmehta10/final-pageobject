module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    var platform = grunt.option('platform'),
        browser = grunt.option('browser'),
        moment = require('moment');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        protractor_webdriver: {
            options: {
                path: 'node_modules/webdriver-manager/bin/',
                keepAlive: true
            },
            update: {
                options: {
                    command: 'webdriver-manager update'
                }
            },
            start: {
                options: {
                    command: 'webdriver-manager start'
                }
            }
        },
        
        protractor: {
            options: {
                keepAlive: true,
            },
            run_chrome: {
                options: {
                   configFile: "e2e/conf.js",
                    args: {
                        seleniumAddress: 'http://localhost:4444/wd/hub',
                        cucumberOpts: {
                            tags: process.env.TAGS
                        }
                    }
                }
            },
            run_firefox: {
                options: {
                    configFile: "e2e/firefox-conf.js",
                    args: {
                        seleniumAddress: 'http://localhost:4444/wd/hub',
                        cucumberOpts: {
                            tags: process.env.TAGS
                        }
                    }
                }
            },
        },
        
        shell: {
            protractor_install: {
                command: 'node node_modules/webdriver-manager/bin/webdriver-manager update'
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-shell-spawn');

    grunt.registerTask('default', 'default task', function (target) {
        process.env.PLATFORM = platform || 'desktop';
        process.env.TAGS = '@' + process.env.PLATFORM;
        if(target === 'run_firefox' || browser === 'firefox') {
            process.env.BROWSER = 'firefox';
            grunt.task.run(['protractor_webdriver:start', 'protractor:' + target])
        }else {
            process.env.BROWSER = 'chrome'
            grunt.task.run(['protractor_webdriver:start', 'protractor:' + target])
        }
    });
}