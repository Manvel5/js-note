// node.js = V8 + I/O + plugins

const ln = require('./ln'); // export json file
//JSON is format JSON !== JS object
// console.log(ln.hello + 'Max');

{
	const User = require('./js/user').User;
	let user = new User('Min', 'Max')
	// console.log(user.sayHello());
}
{
	//require can found module from node_modules or node_libraries folder automaticly
	const Student = require('student');
	let st = new Student('student', 'max');
	console.log(st.sayHello())
}
{
              1. npm init, npm init --yes, npm init -y
              2. npm install jquery --save, npm i jquery -S, npm i jquery -S
              3. npm i --save-dev gulp, npm i -D gulp
              4. npm i --save --save-exact jQuery, npm i -SE jQuery
              5. npm i rxjs@latest -SE
              6. npm home jquery 
              7. npm repo jquery
              8. npm search jquery
              9. npm run "script"
              10. npm adduser
              11. npm publish // add current package to npm repository 
              12. npm update jQuery //updated jquery version to last stabil version
              13. npm remove jQuery
              14. npm search
              15. npm prune // it's removed all modules which not registred in package.json file

  // dependency vs devDependency
  // when run npm i . installed dependency and devDependency packages .
  // but for example installex express npm i express, expres/package.json devDpendencies not instlled

   // module version 0.12.35
   //1 -> 0 instabil version
   //12 -> when added new features
   //35 -> bug fixing            
}


{
	// we can run script node app.js; after that restart server each changes.
	// npm i -g supervisor . supervisor app.js ; 
	// supervisor watch changes and avtomaticly restarted server
}
{ 
	//debuging 
	//npm i -g node-inspector
	//node --debug app.js and cuncurently run node-inspector open browser in that url
	//node --debug-brk app.js
	//we can use IDE dubuger 
	//for loger use winston module
}