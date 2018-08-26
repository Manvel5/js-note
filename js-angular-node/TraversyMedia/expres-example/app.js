/// nodemon app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// this middleware it's called before all middleware
app.use((req, res, next) => {
	next();
});

// bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function(req, res) {
	// res.json({name: 'Max', age: 20});
	res.render('index', {
		name: 'Max'
	});
});

app.listen(3000, function() {
	console.log('app listen in the 300 port');
});