import type { Equals } from "ts-toolbelt/out/Any/Equals";
import type { If } from "ts-toolbelt/out/Any/If";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";
import type { ReadonlyKeys } from "ts-toolbelt/out/Object/ReadonlyKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { WritableKeys } from "ts-toolbelt/out/Object/WritableKeys";
export declare type AddPrefix<T extends string, P extends string> = `${P}${T}`;
export declare type ArrayElement<T> = T extends Array<infer R> ? R : unknown;
export declare type Async<R, A extends unknown[] = never[]> = (...args: A) => Promise<R>;
export declare type CallSignature<T extends Callable> = (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>;
export declare type Callable<T = any> = (...args: any[]) => T;
export declare type ConstructSignature<T extends Constructor> = new (...args: ConstructorParameters<T>) => InstanceType<T>;
export declare type Constructor<T = any> = new (...args: any[]) => T;
export declare type DeclaredKeys<T extends object> = PropertyKey & DefinedKeys<T> & RequiredKeys<T>;
export declare type DeepPartial<T> = DeepPartial1<T>;
export declare type DeepReadonly<T> = DeepReadonly1<T>;
export declare type DeepWritable<T> = DeepWritable1<T>;
export declare type Defined<T> = Exclude<T, undefined>;
export declare type DefinedKeys<T extends object> = FilterKeys<T, undefined, "<-extends">;
export declare type Entry<T> = readonly [keyof T, T[keyof T]];
export declare type Equal<A, B, C, D> = If<Equals<A, B>, C, D>;
export declare type IndexedObject<T = unknown> = Record<PropertyKey, T>;
export declare type Interval = ReturnType<typeof setInterval>;
export declare type IterableLike<T> = Iterable<T> | (() => Iterable<T>);
export declare type Join2<A extends object, B extends object> = keyof A extends never ? B : keyof B extends never ? A : A & B;
export declare type Join3<A extends object, B extends object, C extends object> = keyof A extends never ? Join2<B, C> : A & Join2<B, C>;
export declare type Join4<A extends object, B extends object, C extends object, D extends object> = keyof A extends never ? Join3<B, C, D> : A & Join3<B, C, D>;
export declare type KeysOfType<T, V> = KeysOfType1<T, V>;
export declare type NumStr = number | string;
export declare type NumStrE = NumStr | empty;
export declare type NumStrU = NumStr | undefined;
export declare type PartialRecord<K extends PropertyKey, T> = Partial<Record<K, T>>;
export declare type PromiseAsync<T> = Promise<T> | Async<T>;
export declare type PromiseAsyncSync<T> = Promise<T> | Async<T> | Sync<T>;
export declare type ReadonlyArrayElement<T> = T extends ReadonlyArray<infer R> ? R : unknown;
export declare type ReadonlyDeclaredKeys<T extends object> = PropertyKey & ReadonlyKeys<T> & DeclaredKeys<T>;
export declare type ReadonlyIndexedObject<T = unknown> = Readonly<IndexedObject<T>>;
export declare type ReadonlyPartialRecord<K extends PropertyKey, T> = Readonly<PartialRecord<K, T>>;
export declare type ReadonlyRecord<K extends PropertyKey, T> = Readonly<Record<K, T>>;
export declare type ReadonlyUndeclaredKeys<T extends object> = PropertyKey & ReadonlyKeys<T> & UndeclaredKeys<T>;
export declare type RemovePrefix<T extends string, P extends string> = T extends `${P}${infer R}` ? R : never;
export declare type StrictOmit<T extends object, K extends keyof T> = Omit<T, K> & {
    [L in K]?: never;
};
export declare type StrictPartial<T extends object> = Join2<{
    [K in WritableKeys<T>]+?: T[K];
}, {
    readonly [K in ReadonlyKeys<T>]+?: T[K];
}>;
export declare type StrictRequired<T extends object> = Join2<{
    [K in WritableKeys<T>]-?: T[K];
}, {
    readonly [K in ReadonlyKeys<T>]-?: T[K];
}>;
export declare type Sync<R, A extends unknown[] = never[]> = (...args: A) => R;
export declare type Timeout = ReturnType<typeof setTimeout>;
export declare type UndeclaredKeys<T extends object> = Exclude<keyof T, DeclaredKeys<T>>;
export declare type UndefinedKeys<T extends object> = Exclude<keyof T, DefinedKeys<T>>;
export declare type ValidationObject<T extends PropertyKey> = ReadonlySet<T>;
export declare type WithOptionalKeys<T extends object> = Join4<{
    [K in WritableDeclaredKeys<T>]: T[K];
}, {
    [K in WritableUndeclaredKeys<T>]?: Defined<T[K]>;
}, {
    readonly [K in ReadonlyDeclaredKeys<T>]: T[K];
}, {
    readonly [K in ReadonlyUndeclaredKeys<T>]?: Defined<T[K]>;
}>;
export declare type WithUndeclaredKeys<T extends object> = Join4<{
    [K in WritableDeclaredKeys<T>]: T[K];
}, {
    [K in WritableUndeclaredKeys<T>]?: T[K] | undefined;
}, {
    readonly [K in ReadonlyDeclaredKeys<T>]: T[K];
}, {
    readonly [K in ReadonlyUndeclaredKeys<T>]?: T[K] | undefined;
}>;
export declare type WithUndefinedKeys<T extends object> = Join4<{
    [K in WritableDeclaredKeys<T>]: T[K];
}, {
    [K in WritableUndeclaredKeys<T>]: T[K] | undefined;
}, {
    readonly [K in ReadonlyDeclaredKeys<T>]: T[K];
}, {
    readonly [K in ReadonlyUndeclaredKeys<T>]: T[K] | undefined;
}>;
export declare type Writable<T> = {
    -readonly [K in keyof T]: T[K];
};
export declare type WritableDeclaredKeys<T extends object> = PropertyKey & WritableKeys<T> & DeclaredKeys<T>;
export declare type WritableUndeclaredKeys<T extends object> = PropertyKey & WritableKeys<T> & UndeclaredKeys<T>;
export declare type booleanE = boolean | empty;
export declare type booleanU = boolean | undefined;
export declare type empty = null | undefined;
export declare type numberE = number | empty;
export declare type numberU = number | undefined;
export declare type objectE = object | empty;
export declare type objectU = object | undefined;
export declare type stringE = string | empty;
export declare type stringU = string | undefined;
/**
 * Creates validation object.
 *
 * @param source - Source.
 * @returns Validation object.
 */
export declare function createValidationObject<T extends PropertyKey>(source: ReadonlyRecord<T, T>): ValidationObject<T>;
declare type DeepPartial1<T> = T extends object ? DeepPartial2<T> : T;
declare type DeepPartial2<T> = T extends Callable ? T : DeepPartial3<T>;
declare type DeepPartial3<T> = T extends Constructor ? T : DeepPartial4<T>;
declare type DeepPartial4<T> = T extends unknown[] ? T : DeepPartial5<T>;
declare type DeepPartial5<T> = {
    [K in keyof T]?: DeepPartial1<T[K]>;
};
declare type DeepReadonly1<T> = T extends object ? DeepReadonly2<T> : T;
declare type DeepReadonly2<T> = keyof T extends never ? T : DeepReadonly3<T>;
declare type DeepReadonly3<T> = DeepReadonly4<T> & DeepReadonly5<T> & DeepReadonly6<T>;
declare type DeepReadonly4<T> = T extends Callable ? (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T> : unknown;
declare type DeepReadonly5<T> = T extends Constructor ? new (...args: ConstructorParameters<T>) => InstanceType<T> : unknown;
declare type DeepReadonly6<T> = T extends object ? {
    readonly [K in keyof T]: DeepReadonly1<T[K]>;
} : unknown;
declare type DeepWritable1<T> = T extends object ? DeepWritable2<T> : T;
declare type DeepWritable2<T> = keyof T extends never ? T : DeepWritable3<T>;
declare type DeepWritable3<T> = DeepWritable4<T> & DeepWritable5<T> & DeepWritable6<T>;
declare type DeepWritable4<T> = T extends Callable ? (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T> : unknown;
declare type DeepWritable5<T> = T extends Constructor ? new (...args: ConstructorParameters<T>) => InstanceType<T> : unknown;
declare type DeepWritable6<T> = T extends object ? {
    -readonly [K in keyof T]: DeepWritable1<T[K]>;
} : unknown;
declare type KeysOfType1<T, V> = KeysOfType2<T, V>[keyof T];
declare type KeysOfType2<T, V> = {
    readonly [K in keyof T]: Equal<T[K], V, K, never>;
};
export {};
//# sourceMappingURL=core.d.ts.map