"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapProxyHandler = exports.wait = exports.onDemand = exports.createFacade = void 0;
const tslib_1 = require("tslib");
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
    const proxy = new Proxy(proxyTarget, wrapProxyHandler({
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
    return new Proxy({}, wrapProxyHandler({
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
 * @param handler - Handler.
 * @returns New handler with missing methods added.
 */
function wrapProxyHandler(handler) {
    return Object.assign({ apply() {
            throw new Error("Proxy method not implemented: apply");
        },
        construct() {
            throw new Error("Proxy method not implemented: construct");
        },
        defineProperty() {
            throw new Error("Proxy method not implemented: defineProperty");
        },
        deleteProperty() {
            throw new Error("Proxy method not implemented: deleteProperty");
        },
        get() {
            throw new Error("Proxy method not implemented: get");
        },
        getOwnPropertyDescriptor() {
            throw new Error("Proxy method not implemented: getOwnPropertyDescriptor");
        },
        getPrototypeOf() {
            throw new Error("Proxy method not implemented: getPrototypeOf");
        },
        has() {
            throw new Error("Proxy method not implemented: has");
        },
        isExtensible() {
            throw new Error("Proxy method not implemented: isExtensible");
        },
        ownKeys() {
            throw new Error("Proxy method not implemented: ownKeys");
        },
        preventExtensions() {
            throw new Error("Proxy method not implemented: preventExtensions");
        },
        set() {
            throw new Error("Proxy method not implemented: set");
        },
        setPrototypeOf() {
            throw new Error("Proxy method not implemented: setPrototypeOf");
        } }, handler);
}
exports.wrapProxyHandler = wrapProxyHandler;
//# sourceMappingURL=helpers.js.map