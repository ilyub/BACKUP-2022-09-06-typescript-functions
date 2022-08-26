/* eslint-disable @skylib/only-export-name -- Ok */

import type * as keys from "./object.keys";

export type LocaleName = keys.Pick<configurable.LocaleName, true, "extends->">;

declare global {
  namespace configurable {
    // eslint-disable-next-line @skylib/typescript/no-empty-interfaces -- Ok
    interface LocaleName {}
  }
}
