var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    //value types
    var prop = 15;
    var str = "stdfdring";
    var bool = true;
    var strAndNum = 15;
    strAndNum = '15';
    var typeAny = 45;
}
;
{
    var strArr = ["as", "as", "as", "as", "as", "as"];
    var strArr1 = ["as", "as", "as", "as", "as", "as"];
    var numArr = [12, 4, 5, 8, 9, 8, 9];
    var numArr1 = [12, 4, 5, 8, 9, 8, 9];
    //numArr equal numArr1 . strArr <=> strArr1
    //tuples method for array
    var strAndNum = ['5', 6];
}
;
{
    var name_1 = "name";
    function getName() {
        return name_1;
    }
    function getAge(age) {
        return age;
    }
    var myFunc = void 0;
    myFunc = getAge;
    var a = function (n) { return n * n; };
    function b() {
    }
}
;
{
    var user = {
        name: 'Max',
        age: 21
    };
}
;
{
    var Job;
    (function (Job) {
        Job[Job["Frontend"] = 0] = "Frontend";
        Job[Job["Backend"] = 1] = "Backend";
        Job[Job["Designer"] = 40] = "Designer";
        Job[Job["Qa"] = 41] = "Qa";
    })(Job || (Job = {}));
    var job = Job.Backend; //0
    var job1 = Job.Designer; //40
    var job2 = Job.Qa; //41 !!!!!!!!!!!
}
;
{
    function throwError() {
        throw new Error('error');
    }
}
;
{
    var prop = void 0; // this cas equal let prop: any;
    prop = null;
    prop = 54;
    var num = 10;
    num = null;
}
;
{
    //typescript use es2015
    function generic(value) {
        return value;
    }
    var num = generic(15) / 5; // There T is number
    var str = generic("15").toLowerCase(); //  There T is string
    var arr = generic([]).join(); //  There T is array
    // const str1 = generic("15") * 5;//  There T is string compile error
    var arr2 = [1, 2, 5];
    var MyGeneric = (function () {
        function MyGeneric(a, b) {
            this.a = a;
            this.b = b;
        }
        MyGeneric.prototype.getData = function () {
            return +this.a * +this.b;
        };
        MyGeneric.prototype.getA = function () {
            return this.a;
        };
        return MyGeneric;
    }());
    var MyGeneric1 = (function () {
        function MyGeneric1() {
        }
        return MyGeneric1;
    }());
    var MyGeneric2 = (function () {
        function MyGeneric2() {
        }
        return MyGeneric2;
    }());
    // interface A{}
    // class MyGeneric3<T implements A> {} NOT support
}
;
{
    //Decorators
    function log(constructor) {
        console.log(constructor); //it's function constructor es5 
    }
    function testLogger(param) {
        if (param == 'test') {
            return log;
        }
        //There this -referance in User class  
        return null;
    }
    var User = (function () {
        function User() {
            console.log("hello");
        }
        return User;
    }());
    User = __decorate([
        testLogger("test")
    ], User);
    // @prop("test") prop should be function body or null
    var User1 = (function () {
        function User1() {
            console.log("hello");
        }
        return User1;
    }());
}
;
//namespace es5 not namespace
var Utils;
(function (Utils) {
    function isEmptyStr(str) {
        return !str;
    }
    Utils.isEmptyStr = isEmptyStr;
})(Utils || (Utils = {}));
;
