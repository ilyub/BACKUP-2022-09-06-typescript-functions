"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accumulator2 = void 0;
const tslib_1 = require("tslib");
const is = tslib_1.__importStar(require("./guards"));
const core_1 = require("./core");
class Accumulator2 {
    /**
     * Creates class instance.
     *
     * @param source - Source.
     */
    constructor(source = []) {
        // eslint-disable-next-line @skylib/functions/prefer-ReadonlyMap, @skylib/typescript/prefer-ReadonlyMap, @skylib/typescript/prefer-readonly-array -- Ok
        Object.defineProperty(this, "map", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        for (const [key1, key2, arr] of source)
            for (const value of arr)
                this.push(key1, key2, value);
    }
    *[Symbol.iterator]() {
        for (const [key1, map] of this.map)
            for (const [key2, arr] of map)
                yield [key1, key2, arr];
    }
    get(key1, key2) {
        var _a, _b;
        const map = (_a = this.map.get(key1)) !== null && _a !== void 0 ? _a : new core_1.ReadonlyMap();
        return is.not.empty(key2) ? (_b = map.get(key2)) !== null && _b !== void 0 ? _b : [] : map;
    }
    /**
     * Pushes value.
     *
     * @param key1 - Key 1.
     * @param key2 - Key 2.
     * @param value - Value.
     */
    push(key1, key2, value) {
        const map = this.map.get(key1);
        if (map) {
            const arr = map.get(key2);
            if (arr)
                arr.push(value);
            else
                map.set(key2, [value]);
        }
        // eslint-disable-next-line @skylib/functions/prefer-ReadonlyMap -- Ok
        else
            this.map.set(key1, new Map([[key2, [value]]]));
    }
    /**
     * Unshifts value.
     *
     * @param key1 - Key 1.
     * @param key2 - Key 2.
     * @param value - Value.
     */
    unshift(key1, key2, value) {
        const map = this.map.get(key1);
        if (map) {
            const arr = map.get(key2);
            if (arr)
                arr.unshift(value);
            else
                map.set(key2, [value]);
        }
        // eslint-disable-next-line @skylib/functions/prefer-ReadonlyMap -- Ok
        else
            this.map.set(key1, new Map([[key2, [value]]]));
    }
    /**
     * Returns values.
     */
    *values() {
        for (const map of this.map.values())
            for (const arr of map.values())
                yield arr;
    }
}
exports.Accumulator2 = Accumulator2;
//# sourceMappingURL=Accumulator2.js.map