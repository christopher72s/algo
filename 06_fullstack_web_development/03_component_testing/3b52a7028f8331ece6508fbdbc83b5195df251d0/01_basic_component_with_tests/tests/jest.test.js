import { openBrowser, closeBrowser, goto, text, click, button, waitFor } from "taiko";
import "regenerator-runtime/runtime";
beforeAll(async () => {
  await openBrowser({ args: ["--window-size=1440,1000"], headless: false });
  await goto("http://localhost:8080");
});
afterAll(async () => {
  await closeBrowser();
});
test("texte", async () => {
  expect.assertions(1);
  await text(/This is my text/).exists();
  expect(await text(/This is my text/).exists()).toBe(true);
});
test("button disparait", async () => {
  expect.assertions(1);
  await click(button(/Hide content/));
  expect(await button(/Reveal content/).exists()).toBe(true);
});
test("texte es tu la ", async () => {
  expect.assertions(1);
  await waitFor("");
  expect(await text("").exists()).toBe(true);
});
test("reapparait le button ", async () => {
  expect.assertions(1);
  await click(button(/Reveal content/));
  expect(await button(/Hide content/).exists()).toBe(true);
});
test("texte reviens ", async () => {
  expect.assertions(1);
  await text(/This is my text/).exists();
  expect(await text(/This is my text/).exists()).toBe(true);
});
