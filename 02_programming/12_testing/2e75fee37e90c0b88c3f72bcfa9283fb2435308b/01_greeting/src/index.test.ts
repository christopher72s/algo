import { greet } from "./index";

test("quand jappelle greet revient hello world ", () => {
  expect(greet()).toBe("Hello WORLD!");
  expect(greet("Francis")).toBe("Hello FRANCIS!");
});
