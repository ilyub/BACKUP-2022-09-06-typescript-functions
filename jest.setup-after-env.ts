import "@skylib/config/src/jest-globals";

import * as testUtils from "./src/testUtils";

testUtils.jestSetup();
beforeEach(testUtils.jestReset);

if (TEST_ENV === "jsdom") {
  testUtils.jestSetup.dom();
  beforeEach(testUtils.jestReset.dom);
}
