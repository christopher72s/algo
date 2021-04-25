import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (word: string): string => {
  const spliter = sentenceSplitter(word).filter((word) => {
    if (
      word[0] !== "o" &&
      word[0] !== "I" &&
      word[0] !== "e" &&
      word[0] !== "a" &&
      word[0] !== "u" &&
      word[0] !== "i" &&
      word[0] !== "y"
    )
      return word;
  });
  return sentenceJoiner(spliter);

  // Code your function for context here
};

// words.filter(word => word.length > 6);
