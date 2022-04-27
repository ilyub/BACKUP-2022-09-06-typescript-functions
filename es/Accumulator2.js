import { is } from "@";
export class Accumulator2 {
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
    get(key1, key2) {
        var _a, _b, _c;
        return is.not.empty(key2)
            ? (_b = (_a = this.map.get(key1)) === null || _a === void 0 ? void 0 : _a.get(key2)) !== null && _b !== void 0 ? _b : []
            : (_c = this.map.get(key1)) !== null && _c !== void 0 ? _c : new Map();
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
    /**
     * Returns values.
     */
    *values() {
        for (const map of this.map.values())
            for (const arr of map.values())
                yield arr;
    }
}
//# sourceMappingURL=Accumulator2.js.map