/**
 * Returns ESLint options.
 *
 * @param importPrefix - Import prefix.
 * @returns ESLint options.
 */
module.exports = importPrefix => {
  return {
    consistentImport: [
      {
        autoImportSource: `${importPrefix}array`,
        localName: "a",
        sourcePattern: "@skylib/functions/*/array",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}arrayMap`,
        sourcePattern: "@skylib/functions/*/arrayMap",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}assertions`,
        localName: "assert",
        sourcePattern: "@skylib/functions/*/assertions",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}converters`,
        localName: "cast",
        sourcePattern: "@skylib/functions/*/converters",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}function`,
        localName: "fn",
        sourcePattern: "@skylib/functions/*/function",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}guards`,
        localName: "is",
        sourcePattern: "@skylib/functions/*/guards",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}json`,
        sourcePattern: "@skylib/functions/*/json",
        type: "wildcard"
      },
      {
        altLocalNames: ["mapFn"],
        autoImportSource: `${importPrefix}map`,
        sourcePattern: "@skylib/functions/*/map",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}number`,
        localName: "num",
        sourcePattern: "@skylib/functions/*/number",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}object`,
        localName: "o",
        sourcePattern: "@skylib/functions/*/object",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}programFlow`,
        sourcePattern: "@skylib/functions/*/programFlow",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}reflect`,
        sourcePattern: "@skylib/functions/*/reflect",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}regexp`,
        sourcePattern: "@skylib/functions/*/regexp",
        type: "wildcard"
      },
      {
        altLocalNames: ["setFn"],
        autoImportSource: `${importPrefix}set`,
        sourcePattern: "@skylib/functions/*/set",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}string`,
        localName: "s",
        sourcePattern: "@skylib/functions/*/string",
        type: "wildcard"
      },
      {
        altLocalNames: ["functionsTestUtils"],
        autoImportSource: `${importPrefix}testUtils`,
        sourcePattern: "@skylib/functions/*/testUtils",
        type: "wildcard"
      }
    ],
    disallowByRegexp: [
      {
        contexts: ["code"],
        patterns: [/\[\s*\.\.\.[^,\]]+\]/u.source],
        subOptionsId: "functions.array"
      },
      {
        contexts: ["code"],
        patterns: [
          /\{\s*\.\.\.[^,}]+\}/u.source,
          /\bObject\s*\.\s*(?:assign|defineProperty|entries|getPrototypeOf|keys|values)\b/u
            .source,
          /\bObject\s*\.\s*prototype\s*\.\s*hasOwnProperty\b/u.source
        ],
        subOptionsId: "functions.object"
      },
      {
        contexts: ["code"],
        patterns: [
          /(?<!programFlow\s*\.\s*)\b(?:clearInterval|clearTimeout|setInterval|setTimeout)\b/u
            .source
        ],
        subOptionsId: "functions.programFlow"
      },
      {
        contexts: ["code"],
        patterns: [
          /\b(?:NumStr|PropertyKey|boolean|false|null|number|object|string|true)\s*\|\s*(?:empty|undefined)\b/u
            .source,
          /\b(?:empty|undefined)\s*\|\s*(?:NumStr|PropertyKey|boolean|false|null|number|object|string|true)\b/u
            .source,
          /\bPartial\s*<\s*Rec\b/u.source,
          /\bTypedObject\s*<\s*PropertyKey\b/u.source,
          /\bWritable\s*<\s*(?:IndexedObject|PartialRecord|Rec)\b/u.source,
          /\bnumber\s*\|\s*string\b/u.source,
          /\breadonly\s+(?:NumStr|PropertyKey|boolean|never|number|object|string|unknown)\[\]/u
            .source
        ],
        subOptionsId: "functions.types.core"
      }
    ],
    disallowIdentifier: [
      { ids: ["Reflect"], subOptionsId: "functions.reflect" },
      { ids: ["Record"], subOptionsId: "functions.types.core" }
    ]
  };
};
