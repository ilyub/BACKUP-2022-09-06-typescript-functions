/* eslint-disable @skylib/only-export-name -- Ok */

import type {
  // eslint-disable-next-line @typescript-eslint/no-shadow -- Ok
  Pick
} from "./object.keys";

declare global {
  namespace configurable {
    // eslint-disable-next-line @skylib/custom/no-empty-interface -- Ok
    interface LocaleName {}
  }
}

export type LocaleName = Pick<configurable.LocaleName, true, "extends->">;
