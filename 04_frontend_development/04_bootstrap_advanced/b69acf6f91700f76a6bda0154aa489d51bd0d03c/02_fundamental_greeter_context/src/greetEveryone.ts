// Copy your function greetEveryone here
type ParamRest = string[];

export function greetEveryone(...rest: ParamRest): void {
  rest.forEach((element) => console.log("welcome to ", element));
}

greetEveryone("Riri", "Fifi", "Loulou");
