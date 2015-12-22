var Father = require('./father');

var TestObject = function () {

	this.param1 = "test";
	this.name = "le test object"
};

TestObject.prototype = new Father();

TestObject.prototype.print = function() {
	console.log(this.param1);
	console.log(this.paramFather);
};

module.exports = TestObject;