"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accumulator2 = void 0;
class Accumulator2 {
    /**
     * Creates class instance.
     *
     * @param source - Source.
     */
    constructor(source = []) {
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
    /**
     * Returns array by keys.
     *
     * @param key1 - Key 1.
     * @param key2 - Key 2.
     * @returns Array.
     */
    get(key1, key2) {
        var _a, _b;
        return (_b = (_a = this.map.get(key1)) === null || _a === void 0 ? void 0 : _a.get(key2)) !== null && _b !== void 0 ? _b : [];
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
        else
            this.map.set(key1, new Map([[key2, [value]]]));
    }
}
exports.Accumulator2 = Accumulator2;
//# sourceMappingURL=Accumulator2.js.map