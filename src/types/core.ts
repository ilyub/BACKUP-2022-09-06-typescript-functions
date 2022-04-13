/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.types.core] */

/* skylib/eslint-plugin disable @skylib/disallow-identifier[functions.types.core] */

export type IndexedObject<T = unknown> = Rec<PropertyKey, T>;

export type IndexedObjects<T = unknown> = ReadonlyArray<IndexedObject<T>>;

export type NumStr = number | string;

export type NumStrE = empty | NumStr;

export type NumStrU = NumStr | undefined;

export type NumStrs = readonly NumStr[];

export type PartialRecord<K extends PropertyKey, V> = {
  readonly [L in K]?: V;
};

export type PartialRecords<K extends PropertyKey, V> = ReadonlyArray<
  PartialRecords<K, V>
>;

export type PropertyKeyE = empty | PropertyKey;

export type PropertyKeyU = PropertyKey | undefined;

export type PropertyKeys = readonly PropertyKey[];

export type Rec<K extends PropertyKey, V> = {
  readonly [L in K]: V;
};

export type Recs<K extends PropertyKey, V> = ReadonlyArray<Rec<K, V>>;

export type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};

export type WritableIndexedObject<T = unknown> = WritableRecord<PropertyKey, T>;

export type WritableIndexedObjects<T = unknown> = ReadonlyArray<
  WritableIndexedObject<T>
>;

export type WritablePartialRecord<K extends PropertyKey, V> = {
  [L in K]?: V;
};

export type WritablePartialRecords<K extends PropertyKey, V> = ReadonlyArray<
  WritablePartialRecord<K, V>
>;

export type WritableRecord<K extends PropertyKey, V> = {
  [L in K]: V;
};

export type WritableRecords<K extends PropertyKey, V> = ReadonlyArray<
  WritableRecord<K, V>
>;

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
