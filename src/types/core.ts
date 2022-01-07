/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[types.core] */

import type { Equals } from "ts-toolbelt/out/Any/Equals";
import type { If } from "ts-toolbelt/out/Any/If";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";
import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { ReadonlyKeys } from "ts-toolbelt/out/Object/ReadonlyKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { WritableKeys } from "ts-toolbelt/out/Object/WritableKeys";

export type AddPrefix<T extends string, P extends string> = `${P}${T}`;

export type ArrayElement<T extends readonly unknown[]> = T extends Array<
  infer R
>
  ? R
  : unknown;

export type Async<R, A extends unknown[] = never[]> = (
  ...args: A
) => Promise<R>;

export type CallSignature<T extends Callable> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Callable<T = any> = (...args: any[]) => T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = any> = new (...args: any[]) => T;

export type ConstructSignature<T extends Constructor> = new (
  ...args: ConstructorParameters<T>
) => InstanceType<T>;

export type DeepPartial<T> = DeepPartial1<T>;

export type DeepReadonly<T> = DeepReadonly1<T>;

export type DeepWritable<T> = DeepWritable1<T>;

export type DefinedKeys<T extends object> = FilterKeys<
  T,
  undefined,
  "<-extends"
>;

export type Equal<A, B, C, D> = If<Equals<A, B>, C, D>;

export type Entry<T> = readonly [keyof T, T[keyof T]];

// eslint-disable-next-line @skylib/prefer-readonly
export type IndexedObject<T = unknown> = Record<PropertyKey, T>;

export type IterableOrFn<T> = Iterable<T> | (() => Iterable<T>);

// eslint-disable-next-line @skylib/disallow-identifier
export type Interval = ReturnType<typeof setInterval>;

export type KeysOfType<T, V> = KeysOfType1<T, V>;

export type NumStr = number | string;

export type NumStrE = NumStr | empty;

export type NumStrU = NumStr | undefined;

export type OptionalToUndefined<T extends object> = Join4<
  { readonly [K in OptionalKeys<T> & ReadonlyKeys<T>]: T[K] | undefined },
  { [K in Exclude<OptionalKeys<T>, ReadonlyKeys<T>>]: T[K] | undefined },
  { readonly [K in RequiredKeys<T> & ReadonlyKeys<T>]: T[K] },
  { [K in Exclude<RequiredKeys<T>, ReadonlyKeys<T>>]: T[K] }
>;

export type Partial2<T extends object> = Join2<
  { readonly [K in ReadonlyKeys<T>]+?: T[K] },
  { [K in WritableKeys<T>]+?: T[K] }
>;

// eslint-disable-next-line @skylib/prefer-readonly
export type PartialRecord<K extends PropertyKey, T> = Partial<Record<K, T>>;

export type PromiseAsync<T> = Promise<T> | Async<T>;

export type PromiseAsyncSync<T> = Promise<T> | Async<T> | Sync<T>;

export type ReadonlyArrayElement<T extends readonly unknown[]> =
  T extends ReadonlyArray<infer R> ? R : unknown;

export type ReadonlyIndexedObject<T = unknown> = Readonly<IndexedObject<T>>;

export type ReadonlyPartialRecord<K extends PropertyKey, T> = Readonly<
  PartialRecord<K, T>
>;

export type ReadonlyRecord<K extends PropertyKey, T> = Readonly<Record<K, T>>;

export type RemovePrefix<
  T extends string,
  P extends string
> = T extends `${P}${infer R}` ? R : never;

export type Required2<T extends object> = Join2<
  { readonly [K in ReadonlyKeys<T>]-?: T[K] },
  { [K in WritableKeys<T>]-?: T[K] }
>;

// eslint-disable-next-line @skylib/prefer-readonly
export type SafeOmit<T extends object, K extends keyof T> = Omit<T, K> & {
  [L in K]?: never;
};

export type Sync<T> = () => T;

// eslint-disable-next-line @skylib/disallow-identifier
export type Timeout = ReturnType<typeof setTimeout>;

export type UndefinedKeys<T extends object> = Exclude<keyof T, DefinedKeys<T>>;

export type UndefinedToOptional<T extends object> = Join4<
  { readonly [K in DefinedKeys<T> & ReadonlyKeys<T>]: T[K] },
  { [K in Exclude<DefinedKeys<T>, ReadonlyKeys<T>>]: T[K] },
  {
    readonly [K in UndefinedKeys<T> & ReadonlyKeys<T>]?: Exclude<
      T[K],
      undefined
    >;
  },
  {
    [K in Exclude<UndefinedKeys<T>, ReadonlyKeys<T>>]?: Exclude<
      T[K],
      undefined
    >;
  }
>;

export type ValidationObject<T extends PropertyKey> = ReadonlySet<T>;

// eslint-disable-next-line @skylib/prefer-readonly
export type Writable<T> = { -readonly [K in keyof T]: T[K] };

export type booleanE = boolean | empty;

export type booleanU = boolean | undefined;

export type empty = null | undefined;

export type numberE = number | empty;

export type numberU = number | undefined;

export type objectE = object | empty;

export type objectU = object | undefined;

export type stringE = string | empty;

export type stringU = string | undefined;

/**
 * Creates validation object.
 *
 * @param source - Source.
 * @returns Validation object.
 */
export function createValidationObject<T extends PropertyKey>(
  source: ReadonlyRecord<T, T>
): ValidationObject<T> {
  if (Object.entries(source).every(([key, value]) => key === String(value)))
    return new Set(Object.values(source));

  throw new Error("Invalid source");
}

/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/

type DeepPartial1<T> = T extends object ? DeepPartial2<T> : T;

type DeepPartial2<T> = T extends Callable ? T : DeepPartial3<T>;

type DeepPartial3<T> = T extends Constructor ? T : DeepPartial4<T>;

type DeepPartial4<T> = T extends unknown[] ? T : DeepPartial5<T>;

// eslint-disable-next-line @skylib/prefer-readonly
type DeepPartial5<T> = { [K in keyof T]?: DeepPartial1<T[K]> };

type DeepReadonly1<T> = T extends object ? DeepReadonly2<T> : T;

type DeepReadonly2<T> = keyof T extends never ? T : DeepReadonly3<T>;

type DeepReadonly3<T> = DeepReadonly4<T> & DeepReadonly5<T> & DeepReadonly6<T>;

type DeepReadonly4<T> = T extends Callable
  ? (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>
  : unknown;

type DeepReadonly5<T> = T extends Constructor
  ? new (...args: ConstructorParameters<T>) => InstanceType<T>
  : unknown;

type DeepReadonly6<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly1<T[K]> }
  : unknown;

type DeepWritable1<T> = T extends object ? DeepWritable2<T> : T;

type DeepWritable2<T> = keyof T extends never ? T : DeepWritable3<T>;

type DeepWritable3<T> = DeepWritable4<T> & DeepWritable5<T> & DeepWritable6<T>;

type DeepWritable4<T> = T extends Callable
  ? (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>
  : unknown;

type DeepWritable5<T> = T extends Constructor
  ? new (...args: ConstructorParameters<T>) => InstanceType<T>
  : unknown;

type DeepWritable6<T> = T extends object
  ? { -readonly [K in keyof T]: DeepWritable1<T[K]> }
  : unknown;

type EmptyToUnknown<T extends object> = keyof T extends never ? unknown : T;

type Join2<A extends object, B extends object> = EmptyToUnknown<A> &
  EmptyToUnknown<B>;

type Join4<
  A extends object,
  B extends object,
  C extends object,
  D extends object
> = EmptyToUnknown<A> &
  EmptyToUnknown<B> &
  EmptyToUnknown<C> &
  EmptyToUnknown<D>;

type KeysOfType1<T, V> = KeysOfType2<T, V>[keyof T];

type KeysOfType2<T, V> = { readonly [K in keyof T]: Equal<T[K], V, K, never> };
