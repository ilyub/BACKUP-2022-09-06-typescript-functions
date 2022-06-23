import { is } from "..";
/**
 * Checks that value type is Mock.
 *
 * @param value - Value.
 * @returns _True_ if value type is Mock, _false_ otherwise.
 */
export function isMock(value) {
    return is.callable(value);
}
//# sourceMappingURL=expect.internal.js.map