import * as assert from "./assertions";
import * as cast from "./converters";
import * as is from "./guards";
import * as o from "./object";
import * as reflect from "./reflect";
import * as timer from "./timer";
import type { Join2 } from "./types/core";

export type Facade<F, E = unknown> = E & F & FacadeOwnMethods<F>;

export interface FacadeOwnMethods<F> {
  /**
   * Sets implementation.
   *
   * @param implementation - Implementation.
   */
  readonly setImplementation: (implementation: F) => void;
}

export type SafeAccess<
  T extends object,
  W extends keyof T,
  R extends keyof T
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
export function createFacade<F extends object, E = unknown>(
  name: string,
  extension: E
): Facade<F, E> {
  let implementation: F | undefined;

  function callback(this: unknown, ...args: unknown[]): unknown {
    if (is.callable(implementation)) return implementation.call(this, ...args);

    throw new Error(
      implementation
        ? `Facade is not callable: ${name}`
        : `Missing facade implementation: ${name}`
    );
  }

  const facadeOwnMethods: FacadeOwnMethods<F> = {
    setImplementation(value: F) {
      implementation = value;
    }
  };

  const proxyTarget = o.extend(callback, facadeOwnMethods, extension);

  const proxy = new Proxy(
    proxyTarget,
    wrapProxyHandler("createFacade", "throw", {
      apply(target, thisArg, args: readonly unknown[]) {
        return target.call(thisArg, ...args);
      },
      get(target, key) {
        if (o.hasOwnProp(key, target)) return reflect.get(target, key);

        if (is.not.empty(implementation))
          return reflect.get(implementation, key);

        throw new Error(`Missing facade implementation: ${name}`);
      },
      getOwnPropertyDescriptor(target, key) {
        if (o.hasOwnProp(key, target))
          return Object.getOwnPropertyDescriptor(target, key);

        if (is.not.empty(implementation))
          return Object.getOwnPropertyDescriptor(implementation, key);

        throw new Error(`Missing facade implementation: ${name}`);
      },
      isExtensible() {
        if (is.not.empty(implementation))
          return Object.isExtensible(implementation);

        throw new Error(`Missing facade implementation: ${name}`);
      },
      set(target, key, value) {
        if (o.hasOwnProp(key, target)) {
          reflect.set(target, key, value);

          return true;
        }

        if (is.not.empty(implementation)) {
          reflect.set(implementation, key, value);

          return true;
        }

        throw new Error(`Missing facade implementation: ${name}`);
      }
    })
  );

  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return proxy as Facade<F, E>;
}

/**
 * Delays resource generation until demanded.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
export function onDemand<T extends object>(generator: () => T): T {
  let obj: T | undefined;

  return new Proxy(
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    {} as never,
    wrapProxyHandler("onDemand", "throw", {
      get(_target, key) {
        obj = obj ?? generator();

        return reflect.get(obj, key);
      },
      getOwnPropertyDescriptor(_target, key) {
        obj = obj ?? generator();

        return Object.getOwnPropertyDescriptor(obj, key);
      },
      ownKeys() {
        obj = obj ?? generator();

        return Object.keys(obj);
      },
      set(_target, key, value) {
        obj = obj ?? generator();
        reflect.set(obj, key, value);

        return true;
      }
    })
  );
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
  W extends keyof T,
  R extends keyof T
>(
  obj: T,
  guards: SafeAccessGuards<T, W>,
  readonlyKeys: readonly R[] = []
): SafeAccess<T, W, R> {
  const guardsMap: Map<PropertyKey, is.Guard> = new Map(Object.entries(guards));

  const writableKeys = Object.keys(guards);

  const keysSet: Set<PropertyKey> = new Set([...readonlyKeys, ...writableKeys]);

  return new Proxy(
    obj,
    wrapProxyHandler("createFacade", "throw", {
      get(target, key) {
        if (keysSet.has(key)) return reflect.get(target, key);

        throw new Error(`Read access denied: ${cast.string(key)}`);
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
    timer.addTimeout(resolve, timeout);
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
        apply(target, thisArg, args: readonly unknown[]): unknown {
          assert.callable(target);

          return reflect.apply(target, thisArg, args);
        },
        construct(target, args: readonly unknown[], newTarget): object {
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
