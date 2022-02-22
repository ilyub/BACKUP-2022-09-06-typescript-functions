import { AssertionError } from "@/errors/AssertionError";
import * as num from "@/number";

test("average", () => {
  expect(num.average(10, 20, 30)).toBe(20);
  expect(num.average(10, 20)).toBe(15);
  expect(num.average(10)).toBe(10);
  expect(() => num.average()).toThrow(new AssertionError());
});

test("round", () => {
  expect(num.round(1.111_111, 0)).toBe(1);
  expect(num.round(1.111_111, 1)).toBe(1.1);
  expect(num.round(1.111_111, 2)).toBe(1.11);
});

test("sum", () => {
  expect(num.sum(10, 20, 30)).toBe(60);
  expect(num.sum(10, 20)).toBe(30);
  expect(num.sum(10)).toBe(10);
  expect(num.sum()).toBe(0);
});
