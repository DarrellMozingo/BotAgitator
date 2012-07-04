var assert = require('assert');
var fs = require('fs');

var bot = require('../bot');

describe('Bot', function() {
	describe('Upload', function() {
		it('should write the uploaded file out to a temporary location and notify the user', function() {
			var fakeResponse = function() {
				this.send = function(message) {
					assert.equal(message, 'custom-error');
				};
			};

			var fakeRequest = function() {
				this.body = { 'file_contents' : '' };
			};

			fs.writeFile = function(file, content, callback) { 
				assert.equal(file, 'newPlayer.zip');
				assert.equal(content, 'file_contents');
		
				callback('custom-error');
			};
			
			new bot().upload(new fakeRequest(), new fakeResponse());
		})
	})
})
