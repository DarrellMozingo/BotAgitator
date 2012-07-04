var assert = require('assert');
var fs = require('fs');

var bot = require('../bot');

describe('Bot', function() {
	describe('Upload', function() {
		it('should write the uploaded content to a temporary location and notify the user of success', function() {
			var fakeResponse = function() {
				this.send = function(message) {
					assert.equal(message, 'Received player.');
				};
			};

			var fakeRequest = function() {
				this.body = { 'file_contents' : '' };
			};

			fs.writeFile = function(file, content, callback) { 
				assert.equal(file, 'newPlayer.zip');
				assert.equal(content, 'file_contents');
		
				callback();
			};
			
			new bot().upload(new fakeRequest(), new fakeResponse());
		})
		
		it('should notify the user of errors', function() {
			var fakeResponse = function() {
				this.send = function(message) {
					assert.equal(message, 'error message!');
				};
			};

			var fakeRequest = function() {
				this.body = { 'file_contents' : '' };
			};

			fs.writeFile = function(file, content, callback) { 
				callback('error message!');
			};
			
			new bot().upload(new fakeRequest(), new fakeResponse());
		})
	})
})
