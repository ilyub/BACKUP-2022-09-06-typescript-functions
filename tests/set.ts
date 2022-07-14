import { ReadonlySet, set } from "@";

test("add", () => {
  const source = new ReadonlySet([1]);

  expect(set.add(source, 2)).toStrictEqual(new ReadonlySet([1, 2]));
  expect(source).toStrictEqual(new ReadonlySet([1]));
});

test("delete", () => {
  const source = new ReadonlySet([1, 2]);

  expect(set.delete(source, 2)).toStrictEqual(new ReadonlySet([1]));
  expect(source).toStrictEqual(new ReadonlySet([1, 2]));
});
