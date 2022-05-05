import { wait, programFlow } from "@";
import * as testUtils from "@/test-utils";

testUtils.installFakeTimer();

test("setInterval, clearInterval", async () => {
  expect.hasAssertions();

  await testUtils.run(async () => {
    const callback1 = jest.fn();

    const callback2 = jest.fn();

    const handler1 = programFlow.setInterval(callback1, 2000);

    const handler2 = programFlow.setInterval(callback2, 2000);

    {
      await wait(1000);
      expect(callback1).not.toHaveBeenCalled();
      expect(callback2).not.toHaveBeenCalled();
    }

    {
      await wait(1000);
      expect(callback1).toHaveBeenCalledTimes(1);
      expect(callback2).toHaveBeenCalledTimes(1);
    }

    {
      programFlow.clearInterval(handler1);
      await wait(2000);
      expect(callback1).toHaveBeenCalledTimes(1);
      expect(callback2).toHaveBeenCalledTimes(2);
    }

    programFlow.clearInterval(handler2);
    programFlow.clearInterval(undefined);
  });
});

test("setTimeout, clearTimeout", async () => {
  expect.hasAssertions();

  await testUtils.run(async () => {
    const callback1 = jest.fn();

    const callback2 = jest.fn();

    const handlers1 = programFlow.setTimeout(callback1, 2000);

    const handlers2 = programFlow.setTimeout(callback2, 2000);

    {
      await wait(1000);
      expect(callback1).not.toHaveBeenCalled();
      expect(callback2).not.toHaveBeenCalled();
    }

    {
      programFlow.clearTimeout(handlers1);
      await wait(1000);
      expect(callback1).not.toHaveBeenCalled();
      expect(callback2).toHaveBeenCalledTimes(1);
    }

    {
      await wait(1000);
      expect(callback1).not.toHaveBeenCalled();
      expect(callback2).toHaveBeenCalledTimes(1);
    }

    programFlow.clearTimeout(handlers2);
    programFlow.clearTimeout(undefined);
  });
});
