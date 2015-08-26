/**
 * Log .25 hrs to education and learning task
 * Set env vars FB_EMAIL and FB_PASS before running: `export FB_EMAIL=email@example.com && export FB_PASS=YourPassword` 
 */
var webdriverio = require('webdriverio');
var argv = require('minimist')(process.argv.slice(2));
var timeout = 10 * 1000;


// build client
var client = webdriverio.remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
});


// initialize
client.init()

	// goto http://tracker.dynamit.us
	.url('http://facebook.com')

	// fill login credentials
	.setValue('#email', argv.email)
	.setValue('#pass', argv.pass)

	// submit form
	.submitForm('#login_form')

	// wait until logged in and status update textarea exists
	.waitForExist('#mentionsInput textarea')

	// set value
	.setValue('#mentionsInput textarea', 'Hello, World!')

	// submit form
	.submitForm('#u_0_w')

	// exit
	.end();
