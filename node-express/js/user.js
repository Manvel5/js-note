function User(fName, lName) {
	this.firstName = fName;
	this.lastName = lName;
}
User.prototype.sayHello = function() {
	console.log('Hello friend ' + this.firstName + ' ' + this.lastName);
}

module.exports.User = User;
//module.exports == exports === this 