module.exports = {
  overrides: [
    {
      files: "!*.js",
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
        "@skylib/custom/functions/a-mixedFrom-arg-type-include-array": [
          "warn",
          {
            message: "Expecting type to include array",
            selector:
              "CallExpression[callee.object.name=a][callee.property.name=fromMixed] > .arguments:first-child",
            typeHasNot: "array"
          }
        ],
        "@skylib/custom/functions/a-mixedFrom-arg-type-include-non-array": [
          "warn",
          {
            message: "Expecting type to include non-array",
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
        "@skylib/custom/functions/is-array-arg-type": [
          "warn",
          {
            message: "Expecting type to include array or unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:array|arrayU)$/u] > .arguments:first-child",
            typeHasNoneOf: ["any", "array", "object", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-boolean-arg-type": [
          "warn",
          {
            message: "Expecting type to include boolean or unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:boolean|booleanU)$/u] > .arguments:first-child",
            typeHasNoneOf: ["any", "boolean", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-callable-arg-type": [
          "warn",
          {
            message: "Expecting type to include function or unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=callable] > .arguments:first-child",
            typeHasNoneOf: ["any", "function", "object", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-empty-arg-type": [
          "warn",
          {
            message: "Expecting type to include null, undefined or unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=empty] > .arguments:first-child",
            typeHasNoneOf: ["any", "null", "undefined", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-enumeration-arg-type": [
          "warn",
          {
            message: "Expecting type to include string, unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=enumeration] > .arguments:first-child",
            typeHasNoneOf: ["any", "string", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-false-arg-type": [
          "warn",
          {
            message: "Expecting type to include boolean or unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=false] > .arguments:first-child",
            typeHasNoneOf: ["any", "boolean", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-indexedObject-arg-type": [
          "warn",
          {
            message: "Expecting type to be unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:indexedObject|indexedObjectU)$/u] > .arguments:first-child",
            typeHasNoneOf: ["any", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-instanceOf-arg-type": [
          "warn",
          {
            message: "Expecting type to include object, unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=instanceOf] > .arguments:first-child",
            typeHasNoneOf: ["any", "object", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-map-arg-type": [
          "warn",
          {
            message: "Expecting type to include object, unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=map] > .arguments:first-child",
            typeHasNoneOf: ["any", "object", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-not-empty-arg-type": [
          "warn",
          {
            message: "Expecting type to include null, undefined or unknown",
            selector:
              "CallExpression[callee.object.object.name=/^(?:as|assert|is)$/u][callee.object.property.name=not][callee.property.name=empty] > .arguments:first-child",
            typeHasNoneOf: ["any", "null", "undefined", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-null-arg-type": [
          "warn",
          {
            message: "Expecting type to include null or unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=null] > .arguments:first-child",
            typeHasNoneOf: ["any", "null", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-numStr-arg-type": [
          "warn",
          {
            message: "Expecting type to include number, string or unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:numStr|numStrU)$/u] > .arguments:first-child",
            typeHasNoneOf: ["any", "number", "string", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-number-arg-type": [
          "warn",
          {
            message: "Expecting type to include number, unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:number|numberU)$/u] > .arguments:first-child",
            typeHasNoneOf: ["any", "number", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-object-arg-type": [
          "warn",
          {
            message: "Expecting type to include object, unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:object|objectU)$/u] > .arguments:first-child",
            typeHasNoneOf: ["any", "object", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-set-arg-type": [
          "warn",
          {
            message: "Expecting type to include object, unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=set] > .arguments:first-child",
            typeHasNoneOf: ["any", "object", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-string-arg-type": [
          "warn",
          {
            message: "Expecting type to include string, unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:string|stringU)$/u] > .arguments:first-child",
            typeHasNoneOf: ["any", "string", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-symbol-arg-type": [
          "warn",
          {
            message: "Expecting type to include symbol, unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:symbol|symbolU)$/u] > .arguments:first-child",
            typeHasNoneOf: ["any", "symbol", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-true-arg-type": [
          "warn",
          {
            message: "Expecting type to include boolean or unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=true] > .arguments:first-child",
            typeHasNoneOf: ["any", "boolean", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-tuple-arg-type": [
          "warn",
          {
            message: "Expecting type to include array or unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=tuple] > .arguments:first-child",
            typeHasNoneOf: ["any", "array", "unknown"]
          }
        ],
        "@skylib/custom/functions/is-undefined-arg-type": [
          "warn",
          {
            message: "Expecting type to include undefined or unknown",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=undefined] > .arguments:first-child",
            typeHasNoneOf: ["any", "undefined", "unknown"]
          }
        ],
        "@skylib/custom/functions/no-Writable": [
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
        "@skylib/custom/functions/no-evaluate-type-param": [
          "warn",
          {
            message: "Move type definition to function",
            selector:
              "CallExpression[callee.name=evaluate] > TSTypeParameterInstantiation"
          }
        ],
        "@skylib/custom/functions/no-o-unfreeze": [
          "warn",
          {
            message: "Avoid unsafe function (o.unfreeze)",
            selector:
              "CallExpression > .callee[object.name=o][property.name=unfreeze]"
          }
        ],
        "@skylib/custom/functions/no-reflect-get": [
          "warn",
          {
            message: 'Prefer "o.get" function',
            selector:
              "CallExpression > .callee[object.name=reflect][property.name=get]"
          }
        ],
        "@skylib/custom/functions/no-reflect-set": [
          "warn",
          {
            message: 'Prefer "o.set" function',
            selector:
              "CallExpression > .callee[object.name=reflect][property.name=set]"
          }
        ],
        "@skylib/custom/functions/no-ts-toolbelt": [
          "warn",
          {
            message: 'Prefer "@skylib/functions" type',
            selector: [
              "ImportDeclaration > Literal.source[value=ts-toolbelt/out/Object/FilterKeys]",
              "ImportDeclaration > Literal.source[value=ts-toolbelt/out/Object/Optional]",
              "ImportDeclaration > Literal.source[value=ts-toolbelt/out/Object/OptionalKeys]",
              "ImportDeclaration > Literal.source[value=ts-toolbelt/out/Object/Readonly]",
              "ImportDeclaration > Literal.source[value=ts-toolbelt/out/Object/ReadonlyKeys]",
              "ImportDeclaration > Literal.source[value=ts-toolbelt/out/Object/Required]",
              "ImportDeclaration > Literal.source[value=ts-toolbelt/out/Object/RequiredKeys]",
              "ImportDeclaration > Literal.source[value=ts-toolbelt/out/Object/Writable]",
              "ImportDeclaration > Literal.source[value=ts-toolbelt/out/Object/WritableKeys]"
            ]
          }
        ],
        "@skylib/custom/functions/no-unnecessary-is-array": [
          "warn",
          {
            message: "Unnecessary type guard",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:array|arrayU)$/u] > .arguments:first-child",
            typeIs: "array"
          }
        ],
        "@skylib/custom/functions/no-unnecessary-is-boolean": [
          "warn",
          {
            message: "Unnecessary type guard",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:boolean|booleanU)$/u] > .arguments:first-child",
            typeIs: "boolean"
          }
        ],
        "@skylib/custom/functions/no-unnecessary-is-empty": [
          "warn",
          {
            message: "Unnecessary type guard",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=empty] > .arguments:first-child",
            typeIsOneOf: ["null", "undefined"]
          }
        ],
        "@skylib/custom/functions/no-unnecessary-is-null": [
          "warn",
          {
            message: "Unnecessary type guard",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=null] > .arguments:first-child",
            typeIs: "null"
          }
        ],
        "@skylib/custom/functions/no-unnecessary-is-numStr": [
          "warn",
          {
            message: "Unnecessary type guard",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:numStr|numStrU)$/u] > .arguments:first-child",
            typeIsOneOf: ["number", "string"]
          }
        ],
        "@skylib/custom/functions/no-unnecessary-is-number": [
          "warn",
          {
            message: "Unnecessary type guard",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:number|numberU)$/u] > .arguments:first-child",
            typeIs: "number"
          }
        ],
        "@skylib/custom/functions/no-unnecessary-is-object": [
          "warn",
          {
            message: "Unnecessary type guard",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:object|objectU)$/u] > .arguments:first-child",
            typeIs: "object"
          }
        ],
        "@skylib/custom/functions/no-unnecessary-is-string": [
          "warn",
          {
            message: "Unnecessary type guard",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:string|stringU)$/u] > .arguments:first-child",
            typeIs: "string"
          }
        ],
        "@skylib/custom/functions/no-unnecessary-is-symbol": [
          "warn",
          {
            message: "Unnecessary type guard",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=/^(?:symbol|symbolU)$/u] > .arguments:first-child",
            typeIs: "symbol"
          }
        ],
        "@skylib/custom/functions/no-unnecessary-is-undefined": [
          "warn",
          {
            message: "Unnecessary type guard",
            selector:
              "CallExpression[callee.object.name=/^(?:as|assert|is)$/u][callee.property.name=undefined] > .arguments:first-child",
            typeIs: "undefined"
          }
        ],
        "@skylib/custom/functions/prefer-IndexedObject": [
          "warn",
          {
            message: 'Prefer "IndexedObject" type',
            selector:
              "TSTypeReference[typeName.name=Rec] > .typeParameters > .params:first-child > .typeName[name=PropertyKey]"
          }
        ],
        "@skylib/custom/functions/prefer-IndexedRecord": [
          "warn",
          {
            message: 'Prefer "IndexedRecord" type',
            selector:
              "TSTypeReference[typeName.name=Rec] > .typeParameters > .params:first-child > .typeName[name=string]"
          }
        ],
        "@skylib/custom/functions/prefer-NumStr": [
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
        "@skylib/custom/functions/prefer-PartialRecord": [
          "warn",
          {
            message: 'Prefer "PartialRecord" type',
            selector:
              "TSTypeReference[typeName.name=Partial] > .typeParameters > .params:first-child > .typeName[name=Rec]"
          }
        ],
        "@skylib/custom/functions/prefer-ReadonlyMap": [
          "warn",
          {
            message: 'Prefer "ReadonlyMap"',
            selector:
              "NewExpression[arguments.length>0] > Identifier.callee[name=Map]"
          }
        ],
        "@skylib/custom/functions/prefer-ReadonlySet": [
          "warn",
          {
            message: 'Prefer "ReadonlySet"',
            selector:
              "NewExpression[arguments.length>0]  > Identifier.callee[name=Set]"
          }
        ],
        "@skylib/custom/functions/prefer-WritableIndexedObject": [
          "warn",
          {
            message: 'Prefer "WritableIndexedObject" type',
            selector:
              "TSTypeReference[typeName.name=WritableRecord] > .typeParameters > .params:first-child > .typeName[name=PropertyKey]"
          }
        ],
        "@skylib/custom/functions/prefer-WritableRecord": [
          "warn",
          {
            message: 'Prefer "WritableRecord" type',
            selector: "Identifier[name=Record]"
          }
        ],
        "@skylib/custom/functions/prefer-a-first": [
          "warn",
          {
            message: 'Use "a.first" instead',
            selector:
              "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=0]"
          }
        ],
        "@skylib/custom/functions/prefer-a-fromIterable": [
          "warn",
          {
            message: 'Prefer "a.fromIterable" function',
            selector: "ArrayExpression[elements.length=1] > SpreadElement"
          }
        ],
        "@skylib/custom/functions/prefer-a-reverse": [
          "warn",
          {
            message: 'No mutation side-effect, use "a.reverse" instead',
            selector: ".callee[property.name=reverse] > .object",
            typeHas: "array"
          }
        ],
        "@skylib/custom/functions/prefer-a-second": [
          "warn",
          {
            message: 'Use "a.second" instead',
            selector:
              "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=1]"
          }
        ],
        "@skylib/custom/functions/prefer-a-sort": [
          "warn",
          {
            message: 'No mutation side-effect, use "a.sort" instead',
            selector: ".callee[property.name=sort] > .object",
            typeHas: "array"
          }
        ],
        "@skylib/custom/functions/prefer-a-third": [
          "warn",
          {
            message: 'Use "a.third" instead',
            selector:
              "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=2]"
          }
        ],
        "@skylib/custom/functions/prefer-a-truncate": [
          "warn",
          {
            message: 'Use "a.truncate" instead',
            selector:
              "AssignmentExpression[right.value=0] > MemberExpression.left > .object",
            typeIs: "array"
          }
        ],
        "@skylib/custom/functions/prefer-cast-number": [
          "warn",
          {
            message: 'Prefer "cast.number" function',
            selector: "CallExpression > .callee[name=Number]"
          }
        ],
        "@skylib/custom/functions/prefer-cast-string": [
          "warn",
          {
            message: 'Prefer "cast.string" function',
            selector: "CallExpression > .callee[name=String]"
          }
        ],
        "@skylib/custom/functions/prefer-defineFn": [
          "warn",
          {
            message: 'Use "defineFn" instead',
            selector:
              ":matches(ExportNamedDeclaration, Program, TSModuleBlock) > VariableDeclaration > VariableDeclarator > CallExpression[callee.object.name=o][callee.property.name=/^(?:assign|extend)$/u]"
          }
        ],
        "@skylib/custom/functions/prefer-evaluate": [
          "warn",
          {
            message: 'Use "evaluate" instead',
            selector:
              "CallExpression[arguments.length=0] > ArrowFunctionExpression.callee"
          }
        ],
        "@skylib/custom/functions/prefer-json": [
          "warn",
          {
            message: 'Prefer "json" module',
            selector: "Identifier[name=JSON]"
          }
        ],
        "@skylib/custom/functions/prefer-mockCallsToBe": [
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
        "@skylib/custom/functions/prefer-o-assign": [
          "warn",
          {
            message: 'Prefer "o.assign" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=assign]"
          }
        ],
        "@skylib/custom/functions/prefer-o-clone": [
          "warn",
          {
            message: 'Prefer "o.clone" function',
            selector: "ObjectExpression[properties.length=1] > SpreadElement"
          }
        ],
        "@skylib/custom/functions/prefer-o-defineProperty": [
          "warn",
          {
            message: 'Prefer "o.defineProperty" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=defineProperty]"
          }
        ],
        "@skylib/custom/functions/prefer-o-entries": [
          "warn",
          {
            message: 'Prefer "o.entries" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=entries]"
          }
        ],
        "@skylib/custom/functions/prefer-o-getPrototypeOf": [
          "warn",
          {
            message: 'Prefer "o.getPrototypeOf" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=getPrototypeOf]"
          }
        ],
        "@skylib/custom/functions/prefer-o-hasOwnProp": [
          "warn",
          {
            message: 'Prefer "o.hasOwnProp" function',
            selector:
              "CallExpression > .callee[object.object.object.name=Object][object.object.property.name=prototype][object.property.name=hasOwnProperty][property.name=call]"
          }
        ],
        "@skylib/custom/functions/prefer-o-keys": [
          "warn",
          {
            message: 'Prefer "o.keys" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=keys]"
          }
        ],
        "@skylib/custom/functions/prefer-o-values": [
          "warn",
          {
            message: 'Prefer "o.values" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=values]"
          }
        ],
        "@skylib/custom/functions/prefer-programFlow-clearInterval": [
          "warn",
          {
            message: 'Prefer "programFlow.clearInterval" function',
            selector: "CallExpression > .callee[name=clearInterval]"
          }
        ],
        "@skylib/custom/functions/prefer-programFlow-clearTimeout": [
          "warn",
          {
            message: 'Prefer "programFlow.clearTimeout" function',
            selector: "CallExpression > .callee[name=clearTimeout]"
          }
        ],
        "@skylib/custom/functions/prefer-programFlow-setInterval": [
          "warn",
          {
            message: 'Prefer "programFlow.setInterval" function',
            selector: "CallExpression > .callee[name=setInterval]"
          }
        ],
        "@skylib/custom/functions/prefer-programFlow-setTimeout": [
          "warn",
          {
            message: 'Prefer "programFlow.setTimeout" function',
            selector: "CallExpression > .callee[name=setTimeout]"
          }
        ],
        "@skylib/custom/functions/prefer-reflect": [
          "warn",
          {
            message: 'Prefer "reflect" module',
            selector: "Identifier[name=Reflect]"
          }
        ],
        "@skylib/custom/functions/prefer-undefined-shorthand-literal": [
          "warn",
          {
            message: 'Prefer "...U" type',
            selector: [
              "TSUnionType[types.0.literal.raw=/(?:false|true)/u][types.1.type=TSUndefinedKeyword]",
              "TSUnionType[types.0.literal.raw=/(?:false|true)/u][types.1.typeName.name=empty]",
              "TSUnionType[types.0.literal.raw=/(?:false|true)/u][types.2.type=TSUndefinedKeyword]",
              "TSUnionType[types.0.literal.raw=/(?:false|true)/u][types.2.typeName.name=empty]",
              "TSUnionType[types.1.literal.raw=/(?:false|true)/u][types.0.type=TSUndefinedKeyword]",
              "TSUnionType[types.1.literal.raw=/(?:false|true)/u][types.0.typeName.name=empty]",
              "TSUnionType[types.1.literal.raw=/(?:false|true)/u][types.2.type=TSUndefinedKeyword]",
              "TSUnionType[types.1.literal.raw=/(?:false|true)/u][types.2.typeName.name=empty]",
              "TSUnionType[types.2.literal.raw=/(?:false|true)/u][types.0.type=TSUndefinedKeyword]",
              "TSUnionType[types.2.literal.raw=/(?:false|true)/u][types.0.typeName.name=empty]",
              "TSUnionType[types.2.literal.raw=/(?:false|true)/u][types.1.type=TSUndefinedKeyword]",
              "TSUnionType[types.2.literal.raw=/(?:false|true)/u][types.1.typeName.name=empty]"
            ]
          }
        ],
        "@skylib/custom/functions/prefer-undefined-shorthand-type": [
          "warn",
          {
            message: 'Prefer "...U" type',
            selector: [
              "TSUnionType[types.0.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.1.type=TSUndefinedKeyword]",
              "TSUnionType[types.0.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.1.typeName.name=empty]",
              "TSUnionType[types.0.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.2.type=TSUndefinedKeyword]",
              "TSUnionType[types.1.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.0.type=TSUndefinedKeyword]",
              "TSUnionType[types.1.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.0.typeName.name=empty]",
              "TSUnionType[types.1.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.2.type=TSUndefinedKeyword]",
              "TSUnionType[types.1.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.2.typeName.name=empty]",
              "TSUnionType[types.2.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.0.type=TSUndefinedKeyword]",
              "TSUnionType[types.2.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.0.typeName.name=empty]",
              "TSUnionType[types.2.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.1.type=TSUndefinedKeyword]",
              "TSUnionType[types.2.type=/^(?:TSBooleanKeyword|TSNullKeyword|TSNumberKeyword|TSObjectKeyword|TSStringKeyword)$/u][types.1.typeName.name=empty]"
            ]
          }
        ],
        "@skylib/custom/functions/prefer-undefined-shorthand-typeName": [
          "warn",
          {
            message: 'Prefer "...U" type',
            selector: [
              "TSUnionType[types.0.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.1.type=TSUndefinedKeyword]",
              "TSUnionType[types.0.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.1.typeName.name=empty]",
              "TSUnionType[types.0.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.2.type=TSUndefinedKeyword]",
              "TSUnionType[types.0.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.2.typeName.name=empty]",
              "TSUnionType[types.1.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.0.type=TSUndefinedKeyword]",
              "TSUnionType[types.1.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.0.typeName.name=empty]",
              "TSUnionType[types.1.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.2.type=TSUndefinedKeyword]",
              "TSUnionType[types.1.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.2.typeName.name=empty]",
              "TSUnionType[types.2.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.0.type=TSUndefinedKeyword]",
              "TSUnionType[types.2.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.0.typeName.name=empty]",
              "TSUnionType[types.2.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.1.type=TSUndefinedKeyword]",
              "TSUnionType[types.2.typeName.name=/^(?:NumStr|PropertyKey)$/u][types.1.typeName.name=empty]"
            ]
          }
        ],
        "@skylib/custom/functions/require-return-in-defineFn": [
          "warn",
          {
            message: "Missing return type on function",
            selector: [
              "ArrowFunctionExpression[returnType=undefined]",
              "FunctionExpression[returnType=undefined]",
              "ObjectExpression > Property > ArrowFunctionExpression[returnType=undefined]",
              "ObjectExpression > Property > FunctionExpression[returnType=undefined]"
            ].map(
              selector =>
                `:matches(ExportNamedDeclaration, Program, TSModuleBlock) > VariableDeclaration > VariableDeclarator[id.typeAnnotation=undefined] > CallExpression[callee.name=defineFn] > ${selector}`
            )
          }
        ],
        "@skylib/require-jsdoc/functions": [
          "warn",
          {
            includeSelectors: [
              "ArrowFunctionExpression",
              "FunctionExpression",
              "ObjectExpression > Property > ArrowFunctionExpression",
              "ObjectExpression > Property > FunctionExpression"
            ].map(
              selector =>
                `:matches(ExportNamedDeclaration, Program, TSModuleBlock) > VariableDeclaration > VariableDeclarator[id.typeAnnotation=undefined] > CallExpression[callee.name=defineFn] > ${selector}`
            ),
            noDefaultSelectors: true
          }
        ]
      }
    }
  ]
};
