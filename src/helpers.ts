/* eslint-disable @skylib/no-restricted-syntax/no-reflect-get -- Ok */

/* eslint-disable @skylib/no-restricted-syntax/no-reflect-set -- Ok */

import * as assert from "./assertions";
import * as cast from "./converters";
import { typedef } from "./core";
import * as fn from "./function";
import * as is from "./guards";
import * as as from "./inline-assertions";
import * as o from "./object";
import * as programFlow from "./program-flow";
import * as reflect from "./reflect";
import type { Join2, unknowns } from "./types";

export type Facade<I, E = unknown> = E & FacadeOwnMethods<I> & I;

export interface FacadeOwnMethods<I> {
  /**
   * Sets implementation.
   *
   * @param implementation - Implementation.
   */
  readonly setImplementation: (implementation: I) => void;
}

export type ProxyHandlerAction = "doDefault" | "throw";

export type SafeAccess<
  T extends object,
  W extends string & keyof T,
  R extends string & keyof T
> = Join2<{ [K in W]: T[K] }, { readonly [K in R]: T[K] }>;

export declare type SafeAccessGuards<T, W extends string & keyof T> = {
  readonly [K in W]: is.Guard<T[K]>;
};

/**
 * Creates facade.
 *
 * @param name - Facade name.
 * @param extension - Facade extension.
 * @returns Facade.
 */
export function createFacade<I extends object, E = unknown>(
  name: string,
  extension: E
): Facade<I, E> {
  let _implementation: I | undefined;

  const facadeOwn: E & FacadeOwnMethods<I> = {
    setImplementation: value => {
      _implementation = value;
    },
    ...extension
  };

  const proxy = new Proxy(
    fn.noop,
    wrapProxyHandler("createFacade", "throw", {
      apply: (_target, thisArg, args: unknowns) =>
        reflect.apply(targetFn(), thisArg, args),
      get: (_target, key) => reflect.get(target(key), key),
      getOwnPropertyDescriptor: (_target, key) =>
        reflect.getOwnPropertyDescriptor(target(key), key),
      has: (_target, key) => reflect.has(target(key), key),
      isExtensible: () => reflect.isExtensible(target()),
      ownKeys: () => reflect.ownKeys(target()),
      set: (_target, key, value) => reflect.set(target(key), key, value)
    })
  );

  return proxy as Facade<I, E>;

  function target(key?: PropertyKey): object {
    if (is.not.empty(key) && key in facadeOwn) return facadeOwn;

    assert.not.empty(_implementation, `Missing facade implementation: ${name}`);

    return _implementation;
  }

  function targetFn(): Function {
    assert.callable(_implementation, `Facade is not callable: ${name}`);

    return _implementation;
  }
}

/**
 * Generates resource on demand.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
export function onDemand<T extends object>(generator: () => T): T {
  let _obj: T | undefined;

  const proxy = new Proxy(
    {},
    wrapProxyHandler("onDemand", "throw", {
      get: (_target, key) => reflect.get(obj(), key),
      getOwnPropertyDescriptor: (_target, key) =>
        reflect.getOwnPropertyDescriptor(obj(), key),
      has: (_target, key) => reflect.has(obj(), key),
      isExtensible: () => reflect.isExtensible(obj()),
      ownKeys: () => reflect.ownKeys(obj()),
      set: (_target, key, value) => {
        reflect.set(obj(), key, value);

        return true;
      }
    })
  );

  return proxy as T;

  function obj(): object {
    _obj = _obj ?? generator();

    return _obj;
  }
}

/**
 * Creates safe access interface for an object.
 *
 * @param obj - Object.
 * @param guards - Guards.
 * @param readonlyKeys - Readonly keys.
 * @returns Safe access interface.
 */
export function safeAccess<
  T extends object,
  W extends string & keyof T,
  R extends string & keyof T
>(
  obj: T,
  guards: SafeAccessGuards<T, W>,
  readonlyKeys: readonly R[] = []
): SafeAccess<T, W, R> {
  const guardsMap = new Map<PropertyKey, is.Guard>(o.entries(guards));

  const writableKeys = o.keys(guards);

  const keys = [...writableKeys, ...readonlyKeys];

  const keysSet = new Set<PropertyKey>(keys);

  return new Proxy(
    obj,
    wrapProxyHandler("safeAccess", "throw", {
      get: (target, key) => {
        if (keysSet.has(key)) return reflect.get(target, key);

        throw new Error(`Read access denied: ${cast.string(key)}`);
      },
      getOwnPropertyDescriptor: (target, key) => {
        if (keysSet.has(key))
          return reflect.getOwnPropertyDescriptor(target, key);

        throw new Error(`Read access denied: ${cast.string(key)}`);
      },
      has: (_target, key) => keysSet.has(key),
      isExtensible: target => reflect.isExtensible(target),
      ownKeys: () => keys,
      set: (target, key, value) => {
        const guard = guardsMap.get(key);

        if (guard) {
          if (guard(value)) return reflect.set(target, key, value);

          throw new Error(`Type check failed: ${cast.string(key)}`);
        }

        throw new Error(`Write access denied: ${cast.string(key)}`);
      }
    })
  );
}

/**
 * Delays program execution.
 *
 * @param timeout - Timeout (ms).
 */
export async function wait(timeout: number): Promise<void> {
  // eslint-disable-next-line promise/avoid-new -- Ok
  await new Promise<void>(resolve => {
    programFlow.setTimeout(resolve, timeout);
  });
}

/**
 * Adds missing methods to proxy handler.
 *
 * @param id - ID.
 * @param action - Action for missing methods.
 * @param handler - Handler.
 * @returns New handler with missing methods added.
 */
export function wrapProxyHandler<T extends object>(
  id: string,
  action: ProxyHandlerAction,
  handler: Readonly<ProxyHandler<T>>
): ProxyHandler<T> {
  switch (action) {
    case "doDefault":
      return typedef<ProxyHandler<T>>({
        apply: (target, thisArg, args: unknowns) =>
          reflect.apply(as.callable(target), thisArg, args),
        construct: (target, args: unknowns, newTarget) =>
          as.object(reflect.construct(as.callable(target), args, newTarget)),
        defineProperty: (target, key, attrs) =>
          reflect.defineProperty(target, key, attrs),
        deleteProperty: (target, key) => reflect.deleteProperty(target, key),
        get: (target, key) => reflect.get(target, key),
        getOwnPropertyDescriptor: (target, key) =>
          reflect.getOwnPropertyDescriptor(target, key),
        getPrototypeOf: target => reflect.getPrototypeOf(target),
        has: (target, key) => reflect.has(target, key),
        isExtensible: target => reflect.isExtensible(target),
        ownKeys: target => reflect.ownKeys(target),
        preventExtensions: target => reflect.preventExtensions(target),
        set: (target, key, value) => reflect.set(target, key, value),
        setPrototypeOf: (target, proto) =>
          reflect.setPrototypeOf(target, proto),
        ...handler
      });

    case "throw":
      return typedef<ProxyHandler<T>>({
        apply: () => {
          throw new Error(`Not implemented: ${id}.apply`);
        },
        construct: () => {
          throw new Error(`Not implemented: ${id}.construct`);
        },
        defineProperty: () => {
          throw new Error(`Not implemented: ${id}.defineProperty`);
        },
        deleteProperty: () => {
          throw new Error(`Not implemented: ${id}.deleteProperty`);
        },
        get: () => {
          throw new Error(`Not implemented: ${id}.get`);
        },
        getOwnPropertyDescriptor: () => {
          throw new Error(`Not implemented: ${id}.getOwnPropertyDescriptor`);
        },
        getPrototypeOf: () => {
          throw new Error(`Not implemented: ${id}.getPrototypeOf`);
        },
        has: () => {
          throw new Error(`Not implemented: ${id}.has`);
        },
        isExtensible: () => {
          throw new Error(`Not implemented: ${id}.isExtensible`);
        },
        ownKeys: () => {
          throw new Error(`Not implemented: ${id}.ownKeys`);
        },
        preventExtensions: () => {
          throw new Error(`Not implemented: ${id}.preventExtensions`);
        },
        set: () => {
          throw new Error(`Not implemented: ${id}.set`);
        },
        setPrototypeOf: () => {
          throw new Error(`Not implemented: ${id}.setPrototypeOf`);
        },
        ...handler
      });
  }
}
