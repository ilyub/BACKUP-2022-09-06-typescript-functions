import * as fn from "@/function";

test("identity", () => {
  expect(fn.identity(1)).toBe(1);
  expect(fn.identity(2)).toBe(2);
  expect(fn.identity(3)).toBe(3);
});

test("pipe", () => {
  expect(fn.pipe(10_000, Math.log10, Math.sqrt)).toBe(2);
});

test("run", async () => {
  expect(fn.run(() => true)).toBeTrue();
  await expect(fn.run(resolve)).resolves.toBeUndefined();
  await expect(fn.run(resolve())).resolves.toBeUndefined();

  async function resolve(): Promise<void> {
    await Promise.resolve();
  }
});
