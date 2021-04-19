export function mumble(word: string): string {
  const wordminus = word.toLowerCase();

  const wordsplit = wordminus.split("");

  const wordmap = wordsplit.map((lettre, index) => {
    return lettre.repeat(index + 1);
  });
  const wordjoin = wordmap.join("-");

  return wordjoin;

  //methode join a utiliser pour separe les lettre avec le tiret   aussi //
  //methode split pour separer les lettre une par une //
  //methode toLlowercase pour avoir que des lettre minuscule //

  // Je pensait faire ça :
  // prendre le paramètre et le mettre en minuscule
  // mettre le paramètre dans un tableau
  // parcourir le tableau et répéter les lettres selon la position
  // Ajouter le - avec un join
  // renvoyer le tableau final
}
