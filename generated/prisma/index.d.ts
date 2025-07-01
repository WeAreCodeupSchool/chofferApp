
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
 * Model address
 * 
 */
export type address = $Result.DefaultSelection<Prisma.$addressPayload>
/**
 * Model chofer
 * 
 */
export type chofer = $Result.DefaultSelection<Prisma.$choferPayload>
/**
 * Model client
 * 
 */
export type client = $Result.DefaultSelection<Prisma.$clientPayload>
/**
 * Model trip_requests
 * 
 */
export type trip_requests = $Result.DefaultSelection<Prisma.$trip_requestsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
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
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.address`: Exposes CRUD operations for the **address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.addressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chofer`: Exposes CRUD operations for the **chofer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chofers
    * const chofers = await prisma.chofer.findMany()
    * ```
    */
  get chofer(): Prisma.choferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.clientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip_requests`: Exposes CRUD operations for the **trip_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trip_requests
    * const trip_requests = await prisma.trip_requests.findMany()
    * ```
    */
  get trip_requests(): Prisma.trip_requestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    address: 'address',
    chofer: 'chofer',
    client: 'client',
    trip_requests: 'trip_requests',
    users: 'users'
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
      modelProps: "address" | "chofer" | "client" | "trip_requests" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      address: {
        payload: Prisma.$addressPayload<ExtArgs>
        fields: Prisma.addressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findFirst: {
            args: Prisma.addressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findMany: {
            args: Prisma.addressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          create: {
            args: Prisma.addressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          createMany: {
            args: Prisma.addressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.addressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          update: {
            args: Prisma.addressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          deleteMany: {
            args: Prisma.addressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.addressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.addressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      chofer: {
        payload: Prisma.$choferPayload<ExtArgs>
        fields: Prisma.choferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.choferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.choferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choferPayload>
          }
          findFirst: {
            args: Prisma.choferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.choferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choferPayload>
          }
          findMany: {
            args: Prisma.choferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choferPayload>[]
          }
          create: {
            args: Prisma.choferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choferPayload>
          }
          createMany: {
            args: Prisma.choferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.choferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choferPayload>
          }
          update: {
            args: Prisma.choferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choferPayload>
          }
          deleteMany: {
            args: Prisma.choferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.choferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.choferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choferPayload>
          }
          aggregate: {
            args: Prisma.ChoferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChofer>
          }
          groupBy: {
            args: Prisma.choferGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoferGroupByOutputType>[]
          }
          count: {
            args: Prisma.choferCountArgs<ExtArgs>
            result: $Utils.Optional<ChoferCountAggregateOutputType> | number
          }
        }
      }
      client: {
        payload: Prisma.$clientPayload<ExtArgs>
        fields: Prisma.clientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          findFirst: {
            args: Prisma.clientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          findMany: {
            args: Prisma.clientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[]
          }
          create: {
            args: Prisma.clientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          createMany: {
            args: Prisma.clientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          update: {
            args: Prisma.clientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          deleteMany: {
            args: Prisma.clientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.clientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      trip_requests: {
        payload: Prisma.$trip_requestsPayload<ExtArgs>
        fields: Prisma.trip_requestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trip_requestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_requestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trip_requestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_requestsPayload>
          }
          findFirst: {
            args: Prisma.trip_requestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_requestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trip_requestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_requestsPayload>
          }
          findMany: {
            args: Prisma.trip_requestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_requestsPayload>[]
          }
          create: {
            args: Prisma.trip_requestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_requestsPayload>
          }
          createMany: {
            args: Prisma.trip_requestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.trip_requestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_requestsPayload>
          }
          update: {
            args: Prisma.trip_requestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_requestsPayload>
          }
          deleteMany: {
            args: Prisma.trip_requestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trip_requestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.trip_requestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_requestsPayload>
          }
          aggregate: {
            args: Prisma.Trip_requestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip_requests>
          }
          groupBy: {
            args: Prisma.trip_requestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Trip_requestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.trip_requestsCountArgs<ExtArgs>
            result: $Utils.Optional<Trip_requestsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    address?: addressOmit
    chofer?: choferOmit
    client?: clientOmit
    trip_requests?: trip_requestsOmit
    users?: usersOmit
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
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    users: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AddressCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type ChoferCountOutputType
   */

  export type ChoferCountOutputType = {
    trip_requests: number
  }

  export type ChoferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip_requests?: boolean | ChoferCountOutputTypeCountTrip_requestsArgs
  }

  // Custom InputTypes
  /**
   * ChoferCountOutputType without action
   */
  export type ChoferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferCountOutputType
     */
    select?: ChoferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChoferCountOutputType without action
   */
  export type ChoferCountOutputTypeCountTrip_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trip_requestsWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    trip_requests: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip_requests?: boolean | ClientCountOutputTypeCountTrip_requestsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountTrip_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trip_requestsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    chofer: number
    client: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chofer?: boolean | UsersCountOutputTypeCountChoferArgs
    client?: boolean | UsersCountOutputTypeCountClientArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChoferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: choferWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    numero: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    numero: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    calle: string | null
    numero: number | null
    postal_code: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    calle: string | null
    numero: number | null
    postal_code: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    calle: number
    numero: number
    postal_code: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    numero?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    numero?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    calle?: true
    numero?: true
    postal_code?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    calle?: true
    numero?: true
    postal_code?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    calle?: true
    numero?: true
    postal_code?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which address to aggregate.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type addressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
    orderBy?: addressOrderByWithAggregationInput | addressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: addressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    calle: string
    numero: number
    postal_code: string | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends addressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type addressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calle?: boolean
    numero?: boolean
    postal_code?: boolean
    users?: boolean | address$usersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>



  export type addressSelectScalar = {
    id?: boolean
    calle?: boolean
    numero?: boolean
    postal_code?: boolean
  }

  export type addressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "calle" | "numero" | "postal_code", ExtArgs["result"]["address"]>
  export type addressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | address$usersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $addressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "address"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      calle: string
      numero: number
      postal_code: string | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type addressGetPayload<S extends boolean | null | undefined | addressDefaultArgs> = $Result.GetResult<Prisma.$addressPayload, S>

  type addressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface addressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['address'], meta: { name: 'address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {addressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressFindUniqueArgs>(args: SelectSubset<T, addressFindUniqueArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressFindUniqueOrThrowArgs>(args: SelectSubset<T, addressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressFindFirstArgs>(args?: SelectSubset<T, addressFindFirstArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressFindFirstOrThrowArgs>(args?: SelectSubset<T, addressFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addressFindManyArgs>(args?: SelectSubset<T, addressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {addressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends addressCreateArgs>(args: SelectSubset<T, addressCreateArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressCreateManyArgs>(args?: SelectSubset<T, addressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {addressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends addressDeleteArgs>(args: SelectSubset<T, addressDeleteArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {addressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressUpdateArgs>(args: SelectSubset<T, addressUpdateArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressDeleteManyArgs>(args?: SelectSubset<T, addressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressUpdateManyArgs>(args: SelectSubset<T, addressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {addressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends addressUpsertArgs>(args: SelectSubset<T, addressUpsertArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressCountArgs>(
      args?: Subset<T, addressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressGroupByArgs} args - Group by arguments.
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
      T extends addressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressGroupByArgs['orderBy'] }
        : { orderBy?: addressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, addressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the address model
   */
  readonly fields: addressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends address$usersArgs<ExtArgs> = {}>(args?: Subset<T, address$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the address model
   */
  interface addressFieldRefs {
    readonly id: FieldRef<"address", 'Int'>
    readonly calle: FieldRef<"address", 'String'>
    readonly numero: FieldRef<"address", 'Int'>
    readonly postal_code: FieldRef<"address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * address findUnique
   */
  export type addressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address findUniqueOrThrow
   */
  export type addressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address findFirst
   */
  export type addressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address findFirstOrThrow
   */
  export type addressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address findMany
   */
  export type addressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address create
   */
  export type addressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to create a address.
     */
    data: XOR<addressCreateInput, addressUncheckedCreateInput>
  }

  /**
   * address createMany
   */
  export type addressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressCreateManyInput | addressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * address update
   */
  export type addressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to update a address.
     */
    data: XOR<addressUpdateInput, addressUncheckedUpdateInput>
    /**
     * Choose, which address to update.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address updateMany
   */
  export type addressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * address upsert
   */
  export type addressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The filter to search for the address to update in case it exists.
     */
    where: addressWhereUniqueInput
    /**
     * In case the address found by the `where` argument doesn't exist, create a new address with this data.
     */
    create: XOR<addressCreateInput, addressUncheckedCreateInput>
    /**
     * In case the address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressUpdateInput, addressUncheckedUpdateInput>
  }

  /**
   * address delete
   */
  export type addressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter which address to delete.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address deleteMany
   */
  export type addressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * address.users
   */
  export type address$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * address without action
   */
  export type addressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
  }


  /**
   * Model chofer
   */

  export type AggregateChofer = {
    _count: ChoferCountAggregateOutputType | null
    _avg: ChoferAvgAggregateOutputType | null
    _sum: ChoferSumAggregateOutputType | null
    _min: ChoferMinAggregateOutputType | null
    _max: ChoferMaxAggregateOutputType | null
  }

  export type ChoferAvgAggregateOutputType = {
    chofer_id: number | null
    rating: number | null
    user_id: number | null
  }

  export type ChoferSumAggregateOutputType = {
    chofer_id: number | null
    rating: number | null
    user_id: number | null
  }

  export type ChoferMinAggregateOutputType = {
    chofer_id: number | null
    rating: number | null
    user_id: number | null
  }

  export type ChoferMaxAggregateOutputType = {
    chofer_id: number | null
    rating: number | null
    user_id: number | null
  }

  export type ChoferCountAggregateOutputType = {
    chofer_id: number
    rating: number
    user_id: number
    _all: number
  }


  export type ChoferAvgAggregateInputType = {
    chofer_id?: true
    rating?: true
    user_id?: true
  }

  export type ChoferSumAggregateInputType = {
    chofer_id?: true
    rating?: true
    user_id?: true
  }

  export type ChoferMinAggregateInputType = {
    chofer_id?: true
    rating?: true
    user_id?: true
  }

  export type ChoferMaxAggregateInputType = {
    chofer_id?: true
    rating?: true
    user_id?: true
  }

  export type ChoferCountAggregateInputType = {
    chofer_id?: true
    rating?: true
    user_id?: true
    _all?: true
  }

  export type ChoferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chofer to aggregate.
     */
    where?: choferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chofers to fetch.
     */
    orderBy?: choferOrderByWithRelationInput | choferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: choferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chofers
    **/
    _count?: true | ChoferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoferMaxAggregateInputType
  }

  export type GetChoferAggregateType<T extends ChoferAggregateArgs> = {
        [P in keyof T & keyof AggregateChofer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChofer[P]>
      : GetScalarType<T[P], AggregateChofer[P]>
  }




  export type choferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: choferWhereInput
    orderBy?: choferOrderByWithAggregationInput | choferOrderByWithAggregationInput[]
    by: ChoferScalarFieldEnum[] | ChoferScalarFieldEnum
    having?: choferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoferCountAggregateInputType | true
    _avg?: ChoferAvgAggregateInputType
    _sum?: ChoferSumAggregateInputType
    _min?: ChoferMinAggregateInputType
    _max?: ChoferMaxAggregateInputType
  }

  export type ChoferGroupByOutputType = {
    chofer_id: number
    rating: number | null
    user_id: number | null
    _count: ChoferCountAggregateOutputType | null
    _avg: ChoferAvgAggregateOutputType | null
    _sum: ChoferSumAggregateOutputType | null
    _min: ChoferMinAggregateOutputType | null
    _max: ChoferMaxAggregateOutputType | null
  }

  type GetChoferGroupByPayload<T extends choferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoferGroupByOutputType[P]>
            : GetScalarType<T[P], ChoferGroupByOutputType[P]>
        }
      >
    >


  export type choferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chofer_id?: boolean
    rating?: boolean
    user_id?: boolean
    users?: boolean | chofer$usersArgs<ExtArgs>
    trip_requests?: boolean | chofer$trip_requestsArgs<ExtArgs>
    _count?: boolean | ChoferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chofer"]>



  export type choferSelectScalar = {
    chofer_id?: boolean
    rating?: boolean
    user_id?: boolean
  }

  export type choferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chofer_id" | "rating" | "user_id", ExtArgs["result"]["chofer"]>
  export type choferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | chofer$usersArgs<ExtArgs>
    trip_requests?: boolean | chofer$trip_requestsArgs<ExtArgs>
    _count?: boolean | ChoferCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $choferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chofer"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      trip_requests: Prisma.$trip_requestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      chofer_id: number
      rating: number | null
      user_id: number | null
    }, ExtArgs["result"]["chofer"]>
    composites: {}
  }

  type choferGetPayload<S extends boolean | null | undefined | choferDefaultArgs> = $Result.GetResult<Prisma.$choferPayload, S>

  type choferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<choferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoferCountAggregateInputType | true
    }

  export interface choferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chofer'], meta: { name: 'chofer' } }
    /**
     * Find zero or one Chofer that matches the filter.
     * @param {choferFindUniqueArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends choferFindUniqueArgs>(args: SelectSubset<T, choferFindUniqueArgs<ExtArgs>>): Prisma__choferClient<$Result.GetResult<Prisma.$choferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chofer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {choferFindUniqueOrThrowArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends choferFindUniqueOrThrowArgs>(args: SelectSubset<T, choferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__choferClient<$Result.GetResult<Prisma.$choferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chofer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choferFindFirstArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends choferFindFirstArgs>(args?: SelectSubset<T, choferFindFirstArgs<ExtArgs>>): Prisma__choferClient<$Result.GetResult<Prisma.$choferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chofer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choferFindFirstOrThrowArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends choferFindFirstOrThrowArgs>(args?: SelectSubset<T, choferFindFirstOrThrowArgs<ExtArgs>>): Prisma__choferClient<$Result.GetResult<Prisma.$choferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chofers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chofers
     * const chofers = await prisma.chofer.findMany()
     * 
     * // Get first 10 Chofers
     * const chofers = await prisma.chofer.findMany({ take: 10 })
     * 
     * // Only select the `chofer_id`
     * const choferWithChofer_idOnly = await prisma.chofer.findMany({ select: { chofer_id: true } })
     * 
     */
    findMany<T extends choferFindManyArgs>(args?: SelectSubset<T, choferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$choferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chofer.
     * @param {choferCreateArgs} args - Arguments to create a Chofer.
     * @example
     * // Create one Chofer
     * const Chofer = await prisma.chofer.create({
     *   data: {
     *     // ... data to create a Chofer
     *   }
     * })
     * 
     */
    create<T extends choferCreateArgs>(args: SelectSubset<T, choferCreateArgs<ExtArgs>>): Prisma__choferClient<$Result.GetResult<Prisma.$choferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chofers.
     * @param {choferCreateManyArgs} args - Arguments to create many Chofers.
     * @example
     * // Create many Chofers
     * const chofer = await prisma.chofer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends choferCreateManyArgs>(args?: SelectSubset<T, choferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chofer.
     * @param {choferDeleteArgs} args - Arguments to delete one Chofer.
     * @example
     * // Delete one Chofer
     * const Chofer = await prisma.chofer.delete({
     *   where: {
     *     // ... filter to delete one Chofer
     *   }
     * })
     * 
     */
    delete<T extends choferDeleteArgs>(args: SelectSubset<T, choferDeleteArgs<ExtArgs>>): Prisma__choferClient<$Result.GetResult<Prisma.$choferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chofer.
     * @param {choferUpdateArgs} args - Arguments to update one Chofer.
     * @example
     * // Update one Chofer
     * const chofer = await prisma.chofer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends choferUpdateArgs>(args: SelectSubset<T, choferUpdateArgs<ExtArgs>>): Prisma__choferClient<$Result.GetResult<Prisma.$choferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chofers.
     * @param {choferDeleteManyArgs} args - Arguments to filter Chofers to delete.
     * @example
     * // Delete a few Chofers
     * const { count } = await prisma.chofer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends choferDeleteManyArgs>(args?: SelectSubset<T, choferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chofers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chofers
     * const chofer = await prisma.chofer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends choferUpdateManyArgs>(args: SelectSubset<T, choferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chofer.
     * @param {choferUpsertArgs} args - Arguments to update or create a Chofer.
     * @example
     * // Update or create a Chofer
     * const chofer = await prisma.chofer.upsert({
     *   create: {
     *     // ... data to create a Chofer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chofer we want to update
     *   }
     * })
     */
    upsert<T extends choferUpsertArgs>(args: SelectSubset<T, choferUpsertArgs<ExtArgs>>): Prisma__choferClient<$Result.GetResult<Prisma.$choferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chofers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choferCountArgs} args - Arguments to filter Chofers to count.
     * @example
     * // Count the number of Chofers
     * const count = await prisma.chofer.count({
     *   where: {
     *     // ... the filter for the Chofers we want to count
     *   }
     * })
    **/
    count<T extends choferCountArgs>(
      args?: Subset<T, choferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chofer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChoferAggregateArgs>(args: Subset<T, ChoferAggregateArgs>): Prisma.PrismaPromise<GetChoferAggregateType<T>>

    /**
     * Group by Chofer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choferGroupByArgs} args - Group by arguments.
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
      T extends choferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: choferGroupByArgs['orderBy'] }
        : { orderBy?: choferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, choferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chofer model
   */
  readonly fields: choferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chofer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__choferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends chofer$usersArgs<ExtArgs> = {}>(args?: Subset<T, chofer$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trip_requests<T extends chofer$trip_requestsArgs<ExtArgs> = {}>(args?: Subset<T, chofer$trip_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trip_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the chofer model
   */
  interface choferFieldRefs {
    readonly chofer_id: FieldRef<"chofer", 'Int'>
    readonly rating: FieldRef<"chofer", 'Float'>
    readonly user_id: FieldRef<"chofer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * chofer findUnique
   */
  export type choferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chofer
     */
    select?: choferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chofer
     */
    omit?: choferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choferInclude<ExtArgs> | null
    /**
     * Filter, which chofer to fetch.
     */
    where: choferWhereUniqueInput
  }

  /**
   * chofer findUniqueOrThrow
   */
  export type choferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chofer
     */
    select?: choferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chofer
     */
    omit?: choferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choferInclude<ExtArgs> | null
    /**
     * Filter, which chofer to fetch.
     */
    where: choferWhereUniqueInput
  }

  /**
   * chofer findFirst
   */
  export type choferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chofer
     */
    select?: choferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chofer
     */
    omit?: choferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choferInclude<ExtArgs> | null
    /**
     * Filter, which chofer to fetch.
     */
    where?: choferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chofers to fetch.
     */
    orderBy?: choferOrderByWithRelationInput | choferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chofers.
     */
    cursor?: choferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chofers.
     */
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * chofer findFirstOrThrow
   */
  export type choferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chofer
     */
    select?: choferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chofer
     */
    omit?: choferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choferInclude<ExtArgs> | null
    /**
     * Filter, which chofer to fetch.
     */
    where?: choferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chofers to fetch.
     */
    orderBy?: choferOrderByWithRelationInput | choferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chofers.
     */
    cursor?: choferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chofers.
     */
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * chofer findMany
   */
  export type choferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chofer
     */
    select?: choferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chofer
     */
    omit?: choferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choferInclude<ExtArgs> | null
    /**
     * Filter, which chofers to fetch.
     */
    where?: choferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chofers to fetch.
     */
    orderBy?: choferOrderByWithRelationInput | choferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chofers.
     */
    cursor?: choferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chofers.
     */
    skip?: number
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * chofer create
   */
  export type choferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chofer
     */
    select?: choferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chofer
     */
    omit?: choferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choferInclude<ExtArgs> | null
    /**
     * The data needed to create a chofer.
     */
    data?: XOR<choferCreateInput, choferUncheckedCreateInput>
  }

  /**
   * chofer createMany
   */
  export type choferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chofers.
     */
    data: choferCreateManyInput | choferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chofer update
   */
  export type choferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chofer
     */
    select?: choferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chofer
     */
    omit?: choferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choferInclude<ExtArgs> | null
    /**
     * The data needed to update a chofer.
     */
    data: XOR<choferUpdateInput, choferUncheckedUpdateInput>
    /**
     * Choose, which chofer to update.
     */
    where: choferWhereUniqueInput
  }

  /**
   * chofer updateMany
   */
  export type choferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chofers.
     */
    data: XOR<choferUpdateManyMutationInput, choferUncheckedUpdateManyInput>
    /**
     * Filter which chofers to update
     */
    where?: choferWhereInput
    /**
     * Limit how many chofers to update.
     */
    limit?: number
  }

  /**
   * chofer upsert
   */
  export type choferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chofer
     */
    select?: choferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chofer
     */
    omit?: choferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choferInclude<ExtArgs> | null
    /**
     * The filter to search for the chofer to update in case it exists.
     */
    where: choferWhereUniqueInput
    /**
     * In case the chofer found by the `where` argument doesn't exist, create a new chofer with this data.
     */
    create: XOR<choferCreateInput, choferUncheckedCreateInput>
    /**
     * In case the chofer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<choferUpdateInput, choferUncheckedUpdateInput>
  }

  /**
   * chofer delete
   */
  export type choferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chofer
     */
    select?: choferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chofer
     */
    omit?: choferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choferInclude<ExtArgs> | null
    /**
     * Filter which chofer to delete.
     */
    where: choferWhereUniqueInput
  }

  /**
   * chofer deleteMany
   */
  export type choferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chofers to delete
     */
    where?: choferWhereInput
    /**
     * Limit how many chofers to delete.
     */
    limit?: number
  }

  /**
   * chofer.users
   */
  export type chofer$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * chofer.trip_requests
   */
  export type chofer$trip_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
    where?: trip_requestsWhereInput
    orderBy?: trip_requestsOrderByWithRelationInput | trip_requestsOrderByWithRelationInput[]
    cursor?: trip_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Trip_requestsScalarFieldEnum | Trip_requestsScalarFieldEnum[]
  }

  /**
   * chofer without action
   */
  export type choferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chofer
     */
    select?: choferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chofer
     */
    omit?: choferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choferInclude<ExtArgs> | null
  }


  /**
   * Model client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    client_id: number | null
    user_id: number | null
  }

  export type ClientSumAggregateOutputType = {
    client_id: number | null
    user_id: number | null
  }

  export type ClientMinAggregateOutputType = {
    client_id: number | null
    user_id: number | null
  }

  export type ClientMaxAggregateOutputType = {
    client_id: number | null
    user_id: number | null
  }

  export type ClientCountAggregateOutputType = {
    client_id: number
    user_id: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    client_id?: true
    user_id?: true
  }

  export type ClientSumAggregateInputType = {
    client_id?: true
    user_id?: true
  }

  export type ClientMinAggregateInputType = {
    client_id?: true
    user_id?: true
  }

  export type ClientMaxAggregateInputType = {
    client_id?: true
    user_id?: true
  }

  export type ClientCountAggregateInputType = {
    client_id?: true
    user_id?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client to aggregate.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type clientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput
    orderBy?: clientOrderByWithAggregationInput | clientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: clientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    client_id: number
    user_id: number
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends clientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type clientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    trip_requests?: boolean | client$trip_requestsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>



  export type clientSelectScalar = {
    client_id?: boolean
    user_id?: boolean
  }

  export type clientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"client_id" | "user_id", ExtArgs["result"]["client"]>
  export type clientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    trip_requests?: boolean | client$trip_requestsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $clientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      trip_requests: Prisma.$trip_requestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      client_id: number
      user_id: number
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type clientGetPayload<S extends boolean | null | undefined | clientDefaultArgs> = $Result.GetResult<Prisma.$clientPayload, S>

  type clientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface clientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['client'], meta: { name: 'client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {clientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientFindUniqueArgs>(args: SelectSubset<T, clientFindUniqueArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientFindUniqueOrThrowArgs>(args: SelectSubset<T, clientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientFindFirstArgs>(args?: SelectSubset<T, clientFindFirstArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientFindFirstOrThrowArgs>(args?: SelectSubset<T, clientFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `client_id`
     * const clientWithClient_idOnly = await prisma.client.findMany({ select: { client_id: true } })
     * 
     */
    findMany<T extends clientFindManyArgs>(args?: SelectSubset<T, clientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {clientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends clientCreateArgs>(args: SelectSubset<T, clientCreateArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {clientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientCreateManyArgs>(args?: SelectSubset<T, clientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {clientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends clientDeleteArgs>(args: SelectSubset<T, clientDeleteArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {clientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientUpdateArgs>(args: SelectSubset<T, clientUpdateArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {clientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientDeleteManyArgs>(args?: SelectSubset<T, clientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientUpdateManyArgs>(args: SelectSubset<T, clientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {clientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends clientUpsertArgs>(args: SelectSubset<T, clientUpsertArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientCountArgs>(
      args?: Subset<T, clientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientGroupByArgs} args - Group by arguments.
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
      T extends clientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientGroupByArgs['orderBy'] }
        : { orderBy?: clientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the client model
   */
  readonly fields: clientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip_requests<T extends client$trip_requestsArgs<ExtArgs> = {}>(args?: Subset<T, client$trip_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trip_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the client model
   */
  interface clientFieldRefs {
    readonly client_id: FieldRef<"client", 'Int'>
    readonly user_id: FieldRef<"client", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * client findUnique
   */
  export type clientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client findUniqueOrThrow
   */
  export type clientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client findFirst
   */
  export type clientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client findFirstOrThrow
   */
  export type clientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client findMany
   */
  export type clientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client create
   */
  export type clientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The data needed to create a client.
     */
    data: XOR<clientCreateInput, clientUncheckedCreateInput>
  }

  /**
   * client createMany
   */
  export type clientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * client update
   */
  export type clientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The data needed to update a client.
     */
    data: XOR<clientUpdateInput, clientUncheckedUpdateInput>
    /**
     * Choose, which client to update.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client updateMany
   */
  export type clientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * client upsert
   */
  export type clientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The filter to search for the client to update in case it exists.
     */
    where: clientWhereUniqueInput
    /**
     * In case the client found by the `where` argument doesn't exist, create a new client with this data.
     */
    create: XOR<clientCreateInput, clientUncheckedCreateInput>
    /**
     * In case the client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientUpdateInput, clientUncheckedUpdateInput>
  }

  /**
   * client delete
   */
  export type clientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter which client to delete.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client deleteMany
   */
  export type clientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientWhereInput
    /**
     * Limit how many clients to delete.
     */
    limit?: number
  }

  /**
   * client.trip_requests
   */
  export type client$trip_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
    where?: trip_requestsWhereInput
    orderBy?: trip_requestsOrderByWithRelationInput | trip_requestsOrderByWithRelationInput[]
    cursor?: trip_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Trip_requestsScalarFieldEnum | Trip_requestsScalarFieldEnum[]
  }

  /**
   * client without action
   */
  export type clientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
  }


  /**
   * Model trip_requests
   */

  export type AggregateTrip_requests = {
    _count: Trip_requestsCountAggregateOutputType | null
    _avg: Trip_requestsAvgAggregateOutputType | null
    _sum: Trip_requestsSumAggregateOutputType | null
    _min: Trip_requestsMinAggregateOutputType | null
    _max: Trip_requestsMaxAggregateOutputType | null
  }

  export type Trip_requestsAvgAggregateOutputType = {
    id: number | null
    chofer_id: number | null
    client_id: number | null
    estimated_price: number | null
  }

  export type Trip_requestsSumAggregateOutputType = {
    id: number | null
    chofer_id: number | null
    client_id: number | null
    estimated_price: number | null
  }

  export type Trip_requestsMinAggregateOutputType = {
    id: number | null
    chofer_id: number | null
    client_id: number | null
    status: string | null
    estimated_price: number | null
  }

  export type Trip_requestsMaxAggregateOutputType = {
    id: number | null
    chofer_id: number | null
    client_id: number | null
    status: string | null
    estimated_price: number | null
  }

  export type Trip_requestsCountAggregateOutputType = {
    id: number
    chofer_id: number
    client_id: number
    status: number
    estimated_price: number
    _all: number
  }


  export type Trip_requestsAvgAggregateInputType = {
    id?: true
    chofer_id?: true
    client_id?: true
    estimated_price?: true
  }

  export type Trip_requestsSumAggregateInputType = {
    id?: true
    chofer_id?: true
    client_id?: true
    estimated_price?: true
  }

  export type Trip_requestsMinAggregateInputType = {
    id?: true
    chofer_id?: true
    client_id?: true
    status?: true
    estimated_price?: true
  }

  export type Trip_requestsMaxAggregateInputType = {
    id?: true
    chofer_id?: true
    client_id?: true
    status?: true
    estimated_price?: true
  }

  export type Trip_requestsCountAggregateInputType = {
    id?: true
    chofer_id?: true
    client_id?: true
    status?: true
    estimated_price?: true
    _all?: true
  }

  export type Trip_requestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trip_requests to aggregate.
     */
    where?: trip_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_requests to fetch.
     */
    orderBy?: trip_requestsOrderByWithRelationInput | trip_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trip_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trip_requests
    **/
    _count?: true | Trip_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Trip_requestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Trip_requestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trip_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trip_requestsMaxAggregateInputType
  }

  export type GetTrip_requestsAggregateType<T extends Trip_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip_requests[P]>
      : GetScalarType<T[P], AggregateTrip_requests[P]>
  }




  export type trip_requestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trip_requestsWhereInput
    orderBy?: trip_requestsOrderByWithAggregationInput | trip_requestsOrderByWithAggregationInput[]
    by: Trip_requestsScalarFieldEnum[] | Trip_requestsScalarFieldEnum
    having?: trip_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trip_requestsCountAggregateInputType | true
    _avg?: Trip_requestsAvgAggregateInputType
    _sum?: Trip_requestsSumAggregateInputType
    _min?: Trip_requestsMinAggregateInputType
    _max?: Trip_requestsMaxAggregateInputType
  }

  export type Trip_requestsGroupByOutputType = {
    id: number
    chofer_id: number
    client_id: number
    status: string
    estimated_price: number
    _count: Trip_requestsCountAggregateOutputType | null
    _avg: Trip_requestsAvgAggregateOutputType | null
    _sum: Trip_requestsSumAggregateOutputType | null
    _min: Trip_requestsMinAggregateOutputType | null
    _max: Trip_requestsMaxAggregateOutputType | null
  }

  type GetTrip_requestsGroupByPayload<T extends trip_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Trip_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trip_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trip_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Trip_requestsGroupByOutputType[P]>
        }
      >
    >


  export type trip_requestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chofer_id?: boolean
    client_id?: boolean
    status?: boolean
    estimated_price?: boolean
    chofer?: boolean | choferDefaultArgs<ExtArgs>
    client?: boolean | clientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip_requests"]>



  export type trip_requestsSelectScalar = {
    id?: boolean
    chofer_id?: boolean
    client_id?: boolean
    status?: boolean
    estimated_price?: boolean
  }

  export type trip_requestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chofer_id" | "client_id" | "status" | "estimated_price", ExtArgs["result"]["trip_requests"]>
  export type trip_requestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chofer?: boolean | choferDefaultArgs<ExtArgs>
    client?: boolean | clientDefaultArgs<ExtArgs>
  }

  export type $trip_requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trip_requests"
    objects: {
      chofer: Prisma.$choferPayload<ExtArgs>
      client: Prisma.$clientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chofer_id: number
      client_id: number
      status: string
      estimated_price: number
    }, ExtArgs["result"]["trip_requests"]>
    composites: {}
  }

  type trip_requestsGetPayload<S extends boolean | null | undefined | trip_requestsDefaultArgs> = $Result.GetResult<Prisma.$trip_requestsPayload, S>

  type trip_requestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trip_requestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Trip_requestsCountAggregateInputType | true
    }

  export interface trip_requestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trip_requests'], meta: { name: 'trip_requests' } }
    /**
     * Find zero or one Trip_requests that matches the filter.
     * @param {trip_requestsFindUniqueArgs} args - Arguments to find a Trip_requests
     * @example
     * // Get one Trip_requests
     * const trip_requests = await prisma.trip_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trip_requestsFindUniqueArgs>(args: SelectSubset<T, trip_requestsFindUniqueArgs<ExtArgs>>): Prisma__trip_requestsClient<$Result.GetResult<Prisma.$trip_requestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip_requests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trip_requestsFindUniqueOrThrowArgs} args - Arguments to find a Trip_requests
     * @example
     * // Get one Trip_requests
     * const trip_requests = await prisma.trip_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trip_requestsFindUniqueOrThrowArgs>(args: SelectSubset<T, trip_requestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trip_requestsClient<$Result.GetResult<Prisma.$trip_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_requestsFindFirstArgs} args - Arguments to find a Trip_requests
     * @example
     * // Get one Trip_requests
     * const trip_requests = await prisma.trip_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trip_requestsFindFirstArgs>(args?: SelectSubset<T, trip_requestsFindFirstArgs<ExtArgs>>): Prisma__trip_requestsClient<$Result.GetResult<Prisma.$trip_requestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip_requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_requestsFindFirstOrThrowArgs} args - Arguments to find a Trip_requests
     * @example
     * // Get one Trip_requests
     * const trip_requests = await prisma.trip_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trip_requestsFindFirstOrThrowArgs>(args?: SelectSubset<T, trip_requestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__trip_requestsClient<$Result.GetResult<Prisma.$trip_requestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trip_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_requestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trip_requests
     * const trip_requests = await prisma.trip_requests.findMany()
     * 
     * // Get first 10 Trip_requests
     * const trip_requests = await prisma.trip_requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trip_requestsWithIdOnly = await prisma.trip_requests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends trip_requestsFindManyArgs>(args?: SelectSubset<T, trip_requestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trip_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip_requests.
     * @param {trip_requestsCreateArgs} args - Arguments to create a Trip_requests.
     * @example
     * // Create one Trip_requests
     * const Trip_requests = await prisma.trip_requests.create({
     *   data: {
     *     // ... data to create a Trip_requests
     *   }
     * })
     * 
     */
    create<T extends trip_requestsCreateArgs>(args: SelectSubset<T, trip_requestsCreateArgs<ExtArgs>>): Prisma__trip_requestsClient<$Result.GetResult<Prisma.$trip_requestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trip_requests.
     * @param {trip_requestsCreateManyArgs} args - Arguments to create many Trip_requests.
     * @example
     * // Create many Trip_requests
     * const trip_requests = await prisma.trip_requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trip_requestsCreateManyArgs>(args?: SelectSubset<T, trip_requestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip_requests.
     * @param {trip_requestsDeleteArgs} args - Arguments to delete one Trip_requests.
     * @example
     * // Delete one Trip_requests
     * const Trip_requests = await prisma.trip_requests.delete({
     *   where: {
     *     // ... filter to delete one Trip_requests
     *   }
     * })
     * 
     */
    delete<T extends trip_requestsDeleteArgs>(args: SelectSubset<T, trip_requestsDeleteArgs<ExtArgs>>): Prisma__trip_requestsClient<$Result.GetResult<Prisma.$trip_requestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip_requests.
     * @param {trip_requestsUpdateArgs} args - Arguments to update one Trip_requests.
     * @example
     * // Update one Trip_requests
     * const trip_requests = await prisma.trip_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trip_requestsUpdateArgs>(args: SelectSubset<T, trip_requestsUpdateArgs<ExtArgs>>): Prisma__trip_requestsClient<$Result.GetResult<Prisma.$trip_requestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trip_requests.
     * @param {trip_requestsDeleteManyArgs} args - Arguments to filter Trip_requests to delete.
     * @example
     * // Delete a few Trip_requests
     * const { count } = await prisma.trip_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trip_requestsDeleteManyArgs>(args?: SelectSubset<T, trip_requestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trip_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trip_requests
     * const trip_requests = await prisma.trip_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trip_requestsUpdateManyArgs>(args: SelectSubset<T, trip_requestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip_requests.
     * @param {trip_requestsUpsertArgs} args - Arguments to update or create a Trip_requests.
     * @example
     * // Update or create a Trip_requests
     * const trip_requests = await prisma.trip_requests.upsert({
     *   create: {
     *     // ... data to create a Trip_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip_requests we want to update
     *   }
     * })
     */
    upsert<T extends trip_requestsUpsertArgs>(args: SelectSubset<T, trip_requestsUpsertArgs<ExtArgs>>): Prisma__trip_requestsClient<$Result.GetResult<Prisma.$trip_requestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trip_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_requestsCountArgs} args - Arguments to filter Trip_requests to count.
     * @example
     * // Count the number of Trip_requests
     * const count = await prisma.trip_requests.count({
     *   where: {
     *     // ... the filter for the Trip_requests we want to count
     *   }
     * })
    **/
    count<T extends trip_requestsCountArgs>(
      args?: Subset<T, trip_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trip_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trip_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Trip_requestsAggregateArgs>(args: Subset<T, Trip_requestsAggregateArgs>): Prisma.PrismaPromise<GetTrip_requestsAggregateType<T>>

    /**
     * Group by Trip_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_requestsGroupByArgs} args - Group by arguments.
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
      T extends trip_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trip_requestsGroupByArgs['orderBy'] }
        : { orderBy?: trip_requestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, trip_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrip_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trip_requests model
   */
  readonly fields: trip_requestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trip_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trip_requestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chofer<T extends choferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, choferDefaultArgs<ExtArgs>>): Prisma__choferClient<$Result.GetResult<Prisma.$choferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends clientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientDefaultArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the trip_requests model
   */
  interface trip_requestsFieldRefs {
    readonly id: FieldRef<"trip_requests", 'Int'>
    readonly chofer_id: FieldRef<"trip_requests", 'Int'>
    readonly client_id: FieldRef<"trip_requests", 'Int'>
    readonly status: FieldRef<"trip_requests", 'String'>
    readonly estimated_price: FieldRef<"trip_requests", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * trip_requests findUnique
   */
  export type trip_requestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
    /**
     * Filter, which trip_requests to fetch.
     */
    where: trip_requestsWhereUniqueInput
  }

  /**
   * trip_requests findUniqueOrThrow
   */
  export type trip_requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
    /**
     * Filter, which trip_requests to fetch.
     */
    where: trip_requestsWhereUniqueInput
  }

  /**
   * trip_requests findFirst
   */
  export type trip_requestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
    /**
     * Filter, which trip_requests to fetch.
     */
    where?: trip_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_requests to fetch.
     */
    orderBy?: trip_requestsOrderByWithRelationInput | trip_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trip_requests.
     */
    cursor?: trip_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trip_requests.
     */
    distinct?: Trip_requestsScalarFieldEnum | Trip_requestsScalarFieldEnum[]
  }

  /**
   * trip_requests findFirstOrThrow
   */
  export type trip_requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
    /**
     * Filter, which trip_requests to fetch.
     */
    where?: trip_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_requests to fetch.
     */
    orderBy?: trip_requestsOrderByWithRelationInput | trip_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trip_requests.
     */
    cursor?: trip_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trip_requests.
     */
    distinct?: Trip_requestsScalarFieldEnum | Trip_requestsScalarFieldEnum[]
  }

  /**
   * trip_requests findMany
   */
  export type trip_requestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
    /**
     * Filter, which trip_requests to fetch.
     */
    where?: trip_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_requests to fetch.
     */
    orderBy?: trip_requestsOrderByWithRelationInput | trip_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trip_requests.
     */
    cursor?: trip_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_requests.
     */
    skip?: number
    distinct?: Trip_requestsScalarFieldEnum | Trip_requestsScalarFieldEnum[]
  }

  /**
   * trip_requests create
   */
  export type trip_requestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
    /**
     * The data needed to create a trip_requests.
     */
    data: XOR<trip_requestsCreateInput, trip_requestsUncheckedCreateInput>
  }

  /**
   * trip_requests createMany
   */
  export type trip_requestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trip_requests.
     */
    data: trip_requestsCreateManyInput | trip_requestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trip_requests update
   */
  export type trip_requestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
    /**
     * The data needed to update a trip_requests.
     */
    data: XOR<trip_requestsUpdateInput, trip_requestsUncheckedUpdateInput>
    /**
     * Choose, which trip_requests to update.
     */
    where: trip_requestsWhereUniqueInput
  }

  /**
   * trip_requests updateMany
   */
  export type trip_requestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trip_requests.
     */
    data: XOR<trip_requestsUpdateManyMutationInput, trip_requestsUncheckedUpdateManyInput>
    /**
     * Filter which trip_requests to update
     */
    where?: trip_requestsWhereInput
    /**
     * Limit how many trip_requests to update.
     */
    limit?: number
  }

  /**
   * trip_requests upsert
   */
  export type trip_requestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
    /**
     * The filter to search for the trip_requests to update in case it exists.
     */
    where: trip_requestsWhereUniqueInput
    /**
     * In case the trip_requests found by the `where` argument doesn't exist, create a new trip_requests with this data.
     */
    create: XOR<trip_requestsCreateInput, trip_requestsUncheckedCreateInput>
    /**
     * In case the trip_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trip_requestsUpdateInput, trip_requestsUncheckedUpdateInput>
  }

  /**
   * trip_requests delete
   */
  export type trip_requestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
    /**
     * Filter which trip_requests to delete.
     */
    where: trip_requestsWhereUniqueInput
  }

  /**
   * trip_requests deleteMany
   */
  export type trip_requestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trip_requests to delete
     */
    where?: trip_requestsWhereInput
    /**
     * Limit how many trip_requests to delete.
     */
    limit?: number
  }

  /**
   * trip_requests without action
   */
  export type trip_requestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_requests
     */
    select?: trip_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_requests
     */
    omit?: trip_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_requestsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    address_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    address_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    stripe_card_id: string | null
    phone: string | null
    role: string | null
    address_id: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    stripe_card_id: string | null
    phone: string | null
    role: string | null
    address_id: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    stripe_card_id: number
    phone: number
    role: number
    address_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    address_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    address_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    stripe_card_id?: true
    phone?: true
    role?: true
    address_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    stripe_card_id?: true
    phone?: true
    role?: true
    address_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    stripe_card_id?: true
    phone?: true
    role?: true
    address_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    stripe_card_id: string
    phone: string
    role: string
    address_id: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    stripe_card_id?: boolean
    phone?: boolean
    role?: boolean
    address_id?: boolean
    chofer?: boolean | users$choferArgs<ExtArgs>
    client?: boolean | users$clientArgs<ExtArgs>
    address?: boolean | users$addressArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    stripe_card_id?: boolean
    phone?: boolean
    role?: boolean
    address_id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "stripe_card_id" | "phone" | "role" | "address_id", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chofer?: boolean | users$choferArgs<ExtArgs>
    client?: boolean | users$clientArgs<ExtArgs>
    address?: boolean | users$addressArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      chofer: Prisma.$choferPayload<ExtArgs>[]
      client: Prisma.$clientPayload<ExtArgs>[]
      address: Prisma.$addressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      stripe_card_id: string
      phone: string
      role: string
      address_id: number | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chofer<T extends users$choferArgs<ExtArgs> = {}>(args?: Subset<T, users$choferArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$choferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends users$clientArgs<ExtArgs> = {}>(args?: Subset<T, users$clientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends users$addressArgs<ExtArgs> = {}>(args?: Subset<T, users$addressArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly stripe_card_id: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly address_id: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.chofer
   */
  export type users$choferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chofer
     */
    select?: choferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chofer
     */
    omit?: choferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choferInclude<ExtArgs> | null
    where?: choferWhereInput
    orderBy?: choferOrderByWithRelationInput | choferOrderByWithRelationInput[]
    cursor?: choferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * users.client
   */
  export type users$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    where?: clientWhereInput
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    cursor?: clientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * users.address
   */
  export type users$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    where?: addressWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressScalarFieldEnum: {
    id: 'id',
    calle: 'calle',
    numero: 'numero',
    postal_code: 'postal_code'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const ChoferScalarFieldEnum: {
    chofer_id: 'chofer_id',
    rating: 'rating',
    user_id: 'user_id'
  };

  export type ChoferScalarFieldEnum = (typeof ChoferScalarFieldEnum)[keyof typeof ChoferScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    client_id: 'client_id',
    user_id: 'user_id'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const Trip_requestsScalarFieldEnum: {
    id: 'id',
    chofer_id: 'chofer_id',
    client_id: 'client_id',
    status: 'status',
    estimated_price: 'estimated_price'
  };

  export type Trip_requestsScalarFieldEnum = (typeof Trip_requestsScalarFieldEnum)[keyof typeof Trip_requestsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    stripe_card_id: 'stripe_card_id',
    phone: 'phone',
    role: 'role',
    address_id: 'address_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const addressOrderByRelevanceFieldEnum: {
    calle: 'calle',
    postal_code: 'postal_code'
  };

  export type addressOrderByRelevanceFieldEnum = (typeof addressOrderByRelevanceFieldEnum)[keyof typeof addressOrderByRelevanceFieldEnum]


  export const trip_requestsOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type trip_requestsOrderByRelevanceFieldEnum = (typeof trip_requestsOrderByRelevanceFieldEnum)[keyof typeof trip_requestsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    stripe_card_id: 'stripe_card_id',
    phone: 'phone',
    role: 'role'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type addressWhereInput = {
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    id?: IntFilter<"address"> | number
    calle?: StringFilter<"address"> | string
    numero?: IntFilter<"address"> | number
    postal_code?: StringNullableFilter<"address"> | string | null
    users?: UsersListRelationFilter
  }

  export type addressOrderByWithRelationInput = {
    id?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    postal_code?: SortOrderInput | SortOrder
    users?: usersOrderByRelationAggregateInput
    _relevance?: addressOrderByRelevanceInput
  }

  export type addressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    calle?: StringFilter<"address"> | string
    numero?: IntFilter<"address"> | number
    postal_code?: StringNullableFilter<"address"> | string | null
    users?: UsersListRelationFilter
  }, "id">

  export type addressOrderByWithAggregationInput = {
    id?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    postal_code?: SortOrderInput | SortOrder
    _count?: addressCountOrderByAggregateInput
    _avg?: addressAvgOrderByAggregateInput
    _max?: addressMaxOrderByAggregateInput
    _min?: addressMinOrderByAggregateInput
    _sum?: addressSumOrderByAggregateInput
  }

  export type addressScalarWhereWithAggregatesInput = {
    AND?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    OR?: addressScalarWhereWithAggregatesInput[]
    NOT?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"address"> | number
    calle?: StringWithAggregatesFilter<"address"> | string
    numero?: IntWithAggregatesFilter<"address"> | number
    postal_code?: StringNullableWithAggregatesFilter<"address"> | string | null
  }

  export type choferWhereInput = {
    AND?: choferWhereInput | choferWhereInput[]
    OR?: choferWhereInput[]
    NOT?: choferWhereInput | choferWhereInput[]
    chofer_id?: IntFilter<"chofer"> | number
    rating?: FloatNullableFilter<"chofer"> | number | null
    user_id?: IntNullableFilter<"chofer"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    trip_requests?: Trip_requestsListRelationFilter
  }

  export type choferOrderByWithRelationInput = {
    chofer_id?: SortOrder
    rating?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    trip_requests?: trip_requestsOrderByRelationAggregateInput
  }

  export type choferWhereUniqueInput = Prisma.AtLeast<{
    chofer_id?: number
    AND?: choferWhereInput | choferWhereInput[]
    OR?: choferWhereInput[]
    NOT?: choferWhereInput | choferWhereInput[]
    rating?: FloatNullableFilter<"chofer"> | number | null
    user_id?: IntNullableFilter<"chofer"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    trip_requests?: Trip_requestsListRelationFilter
  }, "chofer_id">

  export type choferOrderByWithAggregationInput = {
    chofer_id?: SortOrder
    rating?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: choferCountOrderByAggregateInput
    _avg?: choferAvgOrderByAggregateInput
    _max?: choferMaxOrderByAggregateInput
    _min?: choferMinOrderByAggregateInput
    _sum?: choferSumOrderByAggregateInput
  }

  export type choferScalarWhereWithAggregatesInput = {
    AND?: choferScalarWhereWithAggregatesInput | choferScalarWhereWithAggregatesInput[]
    OR?: choferScalarWhereWithAggregatesInput[]
    NOT?: choferScalarWhereWithAggregatesInput | choferScalarWhereWithAggregatesInput[]
    chofer_id?: IntWithAggregatesFilter<"chofer"> | number
    rating?: FloatNullableWithAggregatesFilter<"chofer"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"chofer"> | number | null
  }

  export type clientWhereInput = {
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    client_id?: IntFilter<"client"> | number
    user_id?: IntFilter<"client"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    trip_requests?: Trip_requestsListRelationFilter
  }

  export type clientOrderByWithRelationInput = {
    client_id?: SortOrder
    user_id?: SortOrder
    users?: usersOrderByWithRelationInput
    trip_requests?: trip_requestsOrderByRelationAggregateInput
  }

  export type clientWhereUniqueInput = Prisma.AtLeast<{
    client_id?: number
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    user_id?: IntFilter<"client"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    trip_requests?: Trip_requestsListRelationFilter
  }, "client_id">

  export type clientOrderByWithAggregationInput = {
    client_id?: SortOrder
    user_id?: SortOrder
    _count?: clientCountOrderByAggregateInput
    _avg?: clientAvgOrderByAggregateInput
    _max?: clientMaxOrderByAggregateInput
    _min?: clientMinOrderByAggregateInput
    _sum?: clientSumOrderByAggregateInput
  }

  export type clientScalarWhereWithAggregatesInput = {
    AND?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    OR?: clientScalarWhereWithAggregatesInput[]
    NOT?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    client_id?: IntWithAggregatesFilter<"client"> | number
    user_id?: IntWithAggregatesFilter<"client"> | number
  }

  export type trip_requestsWhereInput = {
    AND?: trip_requestsWhereInput | trip_requestsWhereInput[]
    OR?: trip_requestsWhereInput[]
    NOT?: trip_requestsWhereInput | trip_requestsWhereInput[]
    id?: IntFilter<"trip_requests"> | number
    chofer_id?: IntFilter<"trip_requests"> | number
    client_id?: IntFilter<"trip_requests"> | number
    status?: StringFilter<"trip_requests"> | string
    estimated_price?: FloatFilter<"trip_requests"> | number
    chofer?: XOR<ChoferScalarRelationFilter, choferWhereInput>
    client?: XOR<ClientScalarRelationFilter, clientWhereInput>
  }

  export type trip_requestsOrderByWithRelationInput = {
    id?: SortOrder
    chofer_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    estimated_price?: SortOrder
    chofer?: choferOrderByWithRelationInput
    client?: clientOrderByWithRelationInput
    _relevance?: trip_requestsOrderByRelevanceInput
  }

  export type trip_requestsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: trip_requestsWhereInput | trip_requestsWhereInput[]
    OR?: trip_requestsWhereInput[]
    NOT?: trip_requestsWhereInput | trip_requestsWhereInput[]
    chofer_id?: IntFilter<"trip_requests"> | number
    client_id?: IntFilter<"trip_requests"> | number
    status?: StringFilter<"trip_requests"> | string
    estimated_price?: FloatFilter<"trip_requests"> | number
    chofer?: XOR<ChoferScalarRelationFilter, choferWhereInput>
    client?: XOR<ClientScalarRelationFilter, clientWhereInput>
  }, "id">

  export type trip_requestsOrderByWithAggregationInput = {
    id?: SortOrder
    chofer_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    estimated_price?: SortOrder
    _count?: trip_requestsCountOrderByAggregateInput
    _avg?: trip_requestsAvgOrderByAggregateInput
    _max?: trip_requestsMaxOrderByAggregateInput
    _min?: trip_requestsMinOrderByAggregateInput
    _sum?: trip_requestsSumOrderByAggregateInput
  }

  export type trip_requestsScalarWhereWithAggregatesInput = {
    AND?: trip_requestsScalarWhereWithAggregatesInput | trip_requestsScalarWhereWithAggregatesInput[]
    OR?: trip_requestsScalarWhereWithAggregatesInput[]
    NOT?: trip_requestsScalarWhereWithAggregatesInput | trip_requestsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"trip_requests"> | number
    chofer_id?: IntWithAggregatesFilter<"trip_requests"> | number
    client_id?: IntWithAggregatesFilter<"trip_requests"> | number
    status?: StringWithAggregatesFilter<"trip_requests"> | string
    estimated_price?: FloatWithAggregatesFilter<"trip_requests"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    stripe_card_id?: StringFilter<"users"> | string
    phone?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    address_id?: IntNullableFilter<"users"> | number | null
    chofer?: ChoferListRelationFilter
    client?: ClientListRelationFilter
    address?: XOR<AddressNullableScalarRelationFilter, addressWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    stripe_card_id?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    address_id?: SortOrderInput | SortOrder
    chofer?: choferOrderByRelationAggregateInput
    client?: clientOrderByRelationAggregateInput
    address?: addressOrderByWithRelationInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    stripe_card_id?: StringFilter<"users"> | string
    phone?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    address_id?: IntNullableFilter<"users"> | number | null
    chofer?: ChoferListRelationFilter
    client?: ClientListRelationFilter
    address?: XOR<AddressNullableScalarRelationFilter, addressWhereInput> | null
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    stripe_card_id?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    address_id?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    stripe_card_id?: StringWithAggregatesFilter<"users"> | string
    phone?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    address_id?: IntNullableWithAggregatesFilter<"users"> | number | null
  }

  export type addressCreateInput = {
    calle: string
    numero: number
    postal_code?: string | null
    users?: usersCreateNestedManyWithoutAddressInput
  }

  export type addressUncheckedCreateInput = {
    id?: number
    calle: string
    numero: number
    postal_code?: string | null
    users?: usersUncheckedCreateNestedManyWithoutAddressInput
  }

  export type addressUpdateInput = {
    calle?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateManyWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type addressCreateManyInput = {
    id?: number
    calle: string
    numero: number
    postal_code?: string | null
  }

  export type addressUpdateManyMutationInput = {
    calle?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type addressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type choferCreateInput = {
    rating?: number | null
    users?: usersCreateNestedOneWithoutChoferInput
    trip_requests?: trip_requestsCreateNestedManyWithoutChoferInput
  }

  export type choferUncheckedCreateInput = {
    chofer_id?: number
    rating?: number | null
    user_id?: number | null
    trip_requests?: trip_requestsUncheckedCreateNestedManyWithoutChoferInput
  }

  export type choferUpdateInput = {
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: usersUpdateOneWithoutChoferNestedInput
    trip_requests?: trip_requestsUpdateManyWithoutChoferNestedInput
  }

  export type choferUncheckedUpdateInput = {
    chofer_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    trip_requests?: trip_requestsUncheckedUpdateManyWithoutChoferNestedInput
  }

  export type choferCreateManyInput = {
    chofer_id?: number
    rating?: number | null
    user_id?: number | null
  }

  export type choferUpdateManyMutationInput = {
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type choferUncheckedUpdateManyInput = {
    chofer_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type clientCreateInput = {
    users: usersCreateNestedOneWithoutClientInput
    trip_requests?: trip_requestsCreateNestedManyWithoutClientInput
  }

  export type clientUncheckedCreateInput = {
    client_id?: number
    user_id: number
    trip_requests?: trip_requestsUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientUpdateInput = {
    users?: usersUpdateOneRequiredWithoutClientNestedInput
    trip_requests?: trip_requestsUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    trip_requests?: trip_requestsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type clientCreateManyInput = {
    client_id?: number
    user_id: number
  }

  export type clientUpdateManyMutationInput = {

  }

  export type clientUncheckedUpdateManyInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type trip_requestsCreateInput = {
    status: string
    estimated_price: number
    chofer: choferCreateNestedOneWithoutTrip_requestsInput
    client: clientCreateNestedOneWithoutTrip_requestsInput
  }

  export type trip_requestsUncheckedCreateInput = {
    id?: number
    chofer_id: number
    client_id: number
    status: string
    estimated_price: number
  }

  export type trip_requestsUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    estimated_price?: FloatFieldUpdateOperationsInput | number
    chofer?: choferUpdateOneRequiredWithoutTrip_requestsNestedInput
    client?: clientUpdateOneRequiredWithoutTrip_requestsNestedInput
  }

  export type trip_requestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chofer_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    estimated_price?: FloatFieldUpdateOperationsInput | number
  }

  export type trip_requestsCreateManyInput = {
    id?: number
    chofer_id: number
    client_id: number
    status: string
    estimated_price: number
  }

  export type trip_requestsUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    estimated_price?: FloatFieldUpdateOperationsInput | number
  }

  export type trip_requestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chofer_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    estimated_price?: FloatFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    email: string
    password: string
    stripe_card_id: string
    phone: string
    role: string
    chofer?: choferCreateNestedManyWithoutUsersInput
    client?: clientCreateNestedManyWithoutUsersInput
    address?: addressCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    stripe_card_id: string
    phone: string
    role: string
    address_id?: number | null
    chofer?: choferUncheckedCreateNestedManyWithoutUsersInput
    client?: clientUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripe_card_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    chofer?: choferUpdateManyWithoutUsersNestedInput
    client?: clientUpdateManyWithoutUsersNestedInput
    address?: addressUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripe_card_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    chofer?: choferUncheckedUpdateManyWithoutUsersNestedInput
    client?: clientUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    stripe_card_id: string
    phone: string
    role: string
    address_id?: number | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripe_card_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripe_card_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addressOrderByRelevanceInput = {
    fields: addressOrderByRelevanceFieldEnum | addressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type addressCountOrderByAggregateInput = {
    id?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    postal_code?: SortOrder
  }

  export type addressAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
  }

  export type addressMaxOrderByAggregateInput = {
    id?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    postal_code?: SortOrder
  }

  export type addressMinOrderByAggregateInput = {
    id?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    postal_code?: SortOrder
  }

  export type addressSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type Trip_requestsListRelationFilter = {
    every?: trip_requestsWhereInput
    some?: trip_requestsWhereInput
    none?: trip_requestsWhereInput
  }

  export type trip_requestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type choferCountOrderByAggregateInput = {
    chofer_id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
  }

  export type choferAvgOrderByAggregateInput = {
    chofer_id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
  }

  export type choferMaxOrderByAggregateInput = {
    chofer_id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
  }

  export type choferMinOrderByAggregateInput = {
    chofer_id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
  }

  export type choferSumOrderByAggregateInput = {
    chofer_id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type clientCountOrderByAggregateInput = {
    client_id?: SortOrder
    user_id?: SortOrder
  }

  export type clientAvgOrderByAggregateInput = {
    client_id?: SortOrder
    user_id?: SortOrder
  }

  export type clientMaxOrderByAggregateInput = {
    client_id?: SortOrder
    user_id?: SortOrder
  }

  export type clientMinOrderByAggregateInput = {
    client_id?: SortOrder
    user_id?: SortOrder
  }

  export type clientSumOrderByAggregateInput = {
    client_id?: SortOrder
    user_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ChoferScalarRelationFilter = {
    is?: choferWhereInput
    isNot?: choferWhereInput
  }

  export type ClientScalarRelationFilter = {
    is?: clientWhereInput
    isNot?: clientWhereInput
  }

  export type trip_requestsOrderByRelevanceInput = {
    fields: trip_requestsOrderByRelevanceFieldEnum | trip_requestsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type trip_requestsCountOrderByAggregateInput = {
    id?: SortOrder
    chofer_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    estimated_price?: SortOrder
  }

  export type trip_requestsAvgOrderByAggregateInput = {
    id?: SortOrder
    chofer_id?: SortOrder
    client_id?: SortOrder
    estimated_price?: SortOrder
  }

  export type trip_requestsMaxOrderByAggregateInput = {
    id?: SortOrder
    chofer_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    estimated_price?: SortOrder
  }

  export type trip_requestsMinOrderByAggregateInput = {
    id?: SortOrder
    chofer_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    estimated_price?: SortOrder
  }

  export type trip_requestsSumOrderByAggregateInput = {
    id?: SortOrder
    chofer_id?: SortOrder
    client_id?: SortOrder
    estimated_price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ChoferListRelationFilter = {
    every?: choferWhereInput
    some?: choferWhereInput
    none?: choferWhereInput
  }

  export type ClientListRelationFilter = {
    every?: clientWhereInput
    some?: clientWhereInput
    none?: clientWhereInput
  }

  export type AddressNullableScalarRelationFilter = {
    is?: addressWhereInput | null
    isNot?: addressWhereInput | null
  }

  export type choferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    stripe_card_id?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    address_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    stripe_card_id?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    address_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    stripe_card_id?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    address_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
  }

  export type usersCreateNestedManyWithoutAddressInput = {
    create?: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput> | usersCreateWithoutAddressInput[] | usersUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: usersCreateOrConnectWithoutAddressInput | usersCreateOrConnectWithoutAddressInput[]
    createMany?: usersCreateManyAddressInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput> | usersCreateWithoutAddressInput[] | usersUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: usersCreateOrConnectWithoutAddressInput | usersCreateOrConnectWithoutAddressInput[]
    createMany?: usersCreateManyAddressInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
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
  }

  export type usersUpdateManyWithoutAddressNestedInput = {
    create?: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput> | usersCreateWithoutAddressInput[] | usersUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: usersCreateOrConnectWithoutAddressInput | usersCreateOrConnectWithoutAddressInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutAddressInput | usersUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: usersCreateManyAddressInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutAddressInput | usersUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: usersUpdateManyWithWhereWithoutAddressInput | usersUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput> | usersCreateWithoutAddressInput[] | usersUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: usersCreateOrConnectWithoutAddressInput | usersCreateOrConnectWithoutAddressInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutAddressInput | usersUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: usersCreateManyAddressInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutAddressInput | usersUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: usersUpdateManyWithWhereWithoutAddressInput | usersUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutChoferInput = {
    create?: XOR<usersCreateWithoutChoferInput, usersUncheckedCreateWithoutChoferInput>
    connectOrCreate?: usersCreateOrConnectWithoutChoferInput
    connect?: usersWhereUniqueInput
  }

  export type trip_requestsCreateNestedManyWithoutChoferInput = {
    create?: XOR<trip_requestsCreateWithoutChoferInput, trip_requestsUncheckedCreateWithoutChoferInput> | trip_requestsCreateWithoutChoferInput[] | trip_requestsUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: trip_requestsCreateOrConnectWithoutChoferInput | trip_requestsCreateOrConnectWithoutChoferInput[]
    createMany?: trip_requestsCreateManyChoferInputEnvelope
    connect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
  }

  export type trip_requestsUncheckedCreateNestedManyWithoutChoferInput = {
    create?: XOR<trip_requestsCreateWithoutChoferInput, trip_requestsUncheckedCreateWithoutChoferInput> | trip_requestsCreateWithoutChoferInput[] | trip_requestsUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: trip_requestsCreateOrConnectWithoutChoferInput | trip_requestsCreateOrConnectWithoutChoferInput[]
    createMany?: trip_requestsCreateManyChoferInputEnvelope
    connect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneWithoutChoferNestedInput = {
    create?: XOR<usersCreateWithoutChoferInput, usersUncheckedCreateWithoutChoferInput>
    connectOrCreate?: usersCreateOrConnectWithoutChoferInput
    upsert?: usersUpsertWithoutChoferInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChoferInput, usersUpdateWithoutChoferInput>, usersUncheckedUpdateWithoutChoferInput>
  }

  export type trip_requestsUpdateManyWithoutChoferNestedInput = {
    create?: XOR<trip_requestsCreateWithoutChoferInput, trip_requestsUncheckedCreateWithoutChoferInput> | trip_requestsCreateWithoutChoferInput[] | trip_requestsUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: trip_requestsCreateOrConnectWithoutChoferInput | trip_requestsCreateOrConnectWithoutChoferInput[]
    upsert?: trip_requestsUpsertWithWhereUniqueWithoutChoferInput | trip_requestsUpsertWithWhereUniqueWithoutChoferInput[]
    createMany?: trip_requestsCreateManyChoferInputEnvelope
    set?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    disconnect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    delete?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    connect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    update?: trip_requestsUpdateWithWhereUniqueWithoutChoferInput | trip_requestsUpdateWithWhereUniqueWithoutChoferInput[]
    updateMany?: trip_requestsUpdateManyWithWhereWithoutChoferInput | trip_requestsUpdateManyWithWhereWithoutChoferInput[]
    deleteMany?: trip_requestsScalarWhereInput | trip_requestsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type trip_requestsUncheckedUpdateManyWithoutChoferNestedInput = {
    create?: XOR<trip_requestsCreateWithoutChoferInput, trip_requestsUncheckedCreateWithoutChoferInput> | trip_requestsCreateWithoutChoferInput[] | trip_requestsUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: trip_requestsCreateOrConnectWithoutChoferInput | trip_requestsCreateOrConnectWithoutChoferInput[]
    upsert?: trip_requestsUpsertWithWhereUniqueWithoutChoferInput | trip_requestsUpsertWithWhereUniqueWithoutChoferInput[]
    createMany?: trip_requestsCreateManyChoferInputEnvelope
    set?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    disconnect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    delete?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    connect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    update?: trip_requestsUpdateWithWhereUniqueWithoutChoferInput | trip_requestsUpdateWithWhereUniqueWithoutChoferInput[]
    updateMany?: trip_requestsUpdateManyWithWhereWithoutChoferInput | trip_requestsUpdateManyWithWhereWithoutChoferInput[]
    deleteMany?: trip_requestsScalarWhereInput | trip_requestsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutClientInput = {
    create?: XOR<usersCreateWithoutClientInput, usersUncheckedCreateWithoutClientInput>
    connectOrCreate?: usersCreateOrConnectWithoutClientInput
    connect?: usersWhereUniqueInput
  }

  export type trip_requestsCreateNestedManyWithoutClientInput = {
    create?: XOR<trip_requestsCreateWithoutClientInput, trip_requestsUncheckedCreateWithoutClientInput> | trip_requestsCreateWithoutClientInput[] | trip_requestsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: trip_requestsCreateOrConnectWithoutClientInput | trip_requestsCreateOrConnectWithoutClientInput[]
    createMany?: trip_requestsCreateManyClientInputEnvelope
    connect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
  }

  export type trip_requestsUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<trip_requestsCreateWithoutClientInput, trip_requestsUncheckedCreateWithoutClientInput> | trip_requestsCreateWithoutClientInput[] | trip_requestsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: trip_requestsCreateOrConnectWithoutClientInput | trip_requestsCreateOrConnectWithoutClientInput[]
    createMany?: trip_requestsCreateManyClientInputEnvelope
    connect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<usersCreateWithoutClientInput, usersUncheckedCreateWithoutClientInput>
    connectOrCreate?: usersCreateOrConnectWithoutClientInput
    upsert?: usersUpsertWithoutClientInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutClientInput, usersUpdateWithoutClientInput>, usersUncheckedUpdateWithoutClientInput>
  }

  export type trip_requestsUpdateManyWithoutClientNestedInput = {
    create?: XOR<trip_requestsCreateWithoutClientInput, trip_requestsUncheckedCreateWithoutClientInput> | trip_requestsCreateWithoutClientInput[] | trip_requestsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: trip_requestsCreateOrConnectWithoutClientInput | trip_requestsCreateOrConnectWithoutClientInput[]
    upsert?: trip_requestsUpsertWithWhereUniqueWithoutClientInput | trip_requestsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: trip_requestsCreateManyClientInputEnvelope
    set?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    disconnect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    delete?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    connect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    update?: trip_requestsUpdateWithWhereUniqueWithoutClientInput | trip_requestsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: trip_requestsUpdateManyWithWhereWithoutClientInput | trip_requestsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: trip_requestsScalarWhereInput | trip_requestsScalarWhereInput[]
  }

  export type trip_requestsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<trip_requestsCreateWithoutClientInput, trip_requestsUncheckedCreateWithoutClientInput> | trip_requestsCreateWithoutClientInput[] | trip_requestsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: trip_requestsCreateOrConnectWithoutClientInput | trip_requestsCreateOrConnectWithoutClientInput[]
    upsert?: trip_requestsUpsertWithWhereUniqueWithoutClientInput | trip_requestsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: trip_requestsCreateManyClientInputEnvelope
    set?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    disconnect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    delete?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    connect?: trip_requestsWhereUniqueInput | trip_requestsWhereUniqueInput[]
    update?: trip_requestsUpdateWithWhereUniqueWithoutClientInput | trip_requestsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: trip_requestsUpdateManyWithWhereWithoutClientInput | trip_requestsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: trip_requestsScalarWhereInput | trip_requestsScalarWhereInput[]
  }

  export type choferCreateNestedOneWithoutTrip_requestsInput = {
    create?: XOR<choferCreateWithoutTrip_requestsInput, choferUncheckedCreateWithoutTrip_requestsInput>
    connectOrCreate?: choferCreateOrConnectWithoutTrip_requestsInput
    connect?: choferWhereUniqueInput
  }

  export type clientCreateNestedOneWithoutTrip_requestsInput = {
    create?: XOR<clientCreateWithoutTrip_requestsInput, clientUncheckedCreateWithoutTrip_requestsInput>
    connectOrCreate?: clientCreateOrConnectWithoutTrip_requestsInput
    connect?: clientWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type choferUpdateOneRequiredWithoutTrip_requestsNestedInput = {
    create?: XOR<choferCreateWithoutTrip_requestsInput, choferUncheckedCreateWithoutTrip_requestsInput>
    connectOrCreate?: choferCreateOrConnectWithoutTrip_requestsInput
    upsert?: choferUpsertWithoutTrip_requestsInput
    connect?: choferWhereUniqueInput
    update?: XOR<XOR<choferUpdateToOneWithWhereWithoutTrip_requestsInput, choferUpdateWithoutTrip_requestsInput>, choferUncheckedUpdateWithoutTrip_requestsInput>
  }

  export type clientUpdateOneRequiredWithoutTrip_requestsNestedInput = {
    create?: XOR<clientCreateWithoutTrip_requestsInput, clientUncheckedCreateWithoutTrip_requestsInput>
    connectOrCreate?: clientCreateOrConnectWithoutTrip_requestsInput
    upsert?: clientUpsertWithoutTrip_requestsInput
    connect?: clientWhereUniqueInput
    update?: XOR<XOR<clientUpdateToOneWithWhereWithoutTrip_requestsInput, clientUpdateWithoutTrip_requestsInput>, clientUncheckedUpdateWithoutTrip_requestsInput>
  }

  export type choferCreateNestedManyWithoutUsersInput = {
    create?: XOR<choferCreateWithoutUsersInput, choferUncheckedCreateWithoutUsersInput> | choferCreateWithoutUsersInput[] | choferUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: choferCreateOrConnectWithoutUsersInput | choferCreateOrConnectWithoutUsersInput[]
    createMany?: choferCreateManyUsersInputEnvelope
    connect?: choferWhereUniqueInput | choferWhereUniqueInput[]
  }

  export type clientCreateNestedManyWithoutUsersInput = {
    create?: XOR<clientCreateWithoutUsersInput, clientUncheckedCreateWithoutUsersInput> | clientCreateWithoutUsersInput[] | clientUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: clientCreateOrConnectWithoutUsersInput | clientCreateOrConnectWithoutUsersInput[]
    createMany?: clientCreateManyUsersInputEnvelope
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
  }

  export type addressCreateNestedOneWithoutUsersInput = {
    create?: XOR<addressCreateWithoutUsersInput, addressUncheckedCreateWithoutUsersInput>
    connectOrCreate?: addressCreateOrConnectWithoutUsersInput
    connect?: addressWhereUniqueInput
  }

  export type choferUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<choferCreateWithoutUsersInput, choferUncheckedCreateWithoutUsersInput> | choferCreateWithoutUsersInput[] | choferUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: choferCreateOrConnectWithoutUsersInput | choferCreateOrConnectWithoutUsersInput[]
    createMany?: choferCreateManyUsersInputEnvelope
    connect?: choferWhereUniqueInput | choferWhereUniqueInput[]
  }

  export type clientUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<clientCreateWithoutUsersInput, clientUncheckedCreateWithoutUsersInput> | clientCreateWithoutUsersInput[] | clientUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: clientCreateOrConnectWithoutUsersInput | clientCreateOrConnectWithoutUsersInput[]
    createMany?: clientCreateManyUsersInputEnvelope
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
  }

  export type choferUpdateManyWithoutUsersNestedInput = {
    create?: XOR<choferCreateWithoutUsersInput, choferUncheckedCreateWithoutUsersInput> | choferCreateWithoutUsersInput[] | choferUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: choferCreateOrConnectWithoutUsersInput | choferCreateOrConnectWithoutUsersInput[]
    upsert?: choferUpsertWithWhereUniqueWithoutUsersInput | choferUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: choferCreateManyUsersInputEnvelope
    set?: choferWhereUniqueInput | choferWhereUniqueInput[]
    disconnect?: choferWhereUniqueInput | choferWhereUniqueInput[]
    delete?: choferWhereUniqueInput | choferWhereUniqueInput[]
    connect?: choferWhereUniqueInput | choferWhereUniqueInput[]
    update?: choferUpdateWithWhereUniqueWithoutUsersInput | choferUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: choferUpdateManyWithWhereWithoutUsersInput | choferUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: choferScalarWhereInput | choferScalarWhereInput[]
  }

  export type clientUpdateManyWithoutUsersNestedInput = {
    create?: XOR<clientCreateWithoutUsersInput, clientUncheckedCreateWithoutUsersInput> | clientCreateWithoutUsersInput[] | clientUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: clientCreateOrConnectWithoutUsersInput | clientCreateOrConnectWithoutUsersInput[]
    upsert?: clientUpsertWithWhereUniqueWithoutUsersInput | clientUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: clientCreateManyUsersInputEnvelope
    set?: clientWhereUniqueInput | clientWhereUniqueInput[]
    disconnect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    delete?: clientWhereUniqueInput | clientWhereUniqueInput[]
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    update?: clientUpdateWithWhereUniqueWithoutUsersInput | clientUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: clientUpdateManyWithWhereWithoutUsersInput | clientUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: clientScalarWhereInput | clientScalarWhereInput[]
  }

  export type addressUpdateOneWithoutUsersNestedInput = {
    create?: XOR<addressCreateWithoutUsersInput, addressUncheckedCreateWithoutUsersInput>
    connectOrCreate?: addressCreateOrConnectWithoutUsersInput
    upsert?: addressUpsertWithoutUsersInput
    disconnect?: addressWhereInput | boolean
    delete?: addressWhereInput | boolean
    connect?: addressWhereUniqueInput
    update?: XOR<XOR<addressUpdateToOneWithWhereWithoutUsersInput, addressUpdateWithoutUsersInput>, addressUncheckedUpdateWithoutUsersInput>
  }

  export type choferUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<choferCreateWithoutUsersInput, choferUncheckedCreateWithoutUsersInput> | choferCreateWithoutUsersInput[] | choferUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: choferCreateOrConnectWithoutUsersInput | choferCreateOrConnectWithoutUsersInput[]
    upsert?: choferUpsertWithWhereUniqueWithoutUsersInput | choferUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: choferCreateManyUsersInputEnvelope
    set?: choferWhereUniqueInput | choferWhereUniqueInput[]
    disconnect?: choferWhereUniqueInput | choferWhereUniqueInput[]
    delete?: choferWhereUniqueInput | choferWhereUniqueInput[]
    connect?: choferWhereUniqueInput | choferWhereUniqueInput[]
    update?: choferUpdateWithWhereUniqueWithoutUsersInput | choferUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: choferUpdateManyWithWhereWithoutUsersInput | choferUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: choferScalarWhereInput | choferScalarWhereInput[]
  }

  export type clientUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<clientCreateWithoutUsersInput, clientUncheckedCreateWithoutUsersInput> | clientCreateWithoutUsersInput[] | clientUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: clientCreateOrConnectWithoutUsersInput | clientCreateOrConnectWithoutUsersInput[]
    upsert?: clientUpsertWithWhereUniqueWithoutUsersInput | clientUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: clientCreateManyUsersInputEnvelope
    set?: clientWhereUniqueInput | clientWhereUniqueInput[]
    disconnect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    delete?: clientWhereUniqueInput | clientWhereUniqueInput[]
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    update?: clientUpdateWithWhereUniqueWithoutUsersInput | clientUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: clientUpdateManyWithWhereWithoutUsersInput | clientUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: clientScalarWhereInput | clientScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type usersCreateWithoutAddressInput = {
    email: string
    password: string
    stripe_card_id: string
    phone: string
    role: string
    chofer?: choferCreateNestedManyWithoutUsersInput
    client?: clientCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAddressInput = {
    id?: number
    email: string
    password: string
    stripe_card_id: string
    phone: string
    role: string
    chofer?: choferUncheckedCreateNestedManyWithoutUsersInput
    client?: clientUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAddressInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput>
  }

  export type usersCreateManyAddressInputEnvelope = {
    data: usersCreateManyAddressInput | usersCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutAddressInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutAddressInput, usersUncheckedUpdateWithoutAddressInput>
    create: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput>
  }

  export type usersUpdateWithWhereUniqueWithoutAddressInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutAddressInput, usersUncheckedUpdateWithoutAddressInput>
  }

  export type usersUpdateManyWithWhereWithoutAddressInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutAddressInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    stripe_card_id?: StringFilter<"users"> | string
    phone?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    address_id?: IntNullableFilter<"users"> | number | null
  }

  export type usersCreateWithoutChoferInput = {
    email: string
    password: string
    stripe_card_id: string
    phone: string
    role: string
    client?: clientCreateNestedManyWithoutUsersInput
    address?: addressCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutChoferInput = {
    id?: number
    email: string
    password: string
    stripe_card_id: string
    phone: string
    role: string
    address_id?: number | null
    client?: clientUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutChoferInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChoferInput, usersUncheckedCreateWithoutChoferInput>
  }

  export type trip_requestsCreateWithoutChoferInput = {
    status: string
    estimated_price: number
    client: clientCreateNestedOneWithoutTrip_requestsInput
  }

  export type trip_requestsUncheckedCreateWithoutChoferInput = {
    id?: number
    client_id: number
    status: string
    estimated_price: number
  }

  export type trip_requestsCreateOrConnectWithoutChoferInput = {
    where: trip_requestsWhereUniqueInput
    create: XOR<trip_requestsCreateWithoutChoferInput, trip_requestsUncheckedCreateWithoutChoferInput>
  }

  export type trip_requestsCreateManyChoferInputEnvelope = {
    data: trip_requestsCreateManyChoferInput | trip_requestsCreateManyChoferInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutChoferInput = {
    update: XOR<usersUpdateWithoutChoferInput, usersUncheckedUpdateWithoutChoferInput>
    create: XOR<usersCreateWithoutChoferInput, usersUncheckedCreateWithoutChoferInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChoferInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChoferInput, usersUncheckedUpdateWithoutChoferInput>
  }

  export type usersUpdateWithoutChoferInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripe_card_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    client?: clientUpdateManyWithoutUsersNestedInput
    address?: addressUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutChoferInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripe_card_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    client?: clientUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type trip_requestsUpsertWithWhereUniqueWithoutChoferInput = {
    where: trip_requestsWhereUniqueInput
    update: XOR<trip_requestsUpdateWithoutChoferInput, trip_requestsUncheckedUpdateWithoutChoferInput>
    create: XOR<trip_requestsCreateWithoutChoferInput, trip_requestsUncheckedCreateWithoutChoferInput>
  }

  export type trip_requestsUpdateWithWhereUniqueWithoutChoferInput = {
    where: trip_requestsWhereUniqueInput
    data: XOR<trip_requestsUpdateWithoutChoferInput, trip_requestsUncheckedUpdateWithoutChoferInput>
  }

  export type trip_requestsUpdateManyWithWhereWithoutChoferInput = {
    where: trip_requestsScalarWhereInput
    data: XOR<trip_requestsUpdateManyMutationInput, trip_requestsUncheckedUpdateManyWithoutChoferInput>
  }

  export type trip_requestsScalarWhereInput = {
    AND?: trip_requestsScalarWhereInput | trip_requestsScalarWhereInput[]
    OR?: trip_requestsScalarWhereInput[]
    NOT?: trip_requestsScalarWhereInput | trip_requestsScalarWhereInput[]
    id?: IntFilter<"trip_requests"> | number
    chofer_id?: IntFilter<"trip_requests"> | number
    client_id?: IntFilter<"trip_requests"> | number
    status?: StringFilter<"trip_requests"> | string
    estimated_price?: FloatFilter<"trip_requests"> | number
  }

  export type usersCreateWithoutClientInput = {
    email: string
    password: string
    stripe_card_id: string
    phone: string
    role: string
    chofer?: choferCreateNestedManyWithoutUsersInput
    address?: addressCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutClientInput = {
    id?: number
    email: string
    password: string
    stripe_card_id: string
    phone: string
    role: string
    address_id?: number | null
    chofer?: choferUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutClientInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutClientInput, usersUncheckedCreateWithoutClientInput>
  }

  export type trip_requestsCreateWithoutClientInput = {
    status: string
    estimated_price: number
    chofer: choferCreateNestedOneWithoutTrip_requestsInput
  }

  export type trip_requestsUncheckedCreateWithoutClientInput = {
    id?: number
    chofer_id: number
    status: string
    estimated_price: number
  }

  export type trip_requestsCreateOrConnectWithoutClientInput = {
    where: trip_requestsWhereUniqueInput
    create: XOR<trip_requestsCreateWithoutClientInput, trip_requestsUncheckedCreateWithoutClientInput>
  }

  export type trip_requestsCreateManyClientInputEnvelope = {
    data: trip_requestsCreateManyClientInput | trip_requestsCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutClientInput = {
    update: XOR<usersUpdateWithoutClientInput, usersUncheckedUpdateWithoutClientInput>
    create: XOR<usersCreateWithoutClientInput, usersUncheckedCreateWithoutClientInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutClientInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutClientInput, usersUncheckedUpdateWithoutClientInput>
  }

  export type usersUpdateWithoutClientInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripe_card_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    chofer?: choferUpdateManyWithoutUsersNestedInput
    address?: addressUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripe_card_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    chofer?: choferUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type trip_requestsUpsertWithWhereUniqueWithoutClientInput = {
    where: trip_requestsWhereUniqueInput
    update: XOR<trip_requestsUpdateWithoutClientInput, trip_requestsUncheckedUpdateWithoutClientInput>
    create: XOR<trip_requestsCreateWithoutClientInput, trip_requestsUncheckedCreateWithoutClientInput>
  }

  export type trip_requestsUpdateWithWhereUniqueWithoutClientInput = {
    where: trip_requestsWhereUniqueInput
    data: XOR<trip_requestsUpdateWithoutClientInput, trip_requestsUncheckedUpdateWithoutClientInput>
  }

  export type trip_requestsUpdateManyWithWhereWithoutClientInput = {
    where: trip_requestsScalarWhereInput
    data: XOR<trip_requestsUpdateManyMutationInput, trip_requestsUncheckedUpdateManyWithoutClientInput>
  }

  export type choferCreateWithoutTrip_requestsInput = {
    rating?: number | null
    users?: usersCreateNestedOneWithoutChoferInput
  }

  export type choferUncheckedCreateWithoutTrip_requestsInput = {
    chofer_id?: number
    rating?: number | null
    user_id?: number | null
  }

  export type choferCreateOrConnectWithoutTrip_requestsInput = {
    where: choferWhereUniqueInput
    create: XOR<choferCreateWithoutTrip_requestsInput, choferUncheckedCreateWithoutTrip_requestsInput>
  }

  export type clientCreateWithoutTrip_requestsInput = {
    users: usersCreateNestedOneWithoutClientInput
  }

  export type clientUncheckedCreateWithoutTrip_requestsInput = {
    client_id?: number
    user_id: number
  }

  export type clientCreateOrConnectWithoutTrip_requestsInput = {
    where: clientWhereUniqueInput
    create: XOR<clientCreateWithoutTrip_requestsInput, clientUncheckedCreateWithoutTrip_requestsInput>
  }

  export type choferUpsertWithoutTrip_requestsInput = {
    update: XOR<choferUpdateWithoutTrip_requestsInput, choferUncheckedUpdateWithoutTrip_requestsInput>
    create: XOR<choferCreateWithoutTrip_requestsInput, choferUncheckedCreateWithoutTrip_requestsInput>
    where?: choferWhereInput
  }

  export type choferUpdateToOneWithWhereWithoutTrip_requestsInput = {
    where?: choferWhereInput
    data: XOR<choferUpdateWithoutTrip_requestsInput, choferUncheckedUpdateWithoutTrip_requestsInput>
  }

  export type choferUpdateWithoutTrip_requestsInput = {
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    users?: usersUpdateOneWithoutChoferNestedInput
  }

  export type choferUncheckedUpdateWithoutTrip_requestsInput = {
    chofer_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type clientUpsertWithoutTrip_requestsInput = {
    update: XOR<clientUpdateWithoutTrip_requestsInput, clientUncheckedUpdateWithoutTrip_requestsInput>
    create: XOR<clientCreateWithoutTrip_requestsInput, clientUncheckedCreateWithoutTrip_requestsInput>
    where?: clientWhereInput
  }

  export type clientUpdateToOneWithWhereWithoutTrip_requestsInput = {
    where?: clientWhereInput
    data: XOR<clientUpdateWithoutTrip_requestsInput, clientUncheckedUpdateWithoutTrip_requestsInput>
  }

  export type clientUpdateWithoutTrip_requestsInput = {
    users?: usersUpdateOneRequiredWithoutClientNestedInput
  }

  export type clientUncheckedUpdateWithoutTrip_requestsInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type choferCreateWithoutUsersInput = {
    rating?: number | null
    trip_requests?: trip_requestsCreateNestedManyWithoutChoferInput
  }

  export type choferUncheckedCreateWithoutUsersInput = {
    chofer_id?: number
    rating?: number | null
    trip_requests?: trip_requestsUncheckedCreateNestedManyWithoutChoferInput
  }

  export type choferCreateOrConnectWithoutUsersInput = {
    where: choferWhereUniqueInput
    create: XOR<choferCreateWithoutUsersInput, choferUncheckedCreateWithoutUsersInput>
  }

  export type choferCreateManyUsersInputEnvelope = {
    data: choferCreateManyUsersInput | choferCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type clientCreateWithoutUsersInput = {
    trip_requests?: trip_requestsCreateNestedManyWithoutClientInput
  }

  export type clientUncheckedCreateWithoutUsersInput = {
    client_id?: number
    trip_requests?: trip_requestsUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientCreateOrConnectWithoutUsersInput = {
    where: clientWhereUniqueInput
    create: XOR<clientCreateWithoutUsersInput, clientUncheckedCreateWithoutUsersInput>
  }

  export type clientCreateManyUsersInputEnvelope = {
    data: clientCreateManyUsersInput | clientCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type addressCreateWithoutUsersInput = {
    calle: string
    numero: number
    postal_code?: string | null
  }

  export type addressUncheckedCreateWithoutUsersInput = {
    id?: number
    calle: string
    numero: number
    postal_code?: string | null
  }

  export type addressCreateOrConnectWithoutUsersInput = {
    where: addressWhereUniqueInput
    create: XOR<addressCreateWithoutUsersInput, addressUncheckedCreateWithoutUsersInput>
  }

  export type choferUpsertWithWhereUniqueWithoutUsersInput = {
    where: choferWhereUniqueInput
    update: XOR<choferUpdateWithoutUsersInput, choferUncheckedUpdateWithoutUsersInput>
    create: XOR<choferCreateWithoutUsersInput, choferUncheckedCreateWithoutUsersInput>
  }

  export type choferUpdateWithWhereUniqueWithoutUsersInput = {
    where: choferWhereUniqueInput
    data: XOR<choferUpdateWithoutUsersInput, choferUncheckedUpdateWithoutUsersInput>
  }

  export type choferUpdateManyWithWhereWithoutUsersInput = {
    where: choferScalarWhereInput
    data: XOR<choferUpdateManyMutationInput, choferUncheckedUpdateManyWithoutUsersInput>
  }

  export type choferScalarWhereInput = {
    AND?: choferScalarWhereInput | choferScalarWhereInput[]
    OR?: choferScalarWhereInput[]
    NOT?: choferScalarWhereInput | choferScalarWhereInput[]
    chofer_id?: IntFilter<"chofer"> | number
    rating?: FloatNullableFilter<"chofer"> | number | null
    user_id?: IntNullableFilter<"chofer"> | number | null
  }

  export type clientUpsertWithWhereUniqueWithoutUsersInput = {
    where: clientWhereUniqueInput
    update: XOR<clientUpdateWithoutUsersInput, clientUncheckedUpdateWithoutUsersInput>
    create: XOR<clientCreateWithoutUsersInput, clientUncheckedCreateWithoutUsersInput>
  }

  export type clientUpdateWithWhereUniqueWithoutUsersInput = {
    where: clientWhereUniqueInput
    data: XOR<clientUpdateWithoutUsersInput, clientUncheckedUpdateWithoutUsersInput>
  }

  export type clientUpdateManyWithWhereWithoutUsersInput = {
    where: clientScalarWhereInput
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyWithoutUsersInput>
  }

  export type clientScalarWhereInput = {
    AND?: clientScalarWhereInput | clientScalarWhereInput[]
    OR?: clientScalarWhereInput[]
    NOT?: clientScalarWhereInput | clientScalarWhereInput[]
    client_id?: IntFilter<"client"> | number
    user_id?: IntFilter<"client"> | number
  }

  export type addressUpsertWithoutUsersInput = {
    update: XOR<addressUpdateWithoutUsersInput, addressUncheckedUpdateWithoutUsersInput>
    create: XOR<addressCreateWithoutUsersInput, addressUncheckedCreateWithoutUsersInput>
    where?: addressWhereInput
  }

  export type addressUpdateToOneWithWhereWithoutUsersInput = {
    where?: addressWhereInput
    data: XOR<addressUpdateWithoutUsersInput, addressUncheckedUpdateWithoutUsersInput>
  }

  export type addressUpdateWithoutUsersInput = {
    calle?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type addressUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateManyAddressInput = {
    id?: number
    email: string
    password: string
    stripe_card_id: string
    phone: string
    role: string
  }

  export type usersUpdateWithoutAddressInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripe_card_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    chofer?: choferUpdateManyWithoutUsersNestedInput
    client?: clientUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripe_card_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    chofer?: choferUncheckedUpdateManyWithoutUsersNestedInput
    client?: clientUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripe_card_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type trip_requestsCreateManyChoferInput = {
    id?: number
    client_id: number
    status: string
    estimated_price: number
  }

  export type trip_requestsUpdateWithoutChoferInput = {
    status?: StringFieldUpdateOperationsInput | string
    estimated_price?: FloatFieldUpdateOperationsInput | number
    client?: clientUpdateOneRequiredWithoutTrip_requestsNestedInput
  }

  export type trip_requestsUncheckedUpdateWithoutChoferInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    estimated_price?: FloatFieldUpdateOperationsInput | number
  }

  export type trip_requestsUncheckedUpdateManyWithoutChoferInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    estimated_price?: FloatFieldUpdateOperationsInput | number
  }

  export type trip_requestsCreateManyClientInput = {
    id?: number
    chofer_id: number
    status: string
    estimated_price: number
  }

  export type trip_requestsUpdateWithoutClientInput = {
    status?: StringFieldUpdateOperationsInput | string
    estimated_price?: FloatFieldUpdateOperationsInput | number
    chofer?: choferUpdateOneRequiredWithoutTrip_requestsNestedInput
  }

  export type trip_requestsUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    chofer_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    estimated_price?: FloatFieldUpdateOperationsInput | number
  }

  export type trip_requestsUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    chofer_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    estimated_price?: FloatFieldUpdateOperationsInput | number
  }

  export type choferCreateManyUsersInput = {
    chofer_id?: number
    rating?: number | null
  }

  export type clientCreateManyUsersInput = {
    client_id?: number
  }

  export type choferUpdateWithoutUsersInput = {
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    trip_requests?: trip_requestsUpdateManyWithoutChoferNestedInput
  }

  export type choferUncheckedUpdateWithoutUsersInput = {
    chofer_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    trip_requests?: trip_requestsUncheckedUpdateManyWithoutChoferNestedInput
  }

  export type choferUncheckedUpdateManyWithoutUsersInput = {
    chofer_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type clientUpdateWithoutUsersInput = {
    trip_requests?: trip_requestsUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateWithoutUsersInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    trip_requests?: trip_requestsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateManyWithoutUsersInput = {
    client_id?: IntFieldUpdateOperationsInput | number
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