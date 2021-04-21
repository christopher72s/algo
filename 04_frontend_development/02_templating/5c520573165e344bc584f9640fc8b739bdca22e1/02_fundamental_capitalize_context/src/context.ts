import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  const tab = sentence.split(" ");
  const tab2 = tab.map((word) => capitalize(word));
  return tab2.join(" ");

  // Code here and use the function `capitalize` from exercise one
}
