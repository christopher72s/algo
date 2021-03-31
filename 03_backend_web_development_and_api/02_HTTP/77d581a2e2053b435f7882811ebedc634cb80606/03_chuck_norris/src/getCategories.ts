import fetch from "node-fetch";

function getCategories(): Promise<void> {
  return fetch("https://api.chucknorris.io/jokes/categories").then((answer) => answer);

  console.log(fetch);
}

// code the function here

// leave line below for tests to work properly
export { getCategories };
