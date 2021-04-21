// Copy your function `capitalize` from the first exercise

export function capitalize(word: string): string {
  return word
    .split(" ")
    .map(function (word) {
      console.log(word);
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}
capitalize("james pont");
