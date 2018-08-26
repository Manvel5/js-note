"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("../js/singleton");
const chai_1 = require("chai");
describe('check', () => {
    it('instance must be one', () => {
        const instance1 = singleton_1.Singleton.getInstance('Max', 25);
        const instance2 = singleton_1.Singleton.getInstance('Min', 30);
        chai_1.expect(instance1.name).to.equal(instance2.name);
    });
});
//# sourceMappingURL=singleton.spec.js.map