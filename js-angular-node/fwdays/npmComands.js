// 1) 
	// a) npm i lodash --save //instaled last relised version
	// b) npm i lodash -S
// 2) 
	// a) npm i --save-dev
	// b) npm i -D
// 3) npm ls
// 3.1) npm ls --depth=0 show just primary deps
// npm uninstall lodash -S, npm uninstall lodash -D
// npm remove lodash -S, npm remove lodash -D // remove equal to uninstall

 // 4) npm prune  // its removed packages from node_modules where it's not saved in package.json

 // 5) npm init
 // 5.1) npm init --yes
 // 5.2) npm init -y
 // 6) npm publish --access=public //scoped packages are private by default but you can make them public:
 // 6.1) npm init --scope=<usrname>  private packages
 // 7) npm i npm@latest -g update your npm!
 // 8) npm config set init-autor-name "Manvel" , npm set init-license "MIT" 
 // 9) npm config get init-autor-name
 // 10) npm config delete init-autor-name
 //11) npm update lodash --save //update lodash to last version
 	//11.1) npm update --dev --save-dev
 	//11.2) npm update gulp -g
 	//11.3_ npm update npm@lates -g
 //12) npm install lite-server -g
 	//12.1) in the project folder run lite-server browser open index.html by localhost:3000 url

// in the package.json file when we write for example "jQuery": "*" after npm i installed jQuery latest version 

// package-lock.json file contains info about installed plugins. don't add this file in .gitignore.

// npm init create a package.json
// npm init --yes OR npm init -y create a package.json with defaults
// npm install --save
// npm install --save-dev
// npm i --save
// npm i --save-dev
// npm i -S // it's equal npm i --save
// npm i -D // it's equal npm i --dev
// npm ls //show the all dependensieses tree
// npm ls --depth=0 // show just primary dependensieses
// npm prune // This command removes "extraneous" packages. that are not in package.json file
// npm pack // compress project without node_modules
// npm install my-pkg.tgz
// npm publish --access=public
// npm init --scope=<usrname> //private packages
// npm i npm@latest -g // update your npm!