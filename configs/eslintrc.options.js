module.exports = {
  consistentImport: [
    {
      altLocalNames: ["functionsTestUtils"],
      sourcePattern: "@skylib/functions/dist/test-utils",
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
      subOptionsId: "functions.program-flow"
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
        /\bWritable\s*<\s*(?:IndexedObject|IndexedRecord|PartialRecord|Rec)\b/u
          .source,
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
  ],
  noRestrictedSyntax: [
    {
      message: 'Use "defineFn" instead',
      selector:
        ":matches(ExportNamedDeclaration, Program, TSModuleBlock) > VariableDeclaration > VariableDeclarator > CallExpression > :matches(.callee[name=assign], .callee[property.name=assign])"
    },
    {
      message: 'Use "cast.number" instead',
      selector: "CallExpression > Identifier.callee[name=Number]"
    },
    {
      message: 'Use "cast.string" instead',
      selector: "CallExpression > Identifier.callee[name=String]"
    },
    {
      message: 'Use "evaluate" instead',
      selector:
        "CallExpression[arguments.length=0] > ArrowFunctionExpression.callee"
    },
    {
      message: "Unsafe function",
      selector:
        "CallExpression[callee.object.name=/^o|reflect$/u][callee.property.name=get]"
    },
    {
      message: 'Use "a.first" instead',
      selector:
        "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=0]"
    },
    {
      message: 'Use "a.second" instead',
      selector:
        "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=1]"
    },
    {
      message: 'Use "a.third" instead',
      selector:
        "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=2]"
    },
    {
      message: 'Use "not.toHaveBeenCalled" instead',
      selector:
        "CallExpression[callee.property.name=toHaveBeenCalledTimes] > Literal.arguments:first-child[value=0]"
    },
    {
      message: "Unsafe function",
      selector:
        "CallExpression > MemberExpression.callee[object.name=o][property.name=unfreeze]"
    }
  ],
  requireJsdoc: [
    ":matches(ExportNamedDeclaration, Program, TSModuleBlock) > VariableDeclaration > VariableDeclarator > CallExpression[callee.name=defineFn] > :matches(ArrowFunctionExpression, FunctionExpression)",
    ":matches(ExportNamedDeclaration, Program, TSModuleBlock) > VariableDeclaration > VariableDeclarator > CallExpression[callee.name=defineFn] > ObjectExpression > Property > :matches(ArrowFunctionExpression, FunctionExpression)"
  ]
};
