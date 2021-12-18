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
  numberU,
  ReadonlyArrayElement,
  RemovePrefix,
  UndefinedToOptional
} from "@/types/core";
import { createValidationObject } from "@/types/core";

it("AddPrefix", () => {
  const x: Equals<AddPrefix<"a" | "b", "@">, "@a" | "@b"> = 1;

  expect(x).toStrictEqual(1);
});

it("ArrayElement", () => {
  const x: Equals<ArrayElement<number[]>, number> = 1;

  expect(x).toStrictEqual(1);
});

it("DeepPartial", () => {
  {
    const x1: Equals<DeepPartial<any>, any> = 1;

    const x2: Equals<DeepPartial<object>, object> = 1;

    const x3: Equals<DeepPartial<null>, null> = 1;

    const x4: Equals<DeepPartial<string>, string> = 1;

    const x5: Equals<DeepPartial<unknown>, unknown> = 1;

    const x6: Equals<DeepPartial<{}>, {}> = 1;

    const x7: Equals<DeepPartial<() => true>, () => true> = 1;

    const x8: Equals<DeepPartial<new () => object>, new () => object> = 1;

    expect(x1).toStrictEqual(1);
    expect(x2).toStrictEqual(1);
    expect(x3).toStrictEqual(1);
    expect(x4).toStrictEqual(1);
    expect(x5).toStrictEqual(1);
    expect(x6).toStrictEqual(1);
    expect(x7).toStrictEqual(1);
    expect(x8).toStrictEqual(1);
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

    expect(value).toStrictEqual(1);
  }
});

it("DeepReadonly", () => {
  {
    const x1: Equals<DeepReadonly<any>, any> = 1;

    const x2: Equals<DeepReadonly<object>, object> = 1;

    const x3: Equals<DeepReadonly<null>, null> = 1;

    const x4: Equals<DeepReadonly<string>, string> = 1;

    const x5: Equals<DeepReadonly<unknown>, unknown> = 1;

    const x6: Equals<DeepReadonly<{}>, {}> = 1;

    const x7: Equals<DeepReadonly<() => true>, () => true> = 1;

    const x8: Equals<DeepReadonly<new () => object>, new () => object> = 1;

    expect(x1).toStrictEqual(1);
    expect(x2).toStrictEqual(1);
    expect(x3).toStrictEqual(1);
    expect(x4).toStrictEqual(1);
    expect(x5).toStrictEqual(1);
    expect(x6).toStrictEqual(1);
    expect(x7).toStrictEqual(1);
    expect(x8).toStrictEqual(1);
  }

  {
    type From = [number, { x: string[] }];

    type To = DeepReadonly<From>;

    type Expected = readonly [number, { readonly x: readonly string[] }];

    const value: Equals<To, Expected> = 1;

    expect(value).toStrictEqual(1);
  }

  {
    interface From {
      new (x: string): object;
      (x: number): boolean;
      x: number;
      y: string;
    }

    type To = DeepReadonly<From>;

    type Expected = (new (x: string) => object) &
      ((x: number) => boolean) & {
        readonly x: number;
        readonly y: string;
      };

    const value: Equals<To, Expected> = 1;

    expect(value).toStrictEqual(1);
  }

  {
    interface From {
      new (x: string): object;
      (this: object, x: number): boolean;
      x: number;
      y: string;
    }

    type To = DeepReadonly<From>;

    type Expected = (new (x: string) => object) &
      ((this: object, x: number) => boolean) & {
        readonly x: number;
        readonly y: string;
      };

    const value: Equals<To, Expected> = 1;

    expect(value).toStrictEqual(1);
  }
});

it("DeepWritable", () => {
  {
    const x1: Equals<DeepWritable<any>, any> = 1;

    const x2: Equals<DeepWritable<object>, object> = 1;

    const x3: Equals<DeepWritable<null>, null> = 1;

    const x4: Equals<DeepWritable<string>, string> = 1;

    const x5: Equals<DeepWritable<unknown>, unknown> = 1;

    const x6: Equals<DeepWritable<{}>, {}> = 1;

    const x7: Equals<DeepWritable<() => true>, () => true> = 1;

    const x8: Equals<DeepWritable<new () => object>, new () => object> = 1;

    expect(x1).toStrictEqual(1);
    expect(x2).toStrictEqual(1);
    expect(x3).toStrictEqual(1);
    expect(x4).toStrictEqual(1);
    expect(x5).toStrictEqual(1);
    expect(x6).toStrictEqual(1);
    expect(x7).toStrictEqual(1);
    expect(x8).toStrictEqual(1);
  }

  {
    type From = readonly [number, { readonly x: readonly string[] }];

    type To = DeepWritable<From>;

    type Expected = [number, { x: string[] }];

    const value: Equals<To, Expected> = 1;

    expect(value).toStrictEqual(1);
  }

  {
    interface From {
      new (x: string): object;
      (x: number): boolean;
      readonly x: number;
      readonly y: string;
    }

    type To = DeepWritable<From>;

    type Expected = (new (x: string) => object) &
      ((x: number) => boolean) & {
        x: number;
        y: string;
      };

    const value: Equals<To, Expected> = 1;

    expect(value).toStrictEqual(1);
  }

  {
    interface From {
      new (x: string): object;
      (this: object, x: number): boolean;
      readonly x: number;
      readonly y: string;
    }

    type To = DeepWritable<From>;

    type Expected = (new (x: string) => object) &
      ((this: object, x: number) => boolean) & {
        x: number;
        y: string;
      };

    const value: Equals<To, Expected> = 1;

    expect(value).toStrictEqual(1);
  }
});

it("ReadonlyArrayElement", () => {
  const x: Equals<ReadonlyArrayElement<number[]>, number> = 1;

  expect(x).toStrictEqual(1);
});

it("RemovePrefix", () => {
  const x: Equals<RemovePrefix<"@a" | "@b", "@">, "a" | "b"> = 1;

  expect(x).toStrictEqual(1);
});

it("UndefinedToOptional", () => {
  interface From {
    x: number;
    y: numberU;
  }

  type To = UndefinedToOptional<From>;

  type Expected = { x: number } & { y?: number };

  const value: Equals<To, Expected> = 1;

  expect(value).toStrictEqual(1);
});

it("createValidationObject", () => {
  type Enum = 1 | "a";

  const error = new Error("Invalid source");

  expect(() => createValidationObject<Enum>({ 1: "a", a: 1 })).toThrow(error);
});
