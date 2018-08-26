1. npm init -y 
2. npm i tslint typescript -DE
3  npm run tsc --init //this comand created tsconfig.json file
4. tsc --p ./tsconfig.json // this command compiled ts file to js
5. add script in package.json "tsc": "./node_modules/.bin/tsc -p tsconfig.json" in package.json file
//jasmine equal chai + covarage + libs


var jobs: Array<string> = ['IBM', 'Microsoft', 'Google'];
var jobs: string[] = ['Apple', 'Dell', 'HP'];

enum Role {Employee, Manager, Admin};
var role: Role = Role.Employee;

1 enum Role {Employee = 3, Manager, Admin};
2 var role: Role = Role.Employee;
1 enum Role {Employee = 3, Manager = 5, Admin = 7};
2 var role: Role = Role.Employee;
1 enum Role {Employee, Manager, Admin};
2 console.log('Roles: ', Role[0], ',', Role[1], 'and', Role[2]);


			Type Tuple

let flexibleArray: [string, number, boolean];
let arr: flexibleArray  = ['John Doe', 24, true]

			Type Enum

enum Status {Started, InProgress, Completed}
let status:Status = Status.InProgress // 1

enum Status {Started = 1, InProgress, Completed}
let status:Status = Status.InProgress // 2

enum Status {Started = 33, InProgress = 66, Completed = 100}
let status:Status = Status.InProgress + '% done' // 66% done

enum Status {Started = 33, InProgress = 66, Completed = 100}
let status:string = Status[66] // InProgress


		interface

interface OptionBag {
 show: boolean,
 container: string
}
let options: OptionBag = {show: true, container: '#main'};
// Read-only properties
interface StaticSettings {
 readonly width: number,
 readonly height: number
}

// Функциональные типы
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): boolean {
    let result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}

interface NotEmpty<t> {
    data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;

interface ClockConstructor {
    new (hour: number, minute: number);
}
 
class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

Модификатор readonly 
Свойства, доступные только для чтения, должны быть инициализированы при их объявлении или в конструкторе.
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // ошибка! name is readonly.

//Использование класса в качестве интерфейса
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
let point3d: Point3d = {x: 1, y: 2, z: 3};

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {}
        else if (easing === "ease-out") {}
        else if (easing === "ease-in-out") {}
        else {
            // ошибка! null или undefined не должно передаваться.
        }
    }
}
 
let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy"); // ошибка: "uneasy" не допускается


npm i -g typescript && mkdir typescript && cd typescript && tsc --init
touch typescript.ts && tsc -w
