import type { ReadonlyDefinedKeys, ReadonlyUndefinedKeys, WritableDefindKeys, WritableUndefindKeys } from "./objectKeys";
export declare type Join2<A extends object, B extends object> = keyof A extends never ? B : keyof B extends never ? A : A & B;
export declare type Join3<A extends object, B extends object, C extends object> = keyof A extends never ? Join2<B, C> : A & Join2<B, C>;
export declare type Join4<A extends object, B extends object, C extends object, D extends object> = keyof A extends never ? Join3<B, C, D> : A & Join3<B, C, D>;
export declare type OptionalPropertiesToOptional<T extends object> = Join4<{
    [K in WritableDefindKeys<T>]: T[K];
}, {
    [K in WritableUndefindKeys<T>]?: Exclude<T[K], undefined>;
}, {
    readonly [K in ReadonlyDefinedKeys<T>]: T[K];
}, {
    readonly [K in ReadonlyUndefinedKeys<T>]?: Exclude<T[K], undefined>;
}>;
export declare type OptionalPropertiesToOptionalUndefined<T extends object> = Join4<{
    [K in WritableDefindKeys<T>]: T[K];
}, {
    [K in WritableUndefindKeys<T>]?: T[K] | undefined;
}, {
    readonly [K in ReadonlyDefinedKeys<T>]: T[K];
}, {
    readonly [K in ReadonlyUndefinedKeys<T>]?: T[K] | undefined;
}>;
export declare type OptionalPropertiesToUndefined<T extends object> = Join4<{
    [K in WritableDefindKeys<T>]: T[K];
}, {
    [K in WritableUndefindKeys<T>]: T[K] | undefined;
}, {
    readonly [K in ReadonlyDefinedKeys<T>]: T[K];
}, {
    readonly [K in ReadonlyUndefinedKeys<T>]: T[K] | undefined;
}>;
export declare type StrictOmit<T extends object, K extends keyof T> = Omit<T, K> & {
    [L in K]?: never;
};
//# sourceMappingURL=object.d.ts.map