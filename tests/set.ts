import { set } from "@";

test("add", () => {
  const source = new Set([1]);

  expect(set.add(source, 2)).toStrictEqual(new Set([1, 2]));
  expect(source).toStrictEqual(new Set([1]));
});

test("delete", () => {
  const source = new Set([1, 2]);

  expect(set.delete(source, 2)).toStrictEqual(new Set([1]));
  expect(source).toStrictEqual(new Set([1, 2]));
});
