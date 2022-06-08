import { evaluate } from "@";

test("evaluate", async () => {
  expect(evaluate(() => true)).toBeTrue();
  await expect(evaluate(resolve)).resolves.toBeUndefined();
  await expect(evaluate(resolve())).resolves.toBeUndefined();

  async function resolve(): Promise<void> {
    await Promise.resolve();
  }
});
