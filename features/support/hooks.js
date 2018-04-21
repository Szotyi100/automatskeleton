'use strict';

require('chromedriver');
require('cucumber').Util.Colors(true);
var chai = require('chai'), chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
global.expect = chai.expect;

var webdriver = require('selenium-webdriver');
global.by = webdriver.By;

module.exports = function(){
    this.setDefaultTimeout(60000);
    this.registerHandler('BeforeFeatures', () => {
        global.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        return global.driver.manage().window().maximize();
    });
    
    this.Before({tags: ['@phone']}, () => global.driver.manage().window().setSize(800, 640));

    this.registerHandler('AfterFeatures', () =>  global.driver.quit());
};
