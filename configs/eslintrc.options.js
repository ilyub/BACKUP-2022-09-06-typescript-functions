module.exports = {
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
        /\b(?:Rec|WritableRecord)\s*<\s*PropertyKey\b/u.source,
        /\b(?:empty|undefined)\s*\|\s*(?:NumStr|PropertyKey|boolean|false|null|number|object|string|true)\b/u
          .source,
        /\bPartial\s*<\s*Rec\b/u.source,
        /\bWritable\s*<\s*(?:IndexedObject|PartialRecord|Rec)\b/u.source,
        /\bnumber\s*\|\s*string\b/u.source,
        /\breadonly\s+(?:NumStr|PropertyKey|boolean|never|number|object|string|unknown)\[\]/u
          .source
      ],
      subOptionsId: "functions.types.core"
    }
  ],
  disallowIdentifier: [
    { ids: ["JSON"], subOptionsId: "functions.json" },
    { ids: ["Reflect"], subOptionsId: "functions.reflect" },
    { ids: ["Record"], subOptionsId: "functions.types.core" }
  ]
};
