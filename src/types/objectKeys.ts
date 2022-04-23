import type {
  ObjectKeysDefined,
  ObjectKeysOption,
  ObjectKeysOptional,
  ObjectKeysReadonly,
  ObjectKeysRequired,
  ObjectKeysUndefined,
  ObjectKeysWritable
} from "./objectKeys.internal";

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
