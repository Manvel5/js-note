						"Type String"

//Methods for Substrings
{
	let msg = 'Hello World!';

	msg.startsWith('Hello');//true
	msg.endsWith('!');//true
	msg.includes('o');//true
	"x".repeat(3);// "xxx"
}				
{   //ES5
	function mixArgs(first, second) {
		console.log(first === arguments[0]);// true
		console.log(second === arguments[1]);// true
		first = 'c'; second = 'd'
		console.log(first === arguments[0]);// true
		console.log(second === arguments[1]);// true
	}
	mixArgs('a', 'b');
	//use strict
	function mixArgs1(first, second) {
		"use strict";
		console.log(first === arguments[0]);// true
		console.log(second === arguments[1]);// true
		first = 'c'; second = 'd'
		console.log(first === arguments[0]);// false
		console.log(second === arguments[1]);// false
	}
	mixArgs1('a', 'b');

	//ECMAScript 6 always work in the "use strict" mode
	//ES6
	function mixArgs(first, second = 'b') {
		console.log(arguments.length);//1
		console.log(first === arguments[0]);// true
		console.log(second === arguments[1]);// false
		first = 'c'; second = 'd'
		console.log(first === arguments[0]);// false
		console.log(second === arguments[1]);// false
	}
	mixArgs('a');
	//default params can be REFERANCE type
	function getValue() {
		return 5;
	}
	function add(f, s = getValue()) {
		returnf + s;
	}
	//getValue called when colling add function;
	function add(f, s = f) {
		returnf + s;
	}
	var add = new Function('f', 's = f', 'return f + s');
	var add1 = new Function('...args', 'return args[0]');
	console.log(add(1));//2

}	
{
	var emptyObject = Object.create(null);// its does not have proto object
	//emptyObject.prototype = null
	var emptyObject2 = Object.create({age: 25});
	//emptyObject.prototype = {age: 25}
	var emptyObject1 = {};//its have proto object
}
{
	var values = [25,3,5,8];
	console.log(Math.max.apply(Math, values));//25
	console.log(Math.max(...values));//25
}
{
	function getMax(){}
	console.log(getMax.name);//getMax
}
{
	Js function have 2 private methods [[Call]] and [[Construct]] 
	1) When Function called with new worked method [[Construct]] // new User()
	2) When Function called with NOT new worked method [[Call]] // User()		
	// arrow function does not have [[Construct]] method		
	//ES5	
	function Person(name) {
		if(this instanceof Person) {
			this.name = name;//called with new // new Person() 
		}else {
			throw new Error('call only Person function // person()');
		}
	}
	var person = new Person('Max');
	var notAPerson = Person.call(person, 'Min');//it's work
	//ES6 added new.target property 

	//ES6
	function Person(name) {
		if(typeof new.target === Person) {
			this.name = name;//called with new // new Person() 
		}else {
			throw new Error('call only Person function // person()');
		}
	}
	var person = new Person('Max');
	var notAPerson = Person.call(person, 'Min');//Error
	//new.target property not exist outside function
}
{
	if(true) {
		console.log(typeof add);//function
		function add(){}
	}
	console.log(typeof add);//function
	// when "use strict" outside block function add not found
}
{
	//Arow function
		// 1) arow function cann't call with operator new .they haven't [[Construct]] method
		// 2) we cann't change this via call , aplay and bind function
		// 3) not found subarray arguments 
		// 4) they haven't prototype 
		// 5) Arrow function doesn't change context
		// 6) Arrow function have call, applay, bind method but can NOT changed arrow function this
	let reflect = value => value * 2;
	let a = new reflect(4);//Error
	console.log(reflect.prototype); //undefined	
	console.log(typeof reflect); //function	
	console.log(reflect instanceof Function); //true	
}
{
	Array.from(document.querySelectorAll('p')).forEach(item=> {
		console.log(item);
	});
	//document.querySelectorAll('p') is not array Array.form change its as Array it is NodeList or HTMLCollection
}
{
	function doSomething() {
		// NOT optimized
		return doSomethisnElse();//Tail call
	}
	// when doSomething() called more time doSomethisnElse() function each time created new stack.prew call stay in memary. 
	// we can have filled memory 

	//to solve this problem we can use this method
	"use strict";
	function doSomething() {
		// optimized
		return doSomethisnElse();//Tail call
	}
	"use strict";
	function doSomething() {
		// NOT optimized
		return 1 + doSomethisnElse();//because Hard operation
	}
		"use strict";
	function doSomething() {
		// NOT optimized
		var res = doSomethisnElse();
		return res;
	}
	//1) "use strict" is important
	//2) return is important

	// recursion function is very bad method for decide task because memary can be filled memary
}
{
	//ES5
	function createPerson(name, age) {
		return {
			name: name,
			age: age,
			sayName: function() {
				console.log(this.name)
			}
		}
	}
	//ES6
	function createPerson(name, age) {
		return {
			name,
			age,
			sayName() {
				console.log(this.name)
			}
		}
	}
	//NOT add method in Object.prototype it is a depricated
}
{
	var person = {
		name: 'Min',
		name: 'Max'
	}
	console.log(person.name);// Max . it's not working when 'use strict'
}
{
	var obj = {
		a: 1,
		0: 1,
		c: 1,
		2: 1,
		b: 1,
		1: 1
	};
	obj.d = 1;
	// obj itereating in this stpes
	// 1) numbers increment
	// 2) string properties by added time
	console.log(Object.getOwnPropertyNames(obj).join('')); //012acbd
	//for in Object.keys() and JSON.stringify() worked as Object.getOwnPropertyNames
}
{
	//ES6 operator super pointer to current prototype
}
{
	// destructuring, деструктуризация
	let node = {
		type: 'id',
		name: 'foo'
	}
	let {type, name} = node;
	console.log(type, name);// 'id', 'foo'

	let type = 'type', name = 'bar';
	({ type, name } = node);
	console.log(type, name);// 'id', 'foo'

	let colors = [ "red", "green", "blue" ]
	let [firstColor, secondColor] = colors;
	console.log(firstColor, secondColor); // red, green
	let [, ,thirdColor] = colors;
	console.log(thirdColor); // blue

	let a = 1,
		b = 2;
	[a, b] = [b, a];
	console.log(a, b); //2, 1

	let colors = ['red'];
	let [firstColor, secondColor = 'blue'] = colors;
	console.log(firstColor, secondColor); // red, blue
}
{
	// Set
	//ES5
		var map = Object.create(null);
		map.foo = 'bar';
		var value = map.foo;
		console.log(value); // 'bar'
	//Limitations 	
	//1)
		var map = Object.create(null);
		map[5] = 'foo';
		console.log(map["5"]);// return 'foo'; it's worked
	// 2) 
		var map = Object.create(null);
		var key1 = {};
		var key2 = {};
		map[key1] = 'foo';
		console.log(map[key2]);
	// 3) 
		var map = Object.create(null);
		map.count = 1;
		if(map.count) { // when count is 0 it's not worked
			//some code
		}			
	//Map, Set
	//ES6
		let set = new Set();
		set.add(5);
		set.add("5");
		set.add(5);
		console.log(set.size);//2

		let set = new Set();
		set.add({});
		set.add({});
		console.log(set.size);//2
		set.clear();

		let set = new Set(); //it is a strong referance
		set.add(4);
		set.add(5);
		set.add(6);
		console.log(set.size); //3
		set.delete(4)
		console.log(set.has(5)); // true
		let arr = [...set]

		//WeakSet
		var set = new WeakSet();//it is a weak (слабый) referance
		var a = {};
		set.add(a);
		a = null; 
		// When we us WeakSet referance has been removed from set. But Set NOT removed;
}
{
	//Map
	let map = new Map(); //it is a strong referance
	map.set("year", 2017);
	console.log(mag.get('year')); // 2017

	let key1 = {};
	let key2 = {};
	map.set(key1, 2);
	map.set(key2, 44);
	console.log(mag.get(key1)); // 2
	console.log(mag.get(key2)); // 44

	var map = new WeakMap(); //it is a weak (слабый) referance
	var a = {};
	map.set(a, "Name");
	a = null; 
	// When we us WeakMap referance has been removed from map. But Map NOT removed;

}
{
	//ES5
	var Person = (function(){
		var privateData = {},
			privateId = 0;

		function Person(name) {
			Object.defineProperty(this, '_id', {value: privateId++})
		}

		Person.prototype.getName = function() {
			return privateData[this._id].name;
		}

		return Person;
	})();
}
	// Iterators
{
	//ES 5
	function customIterator(items) {
		var i = 0;
		return {
			next: function() {
				var done = i >= items.length;
				var value = done ? undefined : items[i++]
				return {
					done: done,
					value: value
				}
			}
		}
	}
	var iterator = customIterator([1,2,3,4]);
	console.log(iterator.next().value); //1
	//In ES6 for create Iterators we can use Generators
	function *customIterator() {
		yield 1;
		yield 2;
		yield 3;
	}
	//generators called as standart function but returned Iterators
	let ieterator = customIterator();
	console.log(ieterator.next());// {value: 1, done: false}
	//Symbol * cast function to generator
	// operator yield we can use ONLY into generator function. in the other function it's not working
	function *customIterator(items) {
		item.forEach(function(item) {// other function
			yield item;//Syntax error
		});
	}
	let customIterator = function *() {
		//some code
	}
	//for(let item of items){} items SHOULD be have Symbol.iterator function
	let values = [1,2,3];
	let iterator = values[Symbol.iterator]();
	console.log(iterator.next()); // {value: 1, done: false}

	function isIterable(object) {
		return typeof object[Symbol.iterator] === 'function';
	}
	console.log(isIterable("Hello")); // true
	console.log(isIterable(new Map() )); // true
	console.log(isIterable(new WeakMap())); // false

	//custom iterator 
	let collections = {
		items: [1,2,3,4],
		*[Symbol.iterator]() {
			for(let item of items) {
				yield item;
			}
		}
	}
	for(let x of collections) {
		console.log(x);
	}
}
{
	let color = [1,2,3,45]
	for(c of color.entries()){
		console.log(c); //[0,1], [1,2], [2,3], [3,45]
	}
}
{
	var divs = document.getElementByTagName('div');
	for (let div of divs) { // NodeList
		console.log(div.id);
	}
}
{
	let set = new Set([1,2,3,5,6,4,8])
	let ar = [...set];//[1, 2, 3, 5, 6, 4, 8]

	let map = new Map([ [name;:'max'], [age: 21] ])
	let arr = [...map];// [ [name;:'max'], [age: 21] ]
}
{
	function *createIterator() {
		yield 1;
		return;
		yield 2;
	}
	let iterator = createIterator();
	console.log(iterator.next());// {value: 1, done: false}
	console.log(iterator.next());// {value: undefined, done: true}

	function *createIterator1() {
		yield 1;
		return 42;
	}
	let iterator = createIterator();
	console.log(iterator.next());// {value: 1, done: false}
	console.log(iterator.next());// {value: 42, done: true}
	console.log(iterator.next());// {value: undefined, done: true}
}
{
	class IterableArguments {
	    constructor(...args) {
	        this.args = args;
	    }
	    * [Symbol.iterator]() {
	        for (let arg of this.args) {
	            yield arg;
	        }
	    }
	}

	for (let x of new IterableArguments('hello', 'world')) {
	    console.log(x);
	}
	// Output:
	// hello
	// world
}
{
	function *createIterator1() {
		yield 1;
		yield 2;
	}
	function *createIterator2() {
		yield 'red';
		yield 'green';
	}	
	function *createIterator() {
		yield *createIterator1();
		yield *createIterator1();
	}
	const iterator = createIterator();
	console.log(iterator.next());// {value: 1, done: false}
	console.log(iterator.next());// {value: 2, done: false}
	console.log(iterator.next());// {value: 'red', done: false}
	console.log(iterator.next());// {value: 'green', done: false}
}
	//Class in Es6
{
	//ES5 function constructor
	function Person(name) {
		this.name = name;
	}

	Person.prototype.getName() {
		return this.name;
	}
	var person = new Person('Max');
	console.log(person.getName());//Max
	console.log(person instanceof Person);//true
	console.log(person instanceof Object);//true

	//ES6
	//var person = new Person('Min'); error 
	class Person {
		constructor(name) {
			age = 24;// runtime error
			this.name = name;
		}
		//Like ES5 Person.prototype.getName = function(){...}
		getName() {
			return this.name;
		}
	}
	var person = new Person('Min');
	// code into class running in "use strict" mode
	//All methods does not have [[Construct]] . we CAN NOT new person.getName();
}
{
	[2,2,2,2].map(parseInt);// [2,null, null,2]
	//bechouse
	[2,2,2,2].map((item, index)=> {(
			parseInt(item, index);
	})
}
{
	//getter and setter
	class Person {
		constructor(name) {
			console.log(new.target === Person);//true
			this.username = name;
		}
		get name() {
			return this.username;
		}
		set name(name) {
			this.username = name;
		}
	}
}
{
	//About supper()

	//1) function super we can use when MyClass class extends SomeClass .else throw error
	/**
		MyClass class extends SomeClass {
			constructor() {
				super();It's work
			}
		}
		MyClass class {
			constructor() {
				super();
			}
		}
	**/
	//2) function super called only before this.something
		/**
		MyClass class extends SomeClass {
			constructor() {
				this.name = 'Max';It's doesn't work
				super();
			}
		}
		calling function super required. we can  skip when SomeClass constructor returned object
		**/
}
{
	//Arrays
	let items = new Array(2);//items[0] === undefined items.length === 2
	let items = new Array(1,2);//items[0] === 1 ,items[1] === 2 items.length === 2
	//ES6
	let items = Array.of(1,2);// Array.of always created new array
	//items.length === 2; items[0] === 1; items[1] === 2;
	let items = Array.of(2);//items.length === 1; items[0] === 2

	//Array.from convert OBJECT to Array
	//ES5
	function makeArray(list) {
		return Array.prototype.slice.call(list)
	}
	function doSomething() {
		var args = Array.from(arguments);
	}
	function translate() {
		return Array.from(arguments, value => {return value + 1 })
	}
	let num = translate(1,2,3);//num = [2,3,4];
	//ES6 added new method find() and findIndex()
	let n = [25, 30, 35, 40];
	n.find(number => number > 33); //35 
	n.findIndex(number => number > 33); //2 

	//fill method
	let n = [25, 30, 35, 40];
	n.fill(1);//[1, 1, 1, 1]
	n.fill(1, 2);//[25, 30, 1, 1]

	var n = [1,2,5,8,9,6]
	n.copyWithin(4,0);//[1, 2, 5, 8, 1, 2] after n[4] is repated.//first param its started 0 index //secound param
}
{
	//Typed arrays 
	//They is intended(предназначен) for work with numbers. They used in WEBGL
	//All numbers in JS saved 64 bit float format(IEEE 754) it's slow 
	//Each number we can show as bit Array

	//1) 8-category( разряд ) int with sign ( int8 ) 
	//2) 8-category( разряд ) int with not sign ( uint8 )
	//3) 16-category( разряд ) int with sign ( int16 ) 
	//4) 16-category( разряд ) int with not sign ( uint16 )
	//5) 32-category( разряд ) int with sign ( int32 ) 
	//6) 32-category( разряд ) int with not sign ( uint32 )
	//7) 32-category( разряд ) float ( float32 )
	//8) 64-category( разряд ) float ( float64 )

	//ArrayBufer saved specified number of byte of memary
	let buffer = new ArrayBufer(10); // take 10 bayt of memary; buffer.length === 10;
}
{
	//Объест Proxy (Прокси) — особый объект, смысл которого — перехватывать обращения к другому объекту и, 
	//при необходимости, модифицировать их
	// создание Proxy
	const proxy = new Proxy(target, handler);
 	// target - объект, обращения к которому надо перехватывать
	// handler - объект с функциями-перехватчиками для операций к target

	const user = {};
	const proxy = new Proxy(user, {
	    get (target, property, receiver) {
	        console.log(`Чтение ${property}`);
	        return target[property];
	    },
	    set (target, property, value, receiver) {
	        console.log(`Запись ${property} = ${value}`);
	        target[property] = value;
	        return true;
	    },
	});
	proxy.name = 'Jon Snow';               // Запись name = Jon Snow
	proxy.age = 22;                         // Запись age = 22
	proxy['long property'] = 'qux';         // Запись long property = qux
	const name = proxy.name;                // Чтение name
	const age = proxy.age;                  // Чтение age
	const long = proxy['long property'];    // Чтение long property
}
{
	//1) Полифилл — это библиотека, которая добавляет в старые браузеры поддержку возможностей, 
		//которые в современных браузерах являются встроенными
	//2) Транспайлинг — это конвертация кода программы, написанной на одном языке программирования 
			//в другой язык программирования	
}
{
	//Promise have 3 state
	// 1) pending
	// 2) fulfilled
	// 3) rejected
	let promise = readFile("example.txt");
	promise.then(function() {
		console.log('successfully')
	}, function(error) {
		console.log(error.message);
	})

	let fs = require('fs');
	function readFile(fileName) {
		return new Promse(function(resolve, reject) {
			fs.readFile(fileName, {encoding: "utf8"}, function(err, content){
				if(err) {
					reject(err);
					return;
				}
				resolve content;
			});
		})
	}
	//
	let p1 = new Promise(function(resolve, reject) {
		resolve(42);
	});
	p1.then(function() {
		throw new Error('Boom !');
	}).catch(function(error) {
		console.log(error.message); // 'Boom !'
	});
	// Always add catch after last then
	//
	let p1 = new Promise(function(resolve, reject) {
		resolve(42);
	});
	p1.then(function(value) {
		console.log(value);//42
		return value + 1;
	}).then(function(value) {
		console.log(value);//43
		return value + 1;
	})
}