import type { PickKeys } from "./object";
declare global {
    namespace configurable {
        interface LocaleName {
            readonly _placeholder?: never;
        }
    }
}
export declare type LocaleName = PickKeys<configurable.LocaleName, true, "extends->">;
//# sourceMappingURL=configurable.d.ts.map