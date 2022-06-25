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
            subOptionsId: "no-o-unfreeze"
          },
          {
            message: 'Prefer "IndexedObject" type',
            selector:
              "TSTypeReference[typeName.name=Rec] > .typeParameters > .params:first-child > .typeName[name=PropertyKey]",
            subOptionsId: "prefer-IndexedObject"
          },
          {
            message: 'Prefer "IndexedRecord" type',
            selector:
              "TSTypeReference[typeName.name=Rec] > .typeParameters > .params:first-child > .typeName[name=string]",
            subOptionsId: "prefer-IndexedRecord"
          },
          {
            message: 'Prefer "json" module',
            selector: "Identifier[name=JSON]",
            subOptionsId: "prefer-json"
          },
          {
            message: 'Prefer "reflect" module',
            selector: "Identifier[name=Reflect]",
            subOptionsId: "prefer-reflect"
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
            subOptionsId: "prefer-NumStr"
          },
          {
            message: 'Prefer "PartialRecord" type',
            selector:
              "TSTypeReference[typeName.name=Partial] > .typeParameters > .params:first-child > .typeName[name=Rec]",
            subOptionsId: "prefer-PartialRecord"
          },
          {
            message: 'Prefer "Writable..." type',
            selector: [
              "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=IndexedObject]",
              "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=IndexedRecord]",
              "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=PartialRecord]",
              "TSTypeReference[typeName.name=Writable] > .typeParameters > .params:first-child > .typeName[name=Rec]"
            ],
            subOptionsId: "prefer-Writable-shorthand"
          },
          {
            message: 'Prefer "WritableIndexedObject" type',
            selector:
              "TSTypeReference[typeName.name=WritableRecord] > .typeParameters > .params:first-child > .typeName[name=PropertyKey]",
            subOptionsId: "prefer-WritableIndexedObject"
          },
          {
            message: 'Prefer "WritableRecord" type',
            selector: "Identifier[name=Record]",
            subOptionsId: "prefer-WritableRecord"
          },
          {
            message: 'Prefer "a.fromIterable" function',
            selector: "ArrayExpression[elements.length=1] > SpreadElement",
            subOptionsId: "prefer-a-fromIterable"
          },
          {
            message: 'Prefer "cast.number" function',
            selector: "CallExpression > .callee[name=Number]",
            subOptionsId: "prefer-cast-number"
          },
          {
            message: 'Prefer "cast.string" function',
            selector: "CallExpression > .callee[name=String]",
            subOptionsId: "prefer-cast-string"
          },
          {
            message: 'Prefer "mockCallsToBe" function',
            selector: [
              "Identifier[name=mockClear]",
              "Identifier[name=toHaveBeenCalled]",
              "Identifier[name=toHaveBeenCalledTimes]",
              "Identifier[name=toHaveBeenCalledWith]"
            ],
            subOptionsId: "prefer-mockCallsToBe"
          },
          {
            message: 'Prefer "o.assign" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=assign]",
            subOptionsId: "prefer-o-assign"
          },
          {
            message: 'Prefer "o.clone" function',
            selector: "ObjectExpression[properties.length=1] > SpreadElement",
            subOptionsId: "prefer-o-clone"
          },
          {
            message: 'Prefer "o.defineProperty" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=defineProperty]",
            subOptionsId: "prefer-o-defineProperty"
          },
          {
            message: 'Prefer "o.entries" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=entries]",
            subOptionsId: "prefer-o-entries"
          },
          {
            message: 'Prefer "o.getPrototypeOf" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=getPrototypeOf]",
            subOptionsId: "prefer-o-getPrototypeOf"
          },
          {
            message: 'Prefer "o.hasOwnProp" function',
            selector:
              "CallExpression > .callee[object.object.object.name=Object][object.object.property.name=prototype][object.property.name=hasOwnProperty][property.name=call]",
            subOptionsId: "prefer-o-hasOwnProp"
          },
          {
            message: 'Prefer "o.keys" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=keys]",
            subOptionsId: "prefer-o-keys"
          },
          {
            message: 'Prefer "o.values" function',
            selector:
              "CallExpression > .callee[object.name=Object][property.name=values]",
            subOptionsId: "prefer-o-values"
          },
          {
            message: 'Prefer "programFlow.clearInterval" function',
            selector: "CallExpression > .callee[name=clearInterval]",
            subOptionsId: "prefer-programFlow-clearInterval"
          },
          {
            message: 'Prefer "programFlow.clearTimeout" function',
            selector: "CallExpression > .callee[name=clearTimeout]",
            subOptionsId: "prefer-programFlow-clearTimeout"
          },
          {
            message: 'Prefer "programFlow.setInterval" function',
            selector: "CallExpression > .callee[name=setInterval]",
            subOptionsId: "prefer-programFlow-setInterval"
          },
          {
            message: 'Prefer "programFlow.setTimeout" function',
            selector: "CallExpression > .callee[name=setTimeout]",
            subOptionsId: "prefer-programFlow-setTimeout"
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
            subOptionsId: "prefer-undefined-shorthand"
          },
          //
          //
          //
          // eslint-disable-next-line no-warning-comments -- Postponed
          // fixme - Review what is below
          //
          //
          //
          {
            message: 'Use "defineFn" instead',
            selector:
              ":matches(ExportNamedDeclaration, Program, TSModuleBlock) > VariableDeclaration > VariableDeclarator > CallExpression > :matches(.callee[name=assign], .callee[property.name=assign])"
          },
          {
            message: 'Use "evaluate" instead',
            selector:
              "CallExpression[arguments.length=0] > ArrowFunctionExpression.callee"
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
            `:matches(ExportNamedDeclaration, Program, TSModuleBlock) > VariableDeclaration > VariableDeclarator.declarations[id.typeAnnotation=undefined] > CallExpression.init[callee.name=defineFn] > ${selector}`
        ),
        noDefaultSelectors: true
      }
    ]
  }
};
