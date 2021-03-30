import { getChuckCategories, getChuckJoke } from "../utils";

function getCategories(): Promise<string[]> {
  return getChuckCategories();
}

// Your code goes here

function getJoke(category: string): Promise<string> {
  return getChuckJoke(category).then((answer) => answer.value);
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
