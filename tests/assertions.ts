/* eslint-disable jest/expect-expect */

import * as assert from "@/assertions";
import { AssertionError } from "@/errors/AssertionError";
import * as is from "@/guards";
import { createValidationObject } from "@/types/core";

interface Assertion1<X> {
  (x: X, error?: assert.ErrorArg): void;
}

interface Assertion2<X, Y> {
  (x: X, y: Y, error?: assert.ErrorArg): void;
}

interface Assertion3<X, Y, Z> {
  (x: X, y: Y, z: Z, error?: assert.ErrorArg): void;
}

interface Guard1<X> {
  (x: X): boolean;
}

interface Guard2<X, Y> {
  (x: X, y: Y): boolean;
}

interface Guard3<X, Y, Z> {
  (x: X, y: Y, z: Z): boolean;
}

class TestClass {
  public value = 1;
}

type TestEnum = "a" | 1;

const TestEnumVO = createValidationObject<TestEnum>({ 1: 1, a: "a" });

const testAssertionError = new AssertionError("Sample error");

const testClass = new TestClass();

const testError = new Error("Sample error");

const testMessage = "Sample error";

const testObject = { num: 1, str: "a" };

function testAssertion<X>(
  expected: "fail" | "pass",
  assertion: Assertion1<X>,
  guard: Guard1<X>,
  x: X
): void;

function testAssertion<X, Y>(
  expected: "fail" | "pass",
  assertion: Assertion2<X, Y>,
  guard: Guard2<X, Y>,
  x: X,
  y: Y
): void;

function testAssertion<X, Y, Z>(
  expected: "fail" | "pass",
  assertion: Assertion3<X, Y, Z>,
  guard: Guard3<X, Y, Z>,
  x: X,
  y: Y,
  z: Z
): void;

function testAssertion(
  expected: "fail" | "pass",
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

test("toErrorArg", () => {
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

test("not", () => {
  expect(() => assert.not()).toThrow(new Error("Not implemented"));
});

test("array", () => {
  testAssertion("pass", assert.array, is.array, [1]);
  testAssertion("pass", assert.array, is.array, ["a"]);
  testAssertion("fail", assert.array, is.array, 1);
});

test("array.of", () => {
  testAssertion("pass", assert.array.of, is.array.of, [1], is.number);
  testAssertion("fail", assert.array.of, is.array.of, ["a"], is.number);
  testAssertion("fail", assert.array.of, is.array.of, 1, is.number);
});

test("boolean", () => {
  testAssertion("pass", assert.boolean, is.boolean, true);
  testAssertion("pass", assert.boolean, is.boolean, false);
  testAssertion("fail", assert.boolean, is.boolean, 1);
  testAssertion("fail", assert.boolean, is.boolean, undefined);
});

test("booleanU", () => {
  testAssertion("pass", assert.booleanU, is.booleanU, true);
  testAssertion("pass", assert.booleanU, is.booleanU, false);
  testAssertion("fail", assert.booleanU, is.booleanU, 1);
  testAssertion("pass", assert.booleanU, is.booleanU, undefined);
});

test("byGuard", () => {
  testAssertion("pass", assert.byGuard, guard2, true, is.boolean);
  testAssertion("pass", assert.byGuard, guard2, false, is.boolean);
  testAssertion("fail", assert.byGuard, guard2, 1, is.boolean);
  testAssertion("fail", assert.byGuard, guard2, undefined, is.boolean);

  function guard2<T>(value: unknown, guard: is.Guard<T>): value is T {
    return guard(value);
  }
});

test("callable", () => {
  testAssertion("pass", assert.callable, is.callable, () => true);
  testAssertion("fail", assert.callable, is.callable, 1);
  testAssertion("fail", assert.callable, is.callable, undefined);
});

test("callableU", () => {
  testAssertion("pass", assert.callableU, is.callableU, () => true);
  testAssertion("fail", assert.callableU, is.callableU, 1);
  testAssertion("pass", assert.callableU, is.callableU, undefined);
});

test("empty", () => {
  testAssertion("pass", assert.empty, is.empty, null);
  testAssertion("pass", assert.empty, is.empty, undefined);
  testAssertion("fail", assert.empty, is.empty, 1);
});

test("not.empty", () => {
  testAssertion("fail", assert.not.empty, is.not.empty, null);
  testAssertion("fail", assert.not.empty, is.not.empty, undefined);
  testAssertion("pass", assert.not.empty, is.not.empty, 1);
});

test("enumeration", () => {
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

test("enumerationU", () => {
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

test("indexedObject", () => {
  testAssertion("pass", assert.indexedObject, is.indexedObject, { a: 1 });
  testAssertion("pass", assert.indexedObject, is.indexedObject, { a: "a" });
  testAssertion("fail", assert.indexedObject, is.indexedObject, 1);
  testAssertion("fail", assert.indexedObject, is.indexedObject, null);
});

test("indexedObject.of", () => {
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

test("instance", () => {
  testAssertion("pass", assert.instance, is.instance, testClass, TestClass);
  testAssertion("fail", assert.instance, is.instance, {}, TestClass);
});

test("instances", () => {
  testAssertion("pass", assert.instances, is.instances, [testClass], TestClass);
  testAssertion("fail", assert.instances, is.instances, [{}], TestClass);
  testAssertion("fail", assert.instances, is.instances, 1, TestClass);
});

test("null", () => {
  testAssertion("pass", assert.null, is.null, null);
  testAssertion("fail", assert.null, is.null, undefined);
  testAssertion("fail", assert.null, is.null, 1);
});

test("not.null", () => {
  testAssertion("fail", assert.not.null, is.not.null, null);
  testAssertion("pass", assert.not.null, is.not.null, undefined);
  testAssertion("pass", assert.not.null, is.not.null, 1);
});

test("numStr", () => {
  testAssertion("pass", assert.numStr, is.numStr, 1);
  testAssertion("pass", assert.numStr, is.numStr, "a");
  testAssertion("fail", assert.numStr, is.numStr, true);
  testAssertion("fail", assert.numStr, is.numStr, undefined);
});

test("numStrU", () => {
  testAssertion("pass", assert.numStrU, is.numStrU, 1);
  testAssertion("pass", assert.numStrU, is.numStrU, "a");
  testAssertion("fail", assert.numStrU, is.numStrU, true);
  testAssertion("pass", assert.numStrU, is.numStrU, undefined);
});

test("number", () => {
  testAssertion("pass", assert.number, is.number, 1);
  testAssertion("fail", assert.number, is.number, "a");
  testAssertion("fail", assert.number, is.number, true);
  testAssertion("fail", assert.number, is.number, undefined);
});

test("numberU", () => {
  testAssertion("pass", assert.numberU, is.numberU, 1);
  testAssertion("fail", assert.numberU, is.numberU, "a");
  testAssertion("fail", assert.numberU, is.numberU, true);
  testAssertion("pass", assert.numberU, is.numberU, undefined);
});

test("object", () => {
  testAssertion("pass", assert.object, is.object, testObject);
  testAssertion("pass", assert.object, is.object, {});
  testAssertion("fail", assert.object, is.object, 1);
  testAssertion("fail", assert.object, is.object, null);
  testAssertion("fail", assert.object, is.object, undefined);
});

test("object.of", () => {
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

test("objectU", () => {
  testAssertion("pass", assert.objectU, is.objectU, testObject);
  testAssertion("pass", assert.objectU, is.objectU, {});
  testAssertion("fail", assert.objectU, is.objectU, 1);
  testAssertion("fail", assert.objectU, is.objectU, null);
  testAssertion("pass", assert.objectU, is.objectU, undefined);
});

test("string", () => {
  testAssertion("pass", assert.string, is.string, "a");
  testAssertion("pass", assert.string, is.string, "");
  testAssertion("fail", assert.string, is.string, 1);
  testAssertion("fail", assert.string, is.string, undefined);
});

test("stringU", () => {
  testAssertion("pass", assert.stringU, is.stringU, "a");
  testAssertion("fail", assert.stringU, is.stringU, "");
  testAssertion("fail", assert.stringU, is.stringU, 1);
  testAssertion("pass", assert.stringU, is.stringU, undefined);
});

test("toBeFalse", () => {
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

test("toBeTrue", () => {
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

test("undefined", () => {
  testAssertion("pass", assert.undefined, is.undefined, undefined);
  testAssertion("fail", assert.undefined, is.undefined, null);
  testAssertion("fail", assert.undefined, is.undefined, 1);
});

test("not.undefined", () => {
  testAssertion("fail", assert.not.undefined, is.not.undefined, undefined);
  testAssertion("pass", assert.not.undefined, is.not.undefined, null);
  testAssertion("pass", assert.not.undefined, is.not.undefined, 1);
});
