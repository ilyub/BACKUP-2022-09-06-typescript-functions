import type { ReadonlyDefined, ReadonlyUndefined, WritableDefined, WritableUndefined } from "./object.keys";
import type { And } from "./core";
export declare type Optional<T extends object> = And<{
    [K in WritableDefined<T>]: T[K];
}, {
    [K in WritableUndefined<T>]?: Exclude<T[K], undefined>;
}, {
    readonly [K in ReadonlyDefined<T>]: T[K];
}, {
    readonly [K in ReadonlyUndefined<T>]?: Exclude<T[K], undefined>;
}>;
export declare type OptionalUndefined<T extends object> = And<{
    [K in WritableDefined<T>]: T[K];
}, {
    [K in WritableUndefined<T>]?: T[K] | undefined;
}, {
    readonly [K in ReadonlyDefined<T>]: T[K];
}, {
    readonly [K in ReadonlyUndefined<T>]?: T[K] | undefined;
}>;
export declare type Undefined<T extends object> = And<{
    [K in WritableDefined<T>]: T[K];
}, {
    [K in WritableUndefined<T>]: T[K] | undefined;
}, {
    readonly [K in ReadonlyDefined<T>]: T[K];
}, {
    readonly [K in ReadonlyUndefined<T>]: T[K] | undefined;
}>;
//# sourceMappingURL=object.style.d.ts.map