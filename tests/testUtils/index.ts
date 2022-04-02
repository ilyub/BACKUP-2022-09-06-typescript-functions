import * as a from "@/array";
import { wait } from "@/helpers";
import * as num from "@/number";
import * as testUtils from "@/testUtils";

async function testResolve(): Promise<void> {
  await Promise.resolve();
}

testUtils.installFakeTimer();

test("executionTimeToBe", async () => {
  {
    const result = await testUtils.executionTimeToBe(testResolve, 0);

    expect(result.pass).toBeTrue();
    expect(result.message()).toBe(
      "Expected callback execution time not to be 0 ms"
    );
  }

  {
    const result = await testUtils.executionTimeToBe(testResolve, 1);

    expect(result.pass).toBeFalse();
    expect(result.message()).toBe(
      "Expected callback execution time (0 ms) to be 1 ms"
    );
  }
});

test("executionTimeToBeWithin", async () => {
  {
    const result = await testUtils.executionTimeToBeWithin(testResolve, 0, 1);

    expect(result.pass).toBeTrue();
    expect(result.message()).toBe(
      "Expected callback execution time (0 ms) not to be within [0, 1] ms"
    );
  }

  {
    const result = await testUtils.executionTimeToBeWithin(testResolve, 1, 2);

    expect(result.pass).toBeFalse();
    expect(result.message()).toBe(
      "Expected callback execution time (0 ms) to be within [1, 2] ms"
    );
  }
});

test("toBeSameAs", () => {
  {
    const arr1 = [1];

    const arr2 = arr1;

    const result = testUtils.toBeSameAs(arr1, arr2);

    expect(result.pass).toBeTrue();
    expect(result.message()).toBe("Expected not the same object");
  }

  {
    const arr1 = [1];

    const arr2 = [1];

    const result = testUtils.toBeSameAs(arr1, arr2);

    expect(result.pass).toBeFalse();
    expect(result.message()).toBe("Expected the same object");
  }
});

test("jestSetup", () => {
  expect(() => {
    // eslint-disable-next-line no-console
    console.error("Test error");
  }).toThrow(new Error('console.error: ["Test error"]'));

  expect(() => {
    // eslint-disable-next-line no-console
    console.warn("Test warning");
  }).toThrow(new Error('console.warn: ["Test warning"]'));
});

test("run", async () => {
  expect.hasAssertions();

  await testUtils.run(async () => {
    await expect(async () => {
      await wait(1000);
    }).executionTimeToBe(1000);
  });
});

test.each([
  {
    max: 1000,
    min: 0,
    now(): number {
      return Date.now();
    }
  },
  {
    max: Number.MAX_VALUE,
    min: 24 * 3600 * 1000,
    now(): number {
      testUtils.setRandomSystemTime();

      return Date.now();
    }
  }
])("setRandomSystemTime", ({ max, min, now }) => {
  expect(
    num.rootMeanSquareDeviation(...a.fromRange(1, 100).map(now))
  ).toBeWithin(min, max);
});
