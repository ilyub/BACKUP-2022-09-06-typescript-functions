import type { PickKeys } from "./object";

declare global {
  namespace configurable {
    interface LocaleName {
      readonly _placeholder?: never;
    }
  }
}

// eslint-disable-next-line @skylib/only-export-name -- Ok
export type LocaleName = PickKeys<configurable.LocaleName, true, "extends->">;
