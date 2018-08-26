import { Singleton } from '../js/singleton';
import { expect } from 'chai';

describe('check', () => {
  it('instance must be one', () => {
    const instance1 = Singleton.getInstance('Max', 25);
    const instance2 = Singleton.getInstance('Min', 30);
    expect(instance1.name).to.equal(instance2.name);
  });
});
