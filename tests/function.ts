import { fn } from "@";

test("factoryFromValue", () => {
  expect(fn.factoryFromValue(1)()).toBe(1);
});

test("identity", () => {
  expect(fn.identity(1)).toBe(1);
  expect(fn.identity(2)).toBe(2);
  expect(fn.identity(3)).toBe(3);
});

test("noopTrue", () => {
  expect(fn.noopTrue(1)).toBe(true);
});

test("pipe", () => {
  expect(fn.pipe(10_000, Math.log10, Math.sqrt)).toBe(2);
});

test("run", async () => {
  // eslint-disable-next-line deprecation/deprecation -- Wait for major update
  expect(fn.run(() => true)).toBeTrue();
  // eslint-disable-next-line deprecation/deprecation -- Wait for major update
  await expect(fn.run(resolve)).resolves.toBeUndefined();
  // eslint-disable-next-line deprecation/deprecation -- Wait for major update
  await expect(fn.run(resolve())).resolves.toBeUndefined();

  async function resolve(): Promise<void> {
    await Promise.resolve();
  }
});
