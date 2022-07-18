export type Omit1<T extends object, K extends keyof T> = Omit<T, K>;

export type Omit2<K extends PropertyKey> = { [L in K]?: never };

export type PickGroupsOption =
  // eslint-disable-next-line @skylib/custom/no-literal-union-type -- Ok
  "defined" | "optional" | "readonly" | "required" | "undefined" | "writable";
