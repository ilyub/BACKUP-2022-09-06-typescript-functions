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

it("createFacade", () => {
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

it("createFacade: Extension", () => {
  interface Extension {
    pow: (x: number) => number;
  }

  const extension: Extension = {
    pow: x => x * x
  };

  const facade = createFacade<object, Extension>("sample-facade", extension);

  {
    expect(facade.pow(1)).toStrictEqual(1);
    expect(facade.pow(2)).toStrictEqual(4);
    expect(facade.pow(3)).toStrictEqual(9);
  }

  {
    facade.pow = (x): number => x * x * x;
    expect(facade.pow(1)).toStrictEqual(1);
    expect(facade.pow(2)).toStrictEqual(8);
    expect(facade.pow(3)).toStrictEqual(27);
  }
});

it("createFacade: Function", () => {
  type Facade = (x: number) => number;

  const facade = createFacade<Facade>("sample-facade", {});

  {
    const error = new Error("Missing facade implementation: sample-facade");

    expect(() => facade(1)).toThrow(error);
  }

  {
    const error = new Error("Facade is not callable: sample-facade");

    facade.setImplementation(1 as unknown as Facade);
    expect(() => facade(1)).toThrow(error);
  }

  {
    facade.setImplementation(x => x * x);
    expect(facade(1)).toStrictEqual(1);
    expect(facade(2)).toStrictEqual(4);
    expect(facade(3)).toStrictEqual(9);
  }
});

it("createFacade: Object", () => {
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

      expect(facade.value).toStrictEqual(1);
      expect(facade.get()).toStrictEqual(1);
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
      expect(facade.value).toStrictEqual(2);
      expect(facade.get()).toStrictEqual(2);
      expect(Object.getOwnPropertyDescriptor(facade, "value")).toStrictEqual(
        expected
      );
      expect(Object.isExtensible(facade)).toBeTrue();
    }
  }
});

it("onDemand: get", () => {
  const obj = onDemand(() => new TestClass());

  expect(obj.x).toStrictEqual(1);
  expect(obj.y).toStrictEqual(2);
});

it("onDemand: getOwnPropertyDescriptor", () => {
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

it("onDemand: ownKeys", () => {
  const obj = onDemand(() => new TestClass());

  expect(Object.keys(obj)).toStrictEqual(["x", "y"]);
  expect(Object.keys(obj)).toStrictEqual(["x", "y"]);
});

it("onDemand: set", () => {
  const obj = onDemand(() => new TestClass());

  obj.x = 2;
  obj.y = 3;
  expect(obj.x).toStrictEqual(2);
  expect(obj.y).toStrictEqual(3);
});

it("safeAccess", () => {
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
    expect(reflect.get(safe, "a")).toStrictEqual("a");
    expect(reflect.get(safe, "b")).toStrictEqual(10);
    expect(reflect.get(safe, "c")).toStrictEqual(20);
    expect(() => reflect.get(safe, "d")).toThrow(
      new Error("Read access denied: d")
    );
  }

  {
    safe.a = "b";
    safe.b = 11;
    expect(reflect.get(safe, "a")).toStrictEqual("b");
    expect(reflect.get(safe, "b")).toStrictEqual(11);
    expect(reflect.get(safe, "c")).toStrictEqual(20);
    expect(() => reflect.get(safe, "d")).toThrow(
      new Error("Read access denied: d")
    );
  }
});

it("wait", async () => {
  await testUtils.run(async () => {
    await expect(async () => {
      await wait(1000);
    }).executionTimeToEqual(1000);
  });
});

it.each<"doDefault" | "throw">(["doDefault", "throw"])(
  "wrapProxyHandler",
  action => {
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

    for (const [name, subtest] of Object.entries(subtests))
      switch (action) {
        case "doDefault":
          expect(subtest).not.toThrow();

          break;

        case "throw":
          expect(subtest).toThrow(new Error(`Not implemented: testId.${name}`));
      }
  }
);
