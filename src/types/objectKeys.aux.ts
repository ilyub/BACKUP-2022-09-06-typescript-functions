import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { If } from "ts-toolbelt/out/Any/If";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";
import type { OptionalKeys } from "ts-toolbelt/out/Object/OptionalKeys";
import type { ReadonlyKeys } from "ts-toolbelt/out/Object/ReadonlyKeys";
import type { RequiredKeys } from "ts-toolbelt/out/Object/RequiredKeys";
import type { WritableKeys } from "ts-toolbelt/out/Object/WritableKeys";

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
