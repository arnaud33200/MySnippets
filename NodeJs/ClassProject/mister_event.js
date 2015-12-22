var EventEmitter = require('events').EventEmitter;

var MisterEvent = function () {

	this.on("hello", function () {
		console.log("Mister says hello");
	});

	this.on("hello", function () {
		console.log("Mister says hello again");
	});
};

MisterEvent.prototype = new EventEmitter();

module.exports = MisterEvent;