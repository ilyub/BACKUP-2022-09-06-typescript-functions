import { wait } from "@/helpers";
import * as testUtils from "@/testUtils";
import * as timer from "@/timer";

testUtils.installFakeTimer();

it("addInterval, removeInterval", async () => {
  await testUtils.run(async () => {
    const callback1 = jest.fn();

    const callback2 = jest.fn();

    const handler1 = timer.addInterval(callback1, 200);

    const handler2 = timer.addInterval(callback2, 200);

    {
      await wait(100);
      expect(callback1).not.toBeCalled();
      expect(callback2).not.toBeCalled();
    }

    {
      await wait(200);
      expect(callback1).toBeCalledTimes(1);
      expect(callback2).toBeCalledTimes(1);
    }

    {
      timer.removeInterval(handler1);
      await wait(200);
      expect(callback1).toBeCalledTimes(1);
      expect(callback2).toBeCalledTimes(2);
    }

    timer.removeInterval(handler2);
    timer.removeInterval(undefined);
  });
});

it("addTimeout, removeTimeout", async () => {
  await testUtils.run(async () => {
    const callback1 = jest.fn();

    const callback2 = jest.fn();

    const handlers1 = timer.addTimeout(callback1, 200);

    const handlers2 = timer.addTimeout(callback2, 200);

    {
      await wait(100);
      expect(callback1).not.toBeCalled();
      expect(callback2).not.toBeCalled();
    }

    {
      timer.removeTimeout(handlers1);
      await wait(200);
      expect(callback1).not.toBeCalled();
      expect(callback2).toBeCalledTimes(1);
    }

    {
      await wait(200);
      expect(callback1).not.toBeCalled();
      expect(callback2).toBeCalledTimes(1);
    }

    timer.removeTimeout(undefined);
    timer.removeTimeout(handlers2);
  });
});
