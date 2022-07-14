/* eslint-disable @skylib/custom/functions/no-reflect-get -- Ok */
/* eslint-disable @skylib/custom/functions/no-reflect-set -- Ok */
import * as as from "./inline-assertions";
import * as assert from "./assertions";
import * as cast from "./converters";
import * as fn from "./function";
import * as is from "./guards";
import * as o from "./object";
import * as programFlow from "./program-flow";
import * as reflect from "./reflect";
import { ReadonlyMap, ReadonlySet, typedef } from "./core";
/**
 * Creates facade.
 *
 * @param name - Facade name.
 * @param extension - Facade extension.
 * @returns Facade.
 */
export function createFacade(name, extension) {
    let _implementation;
    const facadeOwn = Object.assign({ setImplementation: value => {
            _implementation = value;
        } }, extension);
    const proxy = new Proxy(fn.noop, wrapProxyHandler("createFacade", "throw", {
        apply: (_target, thisArg, args) => reflect.apply(targetFn(), thisArg, args),
        get: (_target, key) => reflect.get(target(key), key),
        getOwnPropertyDescriptor: (_target, key) => reflect.getOwnPropertyDescriptor(target(key), key),
        has: (_target, key) => reflect.has(target(key), key),
        isExtensible: () => reflect.isExtensible(target()),
        ownKeys: () => reflect.ownKeys(target()),
        set: (_target, key, value) => reflect.set(target(key), key, value)
    }));
    return proxy;
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
/**
 * Generates resource on demand.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
export function onDemand(generator) {
    let _obj;
    const proxy = new Proxy({}, wrapProxyHandler("onDemand", "throw", {
        get: (_target, key) => reflect.get(obj(), key),
        getOwnPropertyDescriptor: (_target, key) => reflect.getOwnPropertyDescriptor(obj(), key),
        has: (_target, key) => reflect.has(obj(), key),
        isExtensible: () => reflect.isExtensible(obj()),
        ownKeys: () => reflect.ownKeys(obj()),
        set: (_target, key, value) => {
            reflect.set(obj(), key, value);
            return true;
        }
    }));
    return proxy;
    function obj() {
        _obj = _obj !== null && _obj !== void 0 ? _obj : generator();
        return _obj;
    }
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
    const guardsMap = new ReadonlyMap(o.entries(guards));
    const writableKeys = o.keys(guards);
    const keys = [...writableKeys, ...readonlyKeys];
    const keysSet = new ReadonlySet(keys);
    return new Proxy(obj, wrapProxyHandler("safeAccess", "throw", {
        get: (target, key) => {
            if (keysSet.has(key))
                return reflect.get(target, key);
            throw new Error(`Read access denied: ${cast.string(key)}`);
        },
        getOwnPropertyDescriptor: (target, key) => {
            if (keysSet.has(key))
                return reflect.getOwnPropertyDescriptor(target, key);
            throw new Error(`Read access denied: ${cast.string(key)}`);
        },
        has: (_target, key) => keysSet.has(key),
        isExtensible: target => reflect.isExtensible(target),
        ownKeys: () => keys,
        set: (target, key, value) => {
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
/**
 * Delays program execution.
 *
 * @param timeout - Timeout (ms).
 */
export async function wait(timeout) {
    // eslint-disable-next-line promise/avoid-new -- Ok
    await new Promise(resolve => {
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
export function wrapProxyHandler(id, action, handler) {
    switch (action) {
        case "doDefault":
            return typedef(Object.assign({ apply: (target, thisArg, args) => reflect.apply(as.callable(target), thisArg, args), construct: (target, args, newTarget) => as.object(reflect.construct(as.callable(target), args, newTarget)), defineProperty: (target, key, attrs) => reflect.defineProperty(target, key, attrs), deleteProperty: (target, key) => reflect.deleteProperty(target, key), get: (target, key) => reflect.get(target, key), getOwnPropertyDescriptor: (target, key) => reflect.getOwnPropertyDescriptor(target, key), getPrototypeOf: target => reflect.getPrototypeOf(target), has: (target, key) => reflect.has(target, key), isExtensible: target => reflect.isExtensible(target), ownKeys: target => reflect.ownKeys(target), preventExtensions: target => reflect.preventExtensions(target), set: (target, key, value) => reflect.set(target, key, value), setPrototypeOf: (target, proto) => reflect.setPrototypeOf(target, proto) }, handler));
        case "throw":
            return typedef(Object.assign({ apply: () => {
                    throw new Error(`Not implemented: ${id}.apply`);
                }, construct: () => {
                    throw new Error(`Not implemented: ${id}.construct`);
                }, defineProperty: () => {
                    throw new Error(`Not implemented: ${id}.defineProperty`);
                }, deleteProperty: () => {
                    throw new Error(`Not implemented: ${id}.deleteProperty`);
                }, get: () => {
                    throw new Error(`Not implemented: ${id}.get`);
                }, getOwnPropertyDescriptor: () => {
                    throw new Error(`Not implemented: ${id}.getOwnPropertyDescriptor`);
                }, getPrototypeOf: () => {
                    throw new Error(`Not implemented: ${id}.getPrototypeOf`);
                }, has: () => {
                    throw new Error(`Not implemented: ${id}.has`);
                }, isExtensible: () => {
                    throw new Error(`Not implemented: ${id}.isExtensible`);
                }, ownKeys: () => {
                    throw new Error(`Not implemented: ${id}.ownKeys`);
                }, preventExtensions: () => {
                    throw new Error(`Not implemented: ${id}.preventExtensions`);
                }, set: () => {
                    throw new Error(`Not implemented: ${id}.set`);
                }, setPrototypeOf: () => {
                    throw new Error(`Not implemented: ${id}.setPrototypeOf`);
                } }, handler));
    }
}
//# sourceMappingURL=helpers.js.map