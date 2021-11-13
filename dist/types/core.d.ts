import type { Equals } from "ts-toolbelt/out/Any/Equals";
import type { If } from "ts-toolbelt/out/Any/If";
export declare type Async<T> = () => Promise<T>;
export declare type CallSignature<T extends Callable> = (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>;
export declare type Callable<T = any> = (...args: any[]) => T;
export declare type Constructor<T = any> = new (...args: any[]) => T;
export declare type ConstructSignature<T extends Constructor> = new (...args: ConstructorParameters<T>) => InstanceType<T>;
export declare type DeepPartial<T> = DeepPartial1<T>;
export declare type DeepReadonly<T> = DeepReadonly1<T>;
export declare type DeepWritable<T> = DeepWritable1<T>;
export declare type Equal<A, B, C, D> = If<Equals<A, B>, C, D>;
export declare type Entry<T> = readonly [keyof T, T[keyof T]];
export declare type IndexedObject<T = unknown> = Record<PropertyKey, T>;
export declare type IterableOrFn<T> = Iterable<T> | (() => Iterable<T>);
export declare type Interval = ReturnType<typeof setInterval>;
export declare type KeysOfType<T, V> = KeysOfType1<T, V>;
export declare type NumStr = number | string;
export declare type Optional<T> = {
    [K in keyof T]?: T[K];
};
export declare type PartialRecord<K extends PropertyKey, T> = Partial<Record<K, T>>;
export declare type PromiseAsync<T> = Promise<T> | Async<T>;
export declare type PromiseAsyncSync<T> = Promise<T> | Async<T> | Sync<T>;
export declare type ReadonlyIndexedObject<T = unknown> = Readonly<IndexedObject<T>>;
export declare type ReadonlyPartialRecord<K extends PropertyKey, T> = Readonly<PartialRecord<K, T>>;
export declare type ReadonlyRecord<K extends PropertyKey, T> = Readonly<Record<K, T>>;
export declare type SafeOmit<T extends object, K extends keyof T> = SafeOmit1<T, K>;
export declare type Sync<T> = () => T;
export declare type Timeout = ReturnType<typeof setTimeout>;
export declare type UndefinedToOptional<T extends object> = UndefinedToOptional1<T>;
export declare type ValidationObject<T extends PropertyKey> = ReadonlySet<T>;
export declare type Writable<T> = {
    -readonly [K in keyof T]: T[K];
};
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
declare type SafeOmit1<T extends object, K extends keyof T> = SafeOmit2<T, K> & SafeOmit3<T, K>;
declare type SafeOmit2<T extends object, K extends keyof T> = {
    [L in Exclude<keyof T, K>]: T[L];
};
declare type SafeOmit3<T extends object, K extends keyof T> = {
    [L in K]?: never;
};
declare type UndefinedToOptional1<T extends object> = UndefinedToOptional2<T> & UndefinedToOptional3<T>;
declare type UndefinedToOptional2<T extends object> = {
    [K in UndefinedToOptional4<T>]: T[K];
};
declare type UndefinedToOptional3<T extends object> = {
    [K in UndefinedToOptional5<T>]?: Exclude<T[K], undefined>;
};
declare type UndefinedToOptional4<T extends object> = {
    [K in keyof T]: undefined extends T[K] ? never : K;
}[keyof T];
declare type UndefinedToOptional5<T extends object> = {
    [K in keyof T]: undefined extends T[K] ? K : never;
}[keyof T];
export {};
//# sourceMappingURL=core.d.ts.map