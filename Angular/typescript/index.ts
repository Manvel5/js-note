{
	//value types
	const prop: number = 15;
	const str: string = "stdfdring";
	const bool: boolean = true;
	let strAndNum: string | number = 15;
	strAndNum = '15';
	let typeAny: any = 45;
};
{
	const strArr: string[] = ["as","as","as","as","as","as"];
	const strArr1: Array<string> = ["as","as","as","as","as","as"];
	const numArr: number[] = [12,4,5,8,9,8,9];
	const numArr1: Array<number> = [12,4,5,8,9,8,9];
	//numArr equal numArr1 . strArr <=> strArr1
	//tuples method for array
	const strAndNum: [string, number] = ['5',6];
};
{
	let name: string = "name";
	function getName():string | number {
		return name;
	}
	function getAge(age: number): number {
		return age;
	}
	let myFunc: (age: number) => number;
	myFunc = getAge;
	let a = (n: number) => n * n;
	function b(): void{

	}
};
{
	//custom type
	type User = {
		name: string,
		age: number,
		pass?: number
	};
	const user :User = {
		name: 'Max',
		age: 21
	}
};
{
	enum Job {
		Frontend,
		Backend,
		Designer = 40,
		Qa
	}
	const job: Job = Job.Backend;//0
	const job1:Job = Job.Designer;//40
	const job2: Job= Job.Qa;//41 !!!!!!!!!!!
};
{
	function throwError(): never{//When function throw Exception we should be tick returned type never
		throw new Error('error');
	}
};
{
	let prop;// this cas equal let prop: any;
	prop = null;
	prop = 54;
	let num = 10;
	num = null;
};
{
	//typescript use es2015
	function generic<T>(value: T):T {
		return value
	}
	const num = generic(15) / 5;// There T is number
	const str = generic<string>("15").toLowerCase();//  There T is string
	const arr = generic([]).join();//  There T is array
	// const str1 = generic("15") * 5;//  There T is string compile error
	const arr2: Array<number> = [1,2,5];

	class MyGeneric<T> {
		constructor(public a: T,private  b: T){}

		getData(): number {
			return +this.a * +this.b;
		}
		getA(): T{
			return this.a
		}
	}
	class MyGeneric1<T extends number> {}
	class MyGeneric2<T extends number | string> {}
	// interface A{}
	// class MyGeneric3<T implements A> {} NOT support
};
{
	//Decorators
	function log(constructor: Function) {
		console.log(constructor);//it's function constructor es5 
	}
	function testLogger(param) {
		if(param == 'test') {
			return log;	
		}
		//There this -referance in User class  
		return null;
	}

	@testLogger("test")
	class User {
		constructor() {
			console.log("hello");
		}
	}
	// @prop("test") prop should be function body or null
	class User1 {
		constructor() {
			console.log("hello");
		}
	}
};

//namespace es5 not namespace
namespace Utils {
	export function isEmptyStr(str: string):boolean {
		return !str;
	}
	export interface User {
		username: string,
		age: number
	}
};
