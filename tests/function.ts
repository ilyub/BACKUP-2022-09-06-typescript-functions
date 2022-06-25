import { fn } from "@";

test("identity", () => {
  expect(fn.identity(1)).toBe(1);
  expect(fn.identity(2)).toBe(2);
  expect(fn.identity(3)).toBe(3);
});

test("noopTrue", () => {
  expect(fn.noopTrue(1)).toBe(true);
});

test("pipe", () => {
  expect(fn.pipe(10_000, Math.log10, Math.sqrt)).toBe(2);
});

test("valueToGenerator", () => {
  expect(fn.valueToGenerator(1)()).toBe(1);
});
