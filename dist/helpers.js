"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapProxyHandler = exports.wait = exports.safeAccess = exports.onDemand = exports.createFacade = void 0;
const tslib_1 = require("tslib");
const assert = (0, tslib_1.__importStar)(require("./assertions"));
const cast = (0, tslib_1.__importStar)(require("./converters"));
const is = (0, tslib_1.__importStar)(require("./guards"));
const o = (0, tslib_1.__importStar)(require("./object"));
const reflect = (0, tslib_1.__importStar)(require("./reflect"));
const timer = (0, tslib_1.__importStar)(require("./timer"));
/**
 * Creates facade.
 *
 * @param name - Facade name.
 * @param extension - Facade extension.
 * @returns Facade.
 */
function createFacade(name, extension) {
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
exports.createFacade = createFacade;
/**
 * Delays resource generation until demanded.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
function onDemand(generator) {
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
exports.onDemand = onDemand;
/**
 * Creates safe access interface for an object.
 *
 * @param obj - Object.
 * @param guards - Guards.
 * @param readonlyKeys - Readonly keys.
 * @returns Safe access interface.
 */
function safeAccess(obj, guards, readonlyKeys = []) {
    const guardsMap = new Map(Object.entries(guards));
    const writableKeys = Object.keys(guards);
    const keysSet = new Set([...readonlyKeys, ...writableKeys]);
    return new Proxy(obj, wrapProxyHandler("createFacade", "throw", {
        get(target, key) {
            if (keysSet.has(key))
                return reflect.get(target, key);
            throw new Error(`Read access denied: ${cast.string(key)}`);
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
exports.safeAccess = safeAccess;
/**
 * Delays program execution.
 *
 * @param timeout - Timeout (ms).
 */
async function wait(timeout) {
    await new Promise(resolve => {
        timer.addTimeout(resolve, timeout);
    });
}
exports.wait = wait;
/**
 * Adds missing methods to proxy handler.
 *
 * @param id - ID.
 * @param action - Action for missing methods.
 * @param handler - Handler.
 * @returns New handler with missing methods added.
 */
function wrapProxyHandler(id, action, handler) {
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
exports.wrapProxyHandler = wrapProxyHandler;
//# sourceMappingURL=helpers.js.map