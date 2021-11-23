// eslint-disable-next-line import/no-unassigned-import
import "jest-extended";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
import * as matchers from "jest-extended/all";
import $ from "jquery";
import * as _ from "lodash-es";
import * as fakeTimers from "@sinonjs/fake-timers";
import * as a from "../array";
import * as assert from "../assertions";
import * as fn from "../function";
import * as is from "../guards";
/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param min - Min time (inclusive).
 * @param max - Max time (inclusive).
 * @returns Result object.
 */
export async function executionTimeToBeWithin(got, min, max) {
    assert.callable(got, "Expecting async function");
    const start = Date.now();
    await got();
    const executionTime = Date.now() - start;
    return executionTime >= min && executionTime <= max
        ? {
            message: () => `Expected callback execution time (${executionTime} ms) not to be within [${min}, ${max}] ms`,
            pass: true
        }
        : {
            message: () => `Expected callback execution time (${executionTime} ms) to be within [${min}, ${max}] ms`,
            pass: false
        };
}
/**
 * Checks that async function executes within expected time.
 *
 * @param got - Got value.
 * @param time - Expected time.
 * @returns Result object.
 */
export async function executionTimeToEqual(got, time) {
    assert.callable(got, "Expecting async function");
    const start = Date.now();
    await got();
    const executionTime = Date.now() - start;
    return executionTime === time
        ? {
            message: () => `Expected callback execution time not to be ${time} ms`,
            pass: true
        }
        : {
            message: () => `Expected callback execution time (${executionTime} ms) to be ${time} ms`,
            pass: false
        };
}
/**
 * Gets fake timer.
 *
 * @returns Fake timer.
 */
export function getClock() {
    assert.not.empty(clock);
    return clock;
}
/**
 * Checks that object contains expected HTML code.
 *
 * @param got - Got value.
 * @param expected - Expected HTML code.
 * @returns Result object.
 */
export function htmlToEqual(got, expected) {
    const html = fn
        .run(() => {
        if (got instanceof HTMLElement)
            return got.innerHTML;
        const isHtml = is.callable;
        assert.object.of(got, { html: isHtml }, {}, 'Missing "html" method');
        return got.html();
    })
        .trim()
        .replace(/\s+/gu, " ");
    return html === expected
        ? {
            message: () => `Expected HTML code not to be "${expected}"`,
            pass: true
        }
        : {
            message: () => `Expected HTML code to be "${expected}", got "${html}"`,
            pass: false
        };
}
/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
export function installFakeTimer(options = {}) {
    var _a;
    assert.empty(clock);
    clock = fakeTimers.install({
        advanceTimeDelta: 10,
        loopLimit: 1000,
        now: Date.now(),
        shouldAdvanceTime: (_a = options.shouldAdvanceTime) !== null && _a !== void 0 ? _a : false,
        toFake: []
    });
}
/**
 * Jest reset.
 */
export function jestReset() {
    jest.clearAllMocks();
}
/**
 * Jest reset.
 */
jestReset.dom = () => {
    document.body.innerHTML = "";
    $.expr.pseudos["visible"] = jqueryVisiblie;
};
/**
 * Jest setup.
 */
export function jestSetup() {
    {
        const expectExtend = {
            executionTimeToBeWithin,
            executionTimeToEqual,
            htmlToEqual,
            textToEqual,
            toBeSameAs,
            toExist
        };
        expect.extend(matchers);
        expect.extend(expectExtend);
    }
    jestReset();
}
/**
 * Jest setup.
 */
jestSetup.dom = () => {
    jestReset.dom();
};
/**
 * Executes promise or async function.
 * Should be used instead of fn.run when fake timer is install.
 *
 * @param promiseAsync - Promise or async function.
 * @returns The result of callback execution.
 */
export async function run(promiseAsync) {
    const result = await Promise.all([
        fn.run(promiseAsync),
        getClock().runAllAsync()
    ]);
    return result[0];
}
/**
 * Sets random system time.
 */
export function setRandomSystemTime() {
    assert.not.empty(clock);
    const d = fn.run(() => {
        const result = new Date();
        result.setFullYear(_.random(2000, 2100));
        result.setMonth(a.random([0, 11, _.random(1, 10)]));
        result.setDate(a.random([1, 31, _.random(2, 30)]));
        result.setHours(a.random([0, 23, _.random(1, 22)]));
        result.setMinutes(a.random([0, 59, _.random(1, 58)]));
        result.setSeconds(a.random([0, 59, _.random(1, 58)]));
        return result;
    });
    clock.setSystemTime(d);
}
/**
 * Checks that object contains expected text.
 *
 * @param got - Got value.
 * @param expected - Expected text.
 * @returns Result object.
 */
export function textToEqual(got, expected) {
    const text = fn
        .run(() => {
        if (got instanceof HTMLElement) {
            assert.not.empty(got.textContent);
            return got.textContent;
        }
        const isText = is.callable;
        assert.object.of(got, { text: isText }, {}, 'Missing "text" method');
        return got.text();
    })
        .trim()
        .replace(/\s+/gu, " ");
    return text === expected
        ? {
            message: () => `Expected text not to be "${expected}"`,
            pass: true
        }
        : {
            message: () => `Expected text to be "${expected}", got "${text}"`,
            pass: false
        };
}
/**
 * Checks that two objects are identical.
 *
 * @param got - Got value.
 * @param expected - Expected object.
 * @returns Result object.
 */
export function toBeSameAs(got, expected) {
    return got === expected
        ? {
            message: () => "Expected not the same object",
            pass: true
        }
        : {
            message: () => "Expected the same object",
            pass: false
        };
}
/**
 * Checks that object exists.
 *
 * @param got - Got value.
 * @returns Result object.
 */
export function toExist(got) {
    const exists = fn.run(() => {
        const isExists = is.callable;
        assert.object.of(got, { exists: isExists }, {}, 'Missing "exists" method');
        return got.exists();
    });
    return exists
        ? {
            message: () => "Expected object not to exist",
            pass: true
        }
        : {
            message: () => "Expected object to exist",
            pass: false
        };
}
/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/
let clock = undefined;
/**
 * JQuery visible selector.
 *
 * @param el - Element.
 * @returns _True_ if element is visible, _false_ otherwise.
 */
function jqueryVisiblie(el) {
    return $(el).css("display").toLowerCase() !== "none";
}
//# sourceMappingURL=index.js.map