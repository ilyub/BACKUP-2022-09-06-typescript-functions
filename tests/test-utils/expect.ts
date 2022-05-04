import {
  executionTimeToBe,
  toBeSameAs
  // eslint-disable-next-line import/no-internal-modules -- Ok
} from "@/test-utils/expect";

async function testResolve(): Promise<void> {
  await Promise.resolve();
}

test("executionTimeToBe", async () => {
  {
    const result = await executionTimeToBe(testResolve, 0);

    const expected = "Expected callback execution time not to be 0 ms";

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(expected);
  }

  {
    const result = await executionTimeToBe(testResolve, 1);

    const expected = "Expected callback execution time (0 ms) to be 1 ms";

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(expected);
  }
});

test("toBeSameAs", () => {
  {
    const arr1 = [1];

    const arr2 = arr1;

    const result = toBeSameAs(arr1, arr2);

    const expected = "Expected not the same object";

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(expected);
  }

  {
    const arr1 = [1];

    const arr2 = [1];

    const result = toBeSameAs(arr1, arr2);

    const expected = "Expected the same object";

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(expected);
  }
});
