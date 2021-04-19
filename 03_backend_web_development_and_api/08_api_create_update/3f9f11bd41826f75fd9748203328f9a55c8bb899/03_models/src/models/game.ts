export type Game = {
  name: string;
  slug: string;
  [key: string]: any;
};

export type Platform = {
  name: string;
  slug: string;
  [key: string]: any;
};

export class GameModel {
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  getAll(): Game[] {
    const result = this.collection.map((Object) => {
      return {
        name: Object.name,
        slug: Object.slug,
        cover: Object.cover_url,
      };
    });
    return result;
  }

  findBySlug(slug: string): any {
    const result = this.collection.find((Object) => Object.slug === slug);

    if (result) {
      return result;
    }

    if (result === undefined) {
      return null;
    }
  }

  findByPlatform(platform_slug: string): Game[] {
    return this.collection.filter((Object) => {
      if (Object.platform.slug === platform_slug) {
        return {
          name: Object.name,
          slug: Object.slug,
        };
      }
    });
  }
  // 1 boucle for each  pour obtenir les jeux par rapport a la plateforme
  // 2 refaire une boucle avec find pour dire

  getPlatforms(): Platform[] {
    const result: Platform[] = [];
    this.collection.forEach((game) => {
      if (
        result.find((platform) => {
          return game.platform.slug === platform.slug;
        }) === undefined
      ) {
        result.push({
          name: game.platform.name,
          slug: game.platform.slug,
        });
      }
    });
    return result;
  }
}
