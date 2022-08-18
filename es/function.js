import * as _ from "@skylib/lodash-commonjs-es";
import * as is from "./guards";
export const noop = _.noop.bind(_);
export const never = () => {
    throw new Error("This function should not be called");
};
/**
 * Identity function.
 *
 * @param value - Value.
 * @returns Value.
 */
export function identity(value) {
    return value;
}
/**
 * Noop function.
 *
 * @param _args - Arguments.
 * @returns _True_.
 */
export function noopTrue(..._args) {
    return true;
}
export function pipe(value, ...callbacks) {
    for (const callback of callbacks)
        value = callback(value);
    return value;
}
/**
 * Gets value from generator.
 *
 * @param mixed - Value or generator.
 * @returns Factory function.
 */
export function valueFromGenerator(mixed) {
    return is.callable(mixed) ? mixed() : mixed;
}
/**
 * Creates generator from value.
 *
 * @param value - Value.
 * @returns Generator.
 */
export function valueToGenerator(value) {
    return () => value;
}
//# sourceMappingURL=function.js.map