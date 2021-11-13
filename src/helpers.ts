import * as is from "./guards";
import * as o from "./object";
import * as reflect from "./reflect";
import * as timer from "./timer";

export type Facade<F, E = unknown> = F & FacadeOwnMethods<F> & E;

export interface FacadeOwnMethods<F> {
  /**
   * Sets implementation.
   *
   * @param implementation - Implementation.
   */
  readonly setImplementation: (implementation: F) => void;
}

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
    wrapProxyHandler({
      apply(target, thisArg, args: readonly unknown[]) {
        return target.call(thisArg, ...args);
      },
      get(target, key) {
        if (o.hasOwnProp(key, target)) return reflect.get(target, key);

        if (is.not.empty(implementation))
          return reflect.get(implementation, key);

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
    wrapProxyHandler({
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
 * @param handler - Handler.
 * @returns New handler with missing methods added.
 */
export function wrapProxyHandler<T extends object>(
  handler: Readonly<ProxyHandler<T>>
): ProxyHandler<T> {
  return {
    apply(): never {
      throw new Error("Proxy method not implemented: apply");
    },
    construct(): never {
      throw new Error("Proxy method not implemented: construct");
    },
    defineProperty(): never {
      throw new Error("Proxy method not implemented: defineProperty");
    },
    deleteProperty(): never {
      throw new Error("Proxy method not implemented: deleteProperty");
    },
    get(): never {
      throw new Error("Proxy method not implemented: get");
    },
    getOwnPropertyDescriptor(): never {
      throw new Error("Proxy method not implemented: getOwnPropertyDescriptor");
    },
    getPrototypeOf(): never {
      throw new Error("Proxy method not implemented: getPrototypeOf");
    },
    has(): never {
      throw new Error("Proxy method not implemented: has");
    },
    isExtensible(): never {
      throw new Error("Proxy method not implemented: isExtensible");
    },
    ownKeys(): never {
      throw new Error("Proxy method not implemented: ownKeys");
    },
    preventExtensions(): never {
      throw new Error("Proxy method not implemented: preventExtensions");
    },
    set(): never {
      throw new Error("Proxy method not implemented: set");
    },
    setPrototypeOf(): never {
      throw new Error("Proxy method not implemented: setPrototypeOf");
    },
    ...handler
  };
}
