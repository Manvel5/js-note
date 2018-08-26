"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static getInstance(name, age) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(name, age);
        }
        return Singleton.instance;
    }
}
exports.Singleton = Singleton;
//# sourceMappingURL=singleton.js.map