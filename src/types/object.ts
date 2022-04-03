import type {
  ReadonlyDefinedKeys,
  ReadonlyUndefinedKeys,
  WritableDefindKeys,
  WritableUndefindKeys
} from "./objectKeys";

export type Join2<A extends object, B extends object> = keyof A extends never
  ? B
  : keyof B extends never
  ? A
  : A & B;

export type Join3<
  A extends object,
  B extends object,
  C extends object
> = keyof A extends never ? Join2<B, C> : A & Join2<B, C>;

export type Join4<
  A extends object,
  B extends object,
  C extends object,
  D extends object
> = keyof A extends never ? Join3<B, C, D> : A & Join3<B, C, D>;

export type OptionalStyle<T extends object> = Join4<
  { [K in WritableDefindKeys<T>]: T[K] },
  { [K in WritableUndefindKeys<T>]?: Exclude<T[K], undefined> },
  { readonly [K in ReadonlyDefinedKeys<T>]: T[K] },
  { readonly [K in ReadonlyUndefinedKeys<T>]?: Exclude<T[K], undefined> }
>;

export type OptionalUndefinedStyle<T extends object> = Join4<
  { [K in WritableDefindKeys<T>]: T[K] },
  { [K in WritableUndefindKeys<T>]?: T[K] | undefined },
  { readonly [K in ReadonlyDefinedKeys<T>]: T[K] },
  { readonly [K in ReadonlyUndefinedKeys<T>]?: T[K] | undefined }
>;

export type UndefinedStyle<T extends object> = Join4<
  { [K in WritableDefindKeys<T>]: T[K] },
  { [K in WritableUndefindKeys<T>]: T[K] | undefined },
  { readonly [K in ReadonlyDefinedKeys<T>]: T[K] },
  { readonly [K in ReadonlyUndefinedKeys<T>]: T[K] | undefined }
>;

export type StrictOmit<T extends object, K extends keyof T> = Omit<T, K> & {
  [L in K]?: never;
};
