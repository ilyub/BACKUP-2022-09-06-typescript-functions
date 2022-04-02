import type { Equals } from "ts-toolbelt/out/Any/Equals";

import type { numberU } from "@/types/core";
import type {
  DefinedKeys,
  ReadonlyDefinedKeys,
  ReadonlyUndefinedKeys,
  UndefinedKeys,
  WritableDefindKeys,
  WritableUndefindKeys
} from "@/types/objectKeys";

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

test("DefinedKeys", () => {
  type To = DefinedKeys<TestInterface>;

  type Expected = "r" | "w";

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("ReadonlyDefinedKeys", () => {
  type To = ReadonlyDefinedKeys<TestInterface>;

  type Expected = "r";

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("ReadonlyUndefinedKeys", () => {
  type To = ReadonlyUndefinedKeys<TestInterface>;

  type Expected = "ro" | "rou" | "ru";

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("UndefinedKeys", () => {
  type To = UndefinedKeys<TestInterface>;

  type Expected = "ro" | "rou" | "ru" | "wo" | "wou" | "wu";

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("WritableDefindKeys", () => {
  type To = WritableDefindKeys<TestInterface>;

  type Expected = "w";

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("WritableUndefindKeys", () => {
  type To = WritableUndefindKeys<TestInterface>;

  type Expected = "wo" | "wou" | "wu";

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});
