const types = [
  "BigInt",
  "Boolean",
  "Function",
  "Number",
  "Object",
  "ReadonlyArray",
  "ReadonlyMap",
  "ReadonlySet",
  "Promise",
  "RegExp",
  "RegExpExecArray",
  "String",
  "Symbol"
];

module.exports = {
  consistentImport: [
    {
      localName: "matchers",
      sourcePattern: "jest-extended/all",
      type: "wildcard"
    },
    { sourcePattern: "@sinonjs/fake-timers", type: "wildcard" }
  ],
  disallowByRegexp: [
    {
      filesToSkip: ["*.js"],
      patterns: [
        /(?<!function\s+)\bDelayedConfigure\(/u.source,
        /(?<!function\s+)\bDelayedGetConfiguration\(/u.source,
        /(?<!function\s+)\bEmitUpdatesImmediate\(/u.source,
        /(?<!function\s+)\bOwnPropertyClassDecorator\(/u.source,
        /(?<!function\s+)\bOwnPropertyResetValidators\(/u.source,
        /(?<!function\s+)\bOwnPropertyValidate\(/u.source,
        /(?<!function\s+)\bWatchAppliedTo\(/u.source,
        /(?<!function\s+)\bWatchImmediate\(/u.source,
        /(?<!function\s+)\bWatchPath\(/u.source,
        /(?<!function\s+)\bWatchPath1\(/u.source,
        /(?<!function\s+)\bWatchPath2\(/u.source,
        /(?<!function\s+)\bjestResetDictionary\(/u.source,
        /(?<!function\s+)\bjestResetDom\(/u.source,
        /(?<!function\s+)\bjestSetupDictionary\(/u.source,
        /(?<!function\s+)\bjestSetupDom\(/u.source,
        /(?<!function\s+)\bmountAsync\(/u.source,
        /(?<!function\s+)\bpluralReduceRu\(/u.source,
        /(?<!function\s+)\bpropOptionsBoolean\(/u.source,
        /(?<!function\s+)\bpropOptionsDefault\(/u.source,
        /(?<!function\s+)\bpropOptionsRequired\(/u.source,
        /\bProp\s*\.arrayFactory\(/u.source,
        /\bProp\s*\.arrayOf\(/u.source,
        /\bProp\s*\.arrayOfFiltered\(/u.source,
        /\bProp\s*\.arrayOfOrFail\(/u.source,
        /\bProp\s*\.arrayOfUndef\(/u.source,
        /\bProp\s*\.baseFactory\(/u.source,
        /\bProp\s*\.booleanFactory\(/u.source,
        /\bProp\s*\.byGuardOrFail\(/u.source,
        /\bProp\s*\.callableOrFail\(/u.source,
        /\bProp\s*\.enumerationOrFail\(/u.source,
        /\bProp\s*\.indexedObjectFactory\(/u.source,
        /\bProp\s*\.indexedObjectOf\(/u.source,
        /\bProp\s*\.instanceOrFail\(/u.source,
        /\bProp\s*\.instancesFiltered\(/u.source,
        /\bProp\s*\.instancesOrFail\(/u.source,
        /\bProp\s*\.numStrFactory\(/u.source,
        /\bProp\s*\.numberFactory\(/u.source,
        /\bProp\s*\.numberOrFail\(/u.source,
        /\bProp\s*\.numberOrFailFactory\(/u.source,
        /\bProp\s*\.numberUFactory\(/u.source,
        /\bProp\s*\.objectFactory\(/u.source,
        /\bProp\s*\.stringFactory\(/u.source,
        /\bProp\s*\.stringOrFail\(/u.source,
        /\bProp\s*\.stringOrFailFactory\(/u.source,
        /\bProp\s*\.stringUFactory\(/u.source,
        /\bassert\s*\.arrayOf\(/u.source,
        /\bassert\s*\.notEmpty\(/u.source,
        /\bassert\s*\.indexedObjectOf\(/u.source,
        /\bassert\s*\.notNull\(/u.source,
        /\bassert\s*\.objectOf\(/u.source,
        /\bassert\s*\.notUndefined\(/u.source,
        /\bcast\s*\.arrayOf\(/u.source,
        /\bcast\s*\.arrayOfFiltered\(/u.source,
        /\bcast\s*\.arrayOfOrFail\(/u.source,
        /\bcast\s*\.arrayOfUndef\(/u.source,
        /\bcast\s*\.callableOrFail\(/u.source,
        /\bcast\s*\.notEmpty\(/u.source,
        /\bcast\s*\.indexedObjectOf\(/u.source,
        /\bcast\s*\.instanceOrFail\(/u.source,
        /\bcast\s*\.instancesFiltered\(/u.source,
        /\bcast\s*\.instancesOrFail\(/u.source,
        /\bcast\s*\.numberOrFail\(/u.source,
        /\bcast\s*\.stringOrFail\(/u.source,
        /\bis\s*\.andFactory\(/u.source,
        /\bis\s*\.notFactory\(/u.source,
        /\bis\s*\.orFactory\(/u.source,
        /\bis\s*\.arrayOf\(/u.source,
        /\bis\s*\.notBoolean\(/u.source,
        /\bis\s*\.notBooleanU\(/u.source,
        /\bis\s*\.notCallable\(/u.source,
        /\bis\s*\.notCallableU\(/u.source,
        /\bis\s*\.notEmpty\(/u.source,
        /\bis\s*\.indexedObjectOf\(/u.source,
        /\bis\s*\.notNull\(/u.source,
        /\bis\s*\.notNumStr\(/u.source,
        /\bis\s*\.notNumber\(/u.source,
        /\bis\s*\.notNumberU\(/u.source,
        /\bis\s*\.notObject\(/u.source,
        /\bis\s*\.objectOf\(/u.source,
        /\bis\s*\.notString\(/u.source,
        /\bis\s*\.notStringU\(/u.source,
        /\bis\s*\.notUndefined\(/u.source,
        /\bo\s*\.freezeDeep\(/u.source,
        /\bo\s*\.fromEntriesExhaustive\(/u.source,
        /\bo\s*\.unfreezeDeep\(/u.source,
        /\bregexp\s*\.sliceOrFail\(/u.source,
        /\bs\s*\.pathUtilsAddLeadingSlash\(/u.source,
        /\bs\s*\.pathUtilsAddTrailingSlash\(/u.source,
        /\bs\s*\.pathUtilsCanonicalize\(/u.source,
        /\bs\s*\.pathUtilsJoin\(/u.source,
        /\bs\s*\.pathUtilsRemoveLeadingSlash\(/u.source,
        /\bs\s*\.pathUtilsRemoveTrailingSlash\(/u.source
      ]
    },
    {
      filesToSkip: ["*.js"],
      patterns: [
        /\.fromPairs\(/u.source,
        /\.not\s*\.toThrow\((?!\))/u.source,
        /\.toThrow\(\s*["'A-Z`]/u.source,
        /\bValidationObject<\s*\w+\s*>\s*=\s*createValidationObject\b/u.source,
        /\bcomputed\(/u.source,
        /\bcreateValidationObject\(/u.source,
        /\bfn\s*.run\(\s*\(\):/u.source,
        /\bpropOptions\([^()]+(?<!U)\)/u.source,
        /\bref\(\s*undefined\s*\)/u.source,
        `\bReadonly<\\s*(?:${types.join("|")})\\s*[<>]`
      ]
    },
    {
      filesToSkip: ["*.js"],
      patterns: [
        /\.classes\(\)\s*\.includes\(\s*("[^"]*")\s*\)\s*\)\s*\.toBeFalse\(\);/u
          .source
      ],
      replacement: ").not.toHaveClass($1);"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [
        /\.classes\(\)\s*\.includes\(\s*("[^"]*")\s*\)\s*\)\s*\.toBeTrue\(\);/u
          .source
      ],
      replacement: ").toHaveClass($1);"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/\.exists\(\)\s*\)\s*\.toBeFalse\(\);/u.source],
      replacement: ").not.toExist();"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/\.exists\(\)\s*\)\s*\.toBeTrue\(\);/u.source],
      replacement: ").toExist();"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [
        /\.html\(\)\s*\)\s*.(?:toBe|toStrictEqual)\(\s*(?=["'`])/u.source
      ],
      replacement: ").htmlToEqual("
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/\.isVisible\(\)\s*\)\s*\.toBeFalse\(\);/u.source],
      replacement: ").not.toBeVisible();"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/\.isVisible\(\)\s*\)\s*\.toBeTrue\(\);/u.source],
      replacement: ").toBeVisible();"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [
        /\.text\(\)\s*\)\s*.(?:toBe|toStrictEqual)\(\s*(?=["'`])/u.source
      ],
      replacement: ").textToEqual("
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/\.toBeCalledTimes\(\s*0\s*\);/u.source],
      replacement: ".not.toBeCalled();"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/\.(?:toBe|toStrictEqual)\(\s*false\s*\);/u.source],
      replacement: ".toBeFalse();"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/\.(?:toBe|toStrictEqual)\(\s*true\s*\);/u.source],
      replacement: ".toBeTrue();"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/catch\s*\(e:\s*unknown\)/u.source],
      replacement: "catch (e)"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/<q-btn[\s>]/u.source],
      subOptionsId: "BaseButton"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/<q-card[\s>]/u.source],
      subOptionsId: "Card"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/<q-card-actions[\s>]/u.source],
      subOptionsId: "CardActions"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/<q-card-section[\s>]/u.source],
      subOptionsId: "CardSection"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/<q-input[\s>]/u.source],
      subOptionsId: "Input"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/<q-knob[\s>]/u.source],
      subOptionsId: "Knob"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/<q-item[\s>]/u.source],
      subOptionsId: "ListItem"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/<q-menu[\s>]/u.source],
      subOptionsId: "Menu"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/<q-option-group[\s>]/u.source],
      subOptionsId: "OptionGroup"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/<q-toggle[\s>]/u.source],
      subOptionsId: "Toggle"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [/<q-tooltip[\s>]/u.source],
      subOptionsId: "Tooltip"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [
        /\[\s*\.\.\.\w+\s*\]/u.source,
        /\[\s*\.\.\.\w+\s*\.\w+\s*\]/u.source,
        /\[\s*\.\.\.\w+\s*\.\w+\s*\.\w+\s*\]/u.source
      ],
      subOptionsId: "array"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [
        /[=]== null/u.source,
        /[=]== undefined/u.source,
        /!== null/u.source,
        /!== undefined/u.source
      ],
      subOptionsId: "guards"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [
        /\{\s*\.\.\.\w+\s*\}/u.source,
        /\{\s*\.\.\.\w+\s*\.\w+\s*\}/u.source,
        /\{\s*\.\.\.\w+\s*\.\w+\s*\.\w+\s*\}/u.source,
        /\bObject\s*\.assign\(/u.source,
        /\bObject\s*\.getPrototypeOf\(/u.source
      ],
      subOptionsId: "object"
    },
    {
      filesToSkip: ["*.js"],
      patterns: [
        /\bPartial<Record\b/u.source,
        /\bReadonly<\s*Array\b/u.source,
        /\bReadonly<\s*Entry\b/u.source,
        /\bReadonly<\s*IndexedObject\b/u.source,
        /\bReadonly<\s*Map\b/u.source,
        /\bReadonly<\s*PartialRecord\b/u.source,
        /\bReadonly<\s*Record\b/u.source,
        /\bReadonly<\s*Set\b/u.source,
        /\bnull\s*\|\s*undefined\b/u.source,
        /\breadonly\s+(?:NumStr|boolean|number|object|string|unknown)\[\]/u
          .source,
        /\bundefined\s*\|\s*null\b/u.source,
        /\b(?:NumStr|boolean|number|object|string)\s*\|\s*empty\b/u.source,
        /\b(?:NumStr|boolean|number|object|string)\s*\|\s*undefined\b/u.source
      ],
      subOptionsId: "types.core"
    }
  ],
  disallowIdentifier: [
    { ids: ["describe", "toThrowError"] },
    { filesToSkip: ["./tests/**"], ids: ["JQuery"] },
    { ids: ["JSON"], subOptionsId: "json" },
    { ids: ["Reflect"], subOptionsId: "reflect" },
    {
      ids: ["clearInterval", "clearTimeout", "setInterval", "setTimeout"],
      subOptionsId: "timer"
    }
  ],
  extends: [require("./src/configs/eslintrc.options")("@/")]
};
