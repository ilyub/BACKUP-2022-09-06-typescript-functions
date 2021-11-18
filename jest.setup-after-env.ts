import * as testUtils from "./src/testUtils";

testUtils.jestSetup();
beforeEach(testUtils.jestReset);

if (JEST_ENV === "jsdom") {
  testUtils.jestSetup.dom();
  beforeEach(testUtils.jestReset.dom);
}
