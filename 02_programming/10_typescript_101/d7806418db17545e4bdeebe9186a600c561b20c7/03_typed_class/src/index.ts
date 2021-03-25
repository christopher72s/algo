class Bird {
  // Write your code here.
  sing: string;
  fly: number;
  age: number;

  constructor(sing: string, fly: number, age: number) {
    this.sing = sing;
    this.fly = fly;
    this.age = age;

    if (age <= 1) {
      console.log();
    } else if (age <= 3) {
      console.log();
    } else if (age < 3) {
      console.log();
    }
  }
}

// Leave the line below for tests to work properly.
export { Bird };
