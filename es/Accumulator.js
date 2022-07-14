export class Accumulator {
    /**
     * Creates class instance.
     *
     * @param source - Source.
     */
    constructor(source = []) {
        // eslint-disable-next-line @skylib/custom/prefer-readonly-array -- Ok
        Object.defineProperty(this, "map", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        for (const [key, arr] of source)
            for (const value of arr)
                this.push(key, value);
    }
    *[Symbol.iterator]() {
        for (const [key, value] of this.map)
            yield [key, value];
    }
    /**
     * Returns array at given key.
     *
     * @param key - Key.
     * @returns Array.
     */
    get(key) {
        var _a;
        return (_a = this.map.get(key)) !== null && _a !== void 0 ? _a : [];
    }
    /**
     * Pushes value.
     *
     * @param key - Key.
     * @param value - Value.
     */
    push(key, value) {
        const arr = this.map.get(key);
        if (arr)
            arr.push(value);
        else
            this.map.set(key, [value]);
    }
    /**
     * Unshifts value.
     *
     * @param key - Key.
     * @param value - Value.
     */
    unshift(key, value) {
        const arr = this.map.get(key);
        if (arr)
            arr.unshift(value);
        else
            this.map.set(key, [value]);
    }
    /**
     * Returns values.
     */
    *values() {
        for (const arr of this.map.values())
            yield arr;
    }
}
//# sourceMappingURL=Accumulator.js.map