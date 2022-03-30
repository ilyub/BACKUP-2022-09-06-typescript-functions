import * as testUtils from "./src/testUtils";

testUtils.jestSetup();
testUtils.jestSetup.dom();
beforeEach(testUtils.jestReset);
beforeEach(testUtils.jestReset.dom);
