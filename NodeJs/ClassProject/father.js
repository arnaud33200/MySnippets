var Father = function () {
	this.name = "TOTO";
	this.paramFather = "YES";
};

Father.prototype.whoAmI = function () {
	console.log("I am : " + this.name);
};

module.exports = Father;