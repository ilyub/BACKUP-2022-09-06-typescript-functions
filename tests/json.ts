import { ReadonlyMap, ReadonlySet, json } from "@";

test.each([
  { expected: null, source: null },
  { expected: null, source: undefined },
  { expected: null, source: "abc" },
  { expected: null, source: "null" },
  { expected: [null], source: "[null]" },
  { expected: { a: 1 }, source: '{"a":1}' },
  {
    expected: new ReadonlyMap([[1, "a"]]),
    source: '{"type":"map-5702-3c89-3feb-75d4","value":[[1,"a"]]}'
  },
  {
    expected: new ReadonlyMap([["a", 1]]),
    source: '{"type":"map-5702-3c89-3feb-75d4","value":[["a",1]]}'
  },
  {
    expected: new ReadonlySet([1, "a"]),
    source: '{"type":"set-41ef-10c9-ae1f-15e8","value":[1,"a"]}'
  },
  {
    expected: new ReadonlySet(["a", 1]),
    source: '{"type":"set-41ef-10c9-ae1f-15e8","value":["a",1]}'
  }
])("decode", ({ expected, source }) => {
  expect(json.decode(source)).toStrictEqual(expected);
});

test.each([
  { expected: "null", source: null },
  { expected: "null", source: undefined },
  { expected: "[null]", source: [null] },
  { expected: "[null]", source: [undefined] },
  { expected: '{"a":1}', source: { a: 1 } },
  {
    expected: '{"type":"map-5702-3c89-3feb-75d4","value":[[1,"a"]]}',
    source: new ReadonlyMap([[1, "a"]])
  },
  {
    expected: '{"type":"map-5702-3c89-3feb-75d4","value":[["a",1]]}',
    source: new ReadonlyMap([["a", 1]])
  },
  {
    expected: '{"type":"set-41ef-10c9-ae1f-15e8","value":[1,"a"]}',
    source: new ReadonlySet([1, "a"])
  },
  {
    expected: '{"type":"set-41ef-10c9-ae1f-15e8","value":["a",1]}',
    source: new ReadonlySet(["a", 1])
  }
])("encode", ({ expected, source }) => {
  expect(json.encode(source)).toBe(expected);
});

test("eq", () => {
  expect(json.eq({ value: 1 }, { value: 1 })).toBeTrue();
  expect(json.eq({ value: 1 }, { value: 2 })).toBeFalse();
});

test("neq", () => {
  expect(json.neq({ value: 1 }, { value: 2 })).toBeTrue();
  expect(json.neq({ value: 1 }, { value: 1 })).toBeFalse();
});
