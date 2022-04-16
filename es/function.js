import * as _ from "@skylib/lodash-commonjs-es";
import * as is from "./guards";
export const noop = _.noop.bind(_);
/**
 * Identity function.
 *
 * @param value - Value.
 * @returns Value.
 */
export function identity(value) {
    return value;
}
export function pipe(value, ...callbacks) {
    for (const callback of callbacks)
        value = callback(value);
    return value;
}
export function run(mixed) {
    return is.callable(mixed) ? mixed() : mixed;
}
//# sourceMappingURL=function.js.map