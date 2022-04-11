"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-identifier[functions.json] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.neq = exports.eq = exports.encode = exports.decode = void 0;
const tslib_1 = require("tslib");
const a = tslib_1.__importStar(require("./array"));
const assert = tslib_1.__importStar(require("./assertions"));
const is = tslib_1.__importStar(require("./guards"));
const helpers_1 = require("./helpers");
/**
 * Decodes JSON string.
 *
 * @param source - JSON string.
 * @returns Decoded value.
 */
function decode(source) {
    try {
        if (is.not.empty(source))
            return JSON.parse(source, reviver);
    }
    catch (_a) {
        // eslint-disable-next-line unicorn/no-null -- Ok
        return null;
    }
    // eslint-disable-next-line unicorn/no-null -- Ok
    return null;
}
exports.decode = decode;
/**
 * Encodes to JSON string.
 *
 * @param source - Value to encode.
 * @returns JSON string.
 */
function encode(source) {
    return JSON.stringify(source, replacer);
}
exports.encode = encode;
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value 1.
 * @param y - Value 2.
 * @returns _True_ if two values are equal, _false_ otherwise.
 */
function eq(x, y) {
    return encode(x) === encode(y);
}
exports.eq = eq;
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value 1.
 * @param y - Value 2.
 * @returns _True_ if two values are not equal, _false_ otherwise.
 */
function neq(x, y) {
    return encode(x) !== encode(y);
}
exports.neq = neq;
const TypeVO = (0, helpers_1.createValidationObject)({
    "map-5702-3c89-3feb-75d4": "map-5702-3c89-3feb-75d4",
    "set-41ef-10c9-ae1f-15e8": "set-41ef-10c9-ae1f-15e8"
});
const isEntry = is.tuple.factory(is.unknown, is.unknown);
const isEntries = is.factory(is.array.of, isEntry);
const isType = is.factory(is.enumeration, TypeVO);
const isCustomData = is.object.factory({ type: isType, value: is.unknown }, {});
/**
 * JSON replacer.
 *
 * @param _key - Key.
 * @param value - Value.
 * @returns New value.
 */
function replacer(_key, value) {
    // eslint-disable-next-line unicorn/no-null -- Ok
    if (is.empty(value))
        return null;
    if (is.map(value))
        return { type: "map-5702-3c89-3feb-75d4", value: a.fromIterable(value) };
    if (is.set(value))
        return { type: "set-41ef-10c9-ae1f-15e8", value: a.fromIterable(value) };
    return value;
}
/**
 * JSON reviver.
 *
 * @param _key - Key.
 * @param value - Value.
 * @returns New value.
 */
function reviver(_key, value) {
    // eslint-disable-next-line unicorn/no-null -- Ok
    if (is.empty(value))
        return null;
    if (isCustomData(value))
        switch (value.type) {
            case "map-5702-3c89-3feb-75d4":
                assert.byGuard(value.value, isEntries);
                return new Map(value.value);
            case "set-41ef-10c9-ae1f-15e8":
                assert.byGuard(value.value, is.array);
                return new Set(value.value);
        }
    return value;
}
//# sourceMappingURL=json.js.map