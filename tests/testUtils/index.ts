/**
 * @jest-environment @skylib/config/src/jest-env-jsdom
 */
import $ from "jquery";

import * as testUtils from "@/testUtils";

async function testResolve(): Promise<void> {
  await Promise.resolve();
}

testUtils.installFakeTimer();

it("executionTimeToBeWithin", async () => {
  {
    const result = await testUtils.executionTimeToBeWithin(testResolve, 0, 1);

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(
      "Expected callback execution time (0 ms) not to be within [0, 1] ms"
    );
  }

  {
    const result = await testUtils.executionTimeToBeWithin(testResolve, 1, 2);

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(
      "Expected callback execution time (0 ms) to be within [1, 2] ms"
    );
  }
});

it("executionTimeToEqual", async () => {
  {
    const result = await testUtils.executionTimeToEqual(testResolve, 0);

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(
      "Expected callback execution time not to be 0 ms"
    );
  }

  {
    const result = await testUtils.executionTimeToEqual(testResolve, 1);

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(
      "Expected callback execution time (0 ms) to be 1 ms"
    );
  }
});

it("getClock", () => {
  expect(testUtils.getClock()).toBeObject();
});

it("jestReset", () => {
  const callback = jest.fn();

  callback();
  expect(callback).toBeCalledTimes(1);
  testUtils.jestReset();
  expect(callback).not.toBeCalled();
});

it("jestReset.dom", () => {
  {
    document.body.innerHTML = "<div></div>";
    testUtils.jestReset.dom();
    expect(document.body.innerHTML).toStrictEqual("");
  }

  {
    expect($("<div>").is(":visible")).toBeTrue();
  }
});

it("run", async () => {
  await expect(testUtils.run(testResolve)).resolves.toBeUndefined();
});

it("setRandomSystemTime", () => {
  testUtils.setRandomSystemTime();
});

it("toBeSameAs", () => {
  {
    const arr1 = [1];

    const arr2 = arr1;

    const result = testUtils.toBeSameAs(arr1, arr2);

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual("Expected not the same object");
  }

  {
    const result = testUtils.toBeSameAs([], []);

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual("Expected the same object");
  }

  {
    const obj1 = { x: 1 };

    const obj2 = { x: 1 };

    expect(obj1).not.toBeSameAs(obj2);
    expect(obj1).toStrictEqual(obj2);
  }
});
