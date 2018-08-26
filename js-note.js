Начиная с ES6 область видимости объявленных внутри блока функций ограничивается этим блоком
{
 foo(); // работает!
 function foo() {
 // ..
 }
}
foo(); // ReferenceError

if (something) {
 function foo() {
 console.log( "1" );
 }
 }
else {
 function foo() {
 console.log( "2" );
 }
}
foo(); // it's work

//Операторы Rest
function foo(x,y,z) {
 console.log( x, y, z );
}
foo( ...[1,2,3] ); 

var a = [2,3,4];
var b = [ 1, ...a, 5 ];

function foo(...args) {
 // 'args' это настоящий массив
}

{
var o1 = {
 foo() {
 console.log( "o1:foo" );
 }
};
var o2 = {
 foo() {
 super.foo();
 console.log( "o2:foo" );
 }
}
Object.setPrototypeOf( o2, o1 );
o2.foo(); // o1:foo
 // o2:foo
}
// Тип данных Symbol
var sym = Symbol( "необязательное описание" );
1.Использовать оператор new с функцией Symbol(..) нельзя.Это не конструктор, и вы создаете не объект.
2.Передавать функции Symbol(..) параметр необязательно. Передаваемый параметр представляет собой строку с описанием назначения символа.
3.Оператор typeof выводит новое значение ("symbol"), которое является основным способом идентификации символа.
sym instanceof Symbol; // false
var symObj = Object( sym );
symObj instanceof Symbol; // true
symObj.valueOf() === sym; // true

var a = [1,2,3];
a[Symbol.iterator]; // native function

var Fib = {
	[Symbol.iterator]() {
		var n1 = 1, n2 = 1;
		return {
			// делаем итератор итерируемым
			[Symbol.iterator]() { return this; },
			next() {
			var current = n2;
			n2 = n1;
			n1 = n1 + current;
			return { value: current, done: false };
		},
		return(v) {
			console.log("Последовательность Фибоначчи завершена.");
			return { value: v, done: true };
			}
		};
	}
};

// Функция-генератор
function *foo() {
 // ..
}
function *foo() { .. }
function* foo() { .. }
function * foo() { .. }
function*foo() { .. }

function *foo() {
	while (true) {
		yield Math.random();
	}
}
function *foo() {
 yield 1;
 yield 2;
 yield 3;
}
var it = foo();
it.next(); // { value: 1, done: false }
it.return( 42 ); // { value: 42, done: true }
it.next(); // { value: undefined, done: true }


//Загрузка модулей извне 
// Служебная программа Reflect.Loader.import(..) целиком импортирует модуль в именованный параметр
Reflect.Loader.import(  "foo", { address: "/path/to/foo.js" } ) // возвращает обещание для '"foo"'
	.then( function(foo){
		foo.bar();
	} );

class Bar extends Foo {
	 constructor() {
		 super();
		 console.log( "Bar: ", new.target.name ); // Foo
	 }
	 baz() {
	 	console.log( "baz: ", new.target );
	 }
}	

Коллекции set напоминают массивы но все значения в них уникальны; если вы добавляете дубликат, он просто игнорируется

//TypedArrays
var buf = new ArrayBuffer( 32 );
buf.byteLength; // 32
Здесь buf — бинарный буфер длиной в 32 байта (256 бит), который заранее инициализирован значениями 0. Единственный доступный
способ взаимодействия с этим буфером — проверка его свойства byteLength.

var arr = new Uint16Array( buf );
arr.length;

Maps представляют собой пары «ключ/значение», в которых роль ключа вместо строки/примитива может играть объект. Коллекции
set — это уникальные списки значений (произвольного типа).

Объекты WeakMap — разновидность карт, где ключ (объект) удерживается слабо, так что сборщик мусора имеет возможность свободно
удалить запись, если речь идет о последней ссылке на объект. Соответственно, коллекции WeakSet — это коллекции set, в которых
слабо удерживается значение, опять же для того, чтобы сборщик мусора мог без проблем удалить запись в случае последней ссылки на объект.

// Array 
var a = Array( 3 );
a.length; // 3
a[0]; // undefined
var b = Array.of( 3 );
b.length; // 1
b[0]; // 3
var c = Array.of( 1, 2, 3 );
c.length; // 3
c;  // [1,2,3]
// Array.from change NodeList or HTMLCollection to Array
Array.from( document.getElementsByClassName('name') );

[1,2,3,4,5].copyWithin( 3, 0 ); // [1,2,3,1,2]

var a = Array( 4 ).fill( undefined ); // [undefined,undefined,undefined,undefined]

var a = [1,2,3];
[...a.values()]; // [1,2,3]
[...a.keys()]; // [0,1,2]
[...a.entries()]; // [ [0,1], [1,2], [2,3] ]

// Object news

var x = NaN, y = 0, z = -0;
x === x; // false
y === z; // true
Object.is( x, x ); // true
Object.is( y, z ); // false


JavaScript предоставляют различные средства копирования  Object.assign(..),
b = "NaN"
isNaN( b ); // true - ой!
Number.isNaN( b ); // false - исправлено!
Number.isFinite( a ); // false

Number.isInteger( 4 ); // true
Number.isInteger( 4.2 ); // false


// String news 
String.fromCodePoint( 0x1d49e ); // " "
// "ab d.codePointAt( 2 ).toString( 16 ); // "1d49e"
Метод прототипа строки normalize(..) используется для выполнения нормализации Unicode
var s1 = "e\u0301";
s1.length; // 2
var s2 = s1.normalize();
s2.length; // 1
s2 === "\xE9"; // true

"foo".repeat( 3 ); // "foofoofoo"

var palindrome = "step on no pets";
palindrome.startsWith( "step on" ); // true
palindrome.endsWith( "no pets" ); // true
palindrome.includes( "on", 6 ); // false


var a = 2;
a ** 4; // Math.pow( a, 4 ) == 16
arr.includes( 42 )