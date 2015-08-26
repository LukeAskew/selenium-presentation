var webdriverio = require('webdriverio');


// single browser
var singleClient = webdriverio.remote({
	desiredCapabilities: {
		browserName: 'chrome'
	}
});


// multiple browsers
var multiClient = webdriverio.multiremote({
	myChromeBrowser: {
		desiredCapabilities: {
			browserName: 'chrome'
		}
	},
	myFirefoxBrowser: {
		desiredCapabilities: {
			browserName: 'firefox'
		}
	}
});

var client = singleClient;
// var client = multiClient;


// run
client
	.init()
	.url('https://duckduckgo.com/')
	.setValue('#search_form_input_homepage', 'WebdriverIO')
	.click('#search_button_homepage')
	.getTitle().then(function(title) {
		console.log('Title is: ' + title);
	})
	.end();
