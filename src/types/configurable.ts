/* eslint-disable @skylib/only-export-name -- Ok */

import type { PickKeys } from "./object";

declare global {
  namespace configurable {
    interface LocaleName {
      readonly _placeholder?: never;
    }
  }
}

export type LocaleName = PickKeys<configurable.LocaleName, true, "extends->">;
