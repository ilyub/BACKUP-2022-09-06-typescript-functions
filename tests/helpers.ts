import * as fn from "@/function";
import * as is from "@/guards";
import {
  createFacade,
  onDemand,
  safeAccess,
  typedef,
  wait,
  wrapProxyHandler
} from "@/helpers";
import * as reflect from "@/reflect";
import * as testUtils from "@/testUtils";

testUtils.installFakeTimer();

test("createFacade: Extension", () => {
  interface Extension {
    pow: (x: number) => number;
  }

  const extension: Extension = {
    pow: x => x * x
  };

  const facade = createFacade<object, Extension>("sample-facade", extension);

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
});

test("createFacade: Function", () => {
  interface Facade {
    (x: number): number;
  }

  const facade = createFacade<Facade>("sample-facade", {});

  facade.setImplementation(x => x * x);
  expect(facade(1)).toBe(1);
  expect(facade(2)).toBe(4);
  expect(facade(3)).toBe(9);
});

test("createFacade: Object", () => {
  interface Facade {
    value: number;
  }

  const facade = createFacade<Facade>("sample-facade", {});

  class Implementation {
    public value = 1;
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
});

test("onDemand: Object", () => {
  class TestClass {
    public value = 1;
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

test("safeAccess", () => {
  safeAccess({}, {});

  const obj = safeAccess(
    {
      a: 1,
      b: 2,
      c: 3
    },
    { a: is.number },
    ["b"]
  );

  {
    const error = new Error("Read access denied: c");

    expect(reflect.get(obj, "a")).toBe(1);
    expect(reflect.get(obj, "b")).toBe(2);
    expect(() => reflect.get(obj, "c")).toThrow(error);
  }

  {
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
  }

  {
    expect(reflect.has(obj, "a")).toBeTrue();
    expect(reflect.has(obj, "b")).toBeTrue();
    expect(reflect.has(obj, "c")).toBeFalse();
  }

  {
    expect(reflect.isExtensible(obj)).toBeTrue();
  }

  {
    expect(reflect.ownKeys(obj)).toStrictEqual(["b", "a"]);
  }

  {
    const error1 = new Error("Type check failed: a");

    const error2 = new Error("Write access denied: b");

    const error3 = new Error("Write access denied: c");

    expect(reflect.set(obj, "a", 2)).toBeTrue();
    expect(() => reflect.set(obj, "a", "b")).toThrow(error1);
    expect(() => reflect.set(obj, "b", 3)).toThrow(error2);
    expect(() => reflect.set(obj, "c", 4)).toThrow(error3);
  }
});

test("typedef", () => {
  expect(typedef(1)).toBe(1);
});

test("wait", async () => {
  expect.assertions(1);

  await testUtils.run(async () => {
    await expect(async () => {
      await wait(1000);
    }).executionTimeToEqual(1000);
  });
});

test.each<"doDefault" | "throw">(["doDefault", "throw"])(
  "wrapProxyHandler",
  action => {
    expect.hasAssertions();

    class TestClass {
      public x?: number = 1;

      public y?: number = 2;
    }

    const handler = wrapProxyHandler("testId", action, {});

    const proxyClass = new Proxy<typeof TestClass>(TestClass, handler);

    const proxyFunction = new Proxy<() => void>(fn.noop, handler);

    const proxyObject = new Proxy<TestClass>(new TestClass(), handler);

    const proxyObjectFrozen = new Proxy<TestClass>(new TestClass(), handler);

    const subtests = {
      apply(): void {
        reflect.apply(proxyFunction, undefined, []);
      },
      construct(): void {
        reflect.construct(proxyClass, []);
      },
      defineProperty(): void {
        reflect.defineProperty(proxyObject, "x", {});
      },
      deleteProperty(): void {
        reflect.deleteProperty(proxyObject, "x");
      },
      get(): void {
        reflect.get(proxyObject, "x");
      },
      getOwnPropertyDescriptor(): void {
        reflect.getOwnPropertyDescriptor(proxyObject, "x");
      },
      getPrototypeOf(): void {
        reflect.getPrototypeOf(proxyObject);
      },
      has(): void {
        reflect.has(proxyObject, "x");
      },
      isExtensible(): void {
        reflect.isExtensible(proxyObject);
      },
      ownKeys(): void {
        reflect.ownKeys(proxyObject);
      },
      preventExtensions(): void {
        reflect.preventExtensions(proxyObjectFrozen);
      },
      set(): void {
        reflect.set(proxyObject, "x", 1);
      },
      setPrototypeOf(): void {
        reflect.setPrototypeOf(proxyObject, null);
      }
    };

    /* eslint-disable jest/no-conditional-expect, jest/no-conditional-in-test */

    for (const [name, subtest] of Object.entries(subtests))
      switch (action) {
        case "doDefault":
          expect(subtest).not.toThrow();

          break;

        case "throw":
          expect(subtest).toThrow(new Error(`Not implemented: testId.${name}`));
      }

    /* eslint-enable jest/no-conditional-expect, jest/no-conditional-in-test */
  }
);
