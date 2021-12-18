import * as is from "./guards";
import * as o from "./object";
import * as reflect from "./reflect";
import * as s from "./string";
import * as timer from "./timer";
import type { AddPrefix } from "./types/core";

export type Facade<F, E = unknown> = F & FacadeOwnMethods<F> & E;

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
  W extends keyof T & string,
  R extends keyof T
> = {
  readonly [K in W as AddPrefix<Capitalize<K>, "set">]: (value: T[K]) => void;
} & {
  readonly [K in W]: T[K];
} & {
  readonly [K in R]: T[K];
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
  let implementation: F | undefined = undefined;

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
    wrapProxyHandler("createFacade", {
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

  return proxy as Facade<F, E>;
}

/**
 * Delays resource generation until demanded.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
export function onDemand<T extends object>(generator: () => T): T {
  let obj: T | undefined = undefined;

  return new Proxy(
    {} as T,
    wrapProxyHandler("onDemand", {
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
 * @param writableKeys - Writable keys.
 * @param readonlyKeys - Readonly keys.
 * @returns Safe access interface.
 */
export function safeAccess<
  T extends object,
  W extends keyof T & string,
  R extends keyof T
>(
  obj: T,
  writableKeys: readonly W[],
  readonlyKeys: readonly R[] = []
): SafeAccess<T, W, R> {
  const result = {};

  for (const key of writableKeys) defineWriteAccess(key);

  for (const key of writableKeys) defineReadAccess(key);

  for (const key of readonlyKeys) defineReadAccess(key);

  return result as SafeAccess<T, W, R>;

  function defineReadAccess(key: PropertyKey): void {
    Object.defineProperty(result, key, {
      get() {
        return reflect.get(obj, key);
      },
      set() {
        throw new Error("Write access denied");
      }
    });
  }

  function defineWriteAccess(key: string): void {
    Object.defineProperty(result, `set${s.ucFirst(key)}`, {
      get() {
        return setter;
      }
    });

    function setter(value: unknown): void {
      reflect.set(obj, key, value);
    }
  }
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
 * @param handler - Handler.
 * @returns New handler with missing methods added.
 */
export function wrapProxyHandler<T extends object>(
  id: string,
  handler: Readonly<ProxyHandler<T>>
): ProxyHandler<T> {
  return {
    apply(): never {
      throw new Error(`Proxy method not implemented: ${id}.apply`);
    },
    construct(): never {
      throw new Error(`Proxy method not implemented: ${id}.construct`);
    },
    defineProperty(): never {
      throw new Error(`Proxy method not implemented: ${id}.defineProperty`);
    },
    deleteProperty(): never {
      throw new Error(`Proxy method not implemented: ${id}.deleteProperty`);
    },
    get(): never {
      throw new Error(`Proxy method not implemented: ${id}.get`);
    },
    getOwnPropertyDescriptor(): never {
      throw new Error(
        `Proxy method not implemented: ${id}.getOwnPropertyDescriptor`
      );
    },
    getPrototypeOf(): never {
      throw new Error(`Proxy method not implemented: ${id}.getPrototypeOf`);
    },
    has(): never {
      throw new Error(`Proxy method not implemented: ${id}.has`);
    },
    isExtensible(): never {
      throw new Error(`Proxy method not implemented: ${id}.isExtensible`);
    },
    ownKeys(): never {
      throw new Error(`Proxy method not implemented: ${id}.ownKeys`);
    },
    preventExtensions(): never {
      throw new Error(`Proxy method not implemented: ${id}.preventExtensions`);
    },
    set(): never {
      throw new Error(`Proxy method not implemented: ${id}.set`);
    },
    setPrototypeOf(): never {
      throw new Error(`Proxy method not implemented: ${id}.setPrototypeOf`);
    },
    ...handler
  };
}
