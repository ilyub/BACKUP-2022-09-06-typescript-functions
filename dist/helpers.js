"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapProxyHandler = exports.wait = exports.safeAccess = exports.typedef = exports.onDemand = exports.createValidationObject = exports.createFacade = void 0;
const tslib_1 = require("tslib");
const assert = tslib_1.__importStar(require("./assertions"));
const cast = tslib_1.__importStar(require("./converters"));
const fn = tslib_1.__importStar(require("./function"));
const is = tslib_1.__importStar(require("./guards"));
const o = tslib_1.__importStar(require("./object"));
const programFlow = tslib_1.__importStar(require("./programFlow"));
const reflect = tslib_1.__importStar(require("./reflect"));
/**
 * Creates facade.
 *
 * @param name - Facade name.
 * @param extension - Facade extension.
 * @returns Facade.
 */
function createFacade(name, extension) {
    let _implementation;
    const facadeOwn = Object.assign({ setImplementation(value) {
            _implementation = value;
        } }, extension);
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    return new Proxy(fn.noop, wrapProxyHandler("createFacade", "throw", {
        apply(_target, thisArg, args) {
            return reflect.apply(targetFn(), thisArg, args);
        },
        get(_target, key) {
            return reflect.get(target(key), key);
        },
        getOwnPropertyDescriptor(_target, key) {
            return reflect.getOwnPropertyDescriptor(target(key), key);
        },
        has(_target, key) {
            return reflect.has(target(key), key);
        },
        isExtensible() {
            return reflect.isExtensible(target());
        },
        ownKeys() {
            return reflect.ownKeys(target());
        },
        set(_target, key, value) {
            return reflect.set(target(key), key, value);
        }
    }));
    function target(key) {
        if (is.not.empty(key) && key in facadeOwn)
            return facadeOwn;
        assert.not.empty(_implementation, `Missing facade implementation: ${name}`);
        return _implementation;
    }
    function targetFn() {
        assert.callable(_implementation, `Facade is not callable: ${name}`);
        return _implementation;
    }
}
exports.createFacade = createFacade;
/**
 * Creates validation object.
 *
 * @param source - Source.
 * @returns Validation object.
 */
function createValidationObject(source) {
    if (o.entries(source).every(([key, value]) => key === String(value)))
        return new Set(o.values(source));
    throw new Error("Invalid source");
}
exports.createValidationObject = createValidationObject;
/**
 * Generates resource on demand.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
function onDemand(generator) {
    let _obj;
    const proxy = new Proxy({}, wrapProxyHandler("onDemand", "throw", {
        get(_target, key) {
            return reflect.get(obj(), key);
        },
        getOwnPropertyDescriptor(_target, key) {
            return reflect.getOwnPropertyDescriptor(obj(), key);
        },
        has(_target, key) {
            return reflect.has(obj(), key);
        },
        isExtensible() {
            return reflect.isExtensible(obj());
        },
        ownKeys() {
            return reflect.ownKeys(obj());
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
exports.onDemand = onDemand;
/**
 * Defines value type.
 *
 * @param value - Value.
 * @returns Value.
 */
function typedef(value) {
    return value;
}
exports.typedef = typedef;
/**
 * Creates safe access interface for an object.
 *
 * @param obj - Object.
 * @param guards - Guards.
 * @param readonlyKeys - Readonly keys.
 * @returns Safe access interface.
 */
function safeAccess(obj, guards, readonlyKeys = []) {
    const guardsMap = new Map(o.entries(guards));
    const writableKeys = o.keys(guards);
    const keys = [...writableKeys, ...readonlyKeys];
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
            if (guard) {
                if (guard(value))
                    return reflect.set(target, key, value);
                throw new Error(`Type check failed: ${cast.string(key)}`);
            }
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
        programFlow.setTimeout(resolve, timeout);
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