export function capitalize(word: string): string {
  return word
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}
// Code your function here

capitalize("frieda");
