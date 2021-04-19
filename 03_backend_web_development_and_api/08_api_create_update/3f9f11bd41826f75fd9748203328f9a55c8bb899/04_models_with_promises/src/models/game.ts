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

  getAll(): Promise<Game[]> {
    return new Promise((resolve) => {
      const result = this.collection.map((Object) => {
        return {
          name: Object.name,
          slug: Object.slug,
          cover: Object.cover_url,
        };
      });
      resolve(result);
    });
  }

  findBySlug(slug: string): Promise<Game | null | any> {
    return new Promise((resolve) => {
      const result = this.collection.find((Object) => Object.slug === slug);

      if (result) {
        resolve(result);
      }

      if (result === undefined) {
        resolve(null);
      }
    });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return new Promise((resolve) => {
      resolve(
        this.collection.filter((Object) => {
          if (Object.platform.slug === platform_slug) {
            return {
              name: Object.name,
              slug: Object.slug,
            };
          }
        }),
      );
    });
  }

  getPlatforms(): Promise<Platform[]> {
    return new Promise((resolve) => {
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
      resolve(result);
    });
  }
}
