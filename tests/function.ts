import * as fn from "@/function";
import { wait } from "@/helpers";
import * as testUtils from "@/testUtils";

testUtils.installFakeTimer();

test("doNotRunParallel", async () => {
  expect.hasAssertions();

  await testUtils.run(async () => {
    const callback = jest.fn();

    async function f(value: unknown): Promise<void> {
      await wait(1500);
      callback(value);
    }

    const g = fn.doNotRunParallel(f);

    const promise1 = f("value1");

    await wait(2000);

    const promise2 = f("value2");

    await wait(1000);

    const promise3 = f("value3");

    await wait(1000);

    const promise4 = g("value4");

    await wait(2000);

    const promise5 = g("value5");

    await wait(1000);

    const promise6 = g("value6");

    const promises = [
      promise1,
      promise2,
      promise3,
      promise4,
      promise5,
      promise6
    ];

    await Promise.all(promises);
    expect(callback).toHaveBeenCalledTimes(5);
    expect(callback).toHaveBeenNthCalledWith(1, "value1");
    expect(callback).toHaveBeenNthCalledWith(2, "value2");
    expect(callback).toHaveBeenNthCalledWith(3, "value3");
    expect(callback).toHaveBeenNthCalledWith(4, "value4");
    expect(callback).toHaveBeenNthCalledWith(5, "value5");
  });
});

test("identity", () => {
  expect(fn.identity(1)).toBe(1);
  expect(fn.identity(2)).toBe(2);
  expect(fn.identity(3)).toBe(3);
});

test("noop", () => {
  expect(fn.noop()).toBeUndefined();
});

test("pipe", () => {
  expect(fn.pipe(10_000, Math.log10, Math.sqrt)).toBe(2);
});

test("run", async () => {
  expect(fn.run(() => true)).toBeTrue();
  await expect(fn.run(Promise.resolve())).resolves.toBeUndefined();
  await expect(fn.run(resolve)).resolves.toBeUndefined();

  async function resolve(): Promise<void> {
    await Promise.resolve();
  }
});
