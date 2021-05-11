import React from "react";

const CardHeader = (product) => {
  const { props } = product;
  return <>{props.name}</>;
};

export default CardHeader;

// header.jsxexporte le CardHeadercomposant.

// Il doit afficher:

// nom du produit
// logos de plateformes
