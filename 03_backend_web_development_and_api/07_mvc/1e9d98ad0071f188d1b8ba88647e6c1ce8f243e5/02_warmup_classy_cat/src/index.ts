export class Cat {
  public name: string;
  public color: string;
  public age: number;

  public constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  purr(name: string): string {
    return `${this.name}, the cat, purrs...`;
  }

  meow(name: string, color: string): string {
    return `${this.name}, the ${this.color} cat, meows!`;
  }

  attack(withSuccess: boolean): void {
    if (withSuccess) {
      console.log("You've been scratched!");
    } else {
      console.log(`Wow, ${this.name} missed you, how lucky!`);
    }
  }
}
