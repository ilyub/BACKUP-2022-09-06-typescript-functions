import * as assert from "@/assertions";
import { AssertionError } from "@/errors/AssertionError";
import * as is from "@/guards";
import { createValidationObject } from "@/types/core";

type Assertion1<X> = (x: X, error?: assert.ErrorArg) => void;

type Assertion2<X, Y> = (x: X, y: Y, error?: assert.ErrorArg) => void;

type Assertion3<X, Y, Z> = (x: X, y: Y, z: Z, error?: assert.ErrorArg) => void;

type Guard1<X> = (x: X) => boolean;

type Guard2<X, Y> = (x: X, y: Y) => boolean;

type Guard3<X, Y, Z> = (x: X, y: Y, z: Z) => boolean;

class TestClass {
  public value = 1;
}

type TestEnum = 1 | "a";

const TestEnumVO = createValidationObject<TestEnum>({ 1: 1, a: "a" });

const testAssertionError = new AssertionError("Sample error");

const testClass = new TestClass();

const testError = new Error("Sample error");

const testMessage = "Sample error";

const testObject = { num: 1, str: "a" };

function testAssertion<X>(
  expected: "pass" | "fail",
  assertion: Assertion1<X>,
  guard: Guard1<X>,
  x: X
): void;

function testAssertion<X, Y>(
  expected: "pass" | "fail",
  assertion: Assertion2<X, Y>,
  guard: Guard2<X, Y>,
  x: X,
  y: Y
): void;

function testAssertion<X, Y, Z>(
  expected: "pass" | "fail",
  assertion: Assertion3<X, Y, Z>,
  guard: Guard3<X, Y, Z>,
  x: X,
  y: Y,
  z: Z
): void;

function testAssertion(
  expected: "pass" | "fail",
  assertion: Function,
  guard: Function,
  ...args: unknown[]
): void {
  switch (expected) {
    case "pass":
      expect(guard(...args)).toBeTrue();
      expect(() => {
        assertion(...args);
      }).not.toThrow();

      break;

    case "fail":
      expect(guard(...args)).toBeFalse();

      expect(() => {
        assertion(...args);
      }).toThrow(new AssertionError());

      expect(() => {
        assertion(...args, testMessage);
      }).toThrow(testAssertionError);

      expect(() => {
        assertion(...args, () => testError);
      }).toThrow(testError);
  }
}

it("toErrorArg", () => {
  {
    const errorArg = assert.toErrorArg(testError);

    assert.callable(errorArg);
    expect(errorArg()).toStrictEqual(testError);
  }

  {
    const errorArg = assert.toErrorArg(testMessage);

    expect(errorArg).toStrictEqual(testMessage);
  }
});

it("not", () => {
  expect(() => assert.not()).toThrow(new Error("Not implemented"));
});

it("array", () => {
  testAssertion("pass", assert.array, is.array, [1]);
  testAssertion("pass", assert.array, is.array, ["a"]);
  testAssertion("fail", assert.array, is.array, 1);
});

it("array.of", () => {
  testAssertion("pass", assert.array.of, is.array.of, [1], is.number);
  testAssertion("fail", assert.array.of, is.array.of, ["a"], is.number);
  testAssertion("fail", assert.array.of, is.array.of, 1, is.number);
});

it("boolean", () => {
  testAssertion("pass", assert.boolean, is.boolean, true);
  testAssertion("pass", assert.boolean, is.boolean, false);
  testAssertion("fail", assert.boolean, is.boolean, 1);
  testAssertion("fail", assert.boolean, is.boolean, undefined);
});

it("booleanU", () => {
  testAssertion("pass", assert.booleanU, is.booleanU, true);
  testAssertion("pass", assert.booleanU, is.booleanU, false);
  testAssertion("fail", assert.booleanU, is.booleanU, 1);
  testAssertion("pass", assert.booleanU, is.booleanU, undefined);
});

it("byGuard", () => {
  testAssertion("pass", assert.byGuard, guard2, true, is.boolean);
  testAssertion("pass", assert.byGuard, guard2, false, is.boolean);
  testAssertion("fail", assert.byGuard, guard2, 1, is.boolean);
  testAssertion("fail", assert.byGuard, guard2, undefined, is.boolean);

  function guard2<T>(value: unknown, guard: is.Guard<T>): value is T {
    return guard(value);
  }
});

it("callable", () => {
  testAssertion("pass", assert.callable, is.callable, () => true);
  testAssertion("fail", assert.callable, is.callable, 1);
  testAssertion("fail", assert.callable, is.callable, undefined);
});

it("callableU", () => {
  testAssertion("pass", assert.callableU, is.callableU, () => true);
  testAssertion("fail", assert.callableU, is.callableU, 1);
  testAssertion("pass", assert.callableU, is.callableU, undefined);
});

it("empty", () => {
  testAssertion("pass", assert.empty, is.empty, null);
  testAssertion("pass", assert.empty, is.empty, undefined);
  testAssertion("fail", assert.empty, is.empty, 1);
});

it("not.empty", () => {
  testAssertion("fail", assert.not.empty, is.not.empty, null);
  testAssertion("fail", assert.not.empty, is.not.empty, undefined);
  testAssertion("pass", assert.not.empty, is.not.empty, 1);
});

it("enumeration", () => {
  testAssertion("pass", assert.enumeration, is.enumeration, 1, TestEnumVO);

  testAssertion("pass", assert.enumeration, is.enumeration, "a", TestEnumVO);

  testAssertion("fail", assert.enumeration, is.enumeration, "b", TestEnumVO);

  testAssertion(
    "fail",
    assert.enumeration,
    is.enumeration,
    undefined,
    TestEnumVO
  );
});

it("enumerationU", () => {
  testAssertion("pass", assert.enumerationU, is.enumerationU, 1, TestEnumVO);

  testAssertion("pass", assert.enumerationU, is.enumerationU, "a", TestEnumVO);

  testAssertion("fail", assert.enumerationU, is.enumerationU, "b", TestEnumVO);

  testAssertion(
    "pass",
    assert.enumerationU,
    is.enumerationU,
    undefined,
    TestEnumVO
  );
});

it("indexedObject", () => {
  testAssertion("pass", assert.indexedObject, is.indexedObject, { a: 1 });
  testAssertion("pass", assert.indexedObject, is.indexedObject, { a: "a" });
  testAssertion("fail", assert.indexedObject, is.indexedObject, 1);
  testAssertion("fail", assert.indexedObject, is.indexedObject, null);
});

it("indexedObject.of", () => {
  testAssertion(
    "pass",
    assert.indexedObject.of,
    is.indexedObject.of,
    { a: 1 },
    is.number
  );

  testAssertion(
    "fail",
    assert.indexedObject.of,
    is.indexedObject.of,
    { a: "a" },
    is.number
  );

  testAssertion(
    "fail",
    assert.indexedObject.of,
    is.indexedObject.of,
    1,
    is.number
  );

  testAssertion(
    "fail",
    assert.indexedObject.of,
    is.indexedObject.of,
    null,
    is.number
  );
});

it("instance", () => {
  testAssertion("pass", assert.instance, is.instance, testClass, TestClass);
  testAssertion("fail", assert.instance, is.instance, {}, TestClass);
});

it("instances", () => {
  testAssertion("pass", assert.instances, is.instances, [testClass], TestClass);
  testAssertion("fail", assert.instances, is.instances, [{}], TestClass);
  testAssertion("fail", assert.instances, is.instances, 1, TestClass);
});

it("null", () => {
  testAssertion("pass", assert.null, is.null, null);
  testAssertion("fail", assert.null, is.null, undefined);
  testAssertion("fail", assert.null, is.null, 1);
});

it("not.null", () => {
  testAssertion("fail", assert.not.null, is.not.null, null);
  testAssertion("pass", assert.not.null, is.not.null, undefined);
  testAssertion("pass", assert.not.null, is.not.null, 1);
});

it("numStr", () => {
  testAssertion("pass", assert.numStr, is.numStr, 1);
  testAssertion("pass", assert.numStr, is.numStr, "a");
  testAssertion("fail", assert.numStr, is.numStr, true);
  testAssertion("fail", assert.numStr, is.numStr, undefined);
});

it("numStrU", () => {
  testAssertion("pass", assert.numStrU, is.numStrU, 1);
  testAssertion("pass", assert.numStrU, is.numStrU, "a");
  testAssertion("fail", assert.numStrU, is.numStrU, true);
  testAssertion("pass", assert.numStrU, is.numStrU, undefined);
});

it("number", () => {
  testAssertion("pass", assert.number, is.number, 1);
  testAssertion("fail", assert.number, is.number, "a");
  testAssertion("fail", assert.number, is.number, true);
  testAssertion("fail", assert.number, is.number, undefined);
});

it("numberU", () => {
  testAssertion("pass", assert.numberU, is.numberU, 1);
  testAssertion("fail", assert.numberU, is.numberU, "a");
  testAssertion("fail", assert.numberU, is.numberU, true);
  testAssertion("pass", assert.numberU, is.numberU, undefined);
});

it("object", () => {
  testAssertion("pass", assert.object, is.object, testObject);
  testAssertion("pass", assert.object, is.object, {});
  testAssertion("fail", assert.object, is.object, 1);
  testAssertion("fail", assert.object, is.object, null);
  testAssertion("fail", assert.object, is.object, undefined);
});

it("object.of", () => {
  testAssertion(
    "pass",
    assert.object.of,
    is.object.of,
    testObject,
    { num: is.number },
    { str: is.string }
  );

  testAssertion(
    "fail",
    assert.object.of,
    is.object.of,
    {},
    { num: is.number },
    { str: is.string }
  );

  testAssertion(
    "fail",
    assert.object.of,
    is.object.of,
    1,
    { num: is.number },
    { str: is.string }
  );

  testAssertion(
    "fail",
    assert.object.of,
    is.object.of,
    null,
    { num: is.number },
    { str: is.string }
  );

  testAssertion(
    "fail",
    assert.object.of,
    is.object.of,
    undefined,
    { num: is.number },
    { str: is.string }
  );
});

it("objectU", () => {
  testAssertion("pass", assert.objectU, is.objectU, testObject);
  testAssertion("pass", assert.objectU, is.objectU, {});
  testAssertion("fail", assert.objectU, is.objectU, 1);
  testAssertion("fail", assert.objectU, is.objectU, null);
  testAssertion("pass", assert.objectU, is.objectU, undefined);
});

it("string", () => {
  testAssertion("pass", assert.string, is.string, "a");
  testAssertion("fail", assert.string, is.string, 1);
  testAssertion("fail", assert.string, is.string, undefined);
});

it("stringU", () => {
  testAssertion("pass", assert.stringU, is.stringU, "a");
  testAssertion("fail", assert.stringU, is.stringU, 1);
  testAssertion("pass", assert.stringU, is.stringU, undefined);
});

it("toBeFalse", () => {
  expect(() => {
    assert.toBeFalse(false);
  }).not.toThrow();

  expect(() => {
    assert.toBeFalse(true);
  }).toThrow(new AssertionError());

  expect(() => {
    assert.toBeFalse(1, testMessage);
  }).toThrow(testAssertionError);

  expect(() => {
    assert.toBeFalse(undefined, () => testError);
  }).toThrow(testError);
});

it("toBeTrue", () => {
  expect(() => {
    assert.toBeTrue(true);
  }).not.toThrow();

  expect(() => {
    assert.toBeTrue(false);
  }).toThrow(new AssertionError());

  expect(() => {
    assert.toBeTrue(1, testMessage);
  }).toThrow(testAssertionError);

  expect(() => {
    assert.toBeTrue(undefined, () => testError);
  }).toThrow(testError);
});

it("undefined", () => {
  testAssertion("pass", assert.undefined, is.undefined, undefined);
  testAssertion("fail", assert.undefined, is.undefined, null);
  testAssertion("fail", assert.undefined, is.undefined, 1);
});

it("not.undefined", () => {
  testAssertion("fail", assert.not.undefined, is.not.undefined, undefined);
  testAssertion("pass", assert.not.undefined, is.not.undefined, null);
  testAssertion("pass", assert.not.undefined, is.not.undefined, 1);
});
