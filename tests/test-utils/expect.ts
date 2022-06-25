import * as testUtils from "@/test-utils";

test.each([
  {
    expected: 1,
    got: 1,
    immediate: true,
    pass: true
  },
  {
    expected: 2,
    got: 1,
    immediate: false,
    pass: false
  }
])("buildEqualsMatcherResult", ({ expected, got, immediate, pass }) => {
  const result = testUtils.buildEqualsMatcherResult(
    got === expected,
    "Message",
    got,
    expected,
    immediate
  );

  expect(result.pass).toStrictEqual(pass);
  expect(result.message()).toStartWith("Message:\n");
});

test.each([
  { message: "Expect failure", pass: true },
  { message: "Expect success", pass: false }
])("buildMatcherResult", ({ message, pass }) => {
  const result = testUtils.buildMatcherResult(
    pass,
    "Expect success",
    "Expect failure"
  );

  expect(result.pass).toStrictEqual(pass);
  expect(result.message()).toStrictEqual(message);
});
