npm i - g  typescript;
tsc -v // typscript compiler version
tsc index.ts --w //transpile and watch index.ts

when we have index.js.map we can see our ts code and errors in the browser consoole.
for generate index.js.map we should add sourceMap: true in tsconfig.json after that run tsc comand.
typscript supported ECMAscrip2015, ECMAscrip2016, ECMAscrip2017	