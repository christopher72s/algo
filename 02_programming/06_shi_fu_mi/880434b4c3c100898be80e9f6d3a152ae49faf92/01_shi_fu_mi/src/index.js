const { fchown, read } = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function start (demarre) {
  console.log("Welcome to ShiFuMi"); 
  reader.question("Please choose a move\n> ", checkuseranswer);
 
start(0);

  const objectif = {
    finguer: "ciseaux",
    pierre: "main",
    feuille: "papier",
  };
};
function checkuseranswer (a, b , c) {
  if (a < objectif.pierre) {
    console.log("tu es comme paris loser");
    reader.question("Please choose a move\n> ", checkuseranswer);
   
}   else if (a < objectif.feuille) {
    console.log("tu win comme marseille en 1993 bro win", checkuseranswer);
    reader.close();

  } else if (a === objectif.finguer) {
    console.log("tu fais match nul", );
    reader.question("Please choose a move\n> ", checkuseranswer);
    reader.close();

  }
}
