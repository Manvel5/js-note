import { Singleton } from './singleton';

class Main {

  private singleton: Singleton;

  public constructor() {
    this.singleton = Singleton.getInstance('Max', 25);
    console.log(this.singleton.name);
    console.log(this.singleton.age);
  }
}

const main = new Main();
