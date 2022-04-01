import * as map from "@/map";

test("delete", () => {
  const source = new Map([
    ["a", 1],
    ["b", 2]
  ]);

  expect(map.delete(source, "b")).toStrictEqual(new Map([["a", 1]]));

  expect(source).toStrictEqual(
    new Map([
      ["a", 1],
      ["b", 2]
    ])
  );
});

test("set", () => {
  const source = new Map([["a", 1]]);

  expect(map.set(source, "b", 2)).toStrictEqual(
    new Map([
      ["a", 1],
      ["b", 2]
    ])
  );

  expect(source).toStrictEqual(new Map([["a", 1]]));
});
