var app = require('express').createServer();

app.get('/', function(req, res) {
  res.send('Bot Challenge - coming soon');
});

app.listen(8081);
