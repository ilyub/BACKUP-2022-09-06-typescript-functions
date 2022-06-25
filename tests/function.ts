import { fn } from "@";

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
  // eslint-disable-next-line deprecation/deprecation -- Wait for next major version
  expect(fn.run(() => true)).toBeTrue();
  // eslint-disable-next-line deprecation/deprecation -- Wait for next major version
  await expect(fn.run(resolve)).resolves.toBeUndefined();
  // eslint-disable-next-line deprecation/deprecation -- Wait for next major version
  await expect(fn.run(resolve())).resolves.toBeUndefined();

  async function resolve(): Promise<void> {
    await Promise.resolve();
  }
});

test("valueToGenerator", () => {
  expect(fn.valueToGenerator(1)()).toBe(1);
});
