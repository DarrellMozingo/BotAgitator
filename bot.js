var fs = require('fs');

var Bot = function() {
	this.upload = function(req, res) {
		var playerFileContents = Object.keys(req.body)[0];

		fs.writeFile('newPlayer.zip', playerFileContents, function(err) {
			if(err) {
				res.send(err);
			}
			else {
				res.send('Received player.');
			}
		});
	};
};

module.exports = Bot;
