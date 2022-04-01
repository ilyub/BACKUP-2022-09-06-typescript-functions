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

test("getClock", () => {
  expect(testUtils.getClock()).toBeObject();
});

test("jestReset", () => {
  const callback = jest.fn();

  callback();
  expect(callback).toHaveBeenCalledTimes(1);
  testUtils.jestReset();
  expect(callback).not.toHaveBeenCalled();
});

test("jestReset.dom", () => {
  {
    // eslint-disable-next-line github/no-inner-html
    document.body.innerHTML = "<div></div>";
    testUtils.jestReset.dom();
    // eslint-disable-next-line github/no-inner-html
    expect(document.body.innerHTML).toBe("");
  }
});

test("run", async () => {
  await expect(testUtils.run(testResolve)).resolves.toBeUndefined();
});

test("setRandomSystemTime", () => {
  expect(testUtils.setRandomSystemTime).not.toThrow();
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
    const result = testUtils.toBeSameAs([], []);

    expect(result.pass).toBeFalse();
    expect(result.message()).toBe("Expected the same object");
  }

  {
    const obj1 = { x: 1 };

    const obj2 = { x: 1 };

    expect(obj1).not.toBeSameAs(obj2);
    expect(obj1).toStrictEqual(obj2);
  }
});
