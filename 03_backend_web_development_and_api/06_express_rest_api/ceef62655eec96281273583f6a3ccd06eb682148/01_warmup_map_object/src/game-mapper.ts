export function gameMapper(games: GameWithALotOfData[]): Game[] {
  const result = games.map((objet) => {
    return { name: objet.name, slug: objet.slug, cover: objet.cover.url };
  });
  return result;
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
};

export type GameWithALotOfData = {
  name: string;
  slug: string;
  code: number;
  cover: {
    thumbnail: string;
    url: string;
  };
};
