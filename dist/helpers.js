"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapProxyHandler = exports.wait = exports.safeAccess = exports.onDemand = exports.createFacade = void 0;
const tslib_1 = require("tslib");
const is = (0, tslib_1.__importStar)(require("./guards"));
const o = (0, tslib_1.__importStar)(require("./object"));
const reflect = (0, tslib_1.__importStar)(require("./reflect"));
const s = (0, tslib_1.__importStar)(require("./string"));
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
    const proxy = new Proxy(proxyTarget, wrapProxyHandler("createFacade", {
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
    return new Proxy({}, wrapProxyHandler("onDemand", {
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
 * @param writableKeys - Writable keys.
 * @param readonlyKeys - Readonly keys.
 * @returns Safe access interface.
 */
function safeAccess(obj, writableKeys, readonlyKeys = []) {
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
 * @param handler - Handler.
 * @returns New handler with missing methods added.
 */
function wrapProxyHandler(id, handler) {
    return Object.assign({ apply() {
            throw new Error(`Proxy method not implemented: ${id}.apply`);
        },
        construct() {
            throw new Error(`Proxy method not implemented: ${id}.construct`);
        },
        defineProperty() {
            throw new Error(`Proxy method not implemented: ${id}.defineProperty`);
        },
        deleteProperty() {
            throw new Error(`Proxy method not implemented: ${id}.deleteProperty`);
        },
        get() {
            throw new Error(`Proxy method not implemented: ${id}.get`);
        },
        getOwnPropertyDescriptor() {
            throw new Error(`Proxy method not implemented: ${id}.getOwnPropertyDescriptor`);
        },
        getPrototypeOf() {
            throw new Error(`Proxy method not implemented: ${id}.getPrototypeOf`);
        },
        has() {
            throw new Error(`Proxy method not implemented: ${id}.has`);
        },
        isExtensible() {
            throw new Error(`Proxy method not implemented: ${id}.isExtensible`);
        },
        ownKeys() {
            throw new Error(`Proxy method not implemented: ${id}.ownKeys`);
        },
        preventExtensions() {
            throw new Error(`Proxy method not implemented: ${id}.preventExtensions`);
        },
        set() {
            throw new Error(`Proxy method not implemented: ${id}.set`);
        },
        setPrototypeOf() {
            throw new Error(`Proxy method not implemented: ${id}.setPrototypeOf`);
        } }, handler);
}
exports.wrapProxyHandler = wrapProxyHandler;
//# sourceMappingURL=helpers.js.map