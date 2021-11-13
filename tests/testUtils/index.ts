/**
 * @jest-environment @skylib/config/src/jest-env-jsdom
 */
import $ from "jquery";

import * as testUtils from "@/testUtils";

async function testResolve(): Promise<void> {
  await Promise.resolve();
}

testUtils.installFakeTimer({ shouldAdvanceTime: false });

it("executionTimeToBeWithin", async () => {
  {
    const result = await testUtils.executionTimeToBeWithin(testResolve, 0, 1);

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(
      "Expected callback execution time (0 ms) not to be within [0, 1] ms"
    );
  }

  {
    const result = await testUtils.executionTimeToBeWithin(testResolve, 1, 2);

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(
      "Expected callback execution time (0 ms) to be within [1, 2] ms"
    );
  }
});

it("executionTimeToEqual", async () => {
  {
    const result = await testUtils.executionTimeToEqual(testResolve, 0);

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(
      "Expected callback execution time not to be 0 ms"
    );
  }

  {
    const result = await testUtils.executionTimeToEqual(testResolve, 1);

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(
      "Expected callback execution time (0 ms) to be 1 ms"
    );
  }
});

it("getClock", () => {
  expect(testUtils.getClock()).toBeObject();
});

it("htmlToEqual", () => {
  const jq = $("<div>").append($("<div>").html("sample-text"));

  for (const result of [
    testUtils.htmlToEqual(jq, "<div>sample-text</div>"),
    testUtils.htmlToEqual(jq.get(0), "<div>sample-text</div>")
  ]) {
    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(
      'Expected HTML code not to be "<div>sample-text</div>"'
    );
  }

  for (const result of [
    testUtils.htmlToEqual(jq, "<div>sample-text-2</div>"),
    testUtils.htmlToEqual(jq.get(0), "<div>sample-text-2</div>")
  ]) {
    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(
      'Expected HTML code to be "<div>sample-text-2</div>", got "<div>sample-text</div>"'
    );
  }

  expect(() => testUtils.htmlToEqual(1, "")).toThrow(
    new Error("Missing html method")
  );
});

it("jestReset", () => {
  const callback = jest.fn();

  callback();
  expect(callback).toBeCalledTimes(1);
  testUtils.jestReset();
  expect(callback).not.toBeCalled();
});

it("jestReset.dom", () => {
  {
    document.body.innerHTML = "<div></div>";
    testUtils.jestReset.dom();
    expect(document.body.innerHTML).toStrictEqual("");
  }

  {
    expect($("<div>").is(":visible")).toBeTrue();
  }
});

it("run", async () => {
  await expect(testUtils.run(testResolve)).resolves.toBeUndefined();
});

it("setRandomSystemTime", () => {
  testUtils.setRandomSystemTime();
});

it("textToEqual", () => {
  const jq = $("<div>").html("sample-text");

  for (const result of [
    testUtils.textToEqual(jq, "sample-text"),
    testUtils.textToEqual(jq.get(0), "sample-text")
  ]) {
    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(
      'Expected text not to be "sample-text"'
    );
  }

  for (const result of [
    testUtils.textToEqual(jq, "sample-text-2"),
    testUtils.textToEqual(jq.get(0), "sample-text-2")
  ]) {
    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(
      'Expected text to be "sample-text-2", got "sample-text"'
    );
  }

  expect(() => testUtils.textToEqual(1, "")).toThrow(
    new Error("Missing text method")
  );
});

it("toBeSameAs", () => {
  {
    const arr1 = [1];

    const arr2 = arr1;

    const result = testUtils.toBeSameAs(arr1, arr2);

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual("Expected not the same object");
  }

  {
    const result = testUtils.toBeSameAs([], []);

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual("Expected the same object");
  }
});
