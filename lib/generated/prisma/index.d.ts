
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Configuration
 * 
 */
export type Configuration = $Result.DefaultSelection<Prisma.$ConfigurationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PhoneModel: {
  iphonex: 'iphonex',
  iphone11: 'iphone11',
  iphone12: 'iphone12',
  iphone13: 'iphone13',
  iphone14: 'iphone14',
  iphone15: 'iphone15'
};

export type PhoneModel = (typeof PhoneModel)[keyof typeof PhoneModel]


export const CaseMaterial: {
  silicone: 'silicone',
  polycarbonate: 'polycarbonate'
};

export type CaseMaterial = (typeof CaseMaterial)[keyof typeof CaseMaterial]


export const CaseFinish: {
  smooth: 'smooth',
  textured: 'textured'
};

export type CaseFinish = (typeof CaseFinish)[keyof typeof CaseFinish]


export const CaseColor: {
  black: 'black',
  blue: 'blue',
  rose: 'rose',
  yellow: 'yellow'
};

export type CaseColor = (typeof CaseColor)[keyof typeof CaseColor]


export const TshirtSize: {
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge'
};

export type TshirtSize = (typeof TshirtSize)[keyof typeof TshirtSize]


export const TshirtColor: {
  white: 'white',
  black: 'black',
  red: 'red',
  blue: 'blue',
  green: 'green'
};

export type TshirtColor = (typeof TshirtColor)[keyof typeof TshirtColor]


export const MugColor: {
  white: 'white',
  black: 'black',
  red: 'red',
  blue: 'blue',
  green: 'green'
};

export type MugColor = (typeof MugColor)[keyof typeof MugColor]


export const ProductType: {
  phoneCase: 'phoneCase',
  tshirt: 'tshirt',
  mug: 'mug'
};

export type ProductType = (typeof ProductType)[keyof typeof ProductType]

}

export type PhoneModel = $Enums.PhoneModel

export const PhoneModel: typeof $Enums.PhoneModel

export type CaseMaterial = $Enums.CaseMaterial

export const CaseMaterial: typeof $Enums.CaseMaterial

export type CaseFinish = $Enums.CaseFinish

export const CaseFinish: typeof $Enums.CaseFinish

export type CaseColor = $Enums.CaseColor

export const CaseColor: typeof $Enums.CaseColor

export type TshirtSize = $Enums.TshirtSize

export const TshirtSize: typeof $Enums.TshirtSize

export type TshirtColor = $Enums.TshirtColor

export const TshirtColor: typeof $Enums.TshirtColor

export type MugColor = $Enums.MugColor

export const MugColor: typeof $Enums.MugColor

export type ProductType = $Enums.ProductType

export const ProductType: typeof $Enums.ProductType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Configurations
 * const configurations = await prisma.configuration.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Configurations
   * const configurations = await prisma.configuration.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.configuration`: Exposes CRUD operations for the **Configuration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configurations
    * const configurations = await prisma.configuration.findMany()
    * ```
    */
  get configuration(): Prisma.ConfigurationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Configuration: 'Configuration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "configuration"
      txIsolationLevel: never
    }
    model: {
      Configuration: {
        payload: Prisma.$ConfigurationPayload<ExtArgs>
        fields: Prisma.ConfigurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          findFirst: {
            args: Prisma.ConfigurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          findMany: {
            args: Prisma.ConfigurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>[]
          }
          create: {
            args: Prisma.ConfigurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          createMany: {
            args: Prisma.ConfigurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConfigurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          update: {
            args: Prisma.ConfigurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          deleteMany: {
            args: Prisma.ConfigurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConfigurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          aggregate: {
            args: Prisma.ConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguration>
          }
          groupBy: {
            args: Prisma.ConfigurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigurationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConfigurationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConfigurationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ConfigurationCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigurationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    configuration?: ConfigurationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Configuration
   */

  export type AggregateConfiguration = {
    _count: ConfigurationCountAggregateOutputType | null
    _avg: ConfigurationAvgAggregateOutputType | null
    _sum: ConfigurationSumAggregateOutputType | null
    _min: ConfigurationMinAggregateOutputType | null
    _max: ConfigurationMaxAggregateOutputType | null
  }

  export type ConfigurationAvgAggregateOutputType = {
    width: number | null
    height: number | null
    imagePositionX: number | null
    imagePositionY: number | null
    imageDimensionWidth: number | null
    imageDimensionHeight: number | null
  }

  export type ConfigurationSumAggregateOutputType = {
    width: number | null
    height: number | null
    imagePositionX: number | null
    imagePositionY: number | null
    imageDimensionWidth: number | null
    imageDimensionHeight: number | null
  }

  export type ConfigurationMinAggregateOutputType = {
    id: string | null
    type: $Enums.ProductType | null
    imageUrl: string | null
    width: number | null
    height: number | null
    croppedImageUrl: string | null
    imagePositionX: number | null
    imagePositionY: number | null
    imageDimensionWidth: number | null
    imageDimensionHeight: number | null
    caseColor: $Enums.CaseColor | null
    caseModel: $Enums.PhoneModel | null
    caseMaterial: $Enums.CaseMaterial | null
    caseFinish: $Enums.CaseFinish | null
    size: $Enums.TshirtSize | null
    tshirtcolor: $Enums.TshirtColor | null
    mugColor: $Enums.MugColor | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfigurationMaxAggregateOutputType = {
    id: string | null
    type: $Enums.ProductType | null
    imageUrl: string | null
    width: number | null
    height: number | null
    croppedImageUrl: string | null
    imagePositionX: number | null
    imagePositionY: number | null
    imageDimensionWidth: number | null
    imageDimensionHeight: number | null
    caseColor: $Enums.CaseColor | null
    caseModel: $Enums.PhoneModel | null
    caseMaterial: $Enums.CaseMaterial | null
    caseFinish: $Enums.CaseFinish | null
    size: $Enums.TshirtSize | null
    tshirtcolor: $Enums.TshirtColor | null
    mugColor: $Enums.MugColor | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfigurationCountAggregateOutputType = {
    id: number
    type: number
    imageUrl: number
    width: number
    height: number
    croppedImageUrl: number
    imagePositionX: number
    imagePositionY: number
    imageDimensionWidth: number
    imageDimensionHeight: number
    caseColor: number
    caseModel: number
    caseMaterial: number
    caseFinish: number
    size: number
    tshirtcolor: number
    mugColor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfigurationAvgAggregateInputType = {
    width?: true
    height?: true
    imagePositionX?: true
    imagePositionY?: true
    imageDimensionWidth?: true
    imageDimensionHeight?: true
  }

  export type ConfigurationSumAggregateInputType = {
    width?: true
    height?: true
    imagePositionX?: true
    imagePositionY?: true
    imageDimensionWidth?: true
    imageDimensionHeight?: true
  }

  export type ConfigurationMinAggregateInputType = {
    id?: true
    type?: true
    imageUrl?: true
    width?: true
    height?: true
    croppedImageUrl?: true
    imagePositionX?: true
    imagePositionY?: true
    imageDimensionWidth?: true
    imageDimensionHeight?: true
    caseColor?: true
    caseModel?: true
    caseMaterial?: true
    caseFinish?: true
    size?: true
    tshirtcolor?: true
    mugColor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfigurationMaxAggregateInputType = {
    id?: true
    type?: true
    imageUrl?: true
    width?: true
    height?: true
    croppedImageUrl?: true
    imagePositionX?: true
    imagePositionY?: true
    imageDimensionWidth?: true
    imageDimensionHeight?: true
    caseColor?: true
    caseModel?: true
    caseMaterial?: true
    caseFinish?: true
    size?: true
    tshirtcolor?: true
    mugColor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfigurationCountAggregateInputType = {
    id?: true
    type?: true
    imageUrl?: true
    width?: true
    height?: true
    croppedImageUrl?: true
    imagePositionX?: true
    imagePositionY?: true
    imageDimensionWidth?: true
    imageDimensionHeight?: true
    caseColor?: true
    caseModel?: true
    caseMaterial?: true
    caseFinish?: true
    size?: true
    tshirtcolor?: true
    mugColor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuration to aggregate.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configurations
    **/
    _count?: true | ConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigurationMaxAggregateInputType
  }

  export type GetConfigurationAggregateType<T extends ConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguration[P]>
      : GetScalarType<T[P], AggregateConfiguration[P]>
  }




  export type ConfigurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigurationWhereInput
    orderBy?: ConfigurationOrderByWithAggregationInput | ConfigurationOrderByWithAggregationInput[]
    by: ConfigurationScalarFieldEnum[] | ConfigurationScalarFieldEnum
    having?: ConfigurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigurationCountAggregateInputType | true
    _avg?: ConfigurationAvgAggregateInputType
    _sum?: ConfigurationSumAggregateInputType
    _min?: ConfigurationMinAggregateInputType
    _max?: ConfigurationMaxAggregateInputType
  }

  export type ConfigurationGroupByOutputType = {
    id: string
    type: $Enums.ProductType | null
    imageUrl: string
    width: number
    height: number
    croppedImageUrl: string | null
    imagePositionX: number | null
    imagePositionY: number | null
    imageDimensionWidth: number | null
    imageDimensionHeight: number | null
    caseColor: $Enums.CaseColor | null
    caseModel: $Enums.PhoneModel | null
    caseMaterial: $Enums.CaseMaterial | null
    caseFinish: $Enums.CaseFinish | null
    size: $Enums.TshirtSize | null
    tshirtcolor: $Enums.TshirtColor | null
    mugColor: $Enums.MugColor | null
    createdAt: Date
    updatedAt: Date
    _count: ConfigurationCountAggregateOutputType | null
    _avg: ConfigurationAvgAggregateOutputType | null
    _sum: ConfigurationSumAggregateOutputType | null
    _min: ConfigurationMinAggregateOutputType | null
    _max: ConfigurationMaxAggregateOutputType | null
  }

  type GetConfigurationGroupByPayload<T extends ConfigurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type ConfigurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    imageUrl?: boolean
    width?: boolean
    height?: boolean
    croppedImageUrl?: boolean
    imagePositionX?: boolean
    imagePositionY?: boolean
    imageDimensionWidth?: boolean
    imageDimensionHeight?: boolean
    caseColor?: boolean
    caseModel?: boolean
    caseMaterial?: boolean
    caseFinish?: boolean
    size?: boolean
    tshirtcolor?: boolean
    mugColor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuration"]>



  export type ConfigurationSelectScalar = {
    id?: boolean
    type?: boolean
    imageUrl?: boolean
    width?: boolean
    height?: boolean
    croppedImageUrl?: boolean
    imagePositionX?: boolean
    imagePositionY?: boolean
    imageDimensionWidth?: boolean
    imageDimensionHeight?: boolean
    caseColor?: boolean
    caseModel?: boolean
    caseMaterial?: boolean
    caseFinish?: boolean
    size?: boolean
    tshirtcolor?: boolean
    mugColor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConfigurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "imageUrl" | "width" | "height" | "croppedImageUrl" | "imagePositionX" | "imagePositionY" | "imageDimensionWidth" | "imageDimensionHeight" | "caseColor" | "caseModel" | "caseMaterial" | "caseFinish" | "size" | "tshirtcolor" | "mugColor" | "createdAt" | "updatedAt", ExtArgs["result"]["configuration"]>

  export type $ConfigurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Configuration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.ProductType | null
      imageUrl: string
      width: number
      height: number
      croppedImageUrl: string | null
      imagePositionX: number | null
      imagePositionY: number | null
      imageDimensionWidth: number | null
      imageDimensionHeight: number | null
      caseColor: $Enums.CaseColor | null
      caseModel: $Enums.PhoneModel | null
      caseMaterial: $Enums.CaseMaterial | null
      caseFinish: $Enums.CaseFinish | null
      size: $Enums.TshirtSize | null
      tshirtcolor: $Enums.TshirtColor | null
      mugColor: $Enums.MugColor | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["configuration"]>
    composites: {}
  }

  type ConfigurationGetPayload<S extends boolean | null | undefined | ConfigurationDefaultArgs> = $Result.GetResult<Prisma.$ConfigurationPayload, S>

  type ConfigurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigurationCountAggregateInputType | true
    }

  export interface ConfigurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Configuration'], meta: { name: 'Configuration' } }
    /**
     * Find zero or one Configuration that matches the filter.
     * @param {ConfigurationFindUniqueArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigurationFindUniqueArgs>(args: SelectSubset<T, ConfigurationFindUniqueArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigurationFindUniqueOrThrowArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigurationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindFirstArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigurationFindFirstArgs>(args?: SelectSubset<T, ConfigurationFindFirstArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindFirstOrThrowArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigurationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configurations
     * const configurations = await prisma.configuration.findMany()
     * 
     * // Get first 10 Configurations
     * const configurations = await prisma.configuration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configurationWithIdOnly = await prisma.configuration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigurationFindManyArgs>(args?: SelectSubset<T, ConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuration.
     * @param {ConfigurationCreateArgs} args - Arguments to create a Configuration.
     * @example
     * // Create one Configuration
     * const Configuration = await prisma.configuration.create({
     *   data: {
     *     // ... data to create a Configuration
     *   }
     * })
     * 
     */
    create<T extends ConfigurationCreateArgs>(args: SelectSubset<T, ConfigurationCreateArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configurations.
     * @param {ConfigurationCreateManyArgs} args - Arguments to create many Configurations.
     * @example
     * // Create many Configurations
     * const configuration = await prisma.configuration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigurationCreateManyArgs>(args?: SelectSubset<T, ConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Configuration.
     * @param {ConfigurationDeleteArgs} args - Arguments to delete one Configuration.
     * @example
     * // Delete one Configuration
     * const Configuration = await prisma.configuration.delete({
     *   where: {
     *     // ... filter to delete one Configuration
     *   }
     * })
     * 
     */
    delete<T extends ConfigurationDeleteArgs>(args: SelectSubset<T, ConfigurationDeleteArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuration.
     * @param {ConfigurationUpdateArgs} args - Arguments to update one Configuration.
     * @example
     * // Update one Configuration
     * const configuration = await prisma.configuration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigurationUpdateArgs>(args: SelectSubset<T, ConfigurationUpdateArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configurations.
     * @param {ConfigurationDeleteManyArgs} args - Arguments to filter Configurations to delete.
     * @example
     * // Delete a few Configurations
     * const { count } = await prisma.configuration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigurationDeleteManyArgs>(args?: SelectSubset<T, ConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configurations
     * const configuration = await prisma.configuration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigurationUpdateManyArgs>(args: SelectSubset<T, ConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Configuration.
     * @param {ConfigurationUpsertArgs} args - Arguments to update or create a Configuration.
     * @example
     * // Update or create a Configuration
     * const configuration = await prisma.configuration.upsert({
     *   create: {
     *     // ... data to create a Configuration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuration we want to update
     *   }
     * })
     */
    upsert<T extends ConfigurationUpsertArgs>(args: SelectSubset<T, ConfigurationUpsertArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configurations that matches the filter.
     * @param {ConfigurationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const configuration = await prisma.configuration.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ConfigurationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Configuration.
     * @param {ConfigurationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const configuration = await prisma.configuration.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ConfigurationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationCountArgs} args - Arguments to filter Configurations to count.
     * @example
     * // Count the number of Configurations
     * const count = await prisma.configuration.count({
     *   where: {
     *     // ... the filter for the Configurations we want to count
     *   }
     * })
    **/
    count<T extends ConfigurationCountArgs>(
      args?: Subset<T, ConfigurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfigurationAggregateArgs>(args: Subset<T, ConfigurationAggregateArgs>): Prisma.PrismaPromise<GetConfigurationAggregateType<T>>

    /**
     * Group by Configuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfigurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigurationGroupByArgs['orderBy'] }
        : { orderBy?: ConfigurationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Configuration model
   */
  readonly fields: ConfigurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Configuration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Configuration model
   */
  interface ConfigurationFieldRefs {
    readonly id: FieldRef<"Configuration", 'String'>
    readonly type: FieldRef<"Configuration", 'ProductType'>
    readonly imageUrl: FieldRef<"Configuration", 'String'>
    readonly width: FieldRef<"Configuration", 'Int'>
    readonly height: FieldRef<"Configuration", 'Int'>
    readonly croppedImageUrl: FieldRef<"Configuration", 'String'>
    readonly imagePositionX: FieldRef<"Configuration", 'Int'>
    readonly imagePositionY: FieldRef<"Configuration", 'Int'>
    readonly imageDimensionWidth: FieldRef<"Configuration", 'Int'>
    readonly imageDimensionHeight: FieldRef<"Configuration", 'Int'>
    readonly caseColor: FieldRef<"Configuration", 'CaseColor'>
    readonly caseModel: FieldRef<"Configuration", 'PhoneModel'>
    readonly caseMaterial: FieldRef<"Configuration", 'CaseMaterial'>
    readonly caseFinish: FieldRef<"Configuration", 'CaseFinish'>
    readonly size: FieldRef<"Configuration", 'TshirtSize'>
    readonly tshirtcolor: FieldRef<"Configuration", 'TshirtColor'>
    readonly mugColor: FieldRef<"Configuration", 'MugColor'>
    readonly createdAt: FieldRef<"Configuration", 'DateTime'>
    readonly updatedAt: FieldRef<"Configuration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Configuration findUnique
   */
  export type ConfigurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration findUniqueOrThrow
   */
  export type ConfigurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration findFirst
   */
  export type ConfigurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configurations.
     */
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration findFirstOrThrow
   */
  export type ConfigurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configurations.
     */
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration findMany
   */
  export type ConfigurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which Configurations to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration create
   */
  export type ConfigurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * The data needed to create a Configuration.
     */
    data: XOR<ConfigurationCreateInput, ConfigurationUncheckedCreateInput>
  }

  /**
   * Configuration createMany
   */
  export type ConfigurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configurations.
     */
    data: ConfigurationCreateManyInput | ConfigurationCreateManyInput[]
  }

  /**
   * Configuration update
   */
  export type ConfigurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * The data needed to update a Configuration.
     */
    data: XOR<ConfigurationUpdateInput, ConfigurationUncheckedUpdateInput>
    /**
     * Choose, which Configuration to update.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration updateMany
   */
  export type ConfigurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configurations.
     */
    data: XOR<ConfigurationUpdateManyMutationInput, ConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which Configurations to update
     */
    where?: ConfigurationWhereInput
    /**
     * Limit how many Configurations to update.
     */
    limit?: number
  }

  /**
   * Configuration upsert
   */
  export type ConfigurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * The filter to search for the Configuration to update in case it exists.
     */
    where: ConfigurationWhereUniqueInput
    /**
     * In case the Configuration found by the `where` argument doesn't exist, create a new Configuration with this data.
     */
    create: XOR<ConfigurationCreateInput, ConfigurationUncheckedCreateInput>
    /**
     * In case the Configuration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigurationUpdateInput, ConfigurationUncheckedUpdateInput>
  }

  /**
   * Configuration delete
   */
  export type ConfigurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter which Configuration to delete.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration deleteMany
   */
  export type ConfigurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configurations to delete
     */
    where?: ConfigurationWhereInput
    /**
     * Limit how many Configurations to delete.
     */
    limit?: number
  }

  /**
   * Configuration findRaw
   */
  export type ConfigurationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Configuration aggregateRaw
   */
  export type ConfigurationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Configuration without action
   */
  export type ConfigurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ConfigurationScalarFieldEnum: {
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfigurationScalarFieldEnum = (typeof ConfigurationScalarFieldEnum)[keyof typeof ConfigurationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ProductType'
   */
  export type EnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType'>
    


  /**
   * Reference to a field of type 'ProductType[]'
   */
  export type ListEnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CaseColor'
   */
  export type EnumCaseColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseColor'>
    


  /**
   * Reference to a field of type 'CaseColor[]'
   */
  export type ListEnumCaseColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseColor[]'>
    


  /**
   * Reference to a field of type 'PhoneModel'
   */
  export type EnumPhoneModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhoneModel'>
    


  /**
   * Reference to a field of type 'PhoneModel[]'
   */
  export type ListEnumPhoneModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhoneModel[]'>
    


  /**
   * Reference to a field of type 'CaseMaterial'
   */
  export type EnumCaseMaterialFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseMaterial'>
    


  /**
   * Reference to a field of type 'CaseMaterial[]'
   */
  export type ListEnumCaseMaterialFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseMaterial[]'>
    


  /**
   * Reference to a field of type 'CaseFinish'
   */
  export type EnumCaseFinishFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseFinish'>
    


  /**
   * Reference to a field of type 'CaseFinish[]'
   */
  export type ListEnumCaseFinishFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseFinish[]'>
    


  /**
   * Reference to a field of type 'TshirtSize'
   */
  export type EnumTshirtSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TshirtSize'>
    


  /**
   * Reference to a field of type 'TshirtSize[]'
   */
  export type ListEnumTshirtSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TshirtSize[]'>
    


  /**
   * Reference to a field of type 'TshirtColor'
   */
  export type EnumTshirtColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TshirtColor'>
    


  /**
   * Reference to a field of type 'TshirtColor[]'
   */
  export type ListEnumTshirtColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TshirtColor[]'>
    


  /**
   * Reference to a field of type 'MugColor'
   */
  export type EnumMugColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MugColor'>
    


  /**
   * Reference to a field of type 'MugColor[]'
   */
  export type ListEnumMugColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MugColor[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ConfigurationWhereInput = {
    AND?: ConfigurationWhereInput | ConfigurationWhereInput[]
    OR?: ConfigurationWhereInput[]
    NOT?: ConfigurationWhereInput | ConfigurationWhereInput[]
    id?: StringFilter<"Configuration"> | string
    type?: EnumProductTypeNullableFilter<"Configuration"> | $Enums.ProductType | null
    imageUrl?: StringFilter<"Configuration"> | string
    width?: IntFilter<"Configuration"> | number
    height?: IntFilter<"Configuration"> | number
    croppedImageUrl?: StringNullableFilter<"Configuration"> | string | null
    imagePositionX?: IntNullableFilter<"Configuration"> | number | null
    imagePositionY?: IntNullableFilter<"Configuration"> | number | null
    imageDimensionWidth?: IntNullableFilter<"Configuration"> | number | null
    imageDimensionHeight?: IntNullableFilter<"Configuration"> | number | null
    caseColor?: EnumCaseColorNullableFilter<"Configuration"> | $Enums.CaseColor | null
    caseModel?: EnumPhoneModelNullableFilter<"Configuration"> | $Enums.PhoneModel | null
    caseMaterial?: EnumCaseMaterialNullableFilter<"Configuration"> | $Enums.CaseMaterial | null
    caseFinish?: EnumCaseFinishNullableFilter<"Configuration"> | $Enums.CaseFinish | null
    size?: EnumTshirtSizeNullableFilter<"Configuration"> | $Enums.TshirtSize | null
    tshirtcolor?: EnumTshirtColorNullableFilter<"Configuration"> | $Enums.TshirtColor | null
    mugColor?: EnumMugColorNullableFilter<"Configuration"> | $Enums.MugColor | null
    createdAt?: DateTimeFilter<"Configuration"> | Date | string
    updatedAt?: DateTimeFilter<"Configuration"> | Date | string
  }

  export type ConfigurationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    croppedImageUrl?: SortOrder
    imagePositionX?: SortOrder
    imagePositionY?: SortOrder
    imageDimensionWidth?: SortOrder
    imageDimensionHeight?: SortOrder
    caseColor?: SortOrder
    caseModel?: SortOrder
    caseMaterial?: SortOrder
    caseFinish?: SortOrder
    size?: SortOrder
    tshirtcolor?: SortOrder
    mugColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigurationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfigurationWhereInput | ConfigurationWhereInput[]
    OR?: ConfigurationWhereInput[]
    NOT?: ConfigurationWhereInput | ConfigurationWhereInput[]
    type?: EnumProductTypeNullableFilter<"Configuration"> | $Enums.ProductType | null
    imageUrl?: StringFilter<"Configuration"> | string
    width?: IntFilter<"Configuration"> | number
    height?: IntFilter<"Configuration"> | number
    croppedImageUrl?: StringNullableFilter<"Configuration"> | string | null
    imagePositionX?: IntNullableFilter<"Configuration"> | number | null
    imagePositionY?: IntNullableFilter<"Configuration"> | number | null
    imageDimensionWidth?: IntNullableFilter<"Configuration"> | number | null
    imageDimensionHeight?: IntNullableFilter<"Configuration"> | number | null
    caseColor?: EnumCaseColorNullableFilter<"Configuration"> | $Enums.CaseColor | null
    caseModel?: EnumPhoneModelNullableFilter<"Configuration"> | $Enums.PhoneModel | null
    caseMaterial?: EnumCaseMaterialNullableFilter<"Configuration"> | $Enums.CaseMaterial | null
    caseFinish?: EnumCaseFinishNullableFilter<"Configuration"> | $Enums.CaseFinish | null
    size?: EnumTshirtSizeNullableFilter<"Configuration"> | $Enums.TshirtSize | null
    tshirtcolor?: EnumTshirtColorNullableFilter<"Configuration"> | $Enums.TshirtColor | null
    mugColor?: EnumMugColorNullableFilter<"Configuration"> | $Enums.MugColor | null
    createdAt?: DateTimeFilter<"Configuration"> | Date | string
    updatedAt?: DateTimeFilter<"Configuration"> | Date | string
  }, "id">

  export type ConfigurationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    croppedImageUrl?: SortOrder
    imagePositionX?: SortOrder
    imagePositionY?: SortOrder
    imageDimensionWidth?: SortOrder
    imageDimensionHeight?: SortOrder
    caseColor?: SortOrder
    caseModel?: SortOrder
    caseMaterial?: SortOrder
    caseFinish?: SortOrder
    size?: SortOrder
    tshirtcolor?: SortOrder
    mugColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfigurationCountOrderByAggregateInput
    _avg?: ConfigurationAvgOrderByAggregateInput
    _max?: ConfigurationMaxOrderByAggregateInput
    _min?: ConfigurationMinOrderByAggregateInput
    _sum?: ConfigurationSumOrderByAggregateInput
  }

  export type ConfigurationScalarWhereWithAggregatesInput = {
    AND?: ConfigurationScalarWhereWithAggregatesInput | ConfigurationScalarWhereWithAggregatesInput[]
    OR?: ConfigurationScalarWhereWithAggregatesInput[]
    NOT?: ConfigurationScalarWhereWithAggregatesInput | ConfigurationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Configuration"> | string
    type?: EnumProductTypeNullableWithAggregatesFilter<"Configuration"> | $Enums.ProductType | null
    imageUrl?: StringWithAggregatesFilter<"Configuration"> | string
    width?: IntWithAggregatesFilter<"Configuration"> | number
    height?: IntWithAggregatesFilter<"Configuration"> | number
    croppedImageUrl?: StringNullableWithAggregatesFilter<"Configuration"> | string | null
    imagePositionX?: IntNullableWithAggregatesFilter<"Configuration"> | number | null
    imagePositionY?: IntNullableWithAggregatesFilter<"Configuration"> | number | null
    imageDimensionWidth?: IntNullableWithAggregatesFilter<"Configuration"> | number | null
    imageDimensionHeight?: IntNullableWithAggregatesFilter<"Configuration"> | number | null
    caseColor?: EnumCaseColorNullableWithAggregatesFilter<"Configuration"> | $Enums.CaseColor | null
    caseModel?: EnumPhoneModelNullableWithAggregatesFilter<"Configuration"> | $Enums.PhoneModel | null
    caseMaterial?: EnumCaseMaterialNullableWithAggregatesFilter<"Configuration"> | $Enums.CaseMaterial | null
    caseFinish?: EnumCaseFinishNullableWithAggregatesFilter<"Configuration"> | $Enums.CaseFinish | null
    size?: EnumTshirtSizeNullableWithAggregatesFilter<"Configuration"> | $Enums.TshirtSize | null
    tshirtcolor?: EnumTshirtColorNullableWithAggregatesFilter<"Configuration"> | $Enums.TshirtColor | null
    mugColor?: EnumMugColorNullableWithAggregatesFilter<"Configuration"> | $Enums.MugColor | null
    createdAt?: DateTimeWithAggregatesFilter<"Configuration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Configuration"> | Date | string
  }

  export type ConfigurationCreateInput = {
    id?: string
    type?: $Enums.ProductType | null
    imageUrl: string
    width: number
    height: number
    croppedImageUrl?: string | null
    imagePositionX?: number | null
    imagePositionY?: number | null
    imageDimensionWidth?: number | null
    imageDimensionHeight?: number | null
    caseColor?: $Enums.CaseColor | null
    caseModel?: $Enums.PhoneModel | null
    caseMaterial?: $Enums.CaseMaterial | null
    caseFinish?: $Enums.CaseFinish | null
    size?: $Enums.TshirtSize | null
    tshirtcolor?: $Enums.TshirtColor | null
    mugColor?: $Enums.MugColor | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfigurationUncheckedCreateInput = {
    id?: string
    type?: $Enums.ProductType | null
    imageUrl: string
    width: number
    height: number
    croppedImageUrl?: string | null
    imagePositionX?: number | null
    imagePositionY?: number | null
    imageDimensionWidth?: number | null
    imageDimensionHeight?: number | null
    caseColor?: $Enums.CaseColor | null
    caseModel?: $Enums.PhoneModel | null
    caseMaterial?: $Enums.CaseMaterial | null
    caseFinish?: $Enums.CaseFinish | null
    size?: $Enums.TshirtSize | null
    tshirtcolor?: $Enums.TshirtColor | null
    mugColor?: $Enums.MugColor | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfigurationUpdateInput = {
    type?: NullableEnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    croppedImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePositionX?: NullableIntFieldUpdateOperationsInput | number | null
    imagePositionY?: NullableIntFieldUpdateOperationsInput | number | null
    imageDimensionWidth?: NullableIntFieldUpdateOperationsInput | number | null
    imageDimensionHeight?: NullableIntFieldUpdateOperationsInput | number | null
    caseColor?: NullableEnumCaseColorFieldUpdateOperationsInput | $Enums.CaseColor | null
    caseModel?: NullableEnumPhoneModelFieldUpdateOperationsInput | $Enums.PhoneModel | null
    caseMaterial?: NullableEnumCaseMaterialFieldUpdateOperationsInput | $Enums.CaseMaterial | null
    caseFinish?: NullableEnumCaseFinishFieldUpdateOperationsInput | $Enums.CaseFinish | null
    size?: NullableEnumTshirtSizeFieldUpdateOperationsInput | $Enums.TshirtSize | null
    tshirtcolor?: NullableEnumTshirtColorFieldUpdateOperationsInput | $Enums.TshirtColor | null
    mugColor?: NullableEnumMugColorFieldUpdateOperationsInput | $Enums.MugColor | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigurationUncheckedUpdateInput = {
    type?: NullableEnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    croppedImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePositionX?: NullableIntFieldUpdateOperationsInput | number | null
    imagePositionY?: NullableIntFieldUpdateOperationsInput | number | null
    imageDimensionWidth?: NullableIntFieldUpdateOperationsInput | number | null
    imageDimensionHeight?: NullableIntFieldUpdateOperationsInput | number | null
    caseColor?: NullableEnumCaseColorFieldUpdateOperationsInput | $Enums.CaseColor | null
    caseModel?: NullableEnumPhoneModelFieldUpdateOperationsInput | $Enums.PhoneModel | null
    caseMaterial?: NullableEnumCaseMaterialFieldUpdateOperationsInput | $Enums.CaseMaterial | null
    caseFinish?: NullableEnumCaseFinishFieldUpdateOperationsInput | $Enums.CaseFinish | null
    size?: NullableEnumTshirtSizeFieldUpdateOperationsInput | $Enums.TshirtSize | null
    tshirtcolor?: NullableEnumTshirtColorFieldUpdateOperationsInput | $Enums.TshirtColor | null
    mugColor?: NullableEnumMugColorFieldUpdateOperationsInput | $Enums.MugColor | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigurationCreateManyInput = {
    id?: string
    type?: $Enums.ProductType | null
    imageUrl: string
    width: number
    height: number
    croppedImageUrl?: string | null
    imagePositionX?: number | null
    imagePositionY?: number | null
    imageDimensionWidth?: number | null
    imageDimensionHeight?: number | null
    caseColor?: $Enums.CaseColor | null
    caseModel?: $Enums.PhoneModel | null
    caseMaterial?: $Enums.CaseMaterial | null
    caseFinish?: $Enums.CaseFinish | null
    size?: $Enums.TshirtSize | null
    tshirtcolor?: $Enums.TshirtColor | null
    mugColor?: $Enums.MugColor | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfigurationUpdateManyMutationInput = {
    type?: NullableEnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    croppedImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePositionX?: NullableIntFieldUpdateOperationsInput | number | null
    imagePositionY?: NullableIntFieldUpdateOperationsInput | number | null
    imageDimensionWidth?: NullableIntFieldUpdateOperationsInput | number | null
    imageDimensionHeight?: NullableIntFieldUpdateOperationsInput | number | null
    caseColor?: NullableEnumCaseColorFieldUpdateOperationsInput | $Enums.CaseColor | null
    caseModel?: NullableEnumPhoneModelFieldUpdateOperationsInput | $Enums.PhoneModel | null
    caseMaterial?: NullableEnumCaseMaterialFieldUpdateOperationsInput | $Enums.CaseMaterial | null
    caseFinish?: NullableEnumCaseFinishFieldUpdateOperationsInput | $Enums.CaseFinish | null
    size?: NullableEnumTshirtSizeFieldUpdateOperationsInput | $Enums.TshirtSize | null
    tshirtcolor?: NullableEnumTshirtColorFieldUpdateOperationsInput | $Enums.TshirtColor | null
    mugColor?: NullableEnumMugColorFieldUpdateOperationsInput | $Enums.MugColor | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigurationUncheckedUpdateManyInput = {
    type?: NullableEnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    croppedImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePositionX?: NullableIntFieldUpdateOperationsInput | number | null
    imagePositionY?: NullableIntFieldUpdateOperationsInput | number | null
    imageDimensionWidth?: NullableIntFieldUpdateOperationsInput | number | null
    imageDimensionHeight?: NullableIntFieldUpdateOperationsInput | number | null
    caseColor?: NullableEnumCaseColorFieldUpdateOperationsInput | $Enums.CaseColor | null
    caseModel?: NullableEnumPhoneModelFieldUpdateOperationsInput | $Enums.PhoneModel | null
    caseMaterial?: NullableEnumCaseMaterialFieldUpdateOperationsInput | $Enums.CaseMaterial | null
    caseFinish?: NullableEnumCaseFinishFieldUpdateOperationsInput | $Enums.CaseFinish | null
    size?: NullableEnumTshirtSizeFieldUpdateOperationsInput | $Enums.TshirtSize | null
    tshirtcolor?: NullableEnumTshirtColorFieldUpdateOperationsInput | $Enums.TshirtColor | null
    mugColor?: NullableEnumMugColorFieldUpdateOperationsInput | $Enums.MugColor | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumProductTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductTypeNullableFilter<$PrismaModel> | $Enums.ProductType | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type EnumCaseColorNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseColor | EnumCaseColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseColor[] | ListEnumCaseColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseColor[] | ListEnumCaseColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseColorNullableFilter<$PrismaModel> | $Enums.CaseColor | null
    isSet?: boolean
  }

  export type EnumPhoneModelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneModel | EnumPhoneModelFieldRefInput<$PrismaModel> | null
    in?: $Enums.PhoneModel[] | ListEnumPhoneModelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PhoneModel[] | ListEnumPhoneModelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPhoneModelNullableFilter<$PrismaModel> | $Enums.PhoneModel | null
    isSet?: boolean
  }

  export type EnumCaseMaterialNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseMaterial | EnumCaseMaterialFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseMaterial[] | ListEnumCaseMaterialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseMaterial[] | ListEnumCaseMaterialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseMaterialNullableFilter<$PrismaModel> | $Enums.CaseMaterial | null
    isSet?: boolean
  }

  export type EnumCaseFinishNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseFinish | EnumCaseFinishFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseFinish[] | ListEnumCaseFinishFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseFinish[] | ListEnumCaseFinishFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseFinishNullableFilter<$PrismaModel> | $Enums.CaseFinish | null
    isSet?: boolean
  }

  export type EnumTshirtSizeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TshirtSize | EnumTshirtSizeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TshirtSize[] | ListEnumTshirtSizeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TshirtSize[] | ListEnumTshirtSizeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTshirtSizeNullableFilter<$PrismaModel> | $Enums.TshirtSize | null
    isSet?: boolean
  }

  export type EnumTshirtColorNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TshirtColor | EnumTshirtColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.TshirtColor[] | ListEnumTshirtColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TshirtColor[] | ListEnumTshirtColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTshirtColorNullableFilter<$PrismaModel> | $Enums.TshirtColor | null
    isSet?: boolean
  }

  export type EnumMugColorNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MugColor | EnumMugColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.MugColor[] | ListEnumMugColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MugColor[] | ListEnumMugColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMugColorNullableFilter<$PrismaModel> | $Enums.MugColor | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConfigurationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    croppedImageUrl?: SortOrder
    imagePositionX?: SortOrder
    imagePositionY?: SortOrder
    imageDimensionWidth?: SortOrder
    imageDimensionHeight?: SortOrder
    caseColor?: SortOrder
    caseModel?: SortOrder
    caseMaterial?: SortOrder
    caseFinish?: SortOrder
    size?: SortOrder
    tshirtcolor?: SortOrder
    mugColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigurationAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    imagePositionX?: SortOrder
    imagePositionY?: SortOrder
    imageDimensionWidth?: SortOrder
    imageDimensionHeight?: SortOrder
  }

  export type ConfigurationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    croppedImageUrl?: SortOrder
    imagePositionX?: SortOrder
    imagePositionY?: SortOrder
    imageDimensionWidth?: SortOrder
    imageDimensionHeight?: SortOrder
    caseColor?: SortOrder
    caseModel?: SortOrder
    caseMaterial?: SortOrder
    caseFinish?: SortOrder
    size?: SortOrder
    tshirtcolor?: SortOrder
    mugColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigurationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    croppedImageUrl?: SortOrder
    imagePositionX?: SortOrder
    imagePositionY?: SortOrder
    imageDimensionWidth?: SortOrder
    imageDimensionHeight?: SortOrder
    caseColor?: SortOrder
    caseModel?: SortOrder
    caseMaterial?: SortOrder
    caseFinish?: SortOrder
    size?: SortOrder
    tshirtcolor?: SortOrder
    mugColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigurationSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    imagePositionX?: SortOrder
    imagePositionY?: SortOrder
    imageDimensionWidth?: SortOrder
    imageDimensionHeight?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumProductTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProductType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProductTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumProductTypeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumCaseColorNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseColor | EnumCaseColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseColor[] | ListEnumCaseColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseColor[] | ListEnumCaseColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseColorNullableWithAggregatesFilter<$PrismaModel> | $Enums.CaseColor | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCaseColorNullableFilter<$PrismaModel>
    _max?: NestedEnumCaseColorNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumPhoneModelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneModel | EnumPhoneModelFieldRefInput<$PrismaModel> | null
    in?: $Enums.PhoneModel[] | ListEnumPhoneModelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PhoneModel[] | ListEnumPhoneModelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPhoneModelNullableWithAggregatesFilter<$PrismaModel> | $Enums.PhoneModel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPhoneModelNullableFilter<$PrismaModel>
    _max?: NestedEnumPhoneModelNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumCaseMaterialNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseMaterial | EnumCaseMaterialFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseMaterial[] | ListEnumCaseMaterialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseMaterial[] | ListEnumCaseMaterialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseMaterialNullableWithAggregatesFilter<$PrismaModel> | $Enums.CaseMaterial | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCaseMaterialNullableFilter<$PrismaModel>
    _max?: NestedEnumCaseMaterialNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumCaseFinishNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseFinish | EnumCaseFinishFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseFinish[] | ListEnumCaseFinishFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseFinish[] | ListEnumCaseFinishFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseFinishNullableWithAggregatesFilter<$PrismaModel> | $Enums.CaseFinish | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCaseFinishNullableFilter<$PrismaModel>
    _max?: NestedEnumCaseFinishNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumTshirtSizeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TshirtSize | EnumTshirtSizeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TshirtSize[] | ListEnumTshirtSizeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TshirtSize[] | ListEnumTshirtSizeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTshirtSizeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TshirtSize | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTshirtSizeNullableFilter<$PrismaModel>
    _max?: NestedEnumTshirtSizeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumTshirtColorNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TshirtColor | EnumTshirtColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.TshirtColor[] | ListEnumTshirtColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TshirtColor[] | ListEnumTshirtColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTshirtColorNullableWithAggregatesFilter<$PrismaModel> | $Enums.TshirtColor | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTshirtColorNullableFilter<$PrismaModel>
    _max?: NestedEnumTshirtColorNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumMugColorNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MugColor | EnumMugColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.MugColor[] | ListEnumMugColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MugColor[] | ListEnumMugColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMugColorNullableWithAggregatesFilter<$PrismaModel> | $Enums.MugColor | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMugColorNullableFilter<$PrismaModel>
    _max?: NestedEnumMugColorNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NullableEnumProductTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProductType | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableEnumCaseColorFieldUpdateOperationsInput = {
    set?: $Enums.CaseColor | null
    unset?: boolean
  }

  export type NullableEnumPhoneModelFieldUpdateOperationsInput = {
    set?: $Enums.PhoneModel | null
    unset?: boolean
  }

  export type NullableEnumCaseMaterialFieldUpdateOperationsInput = {
    set?: $Enums.CaseMaterial | null
    unset?: boolean
  }

  export type NullableEnumCaseFinishFieldUpdateOperationsInput = {
    set?: $Enums.CaseFinish | null
    unset?: boolean
  }

  export type NullableEnumTshirtSizeFieldUpdateOperationsInput = {
    set?: $Enums.TshirtSize | null
    unset?: boolean
  }

  export type NullableEnumTshirtColorFieldUpdateOperationsInput = {
    set?: $Enums.TshirtColor | null
    unset?: boolean
  }

  export type NullableEnumMugColorFieldUpdateOperationsInput = {
    set?: $Enums.MugColor | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumProductTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductTypeNullableFilter<$PrismaModel> | $Enums.ProductType | null
    isSet?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumCaseColorNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseColor | EnumCaseColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseColor[] | ListEnumCaseColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseColor[] | ListEnumCaseColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseColorNullableFilter<$PrismaModel> | $Enums.CaseColor | null
    isSet?: boolean
  }

  export type NestedEnumPhoneModelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneModel | EnumPhoneModelFieldRefInput<$PrismaModel> | null
    in?: $Enums.PhoneModel[] | ListEnumPhoneModelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PhoneModel[] | ListEnumPhoneModelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPhoneModelNullableFilter<$PrismaModel> | $Enums.PhoneModel | null
    isSet?: boolean
  }

  export type NestedEnumCaseMaterialNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseMaterial | EnumCaseMaterialFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseMaterial[] | ListEnumCaseMaterialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseMaterial[] | ListEnumCaseMaterialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseMaterialNullableFilter<$PrismaModel> | $Enums.CaseMaterial | null
    isSet?: boolean
  }

  export type NestedEnumCaseFinishNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseFinish | EnumCaseFinishFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseFinish[] | ListEnumCaseFinishFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseFinish[] | ListEnumCaseFinishFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseFinishNullableFilter<$PrismaModel> | $Enums.CaseFinish | null
    isSet?: boolean
  }

  export type NestedEnumTshirtSizeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TshirtSize | EnumTshirtSizeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TshirtSize[] | ListEnumTshirtSizeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TshirtSize[] | ListEnumTshirtSizeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTshirtSizeNullableFilter<$PrismaModel> | $Enums.TshirtSize | null
    isSet?: boolean
  }

  export type NestedEnumTshirtColorNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TshirtColor | EnumTshirtColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.TshirtColor[] | ListEnumTshirtColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TshirtColor[] | ListEnumTshirtColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTshirtColorNullableFilter<$PrismaModel> | $Enums.TshirtColor | null
    isSet?: boolean
  }

  export type NestedEnumMugColorNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MugColor | EnumMugColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.MugColor[] | ListEnumMugColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MugColor[] | ListEnumMugColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMugColorNullableFilter<$PrismaModel> | $Enums.MugColor | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumProductTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProductType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProductTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumProductTypeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumCaseColorNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseColor | EnumCaseColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseColor[] | ListEnumCaseColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseColor[] | ListEnumCaseColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseColorNullableWithAggregatesFilter<$PrismaModel> | $Enums.CaseColor | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCaseColorNullableFilter<$PrismaModel>
    _max?: NestedEnumCaseColorNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumPhoneModelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneModel | EnumPhoneModelFieldRefInput<$PrismaModel> | null
    in?: $Enums.PhoneModel[] | ListEnumPhoneModelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PhoneModel[] | ListEnumPhoneModelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPhoneModelNullableWithAggregatesFilter<$PrismaModel> | $Enums.PhoneModel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPhoneModelNullableFilter<$PrismaModel>
    _max?: NestedEnumPhoneModelNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumCaseMaterialNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseMaterial | EnumCaseMaterialFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseMaterial[] | ListEnumCaseMaterialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseMaterial[] | ListEnumCaseMaterialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseMaterialNullableWithAggregatesFilter<$PrismaModel> | $Enums.CaseMaterial | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCaseMaterialNullableFilter<$PrismaModel>
    _max?: NestedEnumCaseMaterialNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumCaseFinishNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseFinish | EnumCaseFinishFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseFinish[] | ListEnumCaseFinishFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseFinish[] | ListEnumCaseFinishFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseFinishNullableWithAggregatesFilter<$PrismaModel> | $Enums.CaseFinish | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCaseFinishNullableFilter<$PrismaModel>
    _max?: NestedEnumCaseFinishNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumTshirtSizeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TshirtSize | EnumTshirtSizeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TshirtSize[] | ListEnumTshirtSizeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TshirtSize[] | ListEnumTshirtSizeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTshirtSizeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TshirtSize | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTshirtSizeNullableFilter<$PrismaModel>
    _max?: NestedEnumTshirtSizeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumTshirtColorNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TshirtColor | EnumTshirtColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.TshirtColor[] | ListEnumTshirtColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TshirtColor[] | ListEnumTshirtColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTshirtColorNullableWithAggregatesFilter<$PrismaModel> | $Enums.TshirtColor | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTshirtColorNullableFilter<$PrismaModel>
    _max?: NestedEnumTshirtColorNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumMugColorNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MugColor | EnumMugColorFieldRefInput<$PrismaModel> | null
    in?: $Enums.MugColor[] | ListEnumMugColorFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MugColor[] | ListEnumMugColorFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMugColorNullableWithAggregatesFilter<$PrismaModel> | $Enums.MugColor | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMugColorNullableFilter<$PrismaModel>
    _max?: NestedEnumMugColorNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}