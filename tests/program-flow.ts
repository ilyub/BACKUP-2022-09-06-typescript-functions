/* eslint jest/max-expects: [warn, { max: 4 }] -- Ok */

import * as testUtils from "@/test-utils";
import { programFlow, wait } from "@";

testUtils.installFakeTimer();

test("clearInterval", async () => {
  expect.hasAssertions();

  await testUtils.run(async () => {
    const callback = jest.fn();

    const handler = programFlow.setInterval(callback, 2000);

    await wait(1000);
    programFlow.clearInterval(handler);
    await wait(2000);
    expect(callback).mockCallsToBe();
  });
});

test("clearTimeout", async () => {
  expect.hasAssertions();

  await testUtils.run(async () => {
    const callback = jest.fn();

    const handlers = programFlow.setTimeout(callback, 2000);

    await wait(1000);
    programFlow.clearTimeout(handlers);
    await wait(2000);
    expect(callback).mockCallsToBe();
  });
});

test("setInterval", async () => {
  expect.hasAssertions();

  await testUtils.run(async () => {
    const callback = jest.fn();

    const handler = programFlow.setInterval(callback, 2000);

    await wait(1000);
    expect(callback).mockCallsToBe();
    await wait(1000);
    expect(callback).mockCallsToBe([]);
    await wait(2000);
    expect(callback).mockCallsToBe([]);
    programFlow.clearInterval(handler);
    await wait(2000);
    expect(callback).mockCallsToBe();
  });
});

test("setTimeout", async () => {
  expect.hasAssertions();

  await testUtils.run(async () => {
    const callback = jest.fn();

    const handlers = programFlow.setTimeout(callback, 2000);

    await wait(1000);
    expect(callback).mockCallsToBe();
    await wait(1000);
    expect(callback).mockCallsToBe([]);
    await wait(2000);
    expect(callback).mockCallsToBe();
    programFlow.clearTimeout(handlers);
    await wait(2000);
    expect(callback).mockCallsToBe();
  });
});
