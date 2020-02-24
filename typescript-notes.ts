let myFavoritePet: "dog";
myFavoritePet = "dog";

// Union type
type Species = "cat" | "dog" | "bird";
interface Pet {
    species: Species;
    name: string;
    eat() : string;
    walk() : string;
    sleep() : string;
}

let animal: Species = "cat";
console.log(animal);
console.log('Hello World', myFavoritePet);

{
    // Tyuple Type
    let day: [number, string];
    day = [0, 'Monday'];// valid
    // day = ['zero', 'Monday']; // invalid: 'zero' is not numeric
    console.log(day);
}
{
    // Boolean Type
    let isTrue: boolean = true;
    console.log(isTrue);
}
{
    // Enum
    const enum NinjaActivity {
        Espionage,
        Sabotage,
        Assassination
    };
    // TypeScript: Except if you use it
    let myFavoriteNinjaActivity = NinjaActivity.Espionage;
    console.log(myFavoriteNinjaActivity); // 0
    console.log(NinjaActivity["Sabotage"]); // 1
}
{
    let threePigs: number[] = [1, 2, 3];
    let genericStringArray: Array<string> = ['first', '2nd', '3rd']
    console.log(genericStringArray.toString());
}
{
    // Void
    function log(): void {
        console.log('I return nothing');
    }
    log();
    // void types Can only be assigned null or undefined .
}
{
    enum MimeType {
        JPEG = <any>'image/jpeg',
        PNG = <any>'image/png',
        PDF = <any>'application/pdf'
    }
}
{
    abstract class Machine {
        constructor(public manufacturer: string) {
        }
        // An abstract class can define methods of its own, or...
        summary(): string {
        return `${this.manufacturer} makes this machine.`;
        }
        // Require inheriting classes to implement methods
        abstract moreInfo(): string;
    }
}
{
    // decorator
    function addMetadata(metadata: any) {
        return function log(target: any) {
        // Add metadata
        target.__customMetadata = metadata;
        // Return target
        return target;
        }
    }
    @addMetadata({age: 65})
    class Person {
        private _name: string;
        public constructor(name: string) {
          this._name = name;
        }
        static age : 23;
        public greet() {
        return this._name;
        }
    }
    function getMetadataFromClass(target: any) {
        return target.__customMetadata;
    }
    console.log(getMetadataFromClass(Person));

    // Basic class decorator
    function log<T>(target: T) {
        // Do something with target
        console.log(target);
        // Return target
        return target;
    }
}
{
    interface Connector{
        doConnect(): boolean;
    }
    class System {
        constructor(private connector: Connector){ //#inject Connector type
        connector.doConnect()
        }
    }
}
{
    interface IEvents<T> {
        list: T[];
        emit(event: T): void;
        getAll(): T[];
    }
}
{
    interface IRunnable {
        run(): void;
    }
    interface IRunner<T extends IRunnable> {
        runSafe(runnable: T): void;
    }
}
{
    // How to use a JavaScript library without a type definition file
    // place in jquery.d.ts
    
    // declare let $: any;
    // export default $;


    // place in jquery.d.ts
    /** 
    declare module "jquery" {
        let $: any;
        let jQuery: any;
        export { $ };
        export { jQuery };
    }
    */
}
{
    // Integrating with Build Tools
    // Browserify
    /** 
    npm install tsify
    Using Command Line Interface
    browserify main.ts -p [ tsify --noImplicitAny ] > bundle.js
    Using API
    var browserify = require("browserify");
    var tsify = require("tsify");
    browserify()
    .add("main.ts")
    .plugin("tsify", { noImplicitAny: true })
    .bundle()
    .pipe(process.stdout)
    */
}
{
    // npm install -g tslint
    // tslint --init
    // {
    //     "extends": "tslint:recommended"
    // }
}
{
    // testing use tape
    // npm install --save-dev tape @types/tape
    //math.test.ts
    /** 
    import * as test from "tape";
    test("Math test", (t) => {
        t.equal(4, 2 + 2);
        t.true(5 > 2 + 2);
        t.end();
    });
    */

     // use Alsatian framework
     /** 
    import { Expect, Test, TestCase } from "alsatian";
    import { SomeModule } from "../src/some-module";
    export SomeModuleTests {
        @Test()
        public statusShouldBeTrueByDefault() {
            let instance = new SomeModule();
            Expect(instance.status).toBe(true);
        }
        @Test("Name should be null by default")
        public nameShouldBeNullByDefault() {
            let instance = new SomeModule();
            Expect(instance.name).toBe(null);
        }
        @TestCase("first name")
        @TestCase("apples")
        public shouldSetNameCorrectly(name: string) {
            let instance = new SomeModule();
            instance.setName(name);
            Expect(instance.name).toBe(name);
        }
    }
    */

//    1.Install from npm chai, chai-immutable, and ts-node
//    npm install --save-dev chai chai-immutable ts-node
//    2. Install types for mocha and chai
//    npm install --save-dev @types/mocha @types/chai
}