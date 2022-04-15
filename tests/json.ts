import { json } from "@";

test.each([
  { expected: null, source: null },
  { expected: null, source: undefined },
  { expected: null, source: "abc" },
  { expected: null, source: "null" },
  { expected: [null], source: "[null]" },
  { expected: { a: 1 }, source: '{"a":1}' },
  {
    expected: new Map([[1, "a"]]),
    source: '{"type":"map-5702-3c89-3feb-75d4","value":[[1,"a"]]}'
  },
  {
    expected: new Map([["a", 1]]),
    source: '{"type":"map-5702-3c89-3feb-75d4","value":[["a",1]]}'
  },
  {
    expected: new Set([1, "a"]),
    source: '{"type":"set-41ef-10c9-ae1f-15e8","value":[1,"a"]}'
  },
  {
    expected: new Set(["a", 1]),
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
    source: new Map([[1, "a"]])
  },
  {
    expected: '{"type":"map-5702-3c89-3feb-75d4","value":[["a",1]]}',
    source: new Map([["a", 1]])
  },
  {
    expected: '{"type":"set-41ef-10c9-ae1f-15e8","value":[1,"a"]}',
    source: new Set([1, "a"])
  },
  {
    expected: '{"type":"set-41ef-10c9-ae1f-15e8","value":["a",1]}',
    source: new Set(["a", 1])
  }
])("encode", ({ expected, source }) => {
  expect(json.encode(source)).toStrictEqual(expected);
});

test("eq", () => {
  expect(json.eq({ value: 1 }, { value: 1 })).toBeTrue();
  expect(json.eq({ value: 1 }, { value: 2 })).toBeFalse();
});

test("neq", () => {
  expect(json.neq({ value: 1 }, { value: 2 })).toBeTrue();
  expect(json.neq({ value: 1 }, { value: 1 })).toBeFalse();
});
