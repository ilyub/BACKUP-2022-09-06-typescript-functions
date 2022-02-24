import * as is from "./guards";
/**
 * Prevents parallel running.
 *
 * @param async - Async function.
 * @returns Wrapped async function.
 */
export function doNotRunParallel(async) {
    let running = 0;
    return async (...args) => {
        if (running) {
            // Already running
        }
        else {
            running++;
            try {
                await async(...args);
            }
            finally {
                running--;
            }
        }
    };
}
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