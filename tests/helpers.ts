/* skylib/eslint-plugin disable @skylib/functions/no-restricted-syntax[no-reflect-get] */

/* skylib/eslint-plugin disable @skylib/functions/no-restricted-syntax[no-reflect-set] */

import {
  createFacade,
  createValidationObject,
  fn,
  is,
  o,
  onDemand,
  reflect,
  safeAccess,
  wait,
  wrapProxyHandler
} from "@";
import * as testUtils from "@/test-utils";
import type { Writable } from "@";

testUtils.installFakeTimer();

test("createFacade: Extension", () => {
  const extension: Writable<Extension> = { pow: x => x * x };

  const facade = createFacade<object, Writable<Extension>>(
    "sample-facade",
    extension
  );

  {
    expect(facade.pow(1)).toBe(1);
    expect(facade.pow(2)).toBe(4);
    expect(facade.pow(3)).toBe(9);
  }

  {
    facade.pow = (x): number => x * x * x;
    expect(facade.pow(1)).toBe(1);
    expect(facade.pow(2)).toBe(8);
    expect(facade.pow(3)).toBe(27);
  }

  interface Extension {
    readonly pow: (x: number) => number;
  }
});

test("createFacade: Function", () => {
  const facade = createFacade<Facade>("sample-facade", {});

  facade.setImplementation(x => x * x);
  expect(facade(1)).toBe(1);
  expect(facade(2)).toBe(4);
  expect(facade(3)).toBe(9);

  interface Facade {
    (x: number): number;
  }
});

test("createFacade: Object", () => {
  const facade = createFacade<Facade>("sample-facade", {});

  class Implementation {
    public readonly value = 1;
  }

  facade.setImplementation(new Implementation());

  const descriptor = {
    configurable: true,
    enumerable: true,
    value: 1,
    writable: true
  };

  expect(reflect.get(facade, "value")).toBe(1);
  expect(reflect.getOwnPropertyDescriptor(facade, "value")).toStrictEqual(
    descriptor
  );
  expect(reflect.has(facade, "value")).toBeTrue();
  expect(reflect.isExtensible(facade)).toBeTrue();
  expect(reflect.ownKeys(facade)).toStrictEqual(["value"]);
  expect(reflect.set(facade, "value", 2)).toBeTrue();

  interface Facade {
    readonly value: number;
  }
});

test("createValidationObject", () => {
  {
    const source = { 1: 1, a: "a" };

    const expected = new Set([1, "a"]);

    expect(createValidationObject(source)).toStrictEqual(expected);
  }

  {
    const source = { 1: "a", a: 1 };

    const error = new Error("Invalid source");

    expect(() => createValidationObject(source)).toThrow(error);
  }
});

test("onDemand", () => {
  class TestClass {
    public readonly value = 1;
  }

  const obj = onDemand(() => new TestClass());

  const descriptor = {
    configurable: true,
    enumerable: true,
    value: 1,
    writable: true
  };

  expect(reflect.get(obj, "value")).toBe(1);
  expect(reflect.getOwnPropertyDescriptor(obj, "value")).toStrictEqual(
    descriptor
  );
  expect(reflect.has(obj, "value")).toBeTrue();
  expect(reflect.isExtensible(obj)).toBeTrue();
  expect(reflect.ownKeys(obj)).toStrictEqual(["value"]);
  expect(reflect.set(obj, "value", 2)).toBeTrue();
});

test("safeAccess: get", () => {
  const obj = safeAccess(
    {
      a: 1,
      b: 2,
      c: 3
    },
    { a: is.number },
    ["b"]
  );

  const error = new Error("Read access denied: c");

  expect(reflect.get(obj, "a")).toBe(1);
  expect(reflect.get(obj, "b")).toBe(2);
  expect(() => reflect.get(obj, "c")).toThrow(error);
});

test("safeAccess: getOwnPropertyDescriptor", () => {
  const obj = safeAccess(
    {
      a: 1,
      b: 2,
      c: 3
    },
    { a: is.number },
    ["b"]
  );

  const expected1 = {
    configurable: true,
    enumerable: true,
    value: 1,
    writable: true
  };

  const expected2 = {
    configurable: true,
    enumerable: true,
    value: 2,
    writable: true
  };

  const error = new Error("Read access denied: c");

  expect(reflect.getOwnPropertyDescriptor(obj, "a")).toStrictEqual(expected1);
  expect(reflect.getOwnPropertyDescriptor(obj, "b")).toStrictEqual(expected2);
  expect(() => reflect.getOwnPropertyDescriptor(obj, "c")).toThrow(error);
});

test("safeAccess: has", () => {
  const obj = safeAccess(
    {
      a: 1,
      b: 2,
      c: 3
    },
    { a: is.number },
    ["b"]
  );

  expect(reflect.has(obj, "a")).toBeTrue();
  expect(reflect.has(obj, "b")).toBeTrue();
  expect(reflect.has(obj, "c")).toBeFalse();
});

test("safeAccess: isExtensible", () => {
  const obj = safeAccess({}, {});

  expect(reflect.isExtensible(obj)).toBeTrue();
});

test("safeAccess: ownKeys", () => {
  const obj = safeAccess(
    {
      a: 1,
      b: 2,
      c: 3
    },
    { a: is.number },
    ["b"]
  );

  expect(reflect.ownKeys(obj)).toStrictEqual(["a", "b"]);
});

test("safeAccess: set", () => {
  const obj = safeAccess(
    {
      a: 1,
      b: 2,
      c: 3
    },
    { a: is.number },
    ["b"]
  );

  const error1 = new Error("Type check failed: a");

  const error2 = new Error("Write access denied: b");

  const error3 = new Error("Write access denied: c");

  expect(reflect.set(obj, "a", 2)).toBeTrue();
  expect(() => reflect.set(obj, "a", false)).toThrow(error1);
  expect(() => reflect.set(obj, "b", 3)).toThrow(error2);
  expect(() => reflect.set(obj, "c", 4)).toThrow(error3);
});

test("wait", async () => {
  expect.hasAssertions();

  await testUtils.run(async () => {
    await expect(async () => {
      await wait(1000);
    }).executionTimeToBe(1000);
  });
});

test("wrapProxyHandler: doDefault", () => {
  class TestClass {
    public readonly x = 1;
  }

  const handler = wrapProxyHandler("test", "doDefault", {});

  const proxyClass = new Proxy<typeof TestClass>(TestClass, handler);

  const proxyFunction = new Proxy<() => void>(fn.noop, handler);

  const proxyObject = new Proxy(new TestClass(), handler);

  const proxyObjectDelete = new Proxy(new TestClass(), handler);

  const proxyObjectFreeze = new Proxy(new TestClass(), handler);

  const descriptor = {
    configurable: true,
    enumerable: true,
    value: 1,
    writable: true
  };

  expect(reflect.apply(proxyFunction, undefined, [])).toBeUndefined();
  expect(reflect.construct(proxyClass, [])).toBeInstanceOf(TestClass);
  expect(reflect.defineProperty(proxyObject, "x", {})).toBe(true);
  expect(reflect.deleteProperty(proxyObjectDelete, "x")).toBe(true);
  expect(reflect.get(proxyObject, "x")).toBe(1);
  expect(reflect.getOwnPropertyDescriptor(proxyObject, "x")).toStrictEqual(
    descriptor
  );
  expect(reflect.getPrototypeOf(proxyObject)).toStrictEqual(
    TestClass.prototype
  );
  expect(reflect.has(proxyObject, "x")).toBe(true);
  expect(reflect.isExtensible(proxyObject)).toBe(true);
  expect(reflect.ownKeys(proxyObject)).toStrictEqual(["x"]);
  expect(reflect.preventExtensions(proxyObjectFreeze)).toBe(true);
  expect(reflect.set(proxyObject, "x", 1)).toBe(true);
  expect(reflect.setPrototypeOf(proxyObject, null)).toBe(true);
});

test("wrapProxyHandler: throw", () => {
  expect.hasAssertions();

  class TestClass {
    public readonly x = 1;
  }

  const handler = wrapProxyHandler("test", "throw", {});

  const proxyClass = new Proxy<typeof TestClass>(TestClass, handler);

  const proxyFunction = new Proxy<() => void>(fn.noop, handler);

  const proxyObject = new Proxy(new TestClass(), handler);

  const proxyObjectDelete = new Proxy(new TestClass(), handler);

  const proxyObjectFreeze = new Proxy(new TestClass(), handler);

  const subtests = {
    apply: (): void => {
      reflect.apply(proxyFunction, undefined, []);
    },
    construct: (): void => {
      reflect.construct(proxyClass, []);
    },
    defineProperty: (): void => {
      reflect.defineProperty(proxyObject, "x", {});
    },
    deleteProperty: (): void => {
      reflect.deleteProperty(proxyObjectDelete, "x");
    },
    get: (): void => {
      reflect.get(proxyObject, "x");
    },
    getOwnPropertyDescriptor: (): void => {
      reflect.getOwnPropertyDescriptor(proxyObject, "x");
    },
    getPrototypeOf: (): void => {
      reflect.getPrototypeOf(proxyObject);
    },
    has: (): void => {
      reflect.has(proxyObject, "x");
    },
    isExtensible: (): void => {
      reflect.isExtensible(proxyObject);
    },
    ownKeys: (): void => {
      reflect.ownKeys(proxyObject);
    },
    preventExtensions: (): void => {
      reflect.preventExtensions(proxyObjectFreeze);
    },
    set: (): void => {
      reflect.set(proxyObject, "x", 1);
    },
    setPrototypeOf: (): void => {
      reflect.setPrototypeOf(proxyObject, null);
    }
  };

  for (const [name, subtest] of o.entries(subtests))
    expect(subtest).toThrow(new Error(`Not implemented: test.${name}`));
});
