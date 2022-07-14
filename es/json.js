/* eslint-disable @skylib/custom/functions/prefer-json -- Ok */
/* eslint-disable unicorn/no-null -- Ok */
import * as a from "./array";
import * as as from "./inline-assertions";
import * as is from "./guards";
/**
 * Decodes JSON string.
 *
 * @param source - JSON string.
 * @returns Decoded value.
 */
export function decode(source) {
    try {
        if (is.not.empty(source))
            return JSON.parse(source, reviver);
    }
    catch (_a) {
        return null;
    }
    return null;
}
/**
 * Encodes to JSON string.
 *
 * @param source - Value to encode.
 * @returns JSON string.
 */
export function encode(source) {
    return JSON.stringify(source, replacer);
}
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value 1.
 * @param y - Value 2.
 * @returns _True_ if two values are equal, _false_ otherwise.
 */
export function eq(x, y) {
    return encode(x) === encode(y);
}
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value 1.
 * @param y - Value 2.
 * @returns _True_ if two values are not equal, _false_ otherwise.
 */
export function neq(x, y) {
    return encode(x) !== encode(y);
}
var Type;
(function (Type) {
    Type["map"] = "map-5702-3c89-3feb-75d4";
    Type["set"] = "set-41ef-10c9-ae1f-15e8";
})(Type || (Type = {}));
const isEntry = is.tuple.factory(is.unknown, is.unknown);
const isEntries = is.factory(is.array.of, isEntry);
const isType = is.factory(is.enumeration, Type);
const isCustomData = is.object.factory({ type: isType, value: is.unknown }, {});
/**
 * JSON replacer.
 *
 * @param _key - Key.
 * @param value - Value.
 * @returns New value.
 */
function replacer(_key, value) {
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
    if (is.empty(value))
        return null;
    if (isCustomData(value))
        switch (value.type) {
            case Type.map:
                return new Map(as.byGuard(value.value, isEntries));
            case Type.set:
                return new Set(as.byGuard(value.value, is.array));
        }
    return value;
}
//# sourceMappingURL=json.js.map