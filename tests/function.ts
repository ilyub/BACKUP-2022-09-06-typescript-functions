import * as fn from "@/function";
import { wait } from "@/helpers";
import * as testUtils from "@/testUtils";

testUtils.installFakeTimer();

it("doNotRunParallel", async () => {
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
    expect(callback).toBeCalledTimes(5);
    expect(callback).nthCalledWith(1, "value1");
    expect(callback).nthCalledWith(2, "value2");
    expect(callback).nthCalledWith(3, "value3");
    expect(callback).nthCalledWith(4, "value4");
    expect(callback).nthCalledWith(5, "value5");
  });
});

it("pipe", () => {
  expect(fn.pipe(10_000, Math.log10, Math.sqrt)).toStrictEqual(2);
});

it("run", async () => {
  expect(fn.run(() => true)).toBeTrue();
  await expect(fn.run(Promise.resolve())).resolves.toBeUndefined();
  await expect(fn.run(resolve)).resolves.toBeUndefined();

  async function resolve(): Promise<void> {
    await Promise.resolve();
  }
});
