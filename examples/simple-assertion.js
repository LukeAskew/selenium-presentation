var webdriverio = require('webdriverio');
var assert = require('assert');

describe('My simple Selenium test', function () {

	var client = {};

	before(function(done){
		client = webdriverio.remote({ desiredCapabilities: { browserName: 'phantomjs' } });
		client.init(done);
	});

	it('Goes to Google', function (done) {
		client
			.url('http://google.com')
			.getTitle(function (err, title) {
				assert(err === undefined);
				assert(title === 'Google');
			})
			.call(done)
	});

	after(function(done) {
		client.end(done);
	});

});
