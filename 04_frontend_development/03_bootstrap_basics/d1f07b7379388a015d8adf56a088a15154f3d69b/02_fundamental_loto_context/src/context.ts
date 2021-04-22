import { lottery_draw } from "./lottery_draw";

type Draw = number[];

export function contextFunction(ticket: Draw): void {
  const tab1 = lottery_draw();

  for (let i = 0; i < tab1.length; i++) {
    if (ticket[i] === tab1[i]) {
      console.log("You won");
    } else {
      console.log("You lost...");
    }
  }
}
