const http = require('http');

const server = new http.Server();// EventEmmiter

//http.Server extends net.Server extends EventEmitter

server.on('request', (req, res) => {
	console.log(120);
	res.end("hello World");
});

//after event node js called emit method from EventEmitter. we can overide method emit

const emit = server.emit;

server.emit = function(event) {
	console.log(event);
	emit.call(server, arguments)
}

server.listen(1337, '127.0.0.1');