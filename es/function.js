import * as is from "./guards";
/**
 * Identity function.
 *
 * @param value - Value.
 * @returns Value.
 */
export function identity(value) {
    return value;
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => { };
export function pipe(value, ...callbacks) {
    for (const callback of callbacks)
        value = callback(value);
    return value;
}
export function run(mixed) {
    return is.callable(mixed) ? mixed() : mixed;
}
//# sourceMappingURL=function.js.map