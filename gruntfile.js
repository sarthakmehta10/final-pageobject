module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    var platform = grunt.option('platform'),
        count = grunt.option('count'),
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
                   configFile: "e2e/chrome_conf.js",
                    args: {
                        seleniumAddress: 'http://localhost:4444/wd/hub',
                        cucumberOpts: {
                            tags: ['~@ignore','<%= protractor.platformTag%>']
                        }
                    }
                }
            },
            run_firefox: {
                options: {
                    configFile: "e2e/firefox_conf.js",
                    args: {
                        seleniumAddress: 'http://localhost:4444/wd/hub',
                        cucumberOpts: {
                            tags: process.env.TAGS
                        }
                    }
                }
            },
            run_all: {
                options: {
                    configFile: "e2e/multiBrowser_conf.js",
                    args: {
                        seleniumAddress: 'http://localhost:4444/wd/hub',
                        cucumberOpts: {
                            tags: process.env.TAGS
                        }
                    }
                }
            },
            wip: {
                options: {
                   configFile: "e2e/chrome_conf.js",
                    args: {
                        seleniumAddress: 'http://localhost:4444/wd/hub',
                        cucumberOpts: {
                            tags: ['@wip','<%= protractor.platformTag%>']
                        }
                    }
                }
            }
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
        grunt.config.set('protractor.platformTag', process.env.TAGS);
        if(target === 'run_all') {
            grunt.task.run(['protractor_webdriver:start', 'protractor:' + target])
        }else {
            process.env.COUNT = count || 1;
            grunt.task.run(['protractor_webdriver:start', 'protractor:' + target])
        }
    });
}