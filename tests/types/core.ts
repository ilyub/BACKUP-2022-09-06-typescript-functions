/* eslint-disable @skylib/no-unnecessary-readonly */

/* eslint-disable @skylib/no-unnecessary-writable */

/* eslint-disable @typescript-eslint/ban-types */

/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Equals } from "ts-toolbelt/out/Any/Equals";

import type {
  AddPrefix,
  ArrayElement,
  DeepPartial,
  DeepReadonly,
  DeepWritable,
  DefinedKeys,
  numberU,
  ReadonlyArrayElement,
  RemovePrefix,
  strings,
  UndefinedKeys,
  WithOptionalKeys,
  WithUndeclaredKeys,
  WithUndefinedKeys
} from "@/types/core";
import { createValidationObject } from "@/types/core";

test("addPrefix", () => {
  const x: Equals<AddPrefix<"a" | "b", "@">, "@a" | "@b"> = 1;

  expect(x).toBe(1);
});

test("arrayElement", () => {
  const x: Equals<ArrayElement<number[]>, number> = 1;

  expect(x).toBe(1);
});

test("deepPartial", () => {
  {
    const x1: Equals<DeepPartial<any>, any> = 1;

    const x2: Equals<DeepPartial<object>, object> = 1;

    const x3: Equals<DeepPartial<null>, null> = 1;

    const x4: Equals<DeepPartial<string>, string> = 1;

    const x5: Equals<DeepPartial<unknown>, unknown> = 1;

    const x6: Equals<DeepPartial<{}>, {}> = 1;

    const x7: Equals<DeepPartial<() => true>, () => true> = 1;

    const x8: Equals<DeepPartial<new () => object>, new () => object> = 1;

    expect(x1).toBe(1);
    expect(x2).toBe(1);
    expect(x3).toBe(1);
    expect(x4).toBe(1);
    expect(x5).toBe(1);
    expect(x6).toBe(1);
    expect(x7).toBe(1);
    expect(x8).toBe(1);
  }

  {
    interface From {
      x: {
        y: [number, string];
      };
    }

    type To = DeepPartial<From>;

    interface Expected {
      x?: {
        y?: [number, string];
      };
    }

    const value: Equals<To, Expected> = 1;

    expect(value).toBe(1);
  }
});

test("deepReadonly", () => {
  {
    const x1: Equals<DeepReadonly<any>, any> = 1;

    const x2: Equals<DeepReadonly<object>, object> = 1;

    const x3: Equals<DeepReadonly<null>, null> = 1;

    const x4: Equals<DeepReadonly<string>, string> = 1;

    const x5: Equals<DeepReadonly<unknown>, unknown> = 1;

    const x6: Equals<DeepReadonly<{}>, {}> = 1;

    const x7: Equals<DeepReadonly<() => true>, () => true> = 1;

    const x8: Equals<DeepReadonly<new () => object>, new () => object> = 1;

    expect(x1).toBe(1);
    expect(x2).toBe(1);
    expect(x3).toBe(1);
    expect(x4).toBe(1);
    expect(x5).toBe(1);
    expect(x6).toBe(1);
    expect(x7).toBe(1);
    expect(x8).toBe(1);
  }

  {
    type From = [number, { x: string[] }];

    type To = DeepReadonly<From>;

    type Expected = readonly [number, { readonly x: strings }];

    const value: Equals<To, Expected> = 1;

    expect(value).toBe(1);
  }

  {
    interface From {
      new (x: string): object;
      (x: number): boolean;
      x: number;
      y: string;
    }

    type To = DeepReadonly<From>;

    type Expected = ((x: number) => boolean) &
      (new (x: string) => object) & {
        readonly x: number;
        readonly y: string;
      };

    const value: Equals<To, Expected> = 1;

    expect(value).toBe(1);
  }

  {
    interface From {
      new (x: string): object;
      (this: object, x: number): boolean;
      x: number;
      y: string;
    }

    type To = DeepReadonly<From>;

    type Expected = ((this: object, x: number) => boolean) &
      (new (x: string) => object) & {
        readonly x: number;
        readonly y: string;
      };

    const value: Equals<To, Expected> = 1;

    expect(value).toBe(1);
  }
});

test("deepWritable", () => {
  {
    const x1: Equals<DeepWritable<any>, any> = 1;

    const x2: Equals<DeepWritable<object>, object> = 1;

    const x3: Equals<DeepWritable<null>, null> = 1;

    const x4: Equals<DeepWritable<string>, string> = 1;

    const x5: Equals<DeepWritable<unknown>, unknown> = 1;

    const x6: Equals<DeepWritable<{}>, {}> = 1;

    const x7: Equals<DeepWritable<() => true>, () => true> = 1;

    const x8: Equals<DeepWritable<new () => object>, new () => object> = 1;

    expect(x1).toBe(1);
    expect(x2).toBe(1);
    expect(x3).toBe(1);
    expect(x4).toBe(1);
    expect(x5).toBe(1);
    expect(x6).toBe(1);
    expect(x7).toBe(1);
    expect(x8).toBe(1);
  }

  {
    type From = readonly [number, { readonly x: strings }];

    type To = DeepWritable<From>;

    type Expected = [number, { x: string[] }];

    const value: Equals<To, Expected> = 1;

    expect(value).toBe(1);
  }

  {
    interface From {
      new (x: string): object;
      (x: number): boolean;
      readonly x: number;
      readonly y: string;
    }

    type To = DeepWritable<From>;

    type Expected = ((x: number) => boolean) &
      (new (x: string) => object) & {
        x: number;
        y: string;
      };

    const value: Equals<To, Expected> = 1;

    expect(value).toBe(1);
  }

  {
    interface From {
      new (x: string): object;
      (this: object, x: number): boolean;
      readonly x: number;
      readonly y: string;
    }

    type To = DeepWritable<From>;

    type Expected = ((this: object, x: number) => boolean) &
      (new (x: string) => object) & {
        x: number;
        y: string;
      };

    const value: Equals<To, Expected> = 1;

    expect(value).toBe(1);
  }
});

test("definedKeys", () => {
  interface From {
    readonly xr: number;
    xw: number;
    readonly yr?: number;
    yw?: number;
  }

  type To = DefinedKeys<From>;

  type Expected = "xr" | "xw";

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("readonlyArrayElement", () => {
  const x: Equals<ReadonlyArrayElement<number[]>, number> = 1;

  expect(x).toBe(1);
});

test("removePrefix", () => {
  const x: Equals<RemovePrefix<"@a" | "@b", "@">, "a" | "b"> = 1;

  expect(x).toBe(1);
});

test("undefinedKeys", () => {
  interface From {
    readonly xr: number;
    xw: number;
    readonly yr: numberU;
    yw: numberU;
  }

  type To = UndefinedKeys<From>;

  type Expected = "yr" | "yw";

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("withOptionalKeys", () => {
  interface From {
    readonly r: number;
    readonly ro?: number;
    readonly rou?: numberU;
    readonly ru: numberU;
    w: number;
    wo?: number;
    wou?: numberU;
    wu: numberU;
  }

  type To = WithOptionalKeys<From>;

  type Expected = {
    readonly r: number;
  } & {
    readonly ro?: number;
    readonly rou?: number;
    readonly ru?: number;
  } & {
    w: number;
  } & {
    wo?: number;
    wou?: number;
    wu?: number;
  };

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("withUndeclaredKeys", () => {
  interface From {
    readonly r: number;
    readonly ro?: number;
    readonly rou?: numberU;
    readonly ru: numberU;
    w: number;
    wo?: number;
    wou?: numberU;
    wu: numberU;
  }

  type To = WithUndeclaredKeys<From>;

  type Expected = {
    readonly r: number;
  } & {
    readonly ro?: numberU;
    readonly rou?: numberU;
    readonly ru?: numberU;
  } & {
    w: number;
  } & {
    wo?: numberU;
    wou?: numberU;
    wu?: numberU;
  };

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("withUndefinedKeys", () => {
  interface From {
    readonly r: number;
    readonly ro?: number;
    readonly rou?: numberU;
    readonly ru: numberU;
    w: number;
    wo?: number;
    wou?: numberU;
    wu: numberU;
  }

  type To = WithUndefinedKeys<From>;

  type Expected = {
    readonly r: number;
  } & {
    readonly ro: numberU;
    readonly rou: numberU;
    readonly ru: numberU;
  } & {
    w: number;
  } & {
    wo: numberU;
    wou: numberU;
    wu: numberU;
  };

  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);
});

test("createValidationObject", () => {
  type Enum = "a" | 1;

  const error = new Error("Invalid source");

  expect(() => createValidationObject<Enum>({ 1: "a", a: 1 })).toThrow(error);
});
