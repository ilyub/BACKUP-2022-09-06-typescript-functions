module.exports = {
  rules: {
    "@skylib/functions/consistent-import": [
      "warn",
      {
        sources: [
          { sourcePattern: "@skylib/functions", type: "default" },
          {
            altLocalNames: ["functionsTestUtils"],
            sourcePattern: "@skylib/functions/{dist,es}/test-utils",
            type: "wildcard"
          }
        ]
      }
    ],
    "@skylib/functions/no-restricted-syntax": [
      "warn",
      {
        rules: [
          {
            message: "Avoid unsafe function (o.unfreeze)",
            selector:
              "CallExpression > .callee[object.name=o][property.name=unfreeze]",
            _id: "no-o-unfreeze"
          },
          {
            message: 'Prefer "o.get" function',
            selector:
              "CallExpression > .callee[object.name=reflect][property.name=get]",
            _id: "no-reflect-get"
          },
          {
            message: 'Prefer "o.set" function',
            selector:
              "CallExpression > .callee[object.name=reflect][property.name=set]",
            _id: "no-reflect-set"
          },
          {
            message: 'Prefer "IndexedObject" type',
            selector:
              "TSTypeReference[typeName.name=Rec] > .typeParameters > .params:first-child > .typeName[name=PropertyKey]",
            _id: "prefer-IndexedObject"
          },
          {
            message: 'Prefer "IndexedRecord" type',
            selector:
              "TSTypeReference[typeName.name=Rec] > .typeParameters > .params:first-child > .typeName[name=string]",
            _id: "prefer-IndexedRecord"
          },
          {
            message: 'Prefer "json" module',
            selector: "Identifier[name=JSON]",
            _id: "prefer-json"
          },
          {
            message: 'Prefer "reflect" module',
            selector: "Identifier[name=Reflect]",
            _id: "prefer-reflect"
          },
          {
            message: 'Prefer "NumStr" type',
            selector: [
              "TSUnionType[types.0.type=TSNumberKeyword][types.1.type=TSStringKeyword]",
              "TSUnionType[types.0.type=TSNumberKeyword][types.2.type=TSStringKeyword]",
              "TSUnionType[types.1.type=TSNumberKeyword][types.0.type=TSStringKeyword]",
              "TSUnionType[types.1.type=TSNumberKeyword][types.2.type=TSStringKeyword]",
              "TSUnionType[types.2.type=TSNumberKeyword][types.0.type=TSStringKeyword]",
              "TSUnionType[types.2.type=TSNumberKeyword][types.1.type=TSStringKeyword]"
            ],
            _id: "prefer-NumStr"
          },
          {
            message: 'Prefer "PartialRecord" type',
            selector:
              "TSTypeReference[typeName.name=Partial] > .typeParameters > .params:first-child > .typeName[name=Rec]",
            _id: "prefer-PartialRecord"
          },
          {
            message: 'Prefer "Writable..." type',
            selector: [
              "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=IndexedObject]",
              "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=IndexedRecord]",
              "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=PartialRecord]",
              "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=Rec]"
            ],
            _id: "prefer-Writable-shorthand"
          },
          {
            message: 'Prefer "WritableIndexedObject" type',
            selector:
              "TSTypeReference[typeName.name=WritableRecord] > .typeParameters > .params:first-child > .typeName[name=PropertyKey]",
            _id: "prefer-WritableIndexedObject"
          },
          {
            message: 'Prefer "WritableRecord" type',
            selector: "Identifier[name=Record]",
            _id: "prefer-WritableRecord"
          },
          {
            message: 'Prefer "a.fromIterable" function',
            selector: "ArrayExpression[elements.length=1] > SpreadElement",
            _id: "prefer-a-fromIterable"
          },
          {
            message: 'Prefer "cast.number" function',
            selector: "CallExpression > .callee[name=Number]",
            _id: "prefer-cast-number"
          },
          {
            message: 'Prefer "cast.string" function',
            selector: "CallExpression > .callee[name=String]",
            _id: "prefer-cast-string"
          },
          {
            message: 'Prefer "mockCallsToBe" function',
            selector: [
              "Identifier[name=mockClear]",
              "Identifier[name=toHaveBeenCalled]",
              "Identifier[name=toHaveBeenCalledTimes]",
              "Identifier[name=toHaveBeenCalledWith]"
            ],
            _id: "prefer-mockCallsToBe"
          },
          {
            message: 'Prefer "o.assign" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=assign]",
            _id: "prefer-o-assign"
          },
          {
            message: 'Prefer "o.clone" function',
            selector: "ObjectExpression[properties.length=1] > SpreadElement",
            _id: "prefer-o-clone"
          },
          {
            message: 'Prefer "o.defineProperty" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=defineProperty]",
            _id: "prefer-o-defineProperty"
          },
          {
            message: 'Prefer "o.entries" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=entries]",
            _id: "prefer-o-entries"
          },
          {
            message: 'Prefer "o.getPrototypeOf" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=getPrototypeOf]",
            _id: "prefer-o-getPrototypeOf"
          },
          {
            message: 'Prefer "o.hasOwnProp" function',
            selector:
              "CallExpression > .callee[object.object.object.name=Object][object.object.property.name=prototype][object.property.name=hasOwnProperty][property.name=call]",
            _id: "prefer-o-hasOwnProp"
          },
          {
            message: 'Prefer "o.keys" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=keys]",
            _id: "prefer-o-keys"
          },
          {
            message: 'Prefer "o.values" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=values]",
            _id: "prefer-o-values"
          },
          {
            message: 'Prefer "programFlow.clearInterval" function',
            selector: "CallExpression > .callee[name=clearInterval]",
            _id: "prefer-programFlow-clearInterval"
          },
          {
            message: 'Prefer "programFlow.clearTimeout" function',
            selector: "CallExpression > .callee[name=clearTimeout]",
            _id: "prefer-programFlow-clearTimeout"
          },
          {
            message: 'Prefer "programFlow.setInterval" function',
            selector: "CallExpression > .callee[name=setInterval]",
            _id: "prefer-programFlow-setInterval"
          },
          {
            message: 'Prefer "programFlow.setTimeout" function',
            selector: "CallExpression > .callee[name=setTimeout]",
            _id: "prefer-programFlow-setTimeout"
          },
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
            ],
            _id: "prefer-undefined-shorthand"
          },
          {
            message: 'Use "a.first" instead',
            selector:
              "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=0]",
            _id: "prefer-a-first"
          },
          {
            message: 'Use "a.second" instead',
            selector:
              "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=1]",
            _id: "prefer-a-second"
          },
          {
            message: 'Use "a.third" instead',
            selector:
              "CallExpression[callee.object.name=a][callee.property.name=get] > Literal.arguments:nth-child(2)[value=2]",
            _id: "prefer-a-third"
          },
          {
            message: 'Use "defineFn" instead',
            selector:
              ":matches(ExportNamedDeclaration, Program, TSModuleBlock) > VariableDeclaration > VariableDeclarator > CallExpression > :matches(.callee[name=assign], .callee[property.name=assign])",
            _id: "prefer-defineFn"
          },
          {
            message: 'Use "evaluate" instead',
            selector:
              "CallExpression[arguments.length=0] > ArrowFunctionExpression.callee",
            _id: "prefer-evaluate"
          }
        ]
      }
    ],
    "@skylib/functions/require-jsdoc": [
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
