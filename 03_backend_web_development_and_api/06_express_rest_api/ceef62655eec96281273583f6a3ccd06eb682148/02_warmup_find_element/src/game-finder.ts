export function findGameFromSlug(games: Game[], slug: string): Game {
  return games.find((game) => {
    return slug === game.slug;
  });
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
  platform: string;
};
