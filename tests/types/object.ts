import type {
  Join2,
  Join3,
  Join4,
  OptionalStyle,
  OptionalUndefinedStyle,
  StrictOmit,
  UndefinedStyle,
  numberU
} from "@";
import type { Equals } from "ts-toolbelt/out/Any/Equals";

interface TestInterface {
  readonly r: number;
  readonly ro?: number;
  readonly rou?: numberU;
  readonly ru: numberU;
  // eslint-disable-next-line no-restricted-syntax -- Ok
  w: number;
  // eslint-disable-next-line no-restricted-syntax -- Ok
  wo?: number;
  // eslint-disable-next-line no-restricted-syntax -- Ok
  wou?: numberU;
  // eslint-disable-next-line no-restricted-syntax -- Ok
  wu: numberU;
}

test("Join2", () => {
  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);

  // eslint-disable-next-line no-restricted-syntax -- Ok
  type Expected = { a: 1 } & { b: 2 };

  // eslint-disable-next-line no-restricted-syntax -- Ok
  type To = Join2<{ a: 1 }, { b: 2 }>;
});

test("Join3", () => {
  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);

  // eslint-disable-next-line no-restricted-syntax -- Ok
  type Expected = { a: 1 } & { b: 2 } & { c: 3 };

  // eslint-disable-next-line no-restricted-syntax -- Ok
  type To = Join3<{ a: 1 }, { b: 2 }, { c: 3 }>;
});

test("Join4", () => {
  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);

  // eslint-disable-next-line no-restricted-syntax -- Ok
  type Expected = { a: 1 } & { b: 2 } & { c: 3 } & { d: 4 };

  // eslint-disable-next-line no-restricted-syntax -- Ok
  type To = Join4<{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }>;
});

test("OptionalStyle", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = {
    // eslint-disable-next-line no-restricted-syntax -- Ok
    w: number;
  } & {
    // eslint-disable-next-line no-restricted-syntax -- Ok
    wo?: number;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    wou?: number;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    wu?: number;
  } & {
    readonly r: number;
  } & {
    readonly ro?: number;
    readonly rou?: number;
    readonly ru?: number;
  };

  type To = OptionalStyle<TestInterface>;
});

test("OptionalUndefinedStyle", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = {
    // eslint-disable-next-line no-restricted-syntax -- Ok
    w: number;
  } & {
    // eslint-disable-next-line no-restricted-syntax -- Ok
    wo?: numberU;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    wou?: numberU;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    wu?: numberU;
  } & {
    readonly r: number;
  } & {
    readonly ro?: numberU;
    readonly rou?: numberU;
    readonly ru?: numberU;
  };

  type To = OptionalUndefinedStyle<TestInterface>;
});

test("StrictOmit", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = {
    // eslint-disable-next-line no-restricted-syntax -- Ok
    a: string;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    b?: string;
    readonly c: string;
    readonly d?: string;
  } & {
    // eslint-disable-next-line no-restricted-syntax -- Ok
    e?: never;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    f?: never;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    g?: never;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    h?: never;
  };

  interface From {
    // eslint-disable-next-line no-restricted-syntax -- Ok
    a: string;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    b?: string;
    readonly c: string;
    readonly d?: string;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    e: string;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    f?: string;
    readonly g: string;
    readonly h?: string;
  }

  type To = StrictOmit<From, "e" | "f" | "g" | "h">;
});

test("UndefinedStyle", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = {
    // eslint-disable-next-line no-restricted-syntax -- Ok
    w: number;
  } & {
    // eslint-disable-next-line no-restricted-syntax -- Ok
    wo: numberU;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    wou: numberU;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    wu: numberU;
  } & {
    readonly r: number;
  } & {
    readonly ro: numberU;
    readonly rou: numberU;
    readonly ru: numberU;
  };

  type To = UndefinedStyle<TestInterface>;
});
