type newTUPLE = [string, number];

function handleTuple(param: newTUPLE): void {
  // eslint-disable-next-line no-empty

  param.forEach((param) => {
    if (typeof param === "string") {
      console.log(`${param} string`);
    } else if (typeof param === "number") {
      console.log(`${param} number`);
    }
  });
}
// Leave the line below fstringor tests to work properly.
export { handleTuple };
