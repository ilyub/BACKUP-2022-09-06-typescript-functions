import { AssertionError } from "@/errors/AssertionError";
import * as num from "@/number";

test("average", () => {
  expect(num.average(10, 20, 30)).toBe(20);
  expect(num.average(10, 20)).toBe(15);
  expect(num.average(10)).toBe(10);
  expect(() => num.average()).toThrow(new AssertionError());
});

test("ceil", () => {
  expect(num.ceil(1.111, 1)).toBe(1.2);
  expect(num.ceil(1.199, 1)).toBe(1.2);
  expect(num.ceil(1.111, 2)).toBe(1.12);
  expect(num.ceil(1.119, 2)).toBe(1.12);
});

test("ceil.step", () => {
  expect(num.ceil.step(11, 10)).toBe(20);
  expect(num.ceil.step(19, 10)).toBe(20);
});

test("floor", () => {
  expect(num.floor(1.111, 1)).toBe(1.1);
  expect(num.floor(1.199, 1)).toBe(1.1);
  expect(num.floor(1.111, 2)).toBe(1.11);
  expect(num.floor(1.119, 2)).toBe(1.11);
});

test("floor.step", () => {
  expect(num.floor.step(11, 10)).toBe(10);
  expect(num.floor.step(19, 10)).toBe(10);
});

test("limit", () => {
  expect(num.limit(0, 1, 3)).toBe(1);
  expect(num.limit(1, 1, 3)).toBe(1);
  expect(num.limit(2, 1, 3)).toBe(2);
  expect(num.limit(3, 1, 3)).toBe(3);
  expect(num.limit(4, 1, 3)).toBe(3);
});

test("rootMeanSquareDeviation", () => {
  expect(num.rootMeanSquareDeviation(0, 4)).toBe(2);
  expect(num.rootMeanSquareDeviation(1, 5)).toBe(2);
  expect(() => num.rootMeanSquareDeviation()).toThrow(new AssertionError());
});

test("round", () => {
  expect(num.round(1.111, 1)).toBe(1.1);
  expect(num.round(1.199, 1)).toBe(1.2);
  expect(num.round(1.111, 2)).toBe(1.11);
  expect(num.round(1.119, 2)).toBe(1.12);
});

test("round.step", () => {
  expect(num.round.step(11, 10)).toBe(10);
  expect(num.round.step(19, 10)).toBe(20);
});

test("sum", () => {
  expect(num.sum(10, 20, 30)).toBe(60);
  expect(num.sum(10, 20)).toBe(30);
  expect(num.sum(10)).toBe(10);
  expect(num.sum()).toBe(0);
});
