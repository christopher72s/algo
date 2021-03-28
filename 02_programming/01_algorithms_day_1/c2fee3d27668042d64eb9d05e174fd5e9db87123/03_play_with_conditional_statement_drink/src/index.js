function number(parametre) {
  for (let i = 5; i < 10; i++) {
    let result = i;
    console.log(result);
  }
}

function chiffre(parametre2) {
  const result = 5;
  parametre2(result);
}

chiffre(number);

