import * as json from "@/json";

it("decode", () => {
  expect(json.decode(null)).toBeNull();
  expect(json.decode(undefined)).toBeNull();
  expect(json.decode("abc")).toBeNull();
  expect(json.decode("null")).toBeNull();
  expect(json.decode("[null]")).toStrictEqual([null]);
  expect(json.decode('{"a":1}')).toStrictEqual({ a: 1 });
});

it("encode", () => {
  expect(json.encode(null)).toStrictEqual("null");
  expect(json.encode(undefined)).toStrictEqual("null");
  expect(json.encode([null, undefined])).toStrictEqual("[null,null]");
  expect(json.encode({ a: 1 })).toStrictEqual('{"a":1}');
});
