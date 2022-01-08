import * as assert from "./assertions";
import * as is from "./guards";
import * as o from "./object";
import * as reflect from "./reflect";
import * as s from "./string";
import * as timer from "./timer";
/**
 * Creates facade.
 *
 * @param name - Facade name.
 * @param extension - Facade extension.
 * @returns Facade.
 */
export function createFacade(name, extension) {
    let implementation = undefined;
    function callback(...args) {
        if (is.callable(implementation))
            return implementation.call(this, ...args);
        throw new Error(implementation
            ? `Facade is not callable: ${name}`
            : `Missing facade implementation: ${name}`);
    }
    const facadeOwnMethods = {
        setImplementation(value) {
            implementation = value;
        }
    };
    const proxyTarget = o.extend(callback, facadeOwnMethods, extension);
    const proxy = new Proxy(proxyTarget, wrapProxyHandler("createFacade", "throw", {
        apply(target, thisArg, args) {
            return target.call(thisArg, ...args);
        },
        get(target, key) {
            if (o.hasOwnProp(key, target))
                return reflect.get(target, key);
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
    }));
    return proxy;
}
/**
 * Delays resource generation until demanded.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
export function onDemand(generator) {
    let obj = undefined;
    return new Proxy({}, wrapProxyHandler("onDemand", "throw", {
        get(_target, key) {
            obj = obj !== null && obj !== void 0 ? obj : generator();
            return reflect.get(obj, key);
        },
        getOwnPropertyDescriptor(_target, key) {
            obj = obj !== null && obj !== void 0 ? obj : generator();
            return Object.getOwnPropertyDescriptor(obj, key);
        },
        ownKeys() {
            obj = obj !== null && obj !== void 0 ? obj : generator();
            return Object.keys(obj);
        },
        set(_target, key, value) {
            obj = obj !== null && obj !== void 0 ? obj : generator();
            reflect.set(obj, key, value);
            return true;
        }
    }));
}
/**
 * Creates safe access interface for an object.
 *
 * @param obj - Object.
 * @param writableKeys - Writable keys.
 * @param readonlyKeys - Readonly keys.
 * @returns Safe access interface.
 */
export function safeAccess(obj, writableKeys, readonlyKeys = []) {
    const result = {};
    for (const key of writableKeys)
        defineWriteAccess(key);
    for (const key of writableKeys)
        defineReadAccess(key);
    for (const key of readonlyKeys)
        defineReadAccess(key);
    return result;
    function defineReadAccess(key) {
        Object.defineProperty(result, key, {
            get() {
                return reflect.get(obj, key);
            },
            set() {
                throw new Error("Write access denied");
            }
        });
    }
    function defineWriteAccess(key) {
        Object.defineProperty(result, `set${s.ucFirst(key)}`, {
            get() {
                return setter;
            }
        });
        function setter(value) {
            reflect.set(obj, key, value);
        }
    }
}
/**
 * Delays program execution.
 *
 * @param timeout - Timeout (ms).
 */
export async function wait(timeout) {
    await new Promise(resolve => {
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
export function wrapProxyHandler(id, action, handler) {
    switch (action) {
        case "doDefault":
            return Object.assign({ apply(target, thisArg, args) {
                    assert.callable(target);
                    return reflect.apply(target, thisArg, args);
                },
                construct(target, args, newTarget) {
                    assert.callable(target);
                    const result = reflect.construct(target, args, newTarget);
                    assert.object(result);
                    return result;
                },
                defineProperty(target, key, attrs) {
                    return reflect.defineProperty(target, key, attrs);
                },
                deleteProperty(target, key) {
                    return reflect.deleteProperty(target, key);
                },
                get(target, key) {
                    return reflect.get(target, key);
                },
                getOwnPropertyDescriptor(target, key) {
                    return reflect.getOwnPropertyDescriptor(target, key);
                },
                getPrototypeOf(target) {
                    return reflect.getPrototypeOf(target);
                },
                has(target, key) {
                    return reflect.has(target, key);
                },
                isExtensible(target) {
                    return reflect.isExtensible(target);
                },
                ownKeys(target) {
                    return reflect.ownKeys(target);
                },
                preventExtensions(target) {
                    return reflect.preventExtensions(target);
                },
                set(target, key, value) {
                    return reflect.set(target, key, value);
                },
                setPrototypeOf(target, proto) {
                    return reflect.setPrototypeOf(target, proto);
                } }, handler);
        case "throw":
            return Object.assign({ apply() {
                    throw new Error(`Not implemented: ${id}.apply`);
                },
                construct() {
                    throw new Error(`Not implemented: ${id}.construct`);
                },
                defineProperty() {
                    throw new Error(`Not implemented: ${id}.defineProperty`);
                },
                deleteProperty() {
                    throw new Error(`Not implemented: ${id}.deleteProperty`);
                },
                get() {
                    throw new Error(`Not implemented: ${id}.get`);
                },
                getOwnPropertyDescriptor() {
                    throw new Error(`Not implemented: ${id}.getOwnPropertyDescriptor`);
                },
                getPrototypeOf() {
                    throw new Error(`Not implemented: ${id}.getPrototypeOf`);
                },
                has() {
                    throw new Error(`Not implemented: ${id}.has`);
                },
                isExtensible() {
                    throw new Error(`Not implemented: ${id}.isExtensible`);
                },
                ownKeys() {
                    throw new Error(`Not implemented: ${id}.ownKeys`);
                },
                preventExtensions() {
                    throw new Error(`Not implemented: ${id}.preventExtensions`);
                },
                set() {
                    throw new Error(`Not implemented: ${id}.set`);
                },
                setPrototypeOf() {
                    throw new Error(`Not implemented: ${id}.setPrototypeOf`);
                } }, handler);
    }
}
//# sourceMappingURL=helpers.js.map