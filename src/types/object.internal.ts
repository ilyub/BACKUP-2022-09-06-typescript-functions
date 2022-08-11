export type Omit1<T, K extends keyof T> = Omit<T, K>;

export type Omit2<K extends PropertyKey> = { [L in K]?: never };

export type PickGroupsOption =
  // eslint-disable-next-line @skylib/typescript/prefer-enum -- Ok
  "defined" | "optional" | "readonly" | "required" | "undefined" | "writable";
