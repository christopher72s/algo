type CartLine = {
  product: string;
  price: number;
  quantity: number;
};

type CartLineWithSubtotal = {
  product: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export function calculateSubtotal(cart: CartLine[]): CartLineWithSubtotal[] {
  const result = cart.map((objet) => {
    return {
      product: objet.product,
      price: objet.price,
      quantity: objet.quantity,
      subtotal: objet.price * objet.quantity,
    };
  });
  return result;
}

/*const newCart = calculateSubtotal([
  { product: "Macbook Pro 13 inches", price: 200000, quantity: 1 },
  
]);*/
