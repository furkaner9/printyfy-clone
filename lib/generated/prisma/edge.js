
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
Prisma.prismaVersion = {
  client: "6.7.0",
  engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.ConfigurationScalarFieldEnum = {
  id: 'id',
  type: 'type',
  imageUrl: 'imageUrl',
  width: 'width',
  height: 'height',
  croppedImageUrl: 'croppedImageUrl',
  imagePositionX: 'imagePositionX',
  imagePositionY: 'imagePositionY',
  imageDimensionWidth: 'imageDimensionWidth',
  imageDimensionHeight: 'imageDimensionHeight',
  caseColor: 'caseColor',
  caseModel: 'caseModel',
  caseMaterial: 'caseMaterial',
  caseFinish: 'caseFinish',
  size: 'size',
  tshirtcolor: 'tshirtcolor',
  mugColor: 'mugColor',
  basePrice: 'basePrice',
  totalPrice: 'totalPrice',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.PhoneModel = exports.$Enums.PhoneModel = {
  iphonex: 'iphonex',
  iphone11: 'iphone11',
  iphone12: 'iphone12',
  iphone13: 'iphone13',
  iphone14: 'iphone14',
  iphone15: 'iphone15'
};

exports.CaseMaterial = exports.$Enums.CaseMaterial = {
  silicone: 'silicone',
  polycarbonate: 'polycarbonate'
};

exports.CaseFinish = exports.$Enums.CaseFinish = {
  smooth: 'smooth',
  textured: 'textured'
};

exports.CaseColor = exports.$Enums.CaseColor = {
  black: 'black',
  blue: 'blue',
  rose: 'rose',
  yellow: 'yellow'
};

exports.TshirtSize = exports.$Enums.TshirtSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge'
};

exports.TshirtColor = exports.$Enums.TshirtColor = {
  white: 'white',
  black: 'black',
  red: 'red',
  blue: 'blue',
  green: 'green'
};

exports.MugColor = exports.$Enums.MugColor = {
  white: 'white',
  black: 'black',
  red: 'red',
  blue: 'blue',
  green: 'green'
};

exports.ProductType = exports.$Enums.ProductType = {
  phoneCase: 'phoneCase',
  tshirt: 'tshirt',
  mug: 'mug'
};

exports.Prisma.ModelName = {
  Configuration: 'Configuration'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\furka\\OneDrive\\Desktop\\prifntyFy\\printy-clone\\lib\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\furka\\OneDrive\\Desktop\\prifntyFy\\printy-clone\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.7.0",
  "engineVersion": "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "mongodb+srv://furkaneric9:eeTNkqDvAcRkryCi@cluster.sm47vsc.mongodb.net/cluster"
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../lib/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mongodb\"\n  url      = env(\"DATABASE_URL\")\n}\n\nenum PhoneModel {\n  iphonex\n  iphone11\n  iphone12\n  iphone13\n  iphone14\n  iphone15\n}\n\nenum CaseMaterial {\n  silicone\n  polycarbonate\n}\n\nenum CaseFinish {\n  smooth\n  textured\n}\n\nenum CaseColor {\n  black\n  blue\n  rose\n  yellow\n}\n\nenum TshirtSize {\n  small\n  medium\n  large\n  xlarge\n}\n\nenum TshirtColor {\n  white\n  black\n  red\n  blue\n  green\n}\n\nenum MugColor {\n  white\n  black\n  red\n  blue\n  green\n}\n\nenum ProductType {\n  phoneCase\n  tshirt\n  mug\n}\n\nmodel Configuration {\n  id   String       @id @default(auto()) @map(\"_id\") @db.ObjectId\n  type ProductType?\n\n  imageUrl String\n  width    Int\n  height   Int\n\n  // Yeni eklenen alanlar\n  croppedImageUrl      String? // Kırpılmış resmin URL'i\n  imagePositionX       Int? // Kırpılmış resmin X konumu\n  imagePositionY       Int? // Kırpılmış resmin Y konumu\n  imageDimensionWidth  Int? // Kırpılmış resmin genişliği\n  imageDimensionHeight Int? // Kırpılmış resmin yüksekliği\n\n  caseColor    CaseColor?\n  caseModel    PhoneModel?\n  caseMaterial CaseMaterial?\n  caseFinish   CaseFinish?\n  size         TshirtSize?\n  tshirtcolor  TshirtColor?\n  mugColor     MugColor?\n  basePrice    Float?\n  totalPrice   Float?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n",
  "inlineSchemaHash": "89a3281c6feddd071f417b0c59325f34fe5c674e704d64c092ab34771ba115af",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Configuration\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"croppedImageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imagePositionX\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imagePositionY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageDimensionWidth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageDimensionHeight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caseColor\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CaseColor\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caseModel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PhoneModel\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caseMaterial\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CaseMaterial\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caseFinish\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CaseFinish\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TshirtSize\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tshirtcolor\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TshirtColor\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mugColor\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MugColor\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"PhoneModel\":{\"values\":[{\"name\":\"iphonex\",\"dbName\":null},{\"name\":\"iphone11\",\"dbName\":null},{\"name\":\"iphone12\",\"dbName\":null},{\"name\":\"iphone13\",\"dbName\":null},{\"name\":\"iphone14\",\"dbName\":null},{\"name\":\"iphone15\",\"dbName\":null}],\"dbName\":null},\"CaseMaterial\":{\"values\":[{\"name\":\"silicone\",\"dbName\":null},{\"name\":\"polycarbonate\",\"dbName\":null}],\"dbName\":null},\"CaseFinish\":{\"values\":[{\"name\":\"smooth\",\"dbName\":null},{\"name\":\"textured\",\"dbName\":null}],\"dbName\":null},\"CaseColor\":{\"values\":[{\"name\":\"black\",\"dbName\":null},{\"name\":\"blue\",\"dbName\":null},{\"name\":\"rose\",\"dbName\":null},{\"name\":\"yellow\",\"dbName\":null}],\"dbName\":null},\"TshirtSize\":{\"values\":[{\"name\":\"small\",\"dbName\":null},{\"name\":\"medium\",\"dbName\":null},{\"name\":\"large\",\"dbName\":null},{\"name\":\"xlarge\",\"dbName\":null}],\"dbName\":null},\"TshirtColor\":{\"values\":[{\"name\":\"white\",\"dbName\":null},{\"name\":\"black\",\"dbName\":null},{\"name\":\"red\",\"dbName\":null},{\"name\":\"blue\",\"dbName\":null},{\"name\":\"green\",\"dbName\":null}],\"dbName\":null},\"MugColor\":{\"values\":[{\"name\":\"white\",\"dbName\":null},{\"name\":\"black\",\"dbName\":null},{\"name\":\"red\",\"dbName\":null},{\"name\":\"blue\",\"dbName\":null},{\"name\":\"green\",\"dbName\":null}],\"dbName\":null},\"ProductType\":{\"values\":[{\"name\":\"phoneCase\",\"dbName\":null},{\"name\":\"tshirt\",\"dbName\":null},{\"name\":\"mug\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

