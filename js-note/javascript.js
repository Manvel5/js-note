Browserify позволяет разработчикам программного обеспечения использовать модули стиля NodeJS в браузерах. 
Вы определяете зависимости, а Broweserify упаковывает всё это в аккуратный JS-файл.
// recomended for use browser-sync
browser-sync Time-saving synchronised browser testing.


1.  npm install -g serve
	serve --port 5000
2.	npm install http-server -g
	http-server
3.	npm install -g lite-server
	lite-server		
4.	browser-sync start --server --files "*.*" // open localhost:3001 for connect and testing info

//https://developers.google.com/web/tools/chrome-devtools/console/console-reference?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3
//https://developer.chrome.com/devtools
//https://en.wikipedia.org/wiki/JSDoc
//http://usejsdoc.org/
//https://github.com/airbnb/javascript
//https://heycam.github.io/webidl/#introduction
//https://developers.google.com/closure/compiler/docs/compilation_levels?csw=1 // refactoring js code in compile time Dead Code Elimination
JavaScriipt = ECMAScript + BOM + DOM;

Kotlin can be transpilet to js.

javascript:alert(8);
за Vue JS стоит Alibaba.
FLOW JS IS A STATIC TYPE CHECKER FOR JAVASCRIPT. //https://flow.org/en/

document.body.contentEditable = true //!!!! all element from body change as editable and we can change content 
document.designMode = "on"; // LIKE document.body.contentEditable

//Проверяем браузер на поддержку определённого CSS свойства
CSS.supports("background-color", "resdsd");
false
CSS.supports("background-color", "red");
true
document.getElementsByClassName('class'); // type is NodeList or HTMLCollection
Math.trunc(52.3333333333);//52 droped float part

Кто заправляет развитием JS, вы думаете — сообщество? Ну, не совсем. У нас есть страшные злые дядьки под названием TC39 — программный комитет
//http://www.pvsm.ru/javascript/255168

«Меньше букв» — уважительная причина для нарушения любых соглашений

JavaScriipt engine very smart . JS sometimes does JIT compilation or AUT compilation;
Современные интерпретаторы перед выполнением преобразуют JavaScript в
машинный код или близко к нему, а уже затем выполняют.

тег <script> блокирует отображение страницы
Динамические элементы <script>для неблокирующей загрузки сценариев
Атрибут async
Поддерживается всеми браузерами, кроме IE9-. Скрипт выполняется полностью асинхронно. То есть, при обнаружении <script async src="..."> 
браузер не останавливает обработку страницы, а спокойно работает дальше. Когда скрипт будет загружен — он выполнится

Атрибут defer
Поддерживается всеми браузерами, включая самые старые IE. Скрипт выполняется асинхронно, не заставляет ждать страницу, 
но, в отличие от async , браузер гарантирует, что относительный порядок скриптов с defer будет сохранён

Одновременно указывать async и defer не имеет смысла, в этом случае браузер использует только async .
aтрибуты defer и async на обычном скрипте будут проигнорированы;

Браузер IE8 поддерживает только совсем старую версию стандарта JavaScript, а именно ES3.К счастью, многие возможности современного стандарта можно добавить в этот браузер,
подключив библиотеку ES5 shim, а именно — скрипты es5‐shim.js и es5‐sham.js из неё.
<iframe> убийца производительность
setTimeout(function(){}) === setTimeout(function(){}, 0)

таблица приоритетов
15 унарный плюс +
15 унарный минус ‐
14 умножение *
14 деление /
13 сложение +
13 вычитание ‐

void(0); //return undefined;
// Function Expression
var f = function() { ... }
// Function Declaration
function f() { ... }
var sum = new Function('a', 'b', 'return a+b;');
function  sayHi(name) {
    //  LexicalEnvironment  = { name: 'Вася', phrase: undefined }
    var phrase  = "Привет,  " + name;
    //  LexicalEnvironment  = { name: 'Вася', phrase: 'Привет,  Вася'}
    // sayHi.[[Scope]] === window
    console.log(phrase);
    function Hi(age) {
      //Hi  LexicalEnvironment  = { age: 25}
      //Clouser
      console.log(age, name);
      //Hi.[[Scope]] === sayHi LexicalEnvironment
    }
    Hi(25);
}
sayHi('Вася')
{
  x = null;  
  x == 0;//false this write in specification
  x > 0;//false
  x >= 0;//true
}

Интерпретатор,  при доступе к переменной, сначала пытается  найти переменную  в текущем LexicalEnvironment, а
затем,  если  её  нет — ищет  во  внешнем объекте переменных. В данном  случае  им  является    window   .  Такой порядок
поиска  возможен  благодаря тому, что ссылка  на  внешний объект  переменных  хранится  в специальном внутреннем
свойстве  функции,  которое называется    [[Scope]]  .
1.   Каждая функция при создании  получает  ссылку    [[Scope]]   на  объект  с переменными,  в контексте которого
была  создана.  В нашем случае    f.[[Scope]] = window    .
2.   При  запуске функции создается новый объект  с переменными.  В него  копируется  ссылка  на  внешний объект  из
  [[Scope]]  .
3.   При  поиске  переменных  он  осуществляется  сначала в текущем объекте переменных, а потом — по  этой
ссылке. Благодаря этому в функции доступны  внешние переменны

var sum = new Function('a,b', ' return a+b; '); //new Function(params, code) :
var result = sum(1, 2);
alert( result ); // 3
У каждого вызова функции есть свой «контекст выполнения»

//Есть 5 «примитивных» типов и объекты:
x = 1;             // число
x = "Тест";        // строка, кавычки могут быть одинарные или двойные
x = true;          // булево значение true/false
x = null;          // спец. значение (само себе тип)
x = undefined;     // спец. значение (само себе тип)

//
var und = undefined;
var a;
a !== und; //true in old browsers
//
console.log(foo);// reference error
var a = {};
console.log(a.bar);// undefined

Возведение в степень (**)
2 ** 3 // 8
3 ** 2 // 9
2 ** 3 ** 2 // 512

Деструктурирующее присваивание
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20
[a, b, ...rest] = [10, 20, 30, 40, 50];

Блок инструкций (или сложная инструкция в других языках) используется для группировки нуля или более инструкций
var x = 1;
{
  var x = 2;
}
console.log(x); // выводит 2
let x = 1;
{
  let x = 2;
}
console.log(x); // выводит 
const c = 1;
{
  const c = 2;
}
console.log(c); // выводит 1 и не выбрасывает SyntaxError...

var a = (1,7,5,9);/// a == 9


Symbol.
Символы являются нововведением JavaScript начиная с ECMAScript версии 6. Символ - это уникальное, иммутабелное, 
примитивное значение, которое может быть использовано как ключ для свойства объекта. В некоторых 
языках программирования, символы называются атомами

Также есть специальные числовые значения Infinity (бесконечность) и NaN .

функции не являются отдельным базовым типом в JavaScript.

Функции, объявленные через Function Declaration, отличаются от Function Expression тем, что
интерпретатор создаёт их при входе в область видимости (в начале выполнения скрипта), так чтоbони работают до объявления.
Одна функция — одно действие

var factorial = function me(n) {
  return (n == 1) ? n : n * me(n ‐ 1); // me доступно только изнутри самой функции
}
alert( factorial(5) ); // 120
alert( me ); // ошибка, нет такой переменной
function pow(x, n) {
  ...
  debugger; // <‐‐ отладчик остановится тут f8
  ...
}
GeneratorFunction
var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var g = new GeneratorFunction('a', 'yield a * 2');
var iterator = g(10);
console.log(iterator.next().value); // 20

Следующий код:
var obj = {
  foo: function() {},
  bar: function() {}
};
Вы теперь можете сократить до:
var obj = {
  foo() {},
  bar() {}
};

                                    USE strict

function hello() {
  "use strict";
  return "hello, " + this.username;
}
hello(); // ошибка: невозможно прочитать свойство  
//it's work when
var bob = {'username': 115454}
hello.call(bob);//"hello, 115454"     



Утечки памяти
У замыканий есть один неприятный побочный эффект — из-за них очень просто получить утечку памяти в Internet Explorer.
 IE не освободит память, выделенную под el и o, пока браузер полностью не перезагрузят.
 Замыкания могут ненамеренно вызывать утечку памяти:

● Mocha — эта библиотека содержит общие функции для тестирования, включая describe и it .
● Chai  — библиотека поддерживает разнообразные функции для проверок. Есть разные «стили»
проверки результатов, с которыми мы познакомимся позже, на текущий момент мы будем
использовать лишь assert.equal .
● Sinon— для эмуляции и хитрой подмены функций «заглушками», понадобится позднее.

Все числа в JavaScript, как целые так и дробные, имеют тип Number и хранятся в 64-битном формате.
При обращении без скобок мы получим саму эту функцию.hello.toUpperCase

Infinity — особенное численное значение, которое ведет себя в точности как
математическая бесконечность ∞ .
 ‐1 / 0 === ‐Infinity
0 / 0  == NaN
var n = 1234567890;
alert( n.toString(36) ); // kf12oi
При помощи такого кодирования можно «укоротить» длинный цифровой идентификатор,
например чтобы выдать его в качестве URL.
~~12.3  ==  12
isInteger(1) // true
isInteger(1.58) // false

var number = 3500;
console.log(number.toLocaleString()); // Displays "3,500" if in U.S. English locale

При сравнениях в конструкции switch используется оператор === .

alert( 0.1 + 0.2 > 0.3 ); // true
Всё дело в том, что в стандарте IEEE 754 на число выделяется ровно 8 байт(=64 бита), не больше и не меньше.
number.toLocaleString() ; // 123 456 789
Строки в JavaScript нельзя изменять. Можно прочитать символ, но нельзя заменить его. Как только
строка создана — она такая навсегда.

var mystring = 'Hello, World!';
var x = mystring.length;
mystring[0] = 'L'; // This has no effect
mystring[0]; // This returns "H"

символы сравниваются не по алфавиту, а по Юникоду. Все современные браузеры, кроме IE10- (для которых нужно подключить библиотеку Intl.JS )
поддерживают стандарт ECMA 402  , поддерживающий сравнение строк на разных языках, с учётом их правил.

								Memory Management

// https://mdn.mozillademos.org/files/4617/default.svg
Сборщик мусора периодически запускается из этих roots, сначала находя все объекты, на которые есть ссылки из roots,
затем все объекты, на которые есть ссылки из найденных и так далее. и уничтожает недоступные объекты.
Самая частая — это деление объектов на два вида «старые» и «новые». Для каждого типа
выделяется своя область памяти. Каждый объект создаётся в «новой» области и, если прожил
достаточно долго, мигрирует в старую. «Новая» область обычно небольшая. Она очищается
часто. «Старая» — редко.


								event loop

Модель событийного цикла (event loop) называется так, потому что отслеживает новые события в цикле:
while(queue.waitForMessage()){
  queue.processNextMessage();
}
queue.waitForMessage ожидает события если очередь(queue) пуста.
Каждое событие должно быть полностью обработано, прежде чем начнет обрабатываться следующее. 
Благодаря этому мы можем точно знать: когда бы и где бы не выполнялась функция – она не может быть приостановлена, 
и будет целиком завершена до начала выполнения другого кода ,
Нулевая задержка не дает гарантии, что обработчик выполнится через ноль миллисекунд. 
Вызов setTimeout с аргументом  0 (ноль) не завершится за указанное время.
 потому что задержка – это минимальное время, которое требуется среде выполнения на обработку запроса

Queue
Среда выполнения JavaScript содержит очередь событий. Очередь событий — это список событий, подлежащих обработке. 


The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, 
	arguments object and so on)
let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) { // also used for iterators. for object not working {}
   console.log(i); // logs 3, 5, 7
}

//worked for Referance Type objects. not worked in value type
var a = {};
a.hasOwnProperty("foo");// false
a.hasOwnProperty = 1;
a.hasOwnProperty("foo"); // ошибка: 1 не является функцией

//value type example
var a = "as";
a.charAt = 45;
a.charAt(1);// s



						OBJECT
person = {};
person.name = 'name';

if ("name" in person) {
  alert( "Свойство name существует!" );
}
person.lalala === undefined 
Существует альтернативный синтаксис работы со свойствами, использующий квадратные скобки
объект['свойство'] :
Удаление ключей: delete obj.name .
var codes = {
  // телефонные коды в формате "код страны": "название"
  "7": "Россия",           
  "38": "Украина",
  "1": "США"
};
for (var code in codes) alert( code ); // 1, 7, 38

var user = {
  name: "Вася",
  surname: "Петров"
};
user.age = 25;
// порядок перебора соответствует порядку присвоения свойства
for (var prop in user) {
  alert( prop ); // name, surname, age
}

Обычные значения: строки, числа, булевы значения, null/undefined при присваивании переменных копируются целиком или, как говорят, «по значению».
null == 0;//false . this write in specification
null > 0; //false null convert to 0
null >=0;// true 


var time = {
  second: 13,
  microsecond: 123456
}
console.log(time); // 123459
time.microsecond++; 
console.log(time); // 123459
time.microsecond++;
console.log(time); //123459
time.microsecond++;
При «раскрытии» свойств объекта в консоли — браузер всегда выводит их текущие (на момент раскрытия) значения.
Так происходит именно потому, что вывод не делает «копию» текущего содержимого, а сохраняет лишь ссылку на объект.
var a = new Object(124);//a.__proto__constructor = Number
var a = new Object('124');//a.__proto__constructor = String
var a = new Object(true);//a.__proto__constructor = Boolean


 						ARRAY

стек Это такая коллекция элементов, вкоторой новые элементы добавляются в конец и берутся с конца.
Массив — это объект, где в качестве ключей выбраны цифры, с дополнительными методами и свойством length
Методы push/pop выполняются быстро, а shift/unshift — медленно.
shift Удаляет из массива первый элемент и возвращает его:
unshift Добавляет элемент в начало массива:
pop Удаляет последний элемент из массива и возвращает его:
push Добавляет элемент в конец массива:
Операция shift должна выполнить целых три действия:
1. Удалить нулевой элемент.
2. Переместить все свойства влево, с индекса 1 на 0 , с 2 на 1 и так далее.
3. Обновить свойство length .
var arr = [1, 2, 3, 4, 5];
arr.length = 2; // укоротить до 2 элементов
alert( arr ); // [1, 2]
var arr = []; or var arr = new Array(); or var arr = Array;
var arr = Array(9.3);  // RangeError: Invalid array length
Рассмотрим задачу — есть коллекция строк, и нужно быстро проверять: есть ли в ней какой-то
элемент. Массив для этого не подходит из-за медленного indexOf . Но подходит объект!

Методы:
● push/pop , shift/unshift , splice — для добавления и удаления элементов.
● join/split — для преобразования строки в массив и обратно.
● sort — для сортировки массива. Если не передать функцию сравнения — сортирует элементы как строки.
● reverse — меняет порядок элементов на обратный.
● concat — объединяет массивы.● indexOf/lastIndexOf — возвращают позицию элемента в массиве (не поддерживается в IE8-).
...Ну а для методы Массив поддержки в IE8- просто подключите библиотеку ES5-shim

arr.forEach(callback(item, i, arr){}
● item — очередной элемент массива.
● i — его номер.
● arr — массив, который перебирается.
var arr = [1, ‐1, 2, ‐2, 3];
var positiveArr = arr.filter(function(number) {
  return number > 0;
});
alert( positiveArr ); // 1,2,3

function sayHi() {
  for (var i = 0; i < arguments.length; i++) {
    alert( "Привет, " + arguments[i] );
  }
}
sayHi("Винни", "Пятачок"); // 'Привет, Винни', 'Привет, Пятачок'
arguments это обычный объект, просто ключи числовые и есть length .это не массив

function showWarning(width, height, title, contents) {
  width = width || 200; // если не указана width, то width = 200
  height = height || 100; // если нет height, то height = 100
  title = title || "Предупреждение";
  //...
}
//es2015
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5);    // 5


При «раскрытии» свойств объекта в консоли — браузер всегда выводит их текущие (на момент раскрытия) значения.
Не используйте for..in для массивов
var arr = new Array(2, 3);
alert( arr[0] ); // 2, создан массив [2, 3], всё ок
arr = new Array(2); // создаст массив [2] ?
alert( arr[0] ); // undefined! у нас массив без элементов, длины 2

var arr = [5,1,"Я", "изучаю", "JavaScript"]
arr.splice(1,2); // return [1, "Я"] ; arr == [5, "изучаю", "JavaScript"]

var arr = ["Почему", "надо", "учить", "JavaScript"];// no changed
var arr2 = arr.slice(1, 3); // элементы 1, 2 (не включая 3)
alert( arr2 ); // надо, учить

var arr = [];
arr[3.4] = 'Oranges';
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true

var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3
cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy has been removed
var myArray = new Array('1', '2', '3');
myArray = myArray.concat('a', 'b', 'c'); // ['1', '2', '3', 'a', 'b', 'c']
[1,2,3].findIndex(function(x) { x == 2; });

///change to Iterable Object
var arr = [1,8,4,7,9,2,5,5,62,5];
var iter = arr.entries();
///sort
function compareNumbers(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
}
[3, 1, 4, 1, 5, 9].sort(compareNumbers); // [1, 1, 3, 4, 5, 9]

                              DATE



var d = new Date(2013,0,32); // 32 января 2013 ?!? new Date(year, month, date, hours, minutes, seconds, ms)
alert(d); // ... это 1 февраля 2013!
Например, нужно увеличить на 2 дня дату «28 февраля 2011». Может быть так, что это будет 2 марта,
а может быть и 1 марта, если год високосный. Но нам обо всем этом думать не нужно. Просто
прибавляем два дня. Остальное сделает Date :
performance.now() возвращает количество миллисекунд, прошедшее с начала загрузки страницы
● console.time(метка) — включить внутренний хронометр браузера с меткой.
● console.timeEnd(метка) — выключить внутренний хронометр браузера с меткой и вывести результат.

Современные интерпретаторы JavaScript делают массу оптимизаций, например:
1. Автоматически выносят инвариант, то есть постоянное в цикле значение типа arr.length , за
пределы цикла.
2. Стараются понять, значения какого типа хранит данная переменная или массив, какую
структуру имеет объект и, исходя из этого, оптимизировать внутренние алгоритмы.
3. Выполняют простейшие операции, например сложение явно заданных чисел и строк, на этапе компиляции.
4. Могут обнаружить, что некий код, например присваивание к неиспользуемой локальной переме


		ZAMIKANIA [[Scope]]
При создании функция получает скрытое свойство [[Scope]] , которое ссылается на лексическое окружение, в котором она была создана.
При запуске функция создает объект LexicalEnvironment , записывает туда аргументы, функции и переменные.
Интерпретатор, при доступе к переменной, сначала пытается найти переменную в текущем
LexicalEnvironment , а затем, если её нет — ищет во внешнем объекте переменных. В данном случае им является window .
Такой порядок поиска возможен благодаря тому, что ссылка на внешний объект переменных
хранится в специальном внутреннем свойстве функции, которое называется [[Scope]] . Это свойство
закрыто от прямого доступа, но знание о нём очень важно для понимания того, как работает JavaScript.

Функция в JavaScript является объектом.

Статические переменные
Иногда свойства, привязанные к функции, называют «статическими переменными».
В некоторых языках программирования можно объявлять переменную, которая сохраняет
значение между вызовами функции. В JavaScript ближайший аналог — такое вот свойство
функции.
function makeCounter() {
  function counter() {
    return counter.currentCount++;
  };
  counter.currentCount = 1;
  return counter;
}
var counter = makeCounter();
alert( counter() ); // 1
alert( counter() ); // 2

var value = new Boolean(false);
if (value) {
  alert( true ); // сработает!
}

Для численного преобразования используется метод valueOf , который также может возвратить
любое примитивное значение. У большинства объектов valueOf не работает (возвращает сам
объект и потому игнорируется), при этом для численного преобразования используется toString .

//
В общем, метод toString для функций лучше вообще не вызывать
(function(x) {
  return function(y) {
    return x + y;
  }
})(42).toString(); // "function (y)
// {\n return x + y;\n}"

(function(x) {
return x + 1;
}).bind(16).toString(); // "function (x)
// {\n [native code]\n}"
////

● Функции, которые предназначены для создания объектов, называются конструкторами. Их
названия пишут с большой буквы, чтобы отличать от обычных.


// 2. указание значения через дескриптор
Object.defineProperty(user, "name", { value: "Вася" });

var user = {};
Object.defineProperty(user, "name", {
  value: "Вася",
  writable: false, // запретить присвоение "user.name="
  configurable: false // запретить удаление "delete user.name"
});
// Теперь попытаемся изменить это свойство.
// в strict mode присвоение "user.name=" вызовет ошибку
user.name = "Петя"
В нём могут быть следующие поля:
● value — значение свойства, по умолчанию undefined
● writable — значение свойства можно менять, если true . По умолчанию false .
● configurable — если true , то свойство можно удалять, а также менять его в дальнейшем при
помощи новых вызовов defineProperty . По умолчанию false .
● enumerable — если true , то свойство будет участвовать в переборе for..in . По умолчанию false .
● get — функция, которая возвращает значение свойства. По умолчанию undefined .
● set — функция, которая записывает значение свойства. По умолчанию undefined .

                                CALL


func.call(context, arg1, arg2, ...);//Синтаксис метода call :
В современном стандарте call/apply передают this «как есть». А в старом, без use strict ,
при указании первого аргумента null или undefined в call/apply , функция получает this = window
После контекста в call можно передать аргументы для функции. Вот пример с более сложным
вариантом showFullName , который конструирует ответ из указанных свойств объекта:
function f() {
  alert( this ); // window
}
f.call(null);

var user = {
  firstName: "Василий",
  surname: "Петров",
  patronym: "Иванович"
};
function showFullName(firstPart, lastPart) {
  alert( this[firstPart] + " " + this[lastPart] );
}
// f.call(контекст, аргумент1, аргумент2, ...)
showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
showFullName.call(user, 'firstName', 'patronym') // "Василий Иванович"
Вызов showFullName.call(user) запустит функцию, установив this = user:
//
function printArgs() {
  arguments.join = [].join; // одолжили метод (1)
  var argStr = arguments.join(':'); // (2)
  alert( argStr ); // сработает и выведет 1:2:3
}
printArgs(1, 2, 3);

//callee
Избегайте использования нестандартных свойств arguments.caller и arguments.callee, поскольку они ненадежны в случае переноса кода
var factorial = (function(n) {
  return (n <= 1) ? 1 : (n * arguments.callee(n - 1));
});
свойство arguments.callee ссылается на функцию, вызванную с arguments
//

func(...) // this = window (ES3) /undefined (ES5)
new func() // this = {} (новый объект)

Методы bind и call/apply близки по синтаксису, но есть важнейшее отличие.
Методы call/apply вызывают функцию с заданным контекстом и аргументами.
А bind не вызывает функцию. Он только возвращает «обёртку», которую мы можем вызвать
позже, и которая передаст вызов в исходную функцию, с привязанным контекстом.

			JSON

var user = {
  name: "Вася",
  age: 25,
  window: window
};
alert( JSON.stringify(user, ["name", "age"]) );
// {"name":"Вася","age":25}
Методы JSON.parse строку и обратно. и JSON.stringify позволяют интеллектуально преобразовать объект в

			setTimeout и setInterval


var timerId = setTimeout(function(){alert(1)} ,time);
clearTimeout(timerId);
function func(phrase, who) {
  alert( phrase + ', ' + who );
}
setTimeout(func, 1000, "Привет", "Вася"); // Привет, Вася
setTimeout("alert('Привет')", 1000);

Исполнение функции произойдёт спустя время, указанное в параметре time .
в отличие от setTimeout , setInterval запускает выполнение функции не один раз, а регулярно повторяет её через указанный интервал времени.

Функция eval(code) позволяет выполнить код, переданный ей в виде строки.
eval(' alert(a) '); // 2

			try/catch

try..catch работает только в синхронном коде
var data = "Has Error"; // в данных ошибка
try {
  var user = JSON.parse(data); // <‐‐ ошибка при выполнении
  alert( user.name ); // не сработает
} catch (e) {
  // ...выполнится catch
  alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз" );
  alert( e.name );
  alert( e.message );
}finally(){
	alert('finally');
}
ECMAScript exceptions

EvalError
RangeError
ReferenceError
TypeError
URIError

DOMException and DOMError

					OOP

Локальные переменные, включая параметры конструктора, можно считать приватными свойствами.
Свойства, записанные в this , можно считать публичными.
function CoffeeMachine(power) { //power protected
  this.waterAmount = 0; // количество воды в кофеварке public
  this._protected = true;// protected field	
  alert( 'Создана кофеварка мощностью: ' + power + ' ватт' );
  this.run = function() {...} // public function  	
  function run1(){} // private  function	
}
// создать кофеварку
var coffeeMachine = new CoffeeMachine(100);
// залить воды
coffeeMachine.waterAmount = 200;
В терминологии ООП отделение и защита внутреннего интерфейса называется инкапсуляция.

			Наследование

function Machine() {
  var enabled = false;
  this._protected = true;// protected	
  this.enable = function() {
    enabled = true;
  };
  this.disable = function() {
    enabled = false;
  };
}

Унаследуем от него кофеварку. При этом она получит эти методы автоматически:
function CoffeeMachine(power) {
  Machine.call(this); // отнаследовать
  var waterAmount = 0;
  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };
}
Подчёркивание в начале свойства — общепринятый знак, что свойство является внутренним,
предназначенным лишь для доступа из самого объекта и его наследников. Такие свойства называют защищёнными.

				ООП в прототипном стиле

var user = {};
// 1. простое присваивание
user.name = "Вася";
// 2. указание значения через дескриптор
Object.defineProperty(user, "name", { value: "Вася" });
Object.preventExtensions(obj)
//Запрещает добавление свойств в объект.
Object.seal(obj)
//Запрещает добавление и удаление свойств, все текущие свойства делает configurable: false .
Object.freeze(obj)
//Запрещает добавление, удаление и изменение свойств, все текущие свойства делает configurable:
false, writable: false .
Object.isExtensible(obj),
Object.isSealed(obj),
Object.isFrozen(obj)
Возвращают true , если на объекте были вызваны методы Object.preventExtensions/seal/freeze .

Объект, на который указывает ссылка __proto__ , называется «прототипом». В данном случае получилось, что animal является прототипом для rabbit .
var animal = {
  eats: true
};
var rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;
rabbit.jumps ; //true
rabbit.eats ; //true
Также говорят, что объект rabbit «прототипно наследует» от animal .
Вызов obj.hasOwnProperty(prop) возвращает true , если свойство prop принадлежит самому объекту obj , иначе false .
● В JavaScript есть встроенное «наследование» между объектами при помощи специального свойства __proto__ .
● При установке свойства rabbit.__proto__ = animal говорят, что объект animal будет «прототипом» rabbit .
● При чтении свойства из объекта, если его в нём нет, оно ищется в __proto__ . Прототип задействуется только при 
чтении свойства. Операции присвоения obj.prop = или удаления delete obj.prop совершаются всегда над самим объектом obj .
var animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal
alert( rabbit.eats ); // true
Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее: «При создании
объекта через new Rabbit запиши ему __proto__ = animal ».
Поэтому говорят, что «все объекты наследуют от Object », а если более точно, то от Object.prototype .

Значения null и undefined не имеют свойств

Обычный конструктор
function Animal(name) {
  this.speed = 0;
  this.name = name;
  this.run = function(speed) {
    this.speed += speed;
    alert( this.name + ' бежит, скорость ' + this.speed );
  };
  this.stop = function() {
    this.speed = 0;
    alert( this.name + ' стоит' );
  };
};
var animal = new Animal('Зверь');

var animal = new Animal; // <‐‐ без скобок то же самое что
var animal = new Animal();

Класс через прототип
// конструктор
function Animal(name) {
  this.name = name;
  this.speed = 0;
}
// методы в прототипе
Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' бежит, скорость ' + this.speed );
};
Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' стоит' );
};
var animal = new Animal('Зверь');
В объекте animal будут хранится свойства конкретного экземпляра: name и speed , а общие методы — в прототипе.
Неправильный вариант: Rabbit.prototype = new Animal();
правильный вариант Object.create(Animal.prototype)

Сравнение
Чем такое(prototype) задание класса лучше и хуже функционального стиля?

Достоинства
Функциональный стиль записывает в каждый объект и свойства и методы, а прототипный — только свойства. Поэтому прототипный стиль —
быстрее и экономнее по памяти.

Недостатки
При создании методов через прототип, мы теряем возможность использовать локальные переменные
как приватные свойства, у них больше нет общей области видимости с конструктором.

Для наследования нужно, чтобы «склад методов потомка» (Child.prototype ) наследовал от «склада метода родителей» (Parent.prototype ).
Это можно сделать при помощи Object.create :
Rabbit.prototype = Object.create(Animal.prototype);

JavaScript, работающий в одной вкладке, не может общаться с другими вкладками и окнами

document.querySellectorAll('li')[0].addEventListener('click', function(e){
	e.stopPropogation();// cancel ul click event
});

var user = {
  name: 'Василий',
  sayHi: function() {
  	alert(this.name);
  }
};
user.sayHi();// sayHi в контексте user
var user = {
  firstName: 'Василий',
  toString: function() {
    return 'Пользователь ' + this.firstName;
  }
};
alert( user );  // Пользователь Васили
Для численного преобразования объекта используется метод valueOf , а если его нет — то toString :



BDD — поведенческие тесты кода
describe("pow", function() {
  it("возводит в n‐ю степень", function() {
    assert.equal(pow(2, 3), 8);
  });
});
describe(название, function() { ... })
	Задаёт, что именно мы описываем, используется для группировки «рабочих лошадок» — блоков it .
	В данном случае мы описываем функцию pow .
it(название, function() { ... })
	В названии блока it человеческим языком описывается, что должна делать функция, далее следует тест, который проверяет это.
assert.equal(value1, value2)
	Код внутри it , если реализация верна, должен выполняться без ошибок.

● Mocha— эта библиотека содержит общие функции для тестирования, включая describe и it .
● Chai  — библиотека поддерживает разнообразные функции для проверок. Есть разные «стили»
проверки результатов, с которыми мы познакомимся позже, на текущий момент мы будем использовать лишь assert.equal .
Один тест тестирует ровно одну вещь.

describe("pow", function() {

  before(function() { alert("Начало тестов"); });
  after(function() { alert("Конец тестов"); });
  beforeEach(function() { alert("Вход в тест"); });
  afterEach(function() { alert("Выход из теста"); });

  it("при возведении 2 в 3ю степень результат 8", function() {
    assert.equal(pow(2, 3), 8);
  });
  it("при возведении 3 в 4ю степень равен 81", function() {
    assert.equal(pow(3, 4), 81);
  });
  it("при возведении в отрицательную степень результат NaN", function() {
    assert(isNaN(pow(2, ‐1)));
  });
});
/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf‐8">
  <!‐‐ подключаем стили Mocha, для отображения результатов ‐‐>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.css">
  <!‐‐ подключаем библиотеку Mocha ‐‐>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.js"></script>
  <!‐‐ настраиваем Mocha: предстоит BDD‐тестирование ‐‐>
   <script>
    mocha.setup('bdd');
  </script>
  <!‐‐ подключаем chai ‐‐>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/2.0.0/chai.js"></script>
  <!‐‐ в chai есть много всего, выносим assert в глобальную область ‐‐>
   <script>
    var assert = chai.assert;
  </script>
</head>
<body>
   <script>
    function pow(x, n) {
       код функции, пока что пусто 
    }
  </script>
  <!‐‐ в этом скрипте находятся спеки ‐‐>
   <script src="test.js"></script>
  <!‐‐ в элементе с id="mocha" будут результаты тестов ‐‐>
  <div id="mocha"></div>
  <!‐‐ запустить тесты! ‐‐>
   <script>
    mocha.run();
  </script>
</body>
</html>
*/
describe("pow", function() {
  function makeTest(x) {
    var expected = x * x * x;
    it("при возведении " + x + " в степень 3 результат: " + expected, function() {
      assert.equal(pow(x, 3), expected);
    });
  }
  for (var x = 1; x <= 5; x++) {
    makeTest(x);
  }
});
// http://chaijs.com/api/assert/

12.34.toFixed(1); // 12.3
12.toFixed(1);. // ошибка!
12..toFixed(1) //12.0

var user = {
  name: "Петя",
  age: 30
}
var keys = Object.keys(user); // return ["name", "age"]
для поддержки в IE- просто подключите библиотеку ES*-shim

var arr = [1, ‐1, 2, ‐2, 3];
var positiveArr = arr.filter(function(number) {
  return number > 0;
}); // [1,2,3]

var names = ['HTML', 'CSS', 'JavaScript'];
var nameLengths = names.map(function(name) {
  return name.length;
});// [4,3,10]

var arr = [1, ‐1, 2, ‐2, 3];
function isPositive(number) {
  return number > 0;
}
alert( arr.every(isPositive) ); // false, не все положительные
alert( arr.some(isPositive) ); // true, есть хоть одно положительное

var arr = [1, 2, 3, 4, 5]
// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0); // 15
Метод arr.reduceRight работает аналогично reduce, но идёт по массиву справа-налево:


							Bloking code .example in bubble sort

// https://rdner.de/slides/jsib/2015-09-19-blocking-event-loop/bubble-sort/
///example 1 when arr length big number browser is working good
function sortStep(arr, i, j, callback) {
	console.log(i + ' ' + j);
	if(arr[j] > arr[j + 1]) {
		var tmp = arr[j];
		arr[j] = arr[j + 1];
		arr[j + 1] = tmp;
	}
	if (++j === arr.length - 1) {
		i++; j = 0;
	}
	if (i === arr.length) {
		callback();
		return;
	}
	setTimeout(sortStep.bind(this, arr, i, j, callback));
}

function sortAsync(arr, callback) {
	if (arr.length < 2) {
		callback();
		return;
	}
	sortStep(arr, 0, 0, callback);
}
///example 2 when arr length big number browser isn't working 
function sort(arr) {
	var tmp = null;
	for(var i = 0; i < arr.length; i++)
		for(var j = 0; j < arr.length - 1; j++) {
			console.log(i + ' ' + j);
			if(arr[j] > arr[j+1]) {
				tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
			}
		}
}
////////////////////////////////////////////////SORAX ////////////////////////////
//value types 
var s = "string"; // typeoff string is imimmutable
var f = function(){}; // typeoff f is function
console.log(2 toFixed(50));
Boolean(t); // worning returned true
Boolean(undefined); // false
Boolean(null); // false
Boolean(0); // false
Boolean(NaN); // false
Boolean(""); // false
null == undefined // true
null === undefined //false

//cast operators
Number("89"),Boolean(0),String(45);
!!1; //true
!!0; //false
!!"" //false
!!NaN; //false
!!undefined; //false
+true ;//1
+false;//0
3 + "";// string "3"
+"36"; // number 36;
false.toString();// "false"
parseInt("45asdsds",10); // number 45
parseFloat("45.25asasadd"); //number 45.25

//  1 once    ;5 time    ; 5 time
for(var i = 0; i< 5; i++){}

///
var proto = {
	x: 10,
	y: 20,
	_age:12,
	get age(){ // getter for _age
		return _age;
	},
	set age(value){// setter for _age
		_age = value;
	},
	toJSON: function(){
		return {
			x: this.x,
			name: 'name'
		}
	}
};
var jsonX = JSONstringify(proto);// reurn "{x:10, name:'name'}"
Object.getOwnPropertyDescriptor(proto, "x");
Object.defineProperty(proto, 'y', {
	value: 20,
	writable: false,
	enumerable: false,// not showing in for
	configrable: false 
});
var newObj = Object.create(proto);// newObj.__proto__ == proto
var o = {};
Object.defineProperties(o, {
	x:{
		value: 10,
		writable: false
	},
	y:{
		value: 20
	}
});
Object.isExtensible(o); //true
Object.preventExtensions(o);// can not add new property
Object.isExtensible(o); //false

o.__proto__ // is depreceated . not cross browser
///
var Person = function(name){
	this.name = name;
};
var person = new Person('Name');
person instanceof Person ; //true
// prototype exist ONLY in functions
var Developer = function(name, skills){
	Person.apply(this, arguments);
	this.skills = skills || [];
};
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;
var developer = new Developer('New Name', [1,2,3]);
developer instanceof Developer;
developer instanceof Person;
////
Developer.toString();// return body this function
var classof = function(object){// custom typeoff
	return Object.prototype.toString.call(object).slice(8, -1);
};
classof(1);//Number


											Stefanov

иногда бывает удобно иметь возможность вызывать статические методы и относительно экземпляров. Это легко можно реали-
зовать, добавив в прототип новый метод, который будет играть роль ссылки, указывающей на фактический статический метод:
Gadget.prototype.isShiny = Gadget.isShiny;	

Шаб­лон цепочек
// example
myobj = {
	method1: function(name){
		this.name = name;
		return this;
	},
	method2: function () {
		this.name = this.name || "";
		this.name += " ";
		return this;
	},
	method3: function(w){
		this.world = w || "";
		return this;
	},
	method4: function(){
		console.log(this.name + this.world);
		return this;
	}
}
myobj.method1("hello").method2().method3("world").method4();

Множественное наследование
function Cat() {
	this.legs = 4;
	this.say = function () {
		return “meaowww”;
	}
}
function Bird() {
	this.wings = 2;
	this.fly = true;
}
function CatWings() {
	Cat.apply(this);
	Bird.apply(this);
}
///
function inherit(C, P) {
	var F = function () {};
	F.prototype = P.prototype;
	C.prototype = new F();
}

Наследование через прототип
// объект, который наследуется
var parent = {
	name: “Papa”
};
// новый объект
var child = object(parent);
// проверка
alert(child.name); // “Papa”

Шаб­лоны проектирования

//Singleton Экземпляр в замыкании
function Universe() {
	// сохраненный экземпляр
	var instance = this;
	// создать новый экземпляр
	this.start_time = 0;
	this.bang = “Big”;
	// переопределить конструктор
	Universe = function () {
		return instance;
	};
}

//Фабрика
Назначение фабрики в  том, чтобы создавать объекты.

//Итератор
Шаб­лон итератора применяется, когда имеется объект, содержащий совокупность данных.
while (agg.hasNext()) {
	// выполнить некоторые операции над элементом...
	console.log(agg.next());
}
var agg = (function () {
	var index = 0,
	data = [1, 2, 3, 4, 5],
	length = data.length;
	return {
		next: function () {
			var element;
			if (!this.hasNext()) {
				return null;
			}
			element = data[index];
			index = index + 2;
			return element;
		},
		hasNext: function () {
			return index < length;
		}
	};
}());

//Декоратор
При использовании шаб­лона декораторов дополнительную функциональность можно добавлять к  объекту динамически во время 
выполнения.

var sale = new Sale(100);//цена 100 долларов
sale = sale.decorate(‘fedtax’);//добавить федеральный налог
sale = sale.decorate(‘quebec’);//добавить местный налог
sale = sale.decorate(‘money’);//форматировать как денежную сумму
sale.getPrice();//“$112.88”

//Стратегия
Шаб­лон стратегии позволяет выбирать тот или иной алгоритм во время выполнения.
var data = {
	first_name: “Super”,
	last_name: “Man”,
	age: “unknown”,
	username: “o_O”
};
validator.config = {
	first_name: ‘isNonEmpty’,
	age: ‘isNumber’,
	username: ‘isAlphaNum’
};
validator.validate(data);
if (validator.hasErrors()) {
	console.log(validator.messages.join(“\n”));
}
// проверяет наличие значения
validator.types.isNonEmpty = {
	validate: function (value) {
		return value !== “”;
	},
	instructions: “the value cannot be empty”
};
// проверяет, является ли значение числом
validator.types.isNumber = {
	validate: function (value) {
		return !isNaN(value);
	},
	instructions: “the value can only be a valid number, e.g. 1, 3.14 or 2010”
};
var validator = {
	// все доступные проверки
	types: {},
	// сообщения об ошибках
	// в текущем сеансе проверки
	messages: [],
	// текущие параметры проверки
	// имя: тип проверки
	config: {},
	// вспомогательный метод
	hasErrors: function () {
		return this.messages.length !== 0;
	},
	validate: function (data) {}
};

//Шаб­лон наблюдатель (observer)
Подводя итоги, объекту-издателю потребуются следующие члены:
subscribers
//Массив.
subscribe()
//Добавляет подписчика в массив.
unsubscribe()
//Удаляет подписчика из массива.
publish();
///example
var publisher = {
	subscribers: {
	any: []
	// тип события: подписчик
	},
	subscribe: function (fn, type) {
		type = type || ‘any’;
		if (typeof this.subscribers[type] === “undefined”) {
			this.subscribers[type] = [];
		}
		this.subscribers[type].push(fn);
	},
	unsubscribe: function (fn, type) {
		this.visitSubscribers(‘unsubscribe’, fn, type);
	},
	publish: function (publication, type) {
		this.visitSubscribers(‘publish’, publication, type);
	},
	visitSubscribers: function (action, arg, type) {
		var pubtype = type || ‘any’,
		subscribers = this.subscribers[pubtype],
		i,
		max = subscribers.length;
		for (i = 0; i < max; i += 1) {
			if (action === ‘publish’) {
				subscribers[i](arg);
			} else {
				if (subscribers[i] === arg) {
					subscribers.splice(i, 1);
				}
			}
		}
	}
};

/////Работа с деревом DOM 	
//Следует избегать обращений к элементам DOM внутри циклов
// антишаб­лон
for (var i = 0; i < 100; i += 1) {
	document.getElementById(“result”).innerHTML += i + “, “;
}
// предпочтительнее – изменяет значение локальной переменной
var i, content = “”;
for (i = 0; i < 100; i += 1) {
	content += i + “,”;
}
document.getElementById(“result”).innerHTML += content;
// антишаб­лон
var padding = document.getElementById(“result”).style.padding,
margin = document.getElementById(“result”).style.margin;
// предпочтительнее
var style = document.getElementById(“result”).style,
padding = style.padding,
margin = style.margin;
Если вам необходимо создать относительно крупную ветвь дерева, вы должны стараться не добавлять ее в  дерево, пока
она не будет полностью готова.
//example 
var p, t, frag;
frag = document.createDocumentFragment();
p = document.createElement(‘p’);
t = document.createTextNode(‘first paragraph’);
p.appendChild(t);
frag.appendChild(p);
p = document.createElement(‘p’);
t = document.createTextNode(‘second paragraph’);
p.appendChild(t);
frag.appendChild(p);
document.body.appendChild(frag);

//setTimeout
В Java­Script нет возможности реализовать многопоточное выполнение программ, но его можно имитировать с помощью метода
setTimeout() или с помощью механизма фоновых вычислений (web workers), реализованного в современных броузерах.

Назначенный тайм-аут в 1 миллисекунду (или даже 0 миллисекунд) в реальности окажется больше в зависимости от броузера
и операционной сис­темы. Предельное время ожидания 0 миллисекунд означает не «немедленно», а «как можно скорее». 
В Inter­net Explorer, например, самый короткий интервал, который способен отмерять таймер, равен 15 миллисекундам.

//web workers
Этот механизм обеспечивает поддержку web потока выполнения в броузере
var ww = new Worker(‘my_web_worker.js’);
ww.onmessage = function (event) {
	document.body.innerHTML +=
	"<p>message from the background thread: " + event.data + "</p>";
};
<iframe> Альтернативный способ запуска удаленного сценария заключается в использовании фреймов 

function Foo() {}
function Bar() {}
Bar.prototype = new Foo();

new Bar() instanceof Bar; // true
new Bar() instanceof Foo; // true

var Modul = (function(global, document, undefined){
	var Module1 = function(){
		this.foo = function(){
			global.alert();// fast
			window.alert();//slow	
		};
	}
	return new Module1;
})(this, window.document); //cashing window and document


					Map

Map - реализация простого ассоциативного массива (словаря). Он содержит данные в виде набора пар ключ/значение(ключи уникальны)
var myMap = new Map();
var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};
// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');
myMap.size; // 3			
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
var myMap = new Map();
myMap.set(NaN, 'not a number');
myMap.get(NaN); // "not a number"

var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (var [key, value] of myMap) {
  console.log(key + " "  + value);
}
// 0 = zero
// 1 = one		
		
								Set

Set реализация коллекции - структуры данных, которая содержит список уникальных элементов в порядке их добавления
The Set object lets you store unique values of any type			
var mySet = new Set();
mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }					
mySet.has(1); // true
mySet.delete(1);
Сравнение Array и Set 
Set.has работает быстрее чем Array.indexOf.
можно удалять элементы по значению (а не по индексу как массивах).
NaN обрабатывается корректно
поддерживается уникальность значений.

								WeakMap

The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced.  
The keys must be objects and the values can be arbitrary values.	
WeakMap это специальный вид словаря, ключами которого могут быть только объекты,		

var wm1 = new WeakMap(); // key shuld be referance type value is value type
var o1 = {},
    o2 = function() {},
    o3 = window;	
wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);				
					
								WeakSet

WeakSet это специальный вид коллекции, элементами которой могут быть только объекты.
var ws = new WeakSet();
var obj = {};
var foo = {};
ws.add(window);
ws.add(obj);
ws.has(window); // true
ws.has(foo);    // false, foo has not been added to the set
ws.delete(window); // removes window from the set
ws.has(window);    // false, window has been removed	

//Zamikanie
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41							

decodeURI('https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"


						Number object

var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;						

				
						Intl object

Объект Intl является пространством имён для API интернационализации ECMAScript, предосталяющим языко-зависимое
сравнение строк, форматирование чисел и дат со временем. Конструкторы объектов Collator, NumberFormat и
DateTimeFormat являются свойствами объекта Intl.

Intl.Collator Конструктор сортировщиков — объектов, включающих языко-зависимое сравнение строк.
Intl.DateTimeFormat Конструктор объектов, включающих языко-зависимое форматирование даты и времени.
Intl.NumberFormat Конструктор объектов, включающих языко-зависимое форматирование чисел.

Intl.Collator
Следующий пример демонстрирует различные потенциальные результаты для строки
console.log(new Intl.Collator().compare('a', 'c')); // →  -1
console.log(new Intl.Collator().compare('c', 'a')); // → 1
console.log(new Intl.Collator().compare('a', 'a')); // → 1

Intl.DateTimeFormat
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// Вывод format без аргументов зависит от реализации,локали по умолчанию и часового пояса по умолчанию
console.log(new Intl.DateTimeFormat().format(date));// → "12/19/2012",
// В америкаском английском используется порядок месяц-день-год
console.log(new Intl.DateTimeFormat('en-US').format(date));// → "12/19/2012"
// В британском английском используется порядок день-месяц-год
console.log(new Intl.DateTimeFormat('en-GB').format(date));// → "20/12/2012"
// В корейском используется порядок год-месяц-день
console.log(new Intl.DateTimeFormat('ko-KR').format(date));// → "2012. 12. 20."
// В большинстве арабоговорящих стран используют настоящие арабские цифры
console.log(new Intl.DateTimeFormat('ar-EG').format(date));// → "٢٠‏/١٢‏/٢٠١٢"
// Запрашиваем день недели вместе с длинным форматом даты
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(new Intl.DateTimeFormat('de-DE', options).format(date));// → "Donnerstag, 20. Dezember 2012"
options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false
};
console.log(date.toLocaleString('en-US', options));// → "12/19/2012, 19:00:00"

Intl.NumberFormat
var number = 3500;
console.log(new Intl.NumberFormat().format(number));// → '3,500' в локали US English
// В Германии в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов - точка
console.log(new Intl.NumberFormat('de-DE').format(number));// → 123.456,789
// В России в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов - пробел
console.log(new Intl.NumberFormat('ru-RU').format(number));// → 123 456,789
// В Индии используют разделители для тысяч/лакх/крор
console.log(new Intl.NumberFormat('en-IN').format(number));// → 1,23,456.789
// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(new Intl.NumberFormat(['ban', 'id']).format(number));// → 123.456,789
// Запрашиваем формат валюты
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));// → 123.456,79 €
console.log(new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number));// → 123 456,79 руб.


										ArrayBuffer    FileReader  Blob   DataView

Объект ArrayBuffer используется для работы с бинарными данными.										
Объект FileReader позволяет веб-приложениям асинхронно читать содержимое файлов (или буферы данных), хранящиеся
 на компьютере пользователя, используя объекты File или Blob, с помощью которых задается файл или данные для чтения.
 Объекты File можно получить через объект FileList, который возвращается как результат при выборе файлов пользователем с 
 помощью элемента <input>, через drag and drop из объекта DataTransfer, или с помощью mozGetAsFile(), метода доступного 
 в API элемента HTMLCanvasElement.

 FileList File

 Интерфейс File представляет информацию о файлах и предоставляет JavaScript в веб странице доступ к их контенту.
 //<input id="fileItem" type="file">
 var file = document.getElementById('fileItem').files[0];
 Объект File - особый вид Blob
 FileReader, URL.createObjectURL(), createImageBitmap(), и XMLHttpRequest.send() допускают и Blob, и File.

Blob
Blob() constructor позволяет создавать blob-ы из других объектов
Объект Blob представляет из себя объект наподобие файла с неизменяемыми

var debug = {hello: "world"};
var blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
var url = URL.createObjectURL(blob);

Есть только один способ прочесть содержимое из Blob-а - это использовать FileReader
var reader = new FileReader();
reader.addEventListener("loadend", function() {
   // reader.result contains the contents of blob as a typed array
});
reader.readAsArrayBuffer(blob);

var builder = new BlobBuilder();
var fileParts = ['<a id="a"><b id="b">hey!</b></a>'];
builder.append(fileParts[0]);
var myBlob = builder.getBlob('text/xml');

//атрибут multiple позволяет выбрать сразу несколько файлов
//<input id="myfiles" multiple type="file">
var pullfiles=function(){ 
    // выбираем файловые инпуты на странице
    var fileInput = document.querySelector("#myfiles");
    var files = fileInput.files;
    // кешируем files.length 
    var fl=files.length;
    var i=0;

    while ( i < fl) {
        // локализуем файловую переменную в цикле
        var file = files[i];
        alert(file.name);
        i++;
    }    
}
// привязываем событие изменения input
document.querySelector("#myfiles").onchange=pullfiles;

DataView
The DataView view provides a low-level interface for reading and writing multiple number types in an ArrayBuffer
var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true

var buffer = new ArrayBuffer(16);
var dv = new DataView(buffer, 0);
dv.setInt16(1, 42);
dv.getInt16(1); //42

										Iterator

Объект является итератором, если он умеет обращаться к элементам коллекции по одному за раз.
Этот метод возвращает объект с двумя свойствами: done и value.
function makeIterator(array) {
    var nextIndex = 0;
    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}	
var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true	
Чтобы быть итерируемым, объект обязан реализовать метод @@iterator, что означает, что он 
(или один из объектов выше по цепочке прототипов) обязан иметь свойство с именем Symbol.iterator:	
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
}
Объекты String, Array, TypedArray, Map и Set являются итерируемыми, потому что их прототипы содержат метод Symbol.iterator.
for(let value of ["a", "b", "c"]){
    console.log(value)
}
// "a"
// "b"
// "c"

[..."abc"] // ["a", "b", "c"]

function* gen(){
  yield* ["a", "b", "c"]
}

gen().next() // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"])
a // "a"

									Generatory

Генераторы - это специальный тип функции, который работает как фабрика итераторов. Функция становится 
генератором,если содержит один или более yield операторов и использует function* синтаксис.
function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

Выражение для создания генераторов
var it2 = (for (i in it) i * 2);
console.log(it2.next()); // Первое значение из it, удвоенное
console.log(it2.next()); // Второе значение из it, удвоенное


									Proxy

Введенный в ECMAScript 6, объект Proxy позволяет перехватить и определить пользовательское поведение 
для определенных операций. Например, получение свойтсва объекта:
var handler = {
  get: function(target, name) {
    return name in target ? target[name] : 42;
}};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42

//var p = new Proxy(target, handler);
Где:
target — объект-цель (может быть объектом любого типа, включая массив, функцию и даже другой прокси объект).
handler — объект-обработчик, методы которого определяют поведение прокси во время выполнения операции над ним.

let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // Стандартное сохранение значения
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = 'young'; // Вызовет исключение
person.age = 300; // Вызовет исключение

		

											Storage

//sessionStorage
Свойство sessionStorage позволяет получить доступ к объекту Storage текущей сессии. Свойство sessionStorage очень
похоже на свойство Window.localStorage, единственное различие заключается в том, что все данные, 
сохраненные в localStorage не имеют определенного времени жизни, а данные в sessionStorage очищаются в
момент окончания сессии текущий страницы
// Сохранение данных в sessionStorage
sessionStorage.setItem('key', 'value');

// Получение данных из sessionStorage
var data = sessionStorage.getItem('key');	

localStorage.setItem('myCat', 'Tom');
localStorage.getItem('myCat');								
Storage.length 
Storage.setItem()
Storage.getItem()
Storage.removeItem()
Storage.clear()
storage.key(key);// Storage получает числовое значение n и возвращает имя n-ого ключа из хранилища


									Promise

Promise have 3 state;
//1)pending 2) resolved -> success 3) rejected -> faild
const willGift = new Promise(
	(resolve, rejecte) => {
		let win = Math.random().toFixed(1);
		if(win > 0.5){
			resolve("param");
		}else {
			rejecte("error");
		}
	} 
);
const writeOnFb = function(){
	return Promise.resolve("win");
}
const butTicket = function(){
	willGift.
		then(result => console.log(result)).
		then(writeOnFb).
		catch(error => console.log(error))
}

Основы Юникода предельно просты: каждый элемент текста всех в мире систем его написания связан с уникальным целым числом в диапазоне от 0 до 1.114.111
В настоящее время существуют несколько стандартов Юникод, наиболее популярными из которых являются UTF-8, UTF-16 и UTF-32.
каждый элемент JavaScript-строки является 16-разрядным значением
Этот 16-разрядный диапазон достаточно большой, он охватывает гораздо больше мировых текстовых систем,чем система ASCII

JavaScript уже перешел на 16-разрядные (UTF-16 строковые элементы. Такие строковые свойства и методы, как length ,
charAt и charCodeAt , работают на уровне представлений кодов, а не кодов символов. 
" clef".charCodeAt(0); // 55348 (0xd834)
JavaScript-строка состоит из 16-разрядных представлений кода, а не из кодов символов Юникода.


///////////////////////
All the primitive data types are imimmutable


                                              ES2015

if(condition) {
  const maxItems = 25;
}
//maxItems here Unavailable

{
  var name = 'name';
  let name = 'test';//return ERROR

  const name = 'name1';// return error
}

{
  const item;// Syntax error variable doesn't init
  const count = 15;
  count = 5;//return error
}
{
  const person = {
    name: 'max'
  }
  person.name = 'min';
  person = {};// return error
  // We can not change person referance. but options can
}
{
  console.log(item);// return error
  let item = 50;
}
{
  for(let i = 0; i < 10;i++){
    //
  }
  // here property i unavailable
}

{
  var funcs = [];
  for (var i = 0;i < 10;i++) { // When var change to let it works corectly
    funcs.push(function() {
      console.log(i)
    });
  }
  funcs.forEach(function(func) {
    func(); // return 10 10 times
  });
  //because in the all iteration used one property .All created functions saved same referance in property. after last iteration i = 10   
  // 
    for (var i = 0;i < 10;i++) {
    funcs.push((function(value) {
      return function() {
        console.log(value)
      }
    })(i));
  }
  funcs.forEach(function(func) {
    func(); // return 0,1,2,3,4...
  });
}
{
  let RegExp = 'hello';
  console.log(RegExp === window.RegExp);// return false
  //but
  var RegExp = 'hello';
  console.log(RegExp === window.RegExp);// return true
}
{
  var a = document.createElement('input')
  a.dataset.firstName = "Max"
  <input data-first-name=​"Max">​
  a.dataset;// return object of data attribute
}
{
  hiatory.pushState({
    name: "max"
  }); // in the url dded param name=max. Browser saved state
  history.popState(); //when clicked back btn in the browser changed STATE

  window.addEventListener('click', function(e) {
    console.log(e.state);//returned history state Object //name: "max"
  });
  //cokie max have diferent size depends browser
  //cookie size < localStorige size
  //cookie have life time localStorige cleared manuality
}
{
  const db = openDatabase('dbName', '1.0','', 2*1024*1024);
  //we can create table and set data
}
{
  npm i -g eslint
  npm i -g eslint-config-airbnb -D
  npm i -g eslint-plugin-import -D
  //.eslintrc
  {
    "extends" : "airbnb/base"
  }
  eslint index.js --fix;
}
{
  var user = {
    name: "Max",
    age: 25,
    toString: function() {
      return 'hello'+ this.name;
    },
    valueOf: function() {
      return this.age;
    }
  }
  alert(user);// hello Max
  alert(+user);// 25
  user == 25// true called valueOf method
}
{
  $0 === ducument.body 
  //open console elements tab click some element open console tab write $0 its equal in clicked element
}
{
  npm i --save --save-exact jQuery;// saved fixed version. When changed Jquery version it not changed
  npm -SE jQuery; //OR  -DE when dev dependency
}
{
  // compilater vs interpretator
  
  // compilater compiled ONE time and returned exe file for example; the other machine we can run program without 
  // compilater

  // interpretator worked every time. its read code row row .for running code the other machine we SHOULD be 
  //have interpretator

  //1) compilater very fast
  //2) same program compiled in the Windows OS not worked other(linux or mac) machine
  //3) interpretator  worked as crosplatform
}
{
  __proto__ property have all object in javascript. have in  specification
  // obj.__proto__.getName = 150 // not working
  prototype property have only all function in the js
  fn.__proto__ === Fn.prototype;
  var obj = {
    a: 5,
    b: {
      c: 10
    }
  }
  obj.__proto__ = {
    a: 10,
    b: {
      c: 20
    }
  }
  delete obj.a;
  console.log(obj.a); //10
  delete obj.a;
  console.log(obj.a); // 10 we can'nt delete obj.__proto__.a but can change and read
}
{
  let button = document.getElementById("myBtn");
  button.onclick = function(event) {
    console.log('clicked btn');    
  }
  //When user clicked button event added event loop queue ( очередь ) like array.push(event)
}
{
  var a = {name: 'asd'};
  delete a.name equal a.name = undefined
  //operator delete not rempved object of memary it's deleted GC
}

var a= 5;
var b = 7
a = a ^ b; 
b = a ^ b; //b = 5
a = b ^ a; //a = 7

					Что такое Service Worker

Во-первых, это скрипт, который браузер запускает в фоновом режиме, отдельно от страницы.Ключевая их особенность — это 
возможность перехватывать и обрабатывать сетевые запросы.

Во-вторых, SW запускается в worker контексте, поэтому он не имеет доступа к DOM и работает в потоке, отдельном от основного
потока JavaScript, управляющего вашим приложением, а следовательно — не блокирует его. Он призван быть полностью асинхронным,
поэтому использовать синхронные API (XHR и LocalStorage) в SW нельзя


function makeCounter() {
	var currentCount = 0;
	return function() {
		currentCount++;
		return currentCount;
	};
}
var counter = makeCounter();
// каждый вызов увеличивает счётчик
counter();
counter();
alert(counter()); // 3
//Приём проектирования Модуль
var MyLibrary = (function() {
	function helper() { ... }
	return {
		createMenu: function() { ... },
		createDialog: function() { ... }
	};
})();
// использование
MyLibrary.createMenu();

1. Объектная модель документа (DOM). Доступна через document .
2. Объектная модель браузера (BOM). navigator, screen, location, frames, history, XMLHttpRequest

frames Коллекция, содержащая фреймы и ифреймы.

navigator, screen Содержат информацию о браузере и экране.
location Содержит информацию о текущем URL и позволяет её менять. Любое изменение, кроме hash ,
перегружает страницу. Также можно перегрузить страницу с сервера вызовом location.reload(true) .
frames Содержит коллекцию window-объектов для каждого из дочерних фреймов. Каждый фрейм доступен по
номеру (с нуля) или по имени, что обычно удобнее.
history Позволяет отправить посетителя на предыдущую/последующую страницу по истории, а также изменить
URL без перезагрузки страницы с использованием History API.

$("div.my") — возвращает элемент по CSS-селектору, только один (первый).
$$("div.my") — возвращает массив элементов по CSS-селектору.

document.documentElement is equal //<html></html>


function* WarriorGenerator( ) {
	yield " Sun T zu " ;
	yield* Ninj aGenerator ( ) ;
	yield " Gengh is Khan" ;
}

function* NinjaGenerator ( ) {
	yield "Hattor i ";
	yield "Yosh i ";
}

function* DomTraversal ( e l ement ) {
yield element ;
element = element.firstElementChild;
while ( element ) {
	yield* DomTraversal(element);
	element = element.nextElementSibling;
}

Promise.race([
	getJSON ( "data/yoshi.json" ) ,
	getJSON ( "data/hattori.json"),
	getJSON ("data/hanzo.json")
	]).then ( ninja => {
		console.log('ninja', ninja);
}).catch(error => fail("Failure!"));

	
