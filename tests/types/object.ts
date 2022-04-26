import type {
  numberU,
  Join2,
  Join3,
  Join4,
  OptionalStyle,
  OptionalUndefinedStyle,
  StrictOmit,
  UndefinedStyle
} from "@";
import type { Equals } from "ts-toolbelt/out/Any/Equals";

interface TestInterface {
  readonly r: number;
  readonly ro?: number;
  readonly rou?: numberU;
  readonly ru: numberU;
  w: number;
  wo?: number;
  wou?: numberU;
  wu: numberU;
}

test("Join2", () => {
  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);

  type Expected = { a: 1 } & { b: 2 };

  type To = Join2<{ a: 1 }, { b: 2 }>;
});

test("Join3", () => {
  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);

  type Expected = { a: 1 } & { b: 2 } & { c: 3 };

  type To = Join3<{ a: 1 }, { b: 2 }, { c: 3 }>;
});

test("Join4", () => {
  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);

  type Expected = { a: 1 } & { b: 2 } & { c: 3 } & { d: 4 };

  type To = Join4<{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }>;
});

test("OptionalStyle", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = {
    readonly r: number;
  } & {
    readonly ro?: number;
    readonly rou?: number;
    readonly ru?: number;
  } & {
    w: number;
  } & {
    wo?: number;
    wou?: number;
    wu?: number;
  };

  type To = OptionalStyle<TestInterface>;
});

test("OptionalUndefinedStyle", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = {
    readonly r: number;
  } & {
    readonly ro?: numberU;
    readonly rou?: numberU;
    readonly ru?: numberU;
  } & {
    w: number;
  } & {
    wo?: numberU;
    wou?: numberU;
    wu?: numberU;
  };

  type To = OptionalUndefinedStyle<TestInterface>;
});

test("StrictOmit", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = {
    a: string;
    b?: string;
    readonly c: string;
    readonly d?: string;
  } & {
    e?: never;
    f?: never;
    g?: never;
    h?: never;
  };

  interface From {
    a: string;
    b?: string;
    readonly c: string;
    readonly d?: string;
    e: string;
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
    readonly r: number;
  } & {
    readonly ro: numberU;
    readonly rou: numberU;
    readonly ru: numberU;
  } & {
    w: number;
  } & {
    wo: numberU;
    wou: numberU;
    wu: numberU;
  };

  type To = UndefinedStyle<TestInterface>;
});
