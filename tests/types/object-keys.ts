import type {
  numberU,
  DefinedKeys,
  ReadonlyDefinedKeys,
  ReadonlyUndefinedKeys,
  UndefinedKeys,
  WritableDefindKeys,
  WritableUndefindKeys
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

test("DefinedKeys", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "r" | "w";

  type To = DefinedKeys<TestInterface>;
});

test("ReadonlyDefinedKeys", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "r";

  type To = ReadonlyDefinedKeys<TestInterface>;
});

test("ReadonlyUndefinedKeys", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "ro" | "rou" | "ru";

  type To = ReadonlyUndefinedKeys<TestInterface>;
});

test("UndefinedKeys", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "ro" | "rou" | "ru" | "wo" | "wou" | "wu";

  type To = UndefinedKeys<TestInterface>;
});

test("WritableDefindKeys", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "w";

  type To = WritableDefindKeys<TestInterface>;
});

test("WritableUndefindKeys", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "wo" | "wou" | "wu";

  type To = WritableUndefindKeys<TestInterface>;
});
