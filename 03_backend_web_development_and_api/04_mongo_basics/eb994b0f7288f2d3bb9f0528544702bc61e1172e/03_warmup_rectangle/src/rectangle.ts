export function rectangle(width: number, height: number): string {
  let etoile = "";

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      etoile += "*";
    }
    etoile += "\n";
  }
  return etoile;
}
