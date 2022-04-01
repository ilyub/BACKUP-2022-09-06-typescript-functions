import * as assert from "./assertions";
import * as cast from "./converters";
import * as fn from "./function";
import * as is from "./guards";
import * as o from "./object";
import * as programFlow from "./programFlow";
import * as reflect from "./reflect";
import type { Join2, unknowns } from "./types/core";

export type Facade<I, E = unknown> = E & FacadeOwnMethods<I> & I;

export interface FacadeOwnMethods<I> {
  /**
   * Sets implementation.
   *
   * @param implementation - Implementation.
   */
  readonly setImplementation: (implementation: I) => void;
}

export type SafeAccess<
  T extends object,
  W extends string & keyof T,
  R extends string & keyof T
> = Join2<{ [K in W]: T[K] }, { readonly [K in R]: T[K] }>;

export declare type SafeAccessGuards<T, W extends keyof T> = {
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

  const facadeOwnMethods: FacadeOwnMethods<I> = {
    setImplementation(value: I) {
      _implementation = value;
    }
  };

  const defaultFacade = { ...extension, ...facadeOwnMethods };

  const proxy = new Proxy(
    fn.noop,
    wrapProxyHandler("createFacade", "throw", {
      apply(_target, thisArg, args: unknowns) {
        return reflect.apply(implementation(), thisArg, args);
      },
      get(_target, key) {
        return reflect.get(facade(key), key);
      },
      getOwnPropertyDescriptor(_target, key) {
        return Object.getOwnPropertyDescriptor(facade(key), key);
      },
      has(_target, key) {
        return reflect.has(facade(key), key);
      },
      isExtensible() {
        return Object.isExtensible(facade());
      },
      ownKeys() {
        return reflect.ownKeys(facade());
      },
      set(_target, key, value) {
        return reflect.set(facade(key), key, value);
      }
    })
  );

  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return proxy as unknown as Facade<I, E>;

  function facade(key?: PropertyKey): object {
    if (is.not.empty(key) && key in defaultFacade) return defaultFacade;

    assert.not.empty(_implementation, `Missing facade implementation: ${name}`);

    return _implementation;
  }

  function implementation(): Function {
    assert.callable(_implementation, `Facade is not callable: ${name}`);

    return _implementation;
  }
}

/**
 * Delays resource generation until demanded.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
export function onDemand<T extends object>(generator: () => T): T {
  let _obj: T | undefined;

  const proxy = new Proxy(
    {},
    wrapProxyHandler("onDemand", "throw", {
      get(_target, key) {
        return reflect.get(obj(), key);
      },
      getOwnPropertyDescriptor(_target, key) {
        return Object.getOwnPropertyDescriptor(obj(), key);
      },
      has(_target, key) {
        return reflect.has(obj(), key);
      },
      isExtensible() {
        return reflect.isExtensible(obj());
      },
      ownKeys() {
        return Object.keys(obj());
      },
      set(_target, key, value) {
        reflect.set(obj(), key, value);

        return true;
      }
    })
  );

  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return proxy as T;

  function obj(): object {
    _obj = _obj ?? generator();

    return _obj;
  }
}

/**
 * Defines source type.
 *
 * @param source - Source.
 * @returns Source.
 */
export function typedef<T>(source: T): T {
  return source;
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
  const guardsMap: Map<PropertyKey, is.Guard> = new Map(Object.entries(guards));

  const writableKeys = o.keys(guards);

  const keys = [...readonlyKeys, ...writableKeys];

  const keysSet = new Set<PropertyKey>(keys);

  return new Proxy(
    obj,
    wrapProxyHandler("safeAccess", "throw", {
      get(target, key) {
        if (keysSet.has(key)) return reflect.get(target, key);

        throw new Error(`Read access denied: ${cast.string(key)}`);
      },
      getOwnPropertyDescriptor(target, key) {
        if (keysSet.has(key))
          return reflect.getOwnPropertyDescriptor(target, key);

        throw new Error(`Read access denied: ${cast.string(key)}`);
      },
      has(_target, key): boolean {
        return keysSet.has(key);
      },
      isExtensible(target) {
        return reflect.isExtensible(target);
      },
      ownKeys() {
        return keys;
      },
      set(target, key, value) {
        const guard = guardsMap.get(key);

        if (guard)
          if (guard(value)) return reflect.set(target, key, value);
          else throw new Error(`Type check failed: ${cast.string(key)}`);

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
  action: "doDefault" | "throw",
  handler: Readonly<ProxyHandler<T>>
): ProxyHandler<T> {
  switch (action) {
    case "doDefault":
      return {
        apply(target, thisArg, args: unknowns): unknown {
          assert.callable(target);

          return reflect.apply(target, thisArg, args);
        },
        construct(target, args: unknowns, newTarget): object {
          assert.callable(target);

          const result = reflect.construct(target, args, newTarget);

          assert.object(result);

          return result;
        },
        defineProperty(target, key, attrs): boolean {
          return reflect.defineProperty(target, key, attrs);
        },
        deleteProperty(target, key): boolean {
          return reflect.deleteProperty(target, key);
        },
        get(target, key): unknown {
          return reflect.get(target, key);
        },
        getOwnPropertyDescriptor(target, key): PropertyDescriptor | undefined {
          return reflect.getOwnPropertyDescriptor(target, key);
        },
        getPrototypeOf(target): object | null {
          return reflect.getPrototypeOf(target);
        },
        has(target, key): boolean {
          return reflect.has(target, key);
        },
        isExtensible(target): boolean {
          return reflect.isExtensible(target);
        },
        ownKeys(target): Array<string | symbol> {
          return reflect.ownKeys(target);
        },
        preventExtensions(target): boolean {
          return reflect.preventExtensions(target);
        },
        set(target, key, value): boolean {
          return reflect.set(target, key, value);
        },
        setPrototypeOf(target, proto): boolean {
          return reflect.setPrototypeOf(target, proto);
        },
        ...handler
      };

    case "throw":
      return {
        apply(): never {
          throw new Error(`Not implemented: ${id}.apply`);
        },
        construct(): never {
          throw new Error(`Not implemented: ${id}.construct`);
        },
        defineProperty(): never {
          throw new Error(`Not implemented: ${id}.defineProperty`);
        },
        deleteProperty(): never {
          throw new Error(`Not implemented: ${id}.deleteProperty`);
        },
        get(): never {
          throw new Error(`Not implemented: ${id}.get`);
        },
        getOwnPropertyDescriptor(): never {
          throw new Error(`Not implemented: ${id}.getOwnPropertyDescriptor`);
        },
        getPrototypeOf(): never {
          throw new Error(`Not implemented: ${id}.getPrototypeOf`);
        },
        has(): never {
          throw new Error(`Not implemented: ${id}.has`);
        },
        isExtensible(): never {
          throw new Error(`Not implemented: ${id}.isExtensible`);
        },
        ownKeys(): never {
          throw new Error(`Not implemented: ${id}.ownKeys`);
        },
        preventExtensions(): never {
          throw new Error(`Not implemented: ${id}.preventExtensions`);
        },
        set(): never {
          throw new Error(`Not implemented: ${id}.set`);
        },
        setPrototypeOf(): never {
          throw new Error(`Not implemented: ${id}.setPrototypeOf`);
        },
        ...handler
      };
  }
}
