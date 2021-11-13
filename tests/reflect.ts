import * as reflect from "@/reflect";

const mk1 = Symbol("SampleMetadataKey1");

const mk2 = Symbol("SampleMetadataKey2");

const pk1 = Symbol("SamplePropertyKey1");

it("defineMetadata", () => {
  const obj = {};

  {
    reflect.defineMetadata("mk1", 1, obj);
    expect(reflect.getOwnMetadata("mk1", obj)).toStrictEqual(1);
    expect(reflect.getOwnMetadata("mk2", obj)).toBeUndefined();
  }

  {
    reflect.defineMetadata(mk1, 1, obj);
    expect(reflect.getOwnMetadata(mk1, obj)).toStrictEqual(1);
    expect(reflect.getOwnMetadata(mk2, obj)).toBeUndefined();
  }
});

it("defineMetadataKey", () => {
  const obj = {};

  {
    reflect.defineMetadataKey("mk1", 1, obj, pk1);
    expect(reflect.getOwnMetadataKey("mk1", obj, pk1)).toStrictEqual(1);
    expect(reflect.getOwnMetadataKey("mk2", obj, pk1)).toBeUndefined();
  }

  {
    reflect.defineMetadataKey(mk1, 1, obj, "pk1");
    expect(reflect.getOwnMetadataKey(mk1, obj, "pk1")).toStrictEqual(1);
    expect(reflect.getOwnMetadataKey(mk2, obj, "pk1")).toBeUndefined();
  }
});

it("get", () => {
  const obj = { pk1: 1, [pk1]: 2 };

  expect(reflect.get(obj, "pk1")).toStrictEqual(1);
  expect(reflect.get(obj, pk1)).toStrictEqual(2);
});

it("getMetadata", () => {
  class TestClass {
    public value = 1;
  }

  const obj = new TestClass();

  {
    reflect.defineMetadata("mk1", 1, TestClass.prototype);
    reflect.defineMetadata("mk2", 2, obj);
    expect(reflect.getMetadata("mk1", obj)).toStrictEqual(1);
    expect(reflect.getMetadata("mk2", obj)).toStrictEqual(2);
  }

  {
    reflect.defineMetadata(mk1, 1, TestClass.prototype);
    reflect.defineMetadata(mk2, 2, obj);
    expect(reflect.getMetadata(mk1, obj)).toStrictEqual(1);
    expect(reflect.getMetadata(mk2, obj)).toStrictEqual(2);
  }
});

it("getMetadataKey", () => {
  class TestClass {
    public value = 1;
  }

  const obj = new TestClass();

  {
    reflect.defineMetadataKey("mk1", 1, TestClass.prototype, pk1);
    reflect.defineMetadataKey("mk2", 2, obj, pk1);
    expect(reflect.getMetadataKey("mk1", obj, pk1)).toStrictEqual(1);
    expect(reflect.getMetadataKey("mk2", obj, pk1)).toStrictEqual(2);
  }

  {
    reflect.defineMetadataKey(mk1, 1, TestClass.prototype, "pk1");
    reflect.defineMetadataKey(mk2, 2, obj, "pk1");
    expect(reflect.getMetadataKey(mk1, obj, "pk1")).toStrictEqual(1);
    expect(reflect.getMetadataKey(mk2, obj, "pk1")).toStrictEqual(2);
  }
});

it("getOwnMetadata", () => {
  class TestClass {
    public value = 1;
  }

  const obj = new TestClass();

  {
    reflect.defineMetadata("mk1", 1, TestClass.prototype);
    reflect.defineMetadata("mk2", 2, obj);
    expect(reflect.getOwnMetadata("mk1", obj)).toBeUndefined();
    expect(reflect.getOwnMetadata("mk2", obj)).toStrictEqual(2);
  }

  {
    reflect.defineMetadata(mk1, 1, TestClass.prototype);
    reflect.defineMetadata(mk2, 2, obj);
    expect(reflect.getOwnMetadata(mk1, obj)).toBeUndefined();
    expect(reflect.getOwnMetadata(mk2, obj)).toStrictEqual(2);
  }
});

it("getOwnMetadataKey", () => {
  class TestClass {
    public value = 1;
  }

  const obj = new TestClass();

  {
    reflect.defineMetadataKey("mk1", 1, TestClass.prototype, pk1);
    reflect.defineMetadataKey("mk2", 2, obj, pk1);
    expect(reflect.getOwnMetadataKey("mk1", obj, pk1)).toBeUndefined();
    expect(reflect.getOwnMetadataKey("mk2", obj, pk1)).toStrictEqual(2);
  }

  {
    reflect.defineMetadataKey(mk1, 1, TestClass.prototype, "pk1");
    reflect.defineMetadataKey(mk2, 2, obj, "pk1");
    expect(reflect.getOwnMetadataKey(mk1, obj, "pk1")).toBeUndefined();
    expect(reflect.getOwnMetadataKey(mk2, obj, "pk1")).toStrictEqual(2);
  }
});

it("set", () => {
  const obj = { pk1: 1, [pk1]: 2 };

  {
    expect(obj.pk1).toStrictEqual(1);
    reflect.set(obj, "pk1", 2);
    expect(obj.pk1).toStrictEqual(2);
  }

  {
    expect(obj[pk1]).toStrictEqual(2);
    reflect.set(obj, pk1, 3);
    expect(obj[pk1]).toStrictEqual(3);
  }
});
