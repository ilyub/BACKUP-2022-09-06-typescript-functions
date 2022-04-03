/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.types.core] */

/* skylib/eslint-plugin disable @skylib/disallow-identifier[functions.types.core] */

export type IndexedObject<T = unknown> = TypedObject<PropertyKey, T>;

export type NumStr = number | string;

export type NumStrE = empty | NumStr;

export type NumStrU = NumStr | undefined;

export type NumStrs = readonly NumStr[];

export type PartialTypedObject<K extends PropertyKey, V> = {
  readonly [L in K]?: V;
};

export type PropertyKeyE = empty | PropertyKey;

export type PropertyKeyU = PropertyKey | undefined;

export type PropertyKeys = readonly PropertyKey[];

export type TypedObject<K extends PropertyKey, V> = {
  readonly [L in K]: V;
};

// eslint-disable-next-line @skylib/prefer-readonly
export type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};

// eslint-disable-next-line @skylib/prefer-readonly
export type WritableIndexedObject<T = unknown> = Writable<IndexedObject<T>>;

export type WritablePartialTypedObject<K extends PropertyKey, V> = {
  [L in K]?: V;
};

export type WritableTypedObject<K extends PropertyKey, V> = {
  [L in K]: V;
};

export type booleanE = empty | boolean;

export type booleanU = boolean | undefined;

export type booleans = readonly boolean[];

export type empty = null | undefined;

export type falseU = false | undefined;

export type nevers = readonly never[];

export type numberE = empty | number;

export type numberU = number | undefined;

export type numbers = readonly number[];

export type objectE = empty | object;

export type objectU = object | undefined;

export type objects = readonly object[];

export type stringE = empty | string;

export type stringU = string | undefined;

export type strings = readonly string[];

export type trueU = true | undefined;

export type unknowns = readonly unknown[];
