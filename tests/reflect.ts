import * as reflect from "@/reflect";

const mk1 = Symbol("SampleMetadataKey1");

const mk2 = Symbol("SampleMetadataKey2");

const mk3 = Symbol("SampleMetadataKey3");

const pk1 = Symbol("SamplePropertyKey1");

test("apply", () => {
  expect(reflect.apply(() => true, undefined, [])).toBeTrue();
});

test("construct", () => {
  class C {
    public value = 1;
  }

  expect(reflect.construct(C, [])).toStrictEqual(new C());
  expect(reflect.construct(C, [], C)).toStrictEqual(new C());
});

test("defineMetadata", () => {
  const obj = {};

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
  const obj = {};

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
  const obj = { pk1: 1, [pk1]: 2 };

  expect(reflect.get(obj, "pk1")).toBe(1);
  expect(reflect.get(obj, pk1)).toBe(2);
});

test("getMetadata", () => {
  class TestClass {
    public value = 1;
  }

  const obj = new TestClass();

  {
    reflect.defineMetadata("mk1", 1, TestClass.prototype);
    reflect.defineMetadata("mk2", 2, obj);
    expect(reflect.getMetadata("mk1", obj)).toBe(1);
    expect(reflect.getMetadata("mk2", obj)).toBe(2);
  }

  {
    reflect.defineMetadata(mk1, 1, TestClass.prototype);
    reflect.defineMetadata(mk2, 2, obj);
    expect(reflect.getMetadata(mk1, obj)).toBe(1);
    expect(reflect.getMetadata(mk2, obj)).toBe(2);
  }
});

test("getMetadataKey", () => {
  class TestClass {
    public value = 1;
  }

  const obj = new TestClass();

  {
    reflect.defineMetadataKey("mk1", 1, TestClass.prototype, pk1);
    reflect.defineMetadataKey("mk2", 2, obj, pk1);
    expect(reflect.getMetadataKey("mk1", obj, pk1)).toBe(1);
    expect(reflect.getMetadataKey("mk2", obj, pk1)).toBe(2);
  }

  {
    reflect.defineMetadataKey(mk1, 1, TestClass.prototype, "pk1");
    reflect.defineMetadataKey(mk2, 2, obj, "pk1");
    expect(reflect.getMetadataKey(mk1, obj, "pk1")).toBe(1);
    expect(reflect.getMetadataKey(mk2, obj, "pk1")).toBe(2);
  }
});

test("getOwnMetadata", () => {
  class TestClass {
    public value = 1;
  }

  const obj = new TestClass();

  {
    reflect.defineMetadata("mk1", 1, TestClass.prototype);
    reflect.defineMetadata("mk2", 2, obj);
    expect(reflect.getOwnMetadata("mk1", obj)).toBeUndefined();
    expect(reflect.getOwnMetadata("mk2", obj)).toBe(2);
  }

  {
    reflect.defineMetadata(mk1, 1, TestClass.prototype);
    reflect.defineMetadata(mk2, 2, obj);
    expect(reflect.getOwnMetadata(mk1, obj)).toBeUndefined();
    expect(reflect.getOwnMetadata(mk2, obj)).toBe(2);
  }
});

test("getOwnMetadataKey", () => {
  class TestClass {
    public value = 1;
  }

  const obj = new TestClass();

  {
    reflect.defineMetadataKey("mk1", 1, TestClass.prototype, pk1);
    reflect.defineMetadataKey("mk2", 2, obj, pk1);
    expect(reflect.getOwnMetadataKey("mk1", obj, pk1)).toBeUndefined();
    expect(reflect.getOwnMetadataKey("mk2", obj, pk1)).toBe(2);
  }

  {
    reflect.defineMetadataKey(mk1, 1, TestClass.prototype, "pk1");
    reflect.defineMetadataKey(mk2, 2, obj, "pk1");
    expect(reflect.getOwnMetadataKey(mk1, obj, "pk1")).toBeUndefined();
    expect(reflect.getOwnMetadataKey(mk2, obj, "pk1")).toBe(2);
  }
});

test("hasMetadata", () => {
  class TestClass {
    public value = 1;
  }

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
  class TestClass {
    public value = 1;
  }

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
  class TestClass {
    public value = 1;
  }

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
  class TestClass {
    public value = 1;
  }

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
