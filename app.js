var app = require('express').createServer();

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.get('/', function(req, res) {
	res.render('index', { title: 'Bot Challenge' });
});

app.listen(8081);
