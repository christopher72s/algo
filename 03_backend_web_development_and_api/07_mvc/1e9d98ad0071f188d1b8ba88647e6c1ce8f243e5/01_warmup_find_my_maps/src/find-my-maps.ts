type MyObject = {
  objectType: string;
  quantity: number;
  description: string;
  storedIn: string;
};

export function findMyMaps(objects: MyObject[]): MyObject[] {
  const result = objects.filter((Element) => Element.objectType === "map");

  return result;
}
