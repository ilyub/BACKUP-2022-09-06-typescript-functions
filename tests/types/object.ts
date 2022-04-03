import type { Equals } from "ts-toolbelt/out/Any/Equals";

import type { numberU } from "@/types/core";
import type {
  Join2,
  Join3,
  Join4,
  OptionalStyle,
  OptionalUndefinedStyle,
  StrictOmit,
  UndefinedStyle
} from "@/types/object";

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
  type To = Join2<{ a: 1 }, { b: 2 }>;

  type Expected = { a: 1 } & { b: 2 };

  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);
});

test("Join3", () => {
  type To = Join3<{ a: 1 }, { b: 2 }, { c: 3 }>;

  type Expected = { a: 1 } & { b: 2 } & { c: 3 };

  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);
});

test("Join4", () => {
  type To = Join4<{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }>;

  type Expected = { a: 1 } & { b: 2 } & { c: 3 } & { d: 4 };

  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);
});

test("OptionalStyle", () => {
  type To = OptionalStyle<TestInterface>;

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

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("OptionalUndefinedStyle", () => {
  type To = OptionalUndefinedStyle<TestInterface>;

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

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("UndefinedStyle", () => {
  type To = UndefinedStyle<TestInterface>;

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

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("StrictOmit", () => {
  interface From {
    a: string;
    b?: string;
    c: string;
    d?: string;
  }

  type To = StrictOmit<From, "c" | "d">;

  type Expected = {
    a: string;
    b?: string;
  } & {
    c?: never;
    d?: never;
  };

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});
