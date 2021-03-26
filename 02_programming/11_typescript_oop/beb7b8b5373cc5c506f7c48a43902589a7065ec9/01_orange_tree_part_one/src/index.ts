// Code the class here.
abstract class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;
  }

  abstract isAlive(): boolean;

  abstract ageOneYear(): void;

  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;

    const newTree = 12;

    if (this.age<= 9) + (3*10); {

      for (let age = 1; age <= 9; age++)
    
  }
}

// Leave the line below for tests to work properly.
export { Tree };
