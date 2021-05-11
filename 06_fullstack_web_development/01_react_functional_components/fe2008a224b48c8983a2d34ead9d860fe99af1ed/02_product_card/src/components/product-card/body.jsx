import React from "react";
import zelda from "../../../data/zelda";

const CardBody = () => {
  return (
    <>
      {zelda.cover.url}
      {zelda.first_release_date}
      {zelda.genre.slug}
      {zelda.summary}
    </>
  );
};

export default CardBody;

// body.jsxexporte le CardBodycomposant.

// Il doit afficher:

// couverture du produit
// première date de sortie du jeu
// noms de genres
// résumé du jeu
// // un bouton unique qui cache ou affiche des captures d'écran au clic. Les captures d'écran doivent être affichées dans le corps.
