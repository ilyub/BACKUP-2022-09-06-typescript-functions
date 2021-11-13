import * as fn from "@/function";

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
