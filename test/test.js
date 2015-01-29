var jshint = require('jshint/src/cli').run;
var chai = require('chai');
var sinon = require('sinon');
var reporterModule = require('../index')
var notifier = require('node-notifier');
var expect = chai.expect;

describe("call the passed in notifier", function() {
    var mockNotifier = null;

    beforeEach(function() {
        mockNotifier = sinon.mock(notifier);
        reporterModule.setNotifier(mockNotifier);
        console.log(process.cwd());
    });

    it("should find the correct number of errors for the correct file", function() {
        mockNotifier.expects("notify").withExactArgs({
            title: 'jshint errors',
            message:  './test/fixtures/fixture.js : 9 errors.'
        });
        reporterModule.setNotifier(notifier);

        jshint({
            args: ['./test/fixtures/fixture.js'],
            reporter: reporterModule.reporter
        });
        mockNotifier.verify();
    });
});

