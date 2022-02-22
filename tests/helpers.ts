import * as is from "@/guards";
import {
  createFacade,
  onDemand,
  safeAccess,
  wait,
  wrapProxyHandler
} from "@/helpers";
import * as reflect from "@/reflect";
import * as testUtils from "@/testUtils";

class TestClass {
  public x?: number = 1;

  public y?: number = 2;
}

testUtils.installFakeTimer();

test("createFacade", () => {
  const facade = createFacade("sample-facade", {});

  const expected = {
    configurable: true,
    enumerable: true,
    value: facade.setImplementation,
    writable: true
  };

  expect(
    Object.getOwnPropertyDescriptor(facade, "setImplementation")
  ).toStrictEqual(expected);
});

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

  {
    const error = new Error("Missing facade implementation: sample-facade");

    expect(() => facade(1)).toThrow(error);
  }

  {
    const error = new Error("Facade is not callable: sample-facade");

    // eslint-disable-next-line no-type-assertion/no-type-assertion
    facade.setImplementation(1 as unknown as Facade);
    expect(() => facade(1)).toThrow(error);
  }

  {
    facade.setImplementation(x => x * x);
    expect(facade(1)).toBe(1);
    expect(facade(2)).toBe(4);
    expect(facade(3)).toBe(9);
  }
});

test("createFacade: Object", () => {
  interface Facade {
    get: () => number;
    set: (x: number) => void;
    value: number;
  }

  const facade = createFacade<Facade>("sample-facade", {});

  {
    const error = new Error("Missing facade implementation: sample-facade");

    expect(() => facade.value).toThrow(error);
    expect(() => {
      facade.value = 1;
    }).toThrow(error);
    expect(() => {
      Object.getOwnPropertyDescriptor(facade, "value");
    }).toThrow(error);
    expect(() => {
      Object.isExtensible(facade);
    }).toThrow(error);
  }

  {
    facade.setImplementation({
      get() {
        return this.value;
      },
      set(value: number) {
        this.value = value;
      },
      value: 1
    });

    {
      const expected = {
        configurable: true,
        enumerable: true,
        value: 1,
        writable: true
      };

      expect(facade.value).toBe(1);
      expect(facade.get()).toBe(1);
      expect(Object.getOwnPropertyDescriptor(facade, "value")).toStrictEqual(
        expected
      );
      expect(Object.isExtensible(facade)).toBeTrue();
    }

    {
      const expected = {
        configurable: true,
        enumerable: true,
        value: 2,
        writable: true
      };

      facade.set(2);
      expect(facade.value).toBe(2);
      expect(facade.get()).toBe(2);
      expect(Object.getOwnPropertyDescriptor(facade, "value")).toStrictEqual(
        expected
      );
      expect(Object.isExtensible(facade)).toBeTrue();
    }
  }
});

test("onDemand: get", () => {
  const obj = onDemand(() => new TestClass());

  expect(obj.x).toBe(1);
  expect(obj.y).toBe(2);
});

test("onDemand: getOwnPropertyDescriptor", () => {
  const obj = onDemand(() => new TestClass());

  expect(Object.getOwnPropertyDescriptor(obj, "x")).toStrictEqual({
    configurable: true,
    enumerable: true,
    value: 1,
    writable: true
  });

  expect(Object.getOwnPropertyDescriptor(obj, "y")).toStrictEqual({
    configurable: true,
    enumerable: true,
    value: 2,
    writable: true
  });
});

test("onDemand: ownKeys", () => {
  const obj = onDemand(() => new TestClass());

  expect(Object.keys(obj)).toStrictEqual(["x", "y"]);
  expect(Object.keys(obj)).toStrictEqual(["x", "y"]);
});

test("onDemand: set", () => {
  const obj = onDemand(() => new TestClass());

  obj.x = 2;
  obj.y = 3;
  expect(obj.x).toBe(2);
  expect(obj.y).toBe(3);
});

test("safeAccess", () => {
  const obj = {
    a: "a",
    b: 10,
    c: 20,
    d: 30
  };

  safeAccess(obj, {});

  const safe = safeAccess(obj, { a: is.string, b: is.number }, ["c"]);

  {
    expect(() => {
      reflect.set(safe, "a", safe.b);
    }).toThrow(new Error("Type check failed: a"));

    expect(() => {
      reflect.set(safe, "b", safe.a);
    }).toThrow(new Error("Type check failed: b"));

    expect(() => {
      reflect.set(safe, "c", safe.c);
    }).toThrow(new Error("Write access denied: c"));

    expect(() => {
      reflect.set(safe, "d", safe.c);
    }).toThrow(new Error("Write access denied: d"));
  }

  {
    expect(reflect.get(safe, "a")).toBe("a");
    expect(reflect.get(safe, "b")).toBe(10);
    expect(reflect.get(safe, "c")).toBe(20);
    expect(() => reflect.get(safe, "d")).toThrow(
      new Error("Read access denied: d")
    );
  }

  {
    safe.a = "b";
    safe.b = 11;
    expect(reflect.get(safe, "a")).toBe("b");
    expect(reflect.get(safe, "b")).toBe(11);
    expect(reflect.get(safe, "c")).toBe(20);
    expect(() => reflect.get(safe, "d")).toThrow(
      new Error("Read access denied: d")
    );
  }
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

    const handler = wrapProxyHandler("testId", action, {});

    const proxyClass = new Proxy<typeof TestClass>(TestClass, handler);

    const proxyFunction = new Proxy<() => void>(() => {}, handler);

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

    for (const [name, subtest] of Object.entries(subtests)) {
      // eslint-disable-next-line jest/no-conditional-in-test
      switch (action) {
        case "doDefault":
          // eslint-disable-next-line jest/no-conditional-expect
          expect(subtest).not.toThrow();

          break;

        case "throw":
          // eslint-disable-next-line jest/no-conditional-expect
          expect(subtest).toThrow(new Error(`Not implemented: testId.${name}`));
      }
    }
  }
);
