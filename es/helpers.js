import * as assert from "./assertions";
import * as cast from "./converters";
import * as fn from "./function";
import * as is from "./guards";
import * as o from "./object";
import * as reflect from "./reflect";
import * as timer from "./timer";
/**
 * Creates facade.
 *
 * @param name - Facade name.
 * @param extension - Facade extension.
 * @returns Facade.
 */
export function createFacade(name, extension) {
    let _implementation;
    const facadeOwnMethods = {
        setImplementation(value) {
            _implementation = value;
        }
    };
    const defaultFacade = Object.assign(Object.assign({}, extension), facadeOwnMethods);
    const proxy = new Proxy(fn.noop, wrapProxyHandler("createFacade", "throw", {
        apply(_target, thisArg, args) {
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
    }));
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    return proxy;
    function facade(key) {
        if (is.not.empty(key) && key in defaultFacade)
            return defaultFacade;
        assert.not.empty(_implementation, `Missing facade implementation: ${name}`);
        return _implementation;
    }
    function implementation() {
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
export function onDemand(generator) {
    let _obj;
    const proxy = new Proxy({}, wrapProxyHandler("onDemand", "throw", {
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
    }));
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    return proxy;
    function obj() {
        _obj = _obj !== null && _obj !== void 0 ? _obj : generator();
        return _obj;
    }
}
/**
 * Defines source type.
 *
 * @param source - Source.
 * @returns Source.
 */
export function typedef(source) {
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
export function safeAccess(obj, guards, readonlyKeys = []) {
    const guardsMap = new Map(Object.entries(guards));
    const writableKeys = o.keys(guards);
    const keys = [...readonlyKeys, ...writableKeys];
    const keysSet = new Set(keys);
    return new Proxy(obj, wrapProxyHandler("safeAccess", "throw", {
        get(target, key) {
            if (keysSet.has(key))
                return reflect.get(target, key);
            throw new Error(`Read access denied: ${cast.string(key)}`);
        },
        getOwnPropertyDescriptor(target, key) {
            if (keysSet.has(key))
                return reflect.getOwnPropertyDescriptor(target, key);
            throw new Error(`Read access denied: ${cast.string(key)}`);
        },
        has(_target, key) {
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
                if (guard(value))
                    return reflect.set(target, key, value);
                else
                    throw new Error(`Type check failed: ${cast.string(key)}`);
            throw new Error(`Write access denied: ${cast.string(key)}`);
        }
    }));
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