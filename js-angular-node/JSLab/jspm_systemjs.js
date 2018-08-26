// 1) SystemJs ->  Dynamic ES module loader. SystemJS async loader

var SystemJS = require('systemjs');

// loads './app.js' from the current directory
SystemJS.import('./app.js').then(function (m) {
  console.log(m);
});

// SystemJS can load 
// 1) EcmaScript 6 Modules,
// 2) Common JS Modules,
// 3) AMD modules
// 4) System.register(Dynamic)

// webassembly Used for complex mathematical tasks