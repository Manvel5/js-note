export class Singleton {

  private static instance: Singleton;
  private constructor(public name: string, public age: number) {}

  public static getInstance(name: string, age: number): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(name, age);
    }
    return Singleton.instance;
  }
}
