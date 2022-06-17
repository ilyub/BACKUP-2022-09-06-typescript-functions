import * as testUtils from "@/test-utils";

test.each([true, false])("buildResult", immediate => {
  const result = testUtils.buildResult(false, "Message", 1, 2, immediate);

  expect(result.pass).toBeFalse();
  expect(result.message()).toStartWith("Message:\n");
});
