import { rl } from "../interface";

function ask(question: string, reader = rl): Promise<string> {
  return new Promise((resolve, reject) => {
    reader.question(question, (anwser: string) => {
      if (anwser === "") {
        reject(new Error("Invalid input"));
      } else {
        resolve(anwser);
      }
    });
  });
}
export default ask;
