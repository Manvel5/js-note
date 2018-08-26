"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./singleton");
class Main {
    constructor() {
        this.singleton = singleton_1.Singleton.getInstance('Max', 25);
        console.log(this.singleton.name);
        console.log(this.singleton.age);
    }
}
const main = new Main();
//# sourceMappingURL=app.js.map