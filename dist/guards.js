"use strict";
/* eslint-disable @skylib/primary-export-only -- Wait for @skylib/eslint update */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.factory = exports.enumeration = exports.empty = exports.callable = exports.boolean = exports.unknownsU = exports.unknowns = exports.symbolsU = exports.symbols = exports.symbolU = exports.stringsU = exports.strings = exports.setsU = exports.sets = exports.setU = exports.objectsU = exports.objects = exports.objectU = exports.numbersU = exports.numbers = exports.numberU = exports.numStrsU = exports.numStrs = exports.numStrU = exports.mapsU = exports.maps = exports.mapU = exports.indexedObjectsU = exports.indexedObjects = exports.indexedObjectU = exports.booleansU = exports.booleans = exports.booleanU = exports.arraysU = exports.arrays = exports.arrayU = exports.not = exports.tuple = exports.set = exports.or = exports.object = exports.map = exports.indexedObject = exports.array = exports.and = exports.undefined = exports.true = exports.null = exports.false = void 0;
exports.unknown = exports.symbol = exports.stringU = exports.string = exports.number = exports.numStr = exports.never = exports.instances = void 0;
const tslib_1 = require("tslib");
const a = tslib_1.__importStar(require("./array"));
const helpers_1 = require("./helpers");
const module_definition_1 = require("./module-definition");
const o = tslib_1.__importStar(require("./object"));
exports.and = (0, module_definition_1.defineFn)((0, module_definition_1.overloadedFn)(() => {
    return _and;
    function _and(value, ...guards) {
        return guards.every(guard => guard(value));
    }
}), {
    factory: (0, module_definition_1.overloadedFn)(() => {
        return _factory;
        function _factory(...guards) {
            return (value) => guards.every(guard => guard(value));
        }
    })
});
exports.array = (0, module_definition_1.defineFn)(
/**
 * Checks if value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
(value) => Array.isArray(value), {
    /**
     * Checks if value type is T[].
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is T[], _false_ otherwise.
     */
    of(value, guard) {
        return (0, exports.array)(value) && value.every(guard);
    }
});
exports.indexedObject = (0, module_definition_1.defineFn)(
/**
 * Checks if value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
(value) => typeof value === "object" && value !== null, {
    /**
     * Checks if value type is IndexedObject\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
     */
    of(value, guard) {
        return (0, exports.object)(value) && o.values(value).every(guard);
    }
});
exports.map = (0, module_definition_1.defineFn)(
/**
 * Checks if value type is Map.
 *
 * @param value - Value.
 * @returns _True_ if value type is Map, _false_ otherwise.
 */
(value) => value instanceof Map, {
    /**
     * Checks if value type is Map\<K, V\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
     */
    of(value, keyGuard, valueGuard) {
        return ((0, exports.map)(value) &&
            a.fromIterable(value).every(([k, v]) => keyGuard(k) && valueGuard(v)));
    }
});
exports.object = (0, module_definition_1.defineFn)(
/**
 * Checks if value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
(value) => typeof value === "object" && value !== null, {
    factory: (0, module_definition_1.overloadedFn)(() => {
        return _factory;
        function _factory(required, optional) {
            return (value) => exports.object.of(value, required, optional);
        }
    }),
    of: (0, module_definition_1.overloadedFn)(() => {
        return _of;
        function _of(value, required, optional) {
            return ((0, exports.indexedObject)(value) &&
                o.every(required, (guard, key) => checkRequiredProp(value, key, guard)) &&
                o.every(optional, (guard, key) => checkOptionalProp(value, key, guard)));
        }
    })
});
exports.or = (0, module_definition_1.defineFn)((0, module_definition_1.overloadedFn)(() => {
    return _or;
    function _or(value, ...guards) {
        return guards.some(guard => guard(value));
    }
}), {
    factory: (0, module_definition_1.overloadedFn)(() => {
        return _factory;
        function _factory(...guards) {
            return (value) => guards.some(guard => guard(value));
        }
    })
});
exports.set = (0, module_definition_1.defineFn)(
/**
 * Checks if value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
(value) => value instanceof Set, {
    /**
     * Checks if value type is Set\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
     */
    of(value, guard) {
        return (0, exports.set)(value) && a.fromIterable(value).every(v => guard(v));
    }
});
exports.tuple = (0, module_definition_1.defineFn)((0, module_definition_1.overloadedFn)(() => {
    return _tuple;
    function _tuple(value, ...guards) {
        return ((0, exports.array)(value) && guards.every((guard, index) => guard(value[index])));
    }
}), {
    factory: (0, module_definition_1.overloadedFn)(() => {
        return _factory;
        function _factory(...guards) {
            return (value) => (0, exports.array)(value) && guards.every((guard, index) => guard(value[index]));
        }
    })
});
exports.not = (0, module_definition_1.defineFn)(
/**
 * Checks if value type is not T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
(value, guard) => !guard(value), {
    array: _notFactory(exports.array),
    boolean: _notFactory(boolean),
    empty: _notFactory(empty),
    factory: _notFactory,
    false: _notFactory(_false),
    indexedObject: _notFactory(exports.indexedObject),
    map: _notFactory(exports.map),
    null: _notFactory(_null),
    numStr: _notFactory(numStr),
    number: _notFactory(number),
    object: _notFactory(exports.object),
    set: _notFactory(exports.set),
    string: _notFactory(string),
    stringU: _notFactory(stringU),
    symbol: _notFactory(symbol),
    true: _notFactory(_true),
    undefined: _notFactory(_undefined)
});
exports.arrayU = exports.or.factory(exports.array, _undefined);
exports.arrays = factory(exports.array.of, exports.array);
exports.arraysU = exports.or.factory(exports.arrays, _undefined);
exports.booleanU = exports.or.factory(boolean, _undefined);
exports.booleans = factory(exports.array.of, boolean);
exports.booleansU = exports.or.factory(exports.booleans, _undefined);
exports.indexedObjectU = exports.or.factory(exports.indexedObject, _undefined);
exports.indexedObjects = factory(exports.array.of, exports.indexedObject);
exports.indexedObjectsU = exports.or.factory(exports.indexedObjects, _undefined);
exports.mapU = exports.or.factory(exports.map, _undefined);
exports.maps = factory(exports.array.of, exports.map);
exports.mapsU = exports.or.factory(exports.maps, _undefined);
exports.numStrU = exports.or.factory(numStr, _undefined);
exports.numStrs = factory(exports.array.of, numStr);
exports.numStrsU = exports.or.factory(exports.numStrs, _undefined);
exports.numberU = exports.or.factory(number, _undefined);
exports.numbers = factory(exports.array.of, number);
exports.numbersU = exports.or.factory(exports.numbers, _undefined);
exports.objectU = exports.or.factory(exports.object, _undefined);
exports.objects = factory(exports.array.of, exports.object);
exports.objectsU = exports.or.factory(exports.objects, _undefined);
exports.setU = exports.or.factory(exports.set, _undefined);
exports.sets = factory(exports.array.of, exports.set);
exports.setsU = exports.or.factory(exports.sets, _undefined);
exports.strings = factory(exports.array.of, string);
exports.stringsU = exports.or.factory(exports.strings, _undefined);
exports.symbolU = exports.or.factory(symbol, _undefined);
exports.symbols = factory(exports.array.of, symbol);
exports.symbolsU = exports.or.factory(exports.symbols, _undefined);
exports.unknowns = factory(exports.array.of, unknown);
exports.unknownsU = exports.or.factory(exports.unknowns, _undefined);
/**
 * Checks if value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
function boolean(value) {
    return typeof value === "boolean";
}
exports.boolean = boolean;
/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
function callable(value) {
    return typeof value === "function";
}
exports.callable = callable;
/**
 * Checks if value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
function empty(value) {
    return value === null || value === undefined;
}
exports.empty = empty;
/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
function enumeration(value, vo) {
    return (0, helpers_1.typedef)(vo).has(value);
}
exports.enumeration = enumeration;
/**
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Arguments.
 * @returns Single-arg guard.
 */
function factory(guard, ...args) {
    return (value) => guard(value, ...args);
}
exports.factory = factory;
/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
function instance(value, ctor) {
    return value instanceof ctor;
}
exports.instance = instance;
/**
 * Checks if value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
function instances(value, ctor) {
    return (0, exports.array)(value) && value.every(v => v instanceof ctor);
}
exports.instances = instances;
/**
 * Checks if value is _never_.
 *
 * @param _value - Value.
 * @returns _False_.
 */
function never(_value) {
    return false;
}
exports.never = never;
/**
 * Checks if value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
function numStr(value) {
    switch (typeof value) {
        case "number":
            return !Number.isNaN(value);
        case "string":
            return true;
        default:
            return false;
    }
}
exports.numStr = numStr;
/**
 * Checks if value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
function number(value) {
    return typeof value === "number" && !Number.isNaN(value);
}
exports.number = number;
/**
 * Checks if value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
function string(value) {
    return typeof value === "string";
}
exports.string = string;
/**
 * Checks if value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
function stringU(value) {
    switch (typeof value) {
        case "string":
            return value !== "";
        case "undefined":
            return true;
        default:
            return false;
    }
}
exports.stringU = stringU;
/**
 * Checks if value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
function symbol(value) {
    return typeof value === "symbol";
}
exports.symbol = symbol;
/**
 * Checks if value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_.
 */
function unknown(_value) {
    return true;
}
exports.unknown = unknown;
/**
 * Checks if value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
function _false(value) {
    return value === false;
}
exports.false = _false;
/**
 * Creates guard for type not T.
 *
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
 */
function _notFactory(guard) {
    return (value) => !guard(value);
}
/**
 * Checks if value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function _null(value) {
    return value === null;
}
exports.null = _null;
/**
 * Checks if value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
function _true(value) {
    return value === true;
}
exports.true = _true;
/**
 * Checks if value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
function _undefined(value) {
    return value === undefined;
}
exports.undefined = _undefined;
/**
 * Checks if object has optional property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has optional property, _false_ otherwise.
 */
function checkOptionalProp(obj, key, guard) {
    return o.hasOwnProp(key, obj) ? guard(obj[key]) : true;
}
/**
 * Checks if object has required property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has required property, _false_ otherwise.
 */
function checkRequiredProp(obj, key, guard) {
    return o.hasOwnProp(key, obj) ? guard(obj[key]) : false;
}
//# sourceMappingURL=guards.js.map