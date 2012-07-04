var express = require('express');
var bot = require('./bot');

var app = express.createServer();

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.bodyParser());

app.get('/', function(req, res) {
	res.render('index', { title: 'Bot Agitator' });
});

app.post('/player', function(req, res) {
	new bot().upload(req, res);
});

app.listen(8081);
