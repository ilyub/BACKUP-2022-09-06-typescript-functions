/* eslint-disable @skylib/custom/functions/no-reflect-get -- Ok */

import { AssertionError, fn, is, reflect } from "@";

const mk1 = Symbol("test-metadata-key-1");

const mk2 = Symbol("test-metadata-key-2");

const mk3 = Symbol("test-metadata-key-3");

const pk1 = Symbol("test-metadata-key-4");

test("defineMetadata", () => {
  const obj = {} as const;

  {
    reflect.defineMetadata("mk1", 1, obj);
    expect(reflect.getOwnMetadata("mk1", obj)).toBe(1);
    expect(reflect.getOwnMetadata("mk2", obj)).toBeUndefined();
  }

  {
    reflect.defineMetadata(mk1, 1, obj);
    expect(reflect.getOwnMetadata(mk1, obj)).toBe(1);
    expect(reflect.getOwnMetadata(mk2, obj)).toBeUndefined();
  }
});

test("defineMetadataKey", () => {
  const obj = {} as const;

  {
    reflect.defineMetadataKey("mk1", 1, obj, pk1);
    expect(reflect.getOwnMetadataKey("mk1", obj, pk1)).toBe(1);
    expect(reflect.getOwnMetadataKey("mk2", obj, pk1)).toBeUndefined();
  }

  {
    reflect.defineMetadataKey(mk1, 1, obj, "pk1");
    expect(reflect.getOwnMetadataKey(mk1, obj, "pk1")).toBe(1);
    expect(reflect.getOwnMetadataKey(mk2, obj, "pk1")).toBeUndefined();
  }
});

test("get", () => {
  expect(reflect.get({ a: 1 }, "a")).toBe(1);
  expect(reflect.get({ a: 1 }, "a", is.number)).toBe(1);
  expect(reflect.get({}, "a", is.number, 1)).toBe(1);
  expect(reflect.get(fn.noop, "a")).toBeUndefined();
  expect(() => reflect.get({ a: "" }, "a", is.number)).toThrow(AssertionError);
});

test("getMetadata", () => {
  class TestClass {}

  const obj = new TestClass();

  {
    reflect.defineMetadata("mk1", 1, TestClass.prototype);
    reflect.defineMetadata("mk2", 2, obj);
    expect(reflect.getMetadata("mk1", obj)).toBe(1);
    expect(reflect.getMetadata("mk2", obj)).toBe(2);
    expect(reflect.getMetadata("mk3", obj, is.number, 2)).toBe(2);
    expect(() => reflect.getMetadata("mk2", obj, is.string)).toThrow(
      AssertionError
    );
  }

  {
    reflect.defineMetadata(mk1, 1, TestClass.prototype);
    reflect.defineMetadata(mk2, 2, obj);
    expect(reflect.getMetadata(mk1, obj)).toBe(1);
    expect(reflect.getMetadata(mk2, obj)).toBe(2);
    expect(reflect.getMetadata(mk3, obj, is.number, 2)).toBe(2);
    expect(() => reflect.getMetadata(mk2, obj, is.string)).toThrow(
      AssertionError
    );
  }
});

test("getMetadataKey", () => {
  class TestClass {}

  const obj = new TestClass();

  {
    reflect.defineMetadataKey("mk1", 1, TestClass.prototype, pk1);
    reflect.defineMetadataKey("mk2", 2, obj, pk1);
    expect(reflect.getMetadataKey("mk1", obj, pk1)).toBe(1);
    expect(reflect.getMetadataKey("mk2", obj, pk1)).toBe(2);
    expect(reflect.getMetadataKey("mk3", obj, pk1, is.number, 2)).toBe(2);
    expect(() => reflect.getMetadataKey("mk2", obj, pk1, is.string)).toThrow(
      AssertionError
    );
  }

  {
    reflect.defineMetadataKey(mk1, 1, TestClass.prototype, "pk1");
    reflect.defineMetadataKey(mk2, 2, obj, "pk1");
    expect(reflect.getMetadataKey(mk1, obj, "pk1")).toBe(1);
    expect(reflect.getMetadataKey(mk2, obj, "pk1")).toBe(2);
    expect(reflect.getMetadataKey(mk3, obj, "pk1", is.number, 2)).toBe(2);
    expect(() => reflect.getMetadataKey(mk2, obj, "pk1", is.string)).toThrow(
      AssertionError
    );
  }
});

test("getOwnMetadata", () => {
  class TestClass {}

  const obj = new TestClass();

  {
    reflect.defineMetadata("mk1", 1, TestClass.prototype);
    reflect.defineMetadata("mk2", 2, obj);
    expect(reflect.getOwnMetadata("mk1", obj)).toBeUndefined();
    expect(reflect.getOwnMetadata("mk2", obj)).toBe(2);
    expect(reflect.getOwnMetadata("mk3", obj, is.number, 2)).toBe(2);
    expect(() => reflect.getOwnMetadata("mk2", obj, is.string)).toThrow(
      AssertionError
    );
  }

  {
    reflect.defineMetadata(mk1, 1, TestClass.prototype);
    reflect.defineMetadata(mk2, 2, obj);
    expect(reflect.getOwnMetadata(mk1, obj)).toBeUndefined();
    expect(reflect.getOwnMetadata(mk2, obj)).toBe(2);
    expect(reflect.getOwnMetadata(mk3, obj, is.number, 2)).toBe(2);
    expect(() => reflect.getOwnMetadata(mk2, obj, is.string)).toThrow(
      AssertionError
    );
  }
});

test("getOwnMetadataKey", () => {
  class TestClass {}

  const obj = new TestClass();

  {
    reflect.defineMetadataKey("mk1", 1, TestClass.prototype, pk1);
    reflect.defineMetadataKey("mk2", 2, obj, pk1);
    expect(reflect.getOwnMetadataKey("mk1", obj, pk1)).toBeUndefined();
    expect(reflect.getOwnMetadataKey("mk2", obj, pk1)).toBe(2);
    expect(reflect.getOwnMetadataKey("mk3", obj, pk1, is.number, 2)).toBe(2);
    expect(() => reflect.getMetadataKey("mk2", obj, pk1, is.string)).toThrow(
      AssertionError
    );
  }

  {
    reflect.defineMetadataKey(mk1, 1, TestClass.prototype, "pk1");
    reflect.defineMetadataKey(mk2, 2, obj, "pk1");
    expect(reflect.getOwnMetadataKey(mk1, obj, "pk1")).toBeUndefined();
    expect(reflect.getOwnMetadataKey(mk2, obj, "pk1")).toBe(2);
    expect(reflect.getOwnMetadataKey(mk3, obj, "pk1", is.number, 2)).toBe(2);
    expect(() => reflect.getMetadataKey(mk2, obj, "pk1", is.string)).toThrow(
      AssertionError
    );
  }
});

test("hasMetadata", () => {
  class TestClass {}

  const obj = new TestClass();

  {
    reflect.defineMetadata("mk1", 1, TestClass.prototype);
    reflect.defineMetadata("mk2", 2, obj);
    expect(reflect.hasMetadata("mk1", obj)).toBeTrue();
    expect(reflect.hasMetadata("mk2", obj)).toBeTrue();
    expect(reflect.hasMetadata("mk3", obj)).toBeFalse();
  }

  {
    reflect.defineMetadata(mk1, 1, TestClass.prototype);
    reflect.defineMetadata(mk2, 2, obj);
    expect(reflect.hasMetadata(mk1, obj)).toBeTrue();
    expect(reflect.hasMetadata(mk2, obj)).toBeTrue();
    expect(reflect.hasMetadata(mk3, obj)).toBeFalse();
  }
});

test("hasMetadataKey", () => {
  class TestClass {}

  const obj = new TestClass();

  {
    reflect.defineMetadataKey("mk1", 1, TestClass.prototype, pk1);
    reflect.defineMetadataKey("mk2", 2, obj, pk1);
    expect(reflect.hasMetadataKey("mk1", obj, pk1)).toBeTrue();
    expect(reflect.hasMetadataKey("mk2", obj, pk1)).toBeTrue();
    expect(reflect.hasMetadataKey("mk3", obj, pk1)).toBeFalse();
  }

  {
    reflect.defineMetadataKey(mk1, 1, TestClass.prototype, "pk1");
    reflect.defineMetadataKey(mk2, 2, obj, "pk1");
    expect(reflect.hasMetadataKey(mk1, obj, "pk1")).toBeTrue();
    expect(reflect.hasMetadataKey(mk2, obj, "pk1")).toBeTrue();
    expect(reflect.hasMetadataKey(mk3, obj, "pk1")).toBeFalse();
  }
});

test("hasOwnMetadata", () => {
  class TestClass {}

  const obj = new TestClass();

  {
    reflect.defineMetadata("mk1", 1, TestClass.prototype);
    reflect.defineMetadata("mk2", 2, obj);
    expect(reflect.hasOwnMetadata("mk1", obj)).toBeFalse();
    expect(reflect.hasOwnMetadata("mk2", obj)).toBeTrue();
    expect(reflect.hasOwnMetadata("mk3", obj)).toBeFalse();
  }

  {
    reflect.defineMetadata(mk1, 1, TestClass.prototype);
    reflect.defineMetadata(mk2, 2, obj);
    expect(reflect.hasOwnMetadata(mk1, obj)).toBeFalse();
    expect(reflect.hasOwnMetadata(mk2, obj)).toBeTrue();
    expect(reflect.hasOwnMetadata(mk3, obj)).toBeFalse();
  }
});

test("hasOwnMetadataKey", () => {
  class TestClass {}

  const obj = new TestClass();

  {
    reflect.defineMetadataKey("mk1", 1, TestClass.prototype, pk1);
    reflect.defineMetadataKey("mk2", 2, obj, pk1);
    expect(reflect.hasOwnMetadataKey("mk1", obj, pk1)).toBeFalse();
    expect(reflect.hasOwnMetadataKey("mk2", obj, pk1)).toBeTrue();
    expect(reflect.hasOwnMetadataKey("mk3", obj, pk1)).toBeFalse();
  }

  {
    reflect.defineMetadataKey(mk1, 1, TestClass.prototype, "pk1");
    reflect.defineMetadataKey(mk2, 2, obj, "pk1");
    expect(reflect.hasOwnMetadataKey(mk1, obj, "pk1")).toBeFalse();
    expect(reflect.hasOwnMetadataKey(mk2, obj, "pk1")).toBeTrue();
    expect(reflect.hasOwnMetadataKey(mk3, obj, "pk1")).toBeFalse();
  }
});
