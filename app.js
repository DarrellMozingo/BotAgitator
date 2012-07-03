var express = require('express');
var fs = require('fs');

var app = express.createServer();

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.bodyParser());

app.get('/', function(req, res) {
	res.render('index', { title: 'Bot Challenge' });
});

app.post('/player', function(req, res) {
	fs.writeFile('newPlayer.zip', Object.keys(req.body)[0], function(err) {
		if(err) {
			res.send(err);
		}
		else {
			res.send('Received player.');
		}
	});
});

app.listen(8081);
