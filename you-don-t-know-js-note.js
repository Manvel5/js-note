// Immediately	Invoked	Function	Expressions

(function IIFE() {
	console.log("Hello!");
})();
//	"Hello!"

// Closure
function makeAdder(x)	{
	//	parameter	`x`	is	an	inner	variable
	//	inner	function	`add()`	uses	`x`,	so
	//	it	has	a	"closure"	over	it
	function add(y)	{
		return	y + x;
	};
	return	add;
}
var plusOne = makeAdder(1);
plusOne(3);	//	4	<--	1	+	3
plusOne(41); //	42	<--	1	+	41

if	(!Number.isNaN)	{
	Number.isNaN = function	isNaN(x)	{
		return	x !== x;
	};
}

with (obj) {
	a = 3;
	b = 4;
	c = 5;
}


var	foo	= (function CoolModule()	{
	var	something = "cool";
	var	another	= [1, 2, 3];
	function doSomething() {
		console.log(something);
	}
	function doAnother()	{
		console.log(another.join("	!	"));
	}
	return	{
		doSomething: doSomething,
		doAnother: doAnother
	};
})();

//bar.js
function hello(who) {
	return	"Letme	introduce:	" + who;
}
export	hello;

//foo.js
//import	only `hello()`	from	the	"bar"	module
import	hello	from	"bar";
var	hungry	=	"hippo";
function awesome()	{
	console.log(
		hello(hungry).toUpperCase()
	);
}
export	awesome;
///
var	myObject	=	{
	a:	2
};
Object.getOwnPropertyDescriptor(myObject, "a");
//	{
//		value:	2,
//		writable:	true,
//		enumerable:	true,
//		configurable:	true
//	}
var	myObject	=	{};
Object.defineProperty(	myObject,	"a",	{
				value:	2,
				writable:	true,
				configurable:	true,
				enumerable:	true
}	);
myObject.a;	//	2
/////////////////////////////////////// Important example
var	anotherObject	=	{
	a:	2
};
var	myObject = Object.create(anotherObject);
anotherObject.a; 					//	2
myObject.a;  						//	2
anotherObject.hasOwnProperty("a");	//	true
myObject.hasOwnProperty("a");		//	false
myObject.a++;						//	oops,	implicit	shadowing!
anotherObject.a;					//	2
myObject.a;							//	3
myObject.hasOwnProperty("a");		//	true


var	anotherObject = {
	a:	2
};
var	myObject = Object.create(anotherObject,	{
	b: {
		enumerable:	false,
		writable: true,
		configurable: false,
		value:	3
	},
	c: {
		enumerable:	true,
		writable: false,
		configurable: false,
		value: 4
	}
});
myObject.hasOwnProperty("a");	//	false
myObject.hasOwnProperty("b");	//	true
myObject.hasOwnProperty("c");	//	true
/////
function a(b, c)	{
	/*	..	*/
}
a.length;	//	2

var	a = [];
a["13"]	= 42; // or a[13] = 42
a.length; // 14

var	arr	= Array.from(arguments);

///\\\\\\\\\\\\\\\\\\\\\\\\\Important
if (!Number.EPSILON) {
	Number.EPSILON = Math.pow(2,-52);
}
function numbersCloseEnoughToEqual(n1, n2)	{
	return Math.abs(n1	- n2) <	Number.EPSILON;
}
numbersCloseEnoughToEqual(0.1 + 0.2, 0.3); // true

//
if (!Number.isInteger)	{
	Number.isInteger = function(num)	{
		return	typeof num	==	"number" &&	num	% 1	==	0;
	};
}
Number.isInteger(42.000); // true
Number.isInteger(42.3);	 //	false

//
function foo()	{
	undefined = 2;	// really bad idea!
}
foo();
//
var	a = 2 /	"foo";
a == NaN; //	false
a === NaN; //	false

//
var	a = 2 /	"foo";
Object.is(a, NaN); //true

x.length = 0; // empty existing array in-place
//
Object.prototype.toString.call("abc");//	"[object	String]"
Object.prototype.toString.call(42);	  //	"[object	Number]"
Object.prototype.toString.call(true); //	"[object	Boolean]"
Object.prototype.toString.call(null); //	"[object	Null]"
Object.prototype.toString.call(undefined);//"[object	Undefined]"

var	a =	new	String("abc");
a instanceof String; //	true

var	a	=	new	String(	"abc"	);
var	b	=	new	Number(	42	);
var	c	=	new	Boolean(	true	);
a.valueOf();	//	"abc"
b.valueOf();	//	42
c.valueOf();	//	true

var	a	=	new	String("abc");
var	b	=	a	+	"";	//	`b`	has	the	unboxed	primitive value "abc"
typeof	a;	//	"object"
typeof	b;	//	"string"

var	a = new Array(3);
a.length; //	3
a;

//
JSON.stringify(	[1,undefined,function(){},4]);  //"[1,null,null,4]"
JSON.stringify(	{a:2, b:function(){}});			//"{"a":2}"

// important
var	o = {};
var	a =	{
	b:	42,
	c:	o,
	d:	function(){}
};
o.e	=	a;
a.toJSON = function() {
	//	only include the `b` property for serialization
	return	{	b:	this.b	};
};
JSON.stringify(	a	);	//	"{"b":42}"

//
var	timestamp	=	+new Date();
var	timestamp	=	new	Date().getTime();
var	timestamp	=	Date.now();

//
a = eval("if (true)	{ b	= 4	+ 38; }" );
//
var	obj	=	{
	a:	42
};
obj.a; //	42
delete	obj.a; // true
obj.a; // undefined

//
function	foo()	{
	// `bar` labeled-block
	bar:	{
	 	console.log("Hello"	);
		break bar;
		console.log("never	runs");
	}
	console.log("World"	);
}
foo();
//	Hello
//	World

//
[]	+	{};	//	"[object	Object]"
{}	+	[];	//	0

//
function	getData()	{
	//	..
	return	{
		a:	42,
		b:	"foo"
	};
}
var	{ a, b}	= getData();
console.log(a, b);	// 42 "foo"

//
var	a	=	42;
var	b	=	"foo";
a	&&	b;	//	"foo"
a	||	b;  // 42

// Error \\
var	a;
42	=	a; //	Error!
{
	a = 2;// ReferenceError!
	let	a;
}
{
	typeof	a;	//	undefined
	typeof	b;	//	ReferenceError!	(TDZ)
	let	b;
}

//
function foo(a)	{
	a =	42;
	console.log(arguments[0]);
}
foo(2); //	42	(linked)

function foo(a)	{
	"use strict";
	a	=	42;
	console.log(arguments[0]);
}
foo(2); // 2 (not linked)

// 	try..finally \\
function foo()	{
	try	{
		return	42;
	}
	finally	{
		console.log("Hello"	);
	}
	console.log("never	runs");
}
console.log(foo());
//	Hello
//	42
///////////////////////
function foo()	{
	try	{
		throw	42;
	}
	finally	{
		console.log("Hello");
	}
	console.log("never	runs");
}
console.log( foo() );
//	Hello
//	Uncaught	Exception:	42
////////////////////////////////////////////
for	(var i = 0;	i < 10;	i++)	{
	try	{
		continue;
	}
	finally	{
		console.log(i);
	}
}
//	0	1	2	3	4	5	6	7	8	9

//	Netscape	4	doesn't	have	Array.push
Array.prototype.push	=	function(item)	{
				this[this.length]	=	item;
};
{
// <script>foo();</script>
// <script>
// 	  function foo()	{	..	}
// </script>

// <script>
// 		foo();
// 		function	foo()	{	..	}
// </script>
}

{
//	`eventLoop` is an array	that acts as a queue (first-in,	first-out)
var	eventLoop = [];
var	event;
	//	keep going "forever"
	while (true) {
		//	perform	a "tick"
		if	(eventLoop.length >	0)	{
			//	get	the	next event in the queue
			event	=	eventLoop.shift();
			//	now, execute the next event
			try	{
				event();
			}
			catch (err)	{
				reportError(err);
			}
		}
	}
}

function foo(...args) {
	console.log(args);
}
foo(1, 2, 3, 4, 5);	//	[1,2,3,4,5]

var	[a = 3,	b =	6, c = 9, d	= 12] =	foo();
var	{x = 5,	y =	10,	z =	15,	w =	20}	= bar();

ES5	Getter/Setter
var	o = {
	__id:	10,
	get	id() { return	this.__id++;	},
	set	id(v) {	this.__id =	v;}
}
o.id;	//	10
o.id	=	20;

var	arr	=	[1,2,3];
var	it	=	arr[Symbol.iterator]();
it.next();	//	{	value:	1,	done:	false	}
it.next();	//	{	value:	2,	done:	false	}
it.next();	//	{	value:	3,	done:	false	}
it.next();	//	{	value:	undefined,	done:	true	}

var	greeting = "hello world";
var	it = greeting[Symbol.iterator]();
it.next();	//	{	value:	"h",	done:	false	}
it.next();	//	{	value:	"e",	done:	false	}

/// important
Reflect.Loader.import("foo")//	returns	a	promise	for	`"foo"`
.then(function(foo){
	foo.bar();
});
Reflect.Loader.import(	"foo",	{address: "/path/to/foo.js"	}	)
.then(function(foo){
				//	..
})

class Foo{
	static	cool()	{	console.log(	"cool"	);	}
	constructor() {
		console.log("Foo:	",	new.target.name);//////////
	}
}
class Bar extends Foo	{
	constructor() {
		super();
		console.log("Bar:	",	new.target.name);//////////
	}
	baz() {
		console.log("baz:	",	new.target);
	}
}
var	a	=	new	Foo();
//	Foo:	Foo
var	b	=	new	Bar();
//	Foo:	Bar			<--	respects	the	`new`	call-site
//	Bar:	Bar


///Object Reflection

//setPrototypeOf
var	o1 = {
	foo() { console.log("foo");	}
};
var	o2 = {
	//	..	o2's	definition	..
};
Object.setPrototypeOf(	o2,	o1	);

// Object.is compare 2 values
var	x = NaN, y = 0, z = -0;
x === x;				//	false
y === z;				//	true
Object.is(	x,	x	);	//	true
Object.is(	y,	z	);	//	false

// Object.defineProperty
o1 = {a: 1};
// setup read-only property
Object.defineProperty(o3, "e", {
	value:	5,
	enumerable:	true,
	writable:	false,
	configurable:	false
});
Object.getOwnPropertyDescriptor(target,	"e"	);
//	{value:	5, writable: true, enumerable: true, configurable: true}

// Object.assign o1, o2, o3 copied to target
var	target = {}, o1 = {a: 1}, o2 = { b: 2}, o3 = {c: 3}, o4 = { d: 4};
Object.assign(	target,	o1,	o2,	o3	);
target.a;	//	1
target.b;	//	2
target.c;	//	3

//Object.create
var	o1 = {a: 1};
target = Object.create(o1); // create empty object that prototype is o1

//String
"foo"	*	3;	//	"foofoofoo"
"foo".repeat(3); //	"foofoofoo"
.startsWith("on");
.endsWith("no pets");
.includes("on");

//Reflect	 	API
Reflect.getOwnPropertyDescriptor(..)	
Reflect.defineProperty(..)	
Reflect.getPrototypeOf(..)	
Reflect.setPrototypeOf(..)	
Reflect.preventExtensions(..)	
Reflect.isExtensible(..)

var	o = {a:	1, b: 2};
var	p = Object.create(	o	);
p.c	= 3;
p.d	= 4;
for	(var prop of Reflect.enumerate(p)) { /// TODO ///
	+
	console.log(prop);
}
//	c	d	a	b
for	(var prop in p)	{
	console.log(prop);
}
//	c	d	a	b
JSON.stringify(	p);
//	{"c":3,"d":4}
Object.keys(p); /// TODO ///
//	["c","d"]