
export class Demo {
  private readonly test: string;
  public constructor (test: string) {
    this.test = test;
  }

  public sayIt () {
    return this.test;
  }
}
