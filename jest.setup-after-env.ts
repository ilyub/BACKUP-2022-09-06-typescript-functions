import * as testUtils from "./src/testUtils";

declare global {
  namespace configurable {
    interface LocaleName {
      readonly "en-US": true;
    }
  }
}

testUtils.jestSetup();
beforeEach(testUtils.jestReset);

if (JEST_ENV === "jsdom") {
  testUtils.jestSetup.dom();
  beforeEach(testUtils.jestReset.dom);
}
