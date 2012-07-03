var express = require('express');
var fs = require('fs');

var app = express.createServer();

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.bodyParser());

app.get('/', function(req, res) {
	res.render('index', { title: 'Bot Agitator' });
});

app.post('/player', function(req, res) {
	var playerFileContents = Object.keys(req.body)[0];

	fs.writeFile('newPlayer.zip', playerFileContents, function(err) {
		if(err) {
			res.send(err);
		}
		else {
			res.send('Received player.');
		}
	});
});

app.listen(8081);
