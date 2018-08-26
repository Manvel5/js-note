const http = require('http');
const url = require('url');

const server = new http.Server(function(req, res) {
	const urlParams = url.parse(req.url, true);
	console.log(urlParams.pathname)
	if(urlParams.pathname == '/user' && urlParams.query.id) {
		res.setHeader('Cashe-control', 'no-cashe');
		res.write(JSON.stringify(req.headers));
		res.end(JSON.stringify(urlParams));
	} else {
		res.statusCode = 404;
		res.end(`method is ${req.method}`);
	}
		
});

server.listen(3001, '127.0.0.1');