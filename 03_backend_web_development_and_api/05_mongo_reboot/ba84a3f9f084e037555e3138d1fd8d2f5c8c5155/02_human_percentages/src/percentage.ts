export function humanPercentage(percentages: number[]): string[] {
  return percentages.map((chiffre) => `${Math.round(chiffre * 100)}%`);
}
