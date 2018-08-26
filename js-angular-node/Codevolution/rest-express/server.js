const express = require('express');
const bodyParser = require('body-parser');
const api = require('./rest/api');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Hello 8000');
});

app.use('/api', api);

app.listen(PORT, function() {
    console.log(process.env.PORT);
});