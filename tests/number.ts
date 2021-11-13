import { AssertionError } from "@/errors/AssertionError";
import * as num from "@/number";

it("average", () => {
  expect(num.average(10, 20, 30)).toStrictEqual(20);
  expect(num.average(10, 20)).toStrictEqual(15);
  expect(num.average(10)).toStrictEqual(10);
  expect(() => num.average()).toThrow(new AssertionError());
});

it("round", () => {
  expect(num.round(1.111_111, 0)).toStrictEqual(1);
  expect(num.round(1.111_111, 1)).toStrictEqual(1.1);
  expect(num.round(1.111_111, 2)).toStrictEqual(1.11);
});

it("sum", () => {
  expect(num.sum(10, 20, 30)).toStrictEqual(60);
  expect(num.sum(10, 20)).toStrictEqual(30);
  expect(num.sum(10)).toStrictEqual(10);
  expect(num.sum()).toStrictEqual(0);
});
