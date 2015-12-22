var EventEmitter = require('events').EventEmitter;


var MissEvent = function () {

	var me = this;

	this.once("callmister", function () {
		console.log("you are the #" + me.listeners("callmister").length + " listener");
		console.log("Miss is calling mister ...");
		this.emit("hello");
	});
}

MissEvent.prototype = new EventEmitter();

function callMisterOnlyOnce () {
}

// MissEvent.prototype.make 

module.exports = MissEvent;