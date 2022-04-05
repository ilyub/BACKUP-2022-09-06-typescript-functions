import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { If } from "ts-toolbelt/out/Any/If";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";
import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { ReadonlyKeys } from "ts-toolbelt/out/Object/ReadonlyKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { WritableKeys } from "ts-toolbelt/out/Object/WritableKeys";

export type DefinedKeys<T extends object> = ObjectKeys<T, "defined", never>;

export type ObjectKeys<
  T extends object,
  I extends ObjectKeysOption,
  E extends ObjectKeysOption
> = Exclude<
  ObjectKeysDefined<T, I, keyof T> &
    ObjectKeysOptional<T, I, keyof T> &
    ObjectKeysReadonly<T, I, keyof T> &
    ObjectKeysRequired<T, I, keyof T> &
    ObjectKeysUndefined<T, I, keyof T> &
    ObjectKeysWritable<T, I, keyof T> &
    PropertyKey &
    keyof T,
  | ObjectKeysDefined<T, E, never>
  | ObjectKeysOptional<T, E, never>
  | ObjectKeysReadonly<T, E, never>
  | ObjectKeysRequired<T, E, never>
  | ObjectKeysUndefined<T, E, never>
  | ObjectKeysWritable<T, E, never>
>;

export type ObjectKeysDefined<
  T extends object,
  C extends ObjectKeysOption,
  D extends keyof T
> = If<Extends<"defined", C>, FilterKeys<T, undefined, "<-extends">, D>;

export type ObjectKeysOption =
  | "defined"
  | "optional"
  | "readonly"
  | "required"
  | "undefined"
  | "writable";

export type ObjectKeysOptional<
  T extends object,
  C extends ObjectKeysOption,
  D extends keyof T
> = If<Extends<"optional", C>, OptionalKeys<T>, D>;

export type ObjectKeysReadonly<
  T extends object,
  C extends ObjectKeysOption,
  D extends keyof T
> = If<Extends<"readonly", C>, ReadonlyKeys<T>, D>;

export type ObjectKeysRequired<
  T extends object,
  C extends ObjectKeysOption,
  D extends keyof T
> = If<Extends<"required", C>, RequiredKeys<T>, D>;

export type ObjectKeysUndefined<
  T extends object,
  C extends ObjectKeysOption,
  D extends keyof T
> = If<
  Extends<"undefined", C>,
  Exclude<keyof T, FilterKeys<T, undefined, "<-extends">>,
  D
>;

export type ObjectKeysWritable<
  T extends object,
  C extends ObjectKeysOption,
  D extends keyof T
> = If<Extends<"writable", C>, WritableKeys<T>, D>;

export type ReadonlyDefinedKeys<T extends object> = ObjectKeys<
  T,
  "defined" | "readonly",
  never
>;

export type ReadonlyUndefinedKeys<T extends object> = ObjectKeys<
  T,
  "readonly" | "undefined",
  never
>;

export type UndefinedKeys<T extends object> = ObjectKeys<T, "undefined", never>;

export type WritableDefindKeys<T extends object> = ObjectKeys<
  T,
  "defined" | "writable",
  never
>;

export type WritableUndefindKeys<T extends object> = ObjectKeys<
  T,
  "undefined" | "writable",
  never
>;
