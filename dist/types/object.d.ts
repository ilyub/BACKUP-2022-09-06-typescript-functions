import type { ReadonlyDefinedKeys, ReadonlyUndefinedKeys, WritableDefindKeys, WritableUndefindKeys } from "./object-keys";
import type { Equals } from "ts-toolbelt/out/Any/Equals";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";
import type { If } from "ts-toolbelt/out/Any/If";
import type { Match } from "ts-toolbelt/out/Any/_Internal";
export declare type Empty<T extends object> = Equals<keyof T, never>;
export declare type Join2<A extends object, B extends object> = If<Empty<A>, B, If<Empty<B>, A, A & B>>;
export declare type Join3<A extends object, B extends object, C extends object> = If<Empty<A>, Join2<B, C>, A & Join2<B, C>>;
export declare type Join4<A extends object, B extends object, C extends object, D extends object> = If<Empty<A>, Join3<B, C, D>, A & Join3<B, C, D>>;
export declare type OptionalStyle<T extends object> = Join4<{
    [K in WritableDefindKeys<T>]: T[K];
}, {
    [K in WritableUndefindKeys<T>]?: Exclude<T[K], undefined>;
}, {
    readonly [K in ReadonlyDefinedKeys<T>]: T[K];
}, {
    readonly [K in ReadonlyUndefinedKeys<T>]?: Exclude<T[K], undefined>;
}>;
export declare type OptionalUndefinedStyle<T extends object> = Join4<{
    [K in WritableDefindKeys<T>]: T[K];
}, {
    [K in WritableUndefindKeys<T>]?: T[K] | undefined;
}, {
    readonly [K in ReadonlyDefinedKeys<T>]: T[K];
}, {
    readonly [K in ReadonlyUndefinedKeys<T>]?: T[K] | undefined;
}>;
export declare type PickKeys<T extends object, E, M extends Match = "default"> = Exclude<keyof T, FilterKeys<T, E, M>>;
export declare type StrictOmit<T extends object, K extends keyof T> = Omit<T, K> & {
    [L in K]?: never;
};
export declare type UndefinedStyle<T extends object> = Join4<{
    [K in WritableDefindKeys<T>]: T[K];
}, {
    [K in WritableUndefindKeys<T>]: T[K] | undefined;
}, {
    readonly [K in ReadonlyDefinedKeys<T>]: T[K];
}, {
    readonly [K in ReadonlyUndefinedKeys<T>]: T[K] | undefined;
}>;
//# sourceMappingURL=object.d.ts.map