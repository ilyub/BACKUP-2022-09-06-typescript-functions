module.exports = {
  rules: {
    "@skylib/consistent-import/functions": [
      "warn",
      {
        sources: [
          {
            _id: "test-utils",
            altLocalNames: ["functionsTestUtils"],
            source: "@skylib/functions/src/test-utils",
            sourcePattern: "@skylib/functions/{dist,es}/test-utils",
            type: "wildcard"
          }
        ]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-array": [
      "warn",
      {
        message: "Expecting type to include array or unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:array|arrayU)$/u] > .arguments:first-child",
        typeHasNoneOf: ["any", "array", "object", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-boolean": [
      "warn",
      {
        message: "Expecting type to include boolean or unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:boolean|booleanU)$/u] > .arguments:first-child",
        typeHasNoneOf: ["any", "boolean", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-callable": [
      "warn",
      {
        message: "Expecting type to include function or unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=callable] > .arguments:first-child",
        typeHasNoneOf: ["any", "function", "object", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-empty": [
      "warn",
      {
        message: "Expecting type to include null, undefined or unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=empty] > .arguments:first-child",
        typeHasNoneOf: ["any", "null", "undefined", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-enumeration": [
      "warn",
      {
        message: "Expecting type to include string, unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=enumeration] > .arguments:first-child",
        typeHasNoneOf: ["any", "string", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-false": [
      "warn",
      {
        message: "Expecting type to include boolean or unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=false] > .arguments:first-child",
        typeHasNoneOf: ["any", "boolean", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-indexedObject": [
      "warn",
      {
        message: "Expecting type to be unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:indexedObject|indexedObjectU)$/u] > .arguments:first-child",
        typeHasNoneOf: ["any", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-instanceOf": [
      "warn",
      {
        message: "Expecting type to include object, unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=instanceOf] > .arguments:first-child",
        typeHasNoneOf: ["any", "object", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-map": [
      "warn",
      {
        message: "Expecting type to include object, unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=map] > .arguments:first-child",
        typeHasNoneOf: ["any", "object", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-not-empty": [
      "warn",
      {
        message: "Expecting type to include null, undefined or unknown",
        selector:
          "CallExpression[callee.object.object.name=/^(?:as|assert|is)$/u][callee.object.property.name=not][callee.property.name=empty] > .arguments:first-child",
        typeHasNoneOf: ["any", "null", "undefined", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-null": [
      "warn",
      {
        message: "Expecting type to include null or unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=null] > .arguments:first-child",
        typeHasNoneOf: ["any", "null", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-numStr": [
      "warn",
      {
        message: "Expecting type to include number, string or unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:numStr|numStrU)$/u] > .arguments:first-child",
        typeHasNoneOf: ["any", "number", "string", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-number": [
      "warn",
      {
        message: "Expecting type to include number, unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:number|numberU)$/u] > .arguments:first-child",
        typeHasNoneOf: ["any", "number", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-object": [
      "warn",
      {
        message: "Expecting type to include object, unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:object|objectU)$/u] > .arguments:first-child",
        typeHasNoneOf: ["any", "object", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-set": [
      "warn",
      {
        message: "Expecting type to include object, unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=set] > .arguments:first-child",
        typeHasNoneOf: ["any", "object", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-string": [
      "warn",
      {
        message: "Expecting type to include string, unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:string|stringU)$/u] > .arguments:first-child",
        typeHasNoneOf: ["any", "string", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-symbol": [
      "warn",
      {
        message: "Expecting type to include symbol, unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:symbol|symbolU)$/u] > .arguments:first-child",
        typeHasNoneOf: ["any", "symbol", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-true": [
      "warn",
      {
        message: "Expecting type to include boolean or unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=true] > .arguments:first-child",
        typeHasNoneOf: ["any", "boolean", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-tuple": [
      "warn",
      {
        message: "Expecting type to include array or unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=tuple] > .arguments:first-child",
        typeHasNoneOf: ["any", "array", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/guard-arg-undefined": [
      "warn",
      {
        message: "Expecting type to include undefined or unknown",
        selector:
          "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=undefined] > .arguments:first-child",
        typeHasNoneOf: ["any", "undefined", "unknown"]
      }
    ],
    "@skylib/no-restricted-syntax/no-Writable": [
      "warn",
      {
        message: 'Prefer "Writable..." type',
        selector: [
          "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=IndexedObject]",
          "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=IndexedRecord]",
          "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=PartialRecord]",
          "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=Rec]"
        ]
      }
    ],
    "@skylib/no-restricted-syntax/no-o-unfreeze": [
      "warn",
      {
        message: "Avoid unsafe function (o.unfreeze)",
        selector:
          "CallExpression > .callee[object.name=o][property.name=unfreeze]"
      }
    ],
    "@skylib/no-restricted-syntax/no-reflect-get": [
      "warn",
      {
        message: 'Prefer "o.get" function',
        selector:
          "CallExpression > .callee[object.name=reflect][property.name=get]"
      }
    ],
    "@skylib/no-restricted-syntax/no-reflect-set": [
      "warn",
      {
        message: 'Prefer "o.set" function',
        selector:
          "CallExpression > .callee[object.name=reflect][property.name=set]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-IndexedObject": [
      "warn",
      {
        message: 'Prefer "IndexedObject" type',
        selector:
          "TSTypeReference[typeName.name=Rec] > .typeParameters > .params:first-child > .typeName[name=PropertyKey]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-IndexedRecord": [
      "warn",
      {
        message: 'Prefer "IndexedRecord" type',
        selector:
          "TSTypeReference[typeName.name=Rec] > .typeParameters > .params:first-child > .typeName[name=string]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-NumStr": [
      "warn",
      {
        message: 'Prefer "NumStr" type',
        selector: [
          "TSUnionType[types.0.type=TSNumberKeyword][types.1.type=TSStringKeyword]",
          "TSUnionType[types.0.type=TSNumberKeyword][types.2.type=TSStringKeyword]",
          "TSUnionType[types.1.type=TSNumberKeyword][types.0.type=TSStringKeyword]",
          "TSUnionType[types.1.type=TSNumberKeyword][types.2.type=TSStringKeyword]",
          "TSUnionType[types.2.type=TSNumberKeyword][types.0.type=TSStringKeyword]",
          "TSUnionType[types.2.type=TSNumberKeyword][types.1.type=TSStringKeyword]"
        ]
      }
    ],
    "@skylib/no-restricted-syntax/prefer-PartialRecord": [
      "warn",
      {
        message: 'Prefer "PartialRecord" type',
        selector:
          "TSTypeReference[typeName.name=Partial] > .typeParameters > .params:first-child > .typeName[name=Rec]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-WritableIndexedObject": [
      "warn",
      {
        message: 'Prefer "WritableIndexedObject" type',
        selector:
          "TSTypeReference[typeName.name=WritableRecord] > .typeParameters > .params:first-child > .typeName[name=PropertyKey]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-WritableRecord": [
      "warn",
      {
        message: 'Prefer "WritableRecord" type',
        selector: "Identifier[name=Record]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-a-first": [
      "warn",
      {
        message: 'Use "a.first" instead',
        selector:
          "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=0]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-a-fromIterable": [
      "warn",
      {
        message: 'Prefer "a.fromIterable" function',
        selector: "ArrayExpression[elements.length=1] > SpreadElement"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-a-second": [
      "warn",
      {
        message: 'Use "a.second" instead',
        selector:
          "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=1]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-a-third": [
      "warn",
      {
        message: 'Use "a.third" instead',
        selector:
          "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=2]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-cast-number": [
      "warn",
      {
        message: 'Prefer "cast.number" function',
        selector: "CallExpression > .callee[name=Number]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-cast-string": [
      "warn",
      {
        message: 'Prefer "cast.string" function',
        selector: "CallExpression > .callee[name=String]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-defineFn": [
      "warn",
      {
        message: 'Use "defineFn" instead',
        selector:
          ":matches(ExportNamedDeclaration, Program, TSModuleBlock) > VariableDeclaration > VariableDeclarator > CallExpression > :matches(.callee[name=assign], .callee[property.name=assign])"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-evaluate": [
      "warn",
      {
        message: 'Use "evaluate" instead',
        selector:
          "CallExpression[arguments.length=0] > ArrowFunctionExpression.callee"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-json": [
      "warn",
      { message: 'Prefer "json" module', selector: "Identifier[name=JSON]" }
    ],
    "@skylib/no-restricted-syntax/prefer-mockCallsToBe": [
      "warn",
      {
        message: 'Prefer "mockCallsToBe" function',
        selector: [
          "Identifier[name=mockClear]",
          "Identifier[name=toHaveBeenCalled]",
          "Identifier[name=toHaveBeenCalledTimes]",
          "Identifier[name=toHaveBeenCalledWith]"
        ]
      }
    ],
    "@skylib/no-restricted-syntax/prefer-o-assign": [
      "warn",
      {
        message: 'Prefer "o.assign" function',
        selector:
          "CallExpression > .callee[object.name=Object][property.name=assign]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-o-clone": [
      "warn",
      {
        message: 'Prefer "o.clone" function',
        selector: "ObjectExpression[properties.length=1] > SpreadElement"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-o-defineProperty": [
      "warn",
      {
        message: 'Prefer "o.defineProperty" function',
        selector:
          "CallExpression > .callee[object.name=Object][property.name=defineProperty]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-o-entries": [
      "warn",
      {
        message: 'Prefer "o.entries" function',
        selector:
          "CallExpression > .callee[object.name=Object][property.name=entries]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-o-getPrototypeOf": [
      "warn",
      {
        message: 'Prefer "o.getPrototypeOf" function',
        selector:
          "CallExpression > .callee[object.name=Object][property.name=getPrototypeOf]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-o-hasOwnProp": [
      "warn",
      {
        message: 'Prefer "o.hasOwnProp" function',
        selector:
          "CallExpression > .callee[object.object.object.name=Object][object.object.property.name=prototype][object.property.name=hasOwnProperty][property.name=call]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-o-keys": [
      "warn",
      {
        message: 'Prefer "o.keys" function',
        selector:
          "CallExpression > .callee[object.name=Object][property.name=keys]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-o-values": [
      "warn",
      {
        message: 'Prefer "o.values" function',
        selector:
          "CallExpression > .callee[object.name=Object][property.name=values]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-programFlow-clearInterval": [
      "warn",
      {
        message: 'Prefer "programFlow.clearInterval" function',
        selector: "CallExpression > .callee[name=clearInterval]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-programFlow-clearTimeout": [
      "warn",
      {
        message: 'Prefer "programFlow.clearTimeout" function',
        selector: "CallExpression > .callee[name=clearTimeout]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-programFlow-setInterval": [
      "warn",
      {
        message: 'Prefer "programFlow.setInterval" function',
        selector: "CallExpression > .callee[name=setInterval]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-programFlow-setTimeout": [
      "warn",
      {
        message: 'Prefer "programFlow.setTimeout" function',
        selector: "CallExpression > .callee[name=setTimeout]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-reflect": [
      "warn",
      {
        message: 'Prefer "reflect" module',
        selector: "Identifier[name=Reflect]"
      }
    ],
    "@skylib/no-restricted-syntax/prefer-undefined-shorthand": [
      "warn",
      {
        message: 'Prefer "...U" type',
        selector: [
          "TSUnionType[types.0.literal.raw=/(?:false|true)/u][types.1.type=TSUndefinedKeyword]",
          "TSUnionType[types.0.literal.raw=/(?:false|true)/u][types.2.type=TSUndefinedKeyword]",
          "TSUnionType[types.1.literal.raw=/(?:false|true)/u][types.0.type=TSUndefinedKeyword]",
          "TSUnionType[types.1.literal.raw=/(?:false|true)/u][types.2.type=TSUndefinedKeyword]",
          "TSUnionType[types.2.literal.raw=/(?:false|true)/u][types.0.type=TSUndefinedKeyword]",
          "TSUnionType[types.2.literal.raw=/(?:false|true)/u][types.1.type=TSUndefinedKeyword]",
          "TSUnionType[types.0.literal.raw=/(?:false|true)/u][types.1.typeName.name=empty]",
          "TSUnionType[types.0.literal.raw=/(?:false|true)/u][types.2.typeName.name=empty]",
          "TSUnionType[types.1.literal.raw=/(?:false|true)/u][types.0.typeName.name=empty]",
          "TSUnionType[types.1.literal.raw=/(?:false|true)/u][types.2.typeName.name=empty]",
          "TSUnionType[types.2.literal.raw=/(?:false|true)/u][types.0.typeName.name=empty]",
          "TSUnionType[types.2.literal.raw=/(?:false|true)/u][types.1.typeName.name=empty]",
          "TSUnionType[types.0.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.1.type=TSUndefinedKeyword]",
          "TSUnionType[types.0.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.2.type=TSUndefinedKeyword]",
          "TSUnionType[types.1.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.0.type=TSUndefinedKeyword]",
          "TSUnionType[types.1.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.2.type=TSUndefinedKeyword]",
          "TSUnionType[types.2.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.0.type=TSUndefinedKeyword]",
          "TSUnionType[types.2.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.1.type=TSUndefinedKeyword]",
          "TSUnionType[types.0.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.1.typeName.name=empty]",
          "TSUnionType[types.0.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.2.typeName.name=empty]",
          "TSUnionType[types.1.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.0.typeName.name=empty]",
          "TSUnionType[types.1.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.2.typeName.name=empty]",
          "TSUnionType[types.2.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.0.typeName.name=empty]",
          "TSUnionType[types.2.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.1.typeName.name=empty]",
          "TSUnionType[types.0.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.1.type=TSUndefinedKeyword]",
          "TSUnionType[types.0.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.2.type=TSUndefinedKeyword]",
          "TSUnionType[types.1.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.0.type=TSUndefinedKeyword]",
          "TSUnionType[types.1.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.2.type=TSUndefinedKeyword]",
          "TSUnionType[types.2.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.0.type=TSUndefinedKeyword]",
          "TSUnionType[types.2.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.1.type=TSUndefinedKeyword]",
          "TSUnionType[types.0.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.1.typeName.name=empty]",
          "TSUnionType[types.0.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.2.typeName.name=empty]",
          "TSUnionType[types.1.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.0.typeName.name=empty]",
          "TSUnionType[types.1.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.2.typeName.name=empty]",
          "TSUnionType[types.2.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.0.typeName.name=empty]",
          "TSUnionType[types.2.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.1.typeName.name=empty]"
        ]
      }
    ],
    "@skylib/no-restricted-syntax/restrict-a-mixedFrom-arg-type": [
      "warn",
      {
        message: "Expecting type to include array or unknown",
        selector:
          "CallExpression[callee.object.name=a][callee.property.name=fromMixed] > .arguments:first-child",
        typeHasNoneOf: [
          "boolean",
          "function",
          "number",
          "object",
          "string",
          "symbol"
        ]
      }
    ],
    "@skylib/require-jsdoc/functions": [
      "warn",
      {
        includeSelectors: [
          ":matches(ArrowFunctionExpression, FunctionExpression).arguments:first-child",
          "ObjectExpression.arguments:nth-child(2) > Property.properties > :matches(ArrowFunctionExpression, FunctionExpression).value"
        ].map(
          selector =>
            `:matches(ExportNamedDeclaration, Program, TSModuleBlock) > VariableDeclaration > VariableDeclarator[id.typeAnnotation=undefined] > CallExpression[callee.name=defineFn] > ${selector}`
        ),
        noDefaultSelectors: true
      }
    ]
  }
};
