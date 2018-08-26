const {EventEmitter} = require('events');

class CustomEvent extends EventEmitter {
	constructor() {
		super();
		this.init();
	}

	init() {
		setTimeout(() => {
			this.emit('ready', {});
		}, 2000);
	}
}
 
const e = new CustomEvent();

e.on('ready', function() {
	console.log('ready');
});

// const http = require('http');
const https = require('https');

https.get('https://nodejs.org/en/',res => {
	console.log('statusCode is' ,res.statusCode);
}).on('error', err => {
	console.log('error')
})