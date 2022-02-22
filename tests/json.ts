import * as json from "@/json";

test("decode", () => {
  expect(json.decode(null)).toBeNull();
  expect(json.decode(undefined)).toBeNull();
  expect(json.decode("abc")).toBeNull();
  expect(json.decode("null")).toBeNull();
  expect(json.decode("[null]")).toStrictEqual([null]);
  expect(json.decode('{"a":1}')).toStrictEqual({ a: 1 });
  expect(
    json.decode('{"dataType":"map-5702-3c89-3feb-75d4","value":[[1,"a"]]}')
  ).toStrictEqual(new Map([[1, "a"]]));
  expect(
    json.decode('{"dataType":"map-5702-3c89-3feb-75d4","value":[["a",1]]}')
  ).toStrictEqual(new Map([["a", 1]]));
  expect(
    json.decode('{"dataType":"set-41ef-10c9-ae1f-15e8","value":[1,"a"]}')
  ).toStrictEqual(new Set([1, "a"]));
  expect(
    json.decode('{"dataType":"set-41ef-10c9-ae1f-15e8","value":["a",1]}')
  ).toStrictEqual(new Set(["a", 1]));
});

test("encode", () => {
  expect(json.encode(null)).toBe("null");
  expect(json.encode(undefined)).toBe("null");
  expect(json.encode([null, undefined])).toBe("[null,null]");
  expect(json.encode({ a: 1 })).toBe('{"a":1}');
  expect(json.encode(new Map([[1, "a"]]))).toBe(
    '{"dataType":"map-5702-3c89-3feb-75d4","value":[[1,"a"]]}'
  );
  expect(json.encode(new Map([["a", 1]]))).toBe(
    '{"dataType":"map-5702-3c89-3feb-75d4","value":[["a",1]]}'
  );
  expect(json.encode(new Set([1, "a"]))).toBe(
    '{"dataType":"set-41ef-10c9-ae1f-15e8","value":[1,"a"]}'
  );
  expect(json.encode(new Set(["a", 1]))).toBe(
    '{"dataType":"set-41ef-10c9-ae1f-15e8","value":["a",1]}'
  );
});
