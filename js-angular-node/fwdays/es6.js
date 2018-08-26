function foo() {
  {
    console.log(hi); 
    //Uncaught ReferenceError: hi is not defined
    let hi = 1;
  }
  console.log(hi); 
  //Uncaught ReferenceError: hi is not defined
 
  for(let i = 0; i < 10; i++) {
    
  }
 
  console.log(i); 
  //Uncaught ReferenceError: i is not defined
}

foo();

{
    const PI = 3.141593;
    PI = 3.14; // throws “PI” is read-only
}
{
    const scorpion={name:'Scorpion',const:'object'}
    scorpion.name = 'change';
    scorpion = {name:'second'}; //error
}
{
    const scorpion={name:'Scorpion',const:'object'}
    Object.freeze(scorpion);
    scorpion.name = 'change'; //error
}
{
  var obj = { };
  obj[prop] = 'some value';
  var obj = { [prop]: 'some value' };
  //this will assign to obj.foo10
  var obj = { ['foo' + 10]: 'some value' };
  //obj.foo10='some value'
  function getFieldName(){
      return 'foo15';
  }
  var obj = { [getFieldName()]: 'some value' };
  //obj.foo15='some value'
  console.log(obj)
}
{
  // ES5
  function hello(name) {
    name = name || 'Anonymous';
    console.log('Hi ' + name);
  }
  // ES6
  function hello(name = 'Anonymous') {
    console.log('Hi ' + name);
  }
}

{
  function test(one, ...twoThree) {
    // twoThree is an Array
    return one * twoThree.length;
  }
  console.log(test(3, "14", "zdec"));
  function sum(one, two, three) {
    return one + two + three;
  }
  // Pass each elem of array as argument
  console.log(sum(...[1,2,3]))
}

{
  let chars = [...'abc'];
  // ['a', 'b', 'c']
'hello'.startsWith('ello', 1)
//true
'hello'.endsWith('hell', 4)
//true
'hello'.includes('ell', 1)
//true
'hello'.includes('ell', 2)
//false
'NOBODY READS THIS ANYMORE\n'.repeat(9)
}

{
  Math.sign(-8)     // -1
  Math.sign(3)      // 1
  Math.trunc(3.1)   // 3
  Math.cbrt(8)      // 2

  Math.hypot(3,4) //5
  Math.hypot(...[3,4]) //5
}

{
  // Destructor
  let user = {
    name:'Scrooge',
    email:'McDuck@gmail.com'
  }
  var name = user.name;
  var email = user.email;
  var { name, email } = user;
  //name = 'Scrooge'
  //email ='McDuck@gmail.com' 


  let values = [22, 44];
  let [first, second] = values;

  //first = 22
  //second = 44

  let a = 10, b = 20;

  [a,b] = [b,a];

  var doWork = function() {
    return [1, 3, 2];
  };
   
  let [, x, y, z] = doWork();
}

{
  let iterable = [1, 2, 3];

  for (let value of iterable) {
    console.log(value);
  }
  for (let ch of 'abc') {
    console.log(ch);
  }
}

{
  var a1 = () => 1;
  let s = Symbol();
  let s = new Symbol(); // error

  let s1 = Symbol("some description");
  let s2 = Symbol("some description");
  //s1!=s2
}
{
  class Classroom {
    constructor() {
        this.students = ["Tim", "Joy", "Sue"];
    }
    [Symbol.iterator]() {
         var index = 0;
         return {
            next: () => {
                if(index < this.students.length){
                     index += 1;
                     return {
                                done: false, 
                                value: this.students[index-1]
                            };
                }
                return { value: undefined, done: true };
            }
         }
    }
  } 
  let scienceClass = new Classroom();
  let result = [];
  for(let name of scienceClass) {
      result.push(name);
  }
  //result == ["Tim", "Joy", "Sue"]
}
{
  let numbers = function*() {
      yield 1;
      yield 2;
      yield 3;
  };
  let gen = numbers();
  gen.next() // return object {done: false, value: 1}
  gen.next().value; //2
  gen.next().value; //3

let sum = 0;
for(let n of numbers()) {
    sum += n;
}
//sum == 6
}