	// npm install lite-server -g 
	// 	lite-server

class User {
	constructor(name) {
		this.name = name;
	}

	showName() {
		console.log(this.name);
	}
}
const p = new User('Max');
p.showName();

exports.Users = User;
exports.p = p;