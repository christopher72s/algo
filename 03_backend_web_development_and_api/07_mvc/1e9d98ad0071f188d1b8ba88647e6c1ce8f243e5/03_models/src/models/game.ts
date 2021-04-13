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
    const result = this.collection.map((objet) => {
      return { name: objet.name, slug: objet.slug, cover: objet.cover };
    });
    return result;
  }

  findBySlug(slug: string): Game | null {
    const result = this.collection.find((Object) => Object.slug === slug);
    if (result) {
      return result;
    }
    if (result === undefined) {
      return null;
    }
  }

  findByPlatform(platform_slug: string): Game[] {
    const result = this.collection.find((Object) => Object.platform_slug === platform_slug);
  }
}

/*getPlatforms(): Platform[] {} */
