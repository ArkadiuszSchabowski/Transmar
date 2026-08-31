
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model AssemblyLine
 * 
 */
export type AssemblyLine = $Result.DefaultSelection<Prisma.$AssemblyLinePayload>
/**
 * Model Workstation
 * 
 */
export type Workstation = $Result.DefaultSelection<Prisma.$WorkstationPayload>
/**
 * Model AssemblyLineWorkstation
 * 
 */
export type AssemblyLineWorkstation = $Result.DefaultSelection<Prisma.$AssemblyLineWorkstationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assemblyLine`: Exposes CRUD operations for the **AssemblyLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssemblyLines
    * const assemblyLines = await prisma.assemblyLine.findMany()
    * ```
    */
  get assemblyLine(): Prisma.AssemblyLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workstation`: Exposes CRUD operations for the **Workstation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workstations
    * const workstations = await prisma.workstation.findMany()
    * ```
    */
  get workstation(): Prisma.WorkstationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assemblyLineWorkstation`: Exposes CRUD operations for the **AssemblyLineWorkstation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssemblyLineWorkstations
    * const assemblyLineWorkstations = await prisma.assemblyLineWorkstation.findMany()
    * ```
    */
  get assemblyLineWorkstation(): Prisma.AssemblyLineWorkstationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Product: 'Product',
    AssemblyLine: 'AssemblyLine',
    Workstation: 'Workstation',
    AssemblyLineWorkstation: 'AssemblyLineWorkstation',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "assemblyLine" | "workstation" | "assemblyLineWorkstation" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      AssemblyLine: {
        payload: Prisma.$AssemblyLinePayload<ExtArgs>
        fields: Prisma.AssemblyLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssemblyLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssemblyLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLinePayload>
          }
          findFirst: {
            args: Prisma.AssemblyLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssemblyLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLinePayload>
          }
          findMany: {
            args: Prisma.AssemblyLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLinePayload>[]
          }
          create: {
            args: Prisma.AssemblyLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLinePayload>
          }
          createMany: {
            args: Prisma.AssemblyLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssemblyLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLinePayload>[]
          }
          delete: {
            args: Prisma.AssemblyLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLinePayload>
          }
          update: {
            args: Prisma.AssemblyLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLinePayload>
          }
          deleteMany: {
            args: Prisma.AssemblyLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssemblyLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssemblyLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLinePayload>[]
          }
          upsert: {
            args: Prisma.AssemblyLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLinePayload>
          }
          aggregate: {
            args: Prisma.AssemblyLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssemblyLine>
          }
          groupBy: {
            args: Prisma.AssemblyLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssemblyLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssemblyLineCountArgs<ExtArgs>
            result: $Utils.Optional<AssemblyLineCountAggregateOutputType> | number
          }
        }
      }
      Workstation: {
        payload: Prisma.$WorkstationPayload<ExtArgs>
        fields: Prisma.WorkstationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkstationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkstationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkstationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkstationPayload>
          }
          findFirst: {
            args: Prisma.WorkstationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkstationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkstationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkstationPayload>
          }
          findMany: {
            args: Prisma.WorkstationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkstationPayload>[]
          }
          create: {
            args: Prisma.WorkstationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkstationPayload>
          }
          createMany: {
            args: Prisma.WorkstationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkstationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkstationPayload>[]
          }
          delete: {
            args: Prisma.WorkstationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkstationPayload>
          }
          update: {
            args: Prisma.WorkstationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkstationPayload>
          }
          deleteMany: {
            args: Prisma.WorkstationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkstationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkstationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkstationPayload>[]
          }
          upsert: {
            args: Prisma.WorkstationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkstationPayload>
          }
          aggregate: {
            args: Prisma.WorkstationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkstation>
          }
          groupBy: {
            args: Prisma.WorkstationGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkstationGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkstationCountArgs<ExtArgs>
            result: $Utils.Optional<WorkstationCountAggregateOutputType> | number
          }
        }
      }
      AssemblyLineWorkstation: {
        payload: Prisma.$AssemblyLineWorkstationPayload<ExtArgs>
        fields: Prisma.AssemblyLineWorkstationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssemblyLineWorkstationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLineWorkstationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssemblyLineWorkstationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLineWorkstationPayload>
          }
          findFirst: {
            args: Prisma.AssemblyLineWorkstationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLineWorkstationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssemblyLineWorkstationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLineWorkstationPayload>
          }
          findMany: {
            args: Prisma.AssemblyLineWorkstationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLineWorkstationPayload>[]
          }
          create: {
            args: Prisma.AssemblyLineWorkstationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLineWorkstationPayload>
          }
          createMany: {
            args: Prisma.AssemblyLineWorkstationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssemblyLineWorkstationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLineWorkstationPayload>[]
          }
          delete: {
            args: Prisma.AssemblyLineWorkstationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLineWorkstationPayload>
          }
          update: {
            args: Prisma.AssemblyLineWorkstationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLineWorkstationPayload>
          }
          deleteMany: {
            args: Prisma.AssemblyLineWorkstationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssemblyLineWorkstationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssemblyLineWorkstationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLineWorkstationPayload>[]
          }
          upsert: {
            args: Prisma.AssemblyLineWorkstationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssemblyLineWorkstationPayload>
          }
          aggregate: {
            args: Prisma.AssemblyLineWorkstationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssemblyLineWorkstation>
          }
          groupBy: {
            args: Prisma.AssemblyLineWorkstationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssemblyLineWorkstationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssemblyLineWorkstationCountArgs<ExtArgs>
            result: $Utils.Optional<AssemblyLineWorkstationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    assemblyLine?: AssemblyLineOmit
    workstation?: WorkstationOmit
    assemblyLineWorkstation?: AssemblyLineWorkstationOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    assemblyLines: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assemblyLines?: boolean | ProductCountOutputTypeCountAssemblyLinesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountAssemblyLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssemblyLineWhereInput
  }


  /**
   * Count Type AssemblyLineCountOutputType
   */

  export type AssemblyLineCountOutputType = {
    assemblyLineWorkStations: number
  }

  export type AssemblyLineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assemblyLineWorkStations?: boolean | AssemblyLineCountOutputTypeCountAssemblyLineWorkStationsArgs
  }

  // Custom InputTypes
  /**
   * AssemblyLineCountOutputType without action
   */
  export type AssemblyLineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineCountOutputType
     */
    select?: AssemblyLineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssemblyLineCountOutputType without action
   */
  export type AssemblyLineCountOutputTypeCountAssemblyLineWorkStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssemblyLineWorkstationWhereInput
  }


  /**
   * Count Type WorkstationCountOutputType
   */

  export type WorkstationCountOutputType = {
    assemblyLineWorkStations: number
  }

  export type WorkstationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assemblyLineWorkStations?: boolean | WorkstationCountOutputTypeCountAssemblyLineWorkStationsArgs
  }

  // Custom InputTypes
  /**
   * WorkstationCountOutputType without action
   */
  export type WorkstationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkstationCountOutputType
     */
    select?: WorkstationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkstationCountOutputType without action
   */
  export type WorkstationCountOutputTypeCountAssemblyLineWorkStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssemblyLineWorkstationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    assemblyLines?: boolean | Product$assemblyLinesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assemblyLines?: boolean | Product$assemblyLinesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      assemblyLines: Prisma.$AssemblyLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assemblyLines<T extends Product$assemblyLinesArgs<ExtArgs> = {}>(args?: Subset<T, Product$assemblyLinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.assemblyLines
   */
  export type Product$assemblyLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineInclude<ExtArgs> | null
    where?: AssemblyLineWhereInput
    orderBy?: AssemblyLineOrderByWithRelationInput | AssemblyLineOrderByWithRelationInput[]
    cursor?: AssemblyLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssemblyLineScalarFieldEnum | AssemblyLineScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model AssemblyLine
   */

  export type AggregateAssemblyLine = {
    _count: AssemblyLineCountAggregateOutputType | null
    _avg: AssemblyLineAvgAggregateOutputType | null
    _sum: AssemblyLineSumAggregateOutputType | null
    _min: AssemblyLineMinAggregateOutputType | null
    _max: AssemblyLineMaxAggregateOutputType | null
  }

  export type AssemblyLineAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type AssemblyLineSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type AssemblyLineMinAggregateOutputType = {
    id: number | null
    name: string | null
    active: boolean | null
    productId: number | null
  }

  export type AssemblyLineMaxAggregateOutputType = {
    id: number | null
    name: string | null
    active: boolean | null
    productId: number | null
  }

  export type AssemblyLineCountAggregateOutputType = {
    id: number
    name: number
    active: number
    productId: number
    _all: number
  }


  export type AssemblyLineAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type AssemblyLineSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type AssemblyLineMinAggregateInputType = {
    id?: true
    name?: true
    active?: true
    productId?: true
  }

  export type AssemblyLineMaxAggregateInputType = {
    id?: true
    name?: true
    active?: true
    productId?: true
  }

  export type AssemblyLineCountAggregateInputType = {
    id?: true
    name?: true
    active?: true
    productId?: true
    _all?: true
  }

  export type AssemblyLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssemblyLine to aggregate.
     */
    where?: AssemblyLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssemblyLines to fetch.
     */
    orderBy?: AssemblyLineOrderByWithRelationInput | AssemblyLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssemblyLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssemblyLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssemblyLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssemblyLines
    **/
    _count?: true | AssemblyLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssemblyLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssemblyLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssemblyLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssemblyLineMaxAggregateInputType
  }

  export type GetAssemblyLineAggregateType<T extends AssemblyLineAggregateArgs> = {
        [P in keyof T & keyof AggregateAssemblyLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssemblyLine[P]>
      : GetScalarType<T[P], AggregateAssemblyLine[P]>
  }




  export type AssemblyLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssemblyLineWhereInput
    orderBy?: AssemblyLineOrderByWithAggregationInput | AssemblyLineOrderByWithAggregationInput[]
    by: AssemblyLineScalarFieldEnum[] | AssemblyLineScalarFieldEnum
    having?: AssemblyLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssemblyLineCountAggregateInputType | true
    _avg?: AssemblyLineAvgAggregateInputType
    _sum?: AssemblyLineSumAggregateInputType
    _min?: AssemblyLineMinAggregateInputType
    _max?: AssemblyLineMaxAggregateInputType
  }

  export type AssemblyLineGroupByOutputType = {
    id: number
    name: string
    active: boolean
    productId: number
    _count: AssemblyLineCountAggregateOutputType | null
    _avg: AssemblyLineAvgAggregateOutputType | null
    _sum: AssemblyLineSumAggregateOutputType | null
    _min: AssemblyLineMinAggregateOutputType | null
    _max: AssemblyLineMaxAggregateOutputType | null
  }

  type GetAssemblyLineGroupByPayload<T extends AssemblyLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssemblyLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssemblyLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssemblyLineGroupByOutputType[P]>
            : GetScalarType<T[P], AssemblyLineGroupByOutputType[P]>
        }
      >
    >


  export type AssemblyLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    assemblyLineWorkStations?: boolean | AssemblyLine$assemblyLineWorkStationsArgs<ExtArgs>
    _count?: boolean | AssemblyLineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assemblyLine"]>

  export type AssemblyLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assemblyLine"]>

  export type AssemblyLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assemblyLine"]>

  export type AssemblyLineSelectScalar = {
    id?: boolean
    name?: boolean
    active?: boolean
    productId?: boolean
  }

  export type AssemblyLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "active" | "productId", ExtArgs["result"]["assemblyLine"]>
  export type AssemblyLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    assemblyLineWorkStations?: boolean | AssemblyLine$assemblyLineWorkStationsArgs<ExtArgs>
    _count?: boolean | AssemblyLineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssemblyLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type AssemblyLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $AssemblyLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssemblyLine"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      assemblyLineWorkStations: Prisma.$AssemblyLineWorkstationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      active: boolean
      productId: number
    }, ExtArgs["result"]["assemblyLine"]>
    composites: {}
  }

  type AssemblyLineGetPayload<S extends boolean | null | undefined | AssemblyLineDefaultArgs> = $Result.GetResult<Prisma.$AssemblyLinePayload, S>

  type AssemblyLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssemblyLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssemblyLineCountAggregateInputType | true
    }

  export interface AssemblyLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssemblyLine'], meta: { name: 'AssemblyLine' } }
    /**
     * Find zero or one AssemblyLine that matches the filter.
     * @param {AssemblyLineFindUniqueArgs} args - Arguments to find a AssemblyLine
     * @example
     * // Get one AssemblyLine
     * const assemblyLine = await prisma.assemblyLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssemblyLineFindUniqueArgs>(args: SelectSubset<T, AssemblyLineFindUniqueArgs<ExtArgs>>): Prisma__AssemblyLineClient<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssemblyLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssemblyLineFindUniqueOrThrowArgs} args - Arguments to find a AssemblyLine
     * @example
     * // Get one AssemblyLine
     * const assemblyLine = await prisma.assemblyLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssemblyLineFindUniqueOrThrowArgs>(args: SelectSubset<T, AssemblyLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssemblyLineClient<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssemblyLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineFindFirstArgs} args - Arguments to find a AssemblyLine
     * @example
     * // Get one AssemblyLine
     * const assemblyLine = await prisma.assemblyLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssemblyLineFindFirstArgs>(args?: SelectSubset<T, AssemblyLineFindFirstArgs<ExtArgs>>): Prisma__AssemblyLineClient<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssemblyLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineFindFirstOrThrowArgs} args - Arguments to find a AssemblyLine
     * @example
     * // Get one AssemblyLine
     * const assemblyLine = await prisma.assemblyLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssemblyLineFindFirstOrThrowArgs>(args?: SelectSubset<T, AssemblyLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssemblyLineClient<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssemblyLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssemblyLines
     * const assemblyLines = await prisma.assemblyLine.findMany()
     * 
     * // Get first 10 AssemblyLines
     * const assemblyLines = await prisma.assemblyLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assemblyLineWithIdOnly = await prisma.assemblyLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssemblyLineFindManyArgs>(args?: SelectSubset<T, AssemblyLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssemblyLine.
     * @param {AssemblyLineCreateArgs} args - Arguments to create a AssemblyLine.
     * @example
     * // Create one AssemblyLine
     * const AssemblyLine = await prisma.assemblyLine.create({
     *   data: {
     *     // ... data to create a AssemblyLine
     *   }
     * })
     * 
     */
    create<T extends AssemblyLineCreateArgs>(args: SelectSubset<T, AssemblyLineCreateArgs<ExtArgs>>): Prisma__AssemblyLineClient<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssemblyLines.
     * @param {AssemblyLineCreateManyArgs} args - Arguments to create many AssemblyLines.
     * @example
     * // Create many AssemblyLines
     * const assemblyLine = await prisma.assemblyLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssemblyLineCreateManyArgs>(args?: SelectSubset<T, AssemblyLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssemblyLines and returns the data saved in the database.
     * @param {AssemblyLineCreateManyAndReturnArgs} args - Arguments to create many AssemblyLines.
     * @example
     * // Create many AssemblyLines
     * const assemblyLine = await prisma.assemblyLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssemblyLines and only return the `id`
     * const assemblyLineWithIdOnly = await prisma.assemblyLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssemblyLineCreateManyAndReturnArgs>(args?: SelectSubset<T, AssemblyLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssemblyLine.
     * @param {AssemblyLineDeleteArgs} args - Arguments to delete one AssemblyLine.
     * @example
     * // Delete one AssemblyLine
     * const AssemblyLine = await prisma.assemblyLine.delete({
     *   where: {
     *     // ... filter to delete one AssemblyLine
     *   }
     * })
     * 
     */
    delete<T extends AssemblyLineDeleteArgs>(args: SelectSubset<T, AssemblyLineDeleteArgs<ExtArgs>>): Prisma__AssemblyLineClient<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssemblyLine.
     * @param {AssemblyLineUpdateArgs} args - Arguments to update one AssemblyLine.
     * @example
     * // Update one AssemblyLine
     * const assemblyLine = await prisma.assemblyLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssemblyLineUpdateArgs>(args: SelectSubset<T, AssemblyLineUpdateArgs<ExtArgs>>): Prisma__AssemblyLineClient<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssemblyLines.
     * @param {AssemblyLineDeleteManyArgs} args - Arguments to filter AssemblyLines to delete.
     * @example
     * // Delete a few AssemblyLines
     * const { count } = await prisma.assemblyLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssemblyLineDeleteManyArgs>(args?: SelectSubset<T, AssemblyLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssemblyLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssemblyLines
     * const assemblyLine = await prisma.assemblyLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssemblyLineUpdateManyArgs>(args: SelectSubset<T, AssemblyLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssemblyLines and returns the data updated in the database.
     * @param {AssemblyLineUpdateManyAndReturnArgs} args - Arguments to update many AssemblyLines.
     * @example
     * // Update many AssemblyLines
     * const assemblyLine = await prisma.assemblyLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssemblyLines and only return the `id`
     * const assemblyLineWithIdOnly = await prisma.assemblyLine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssemblyLineUpdateManyAndReturnArgs>(args: SelectSubset<T, AssemblyLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssemblyLine.
     * @param {AssemblyLineUpsertArgs} args - Arguments to update or create a AssemblyLine.
     * @example
     * // Update or create a AssemblyLine
     * const assemblyLine = await prisma.assemblyLine.upsert({
     *   create: {
     *     // ... data to create a AssemblyLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssemblyLine we want to update
     *   }
     * })
     */
    upsert<T extends AssemblyLineUpsertArgs>(args: SelectSubset<T, AssemblyLineUpsertArgs<ExtArgs>>): Prisma__AssemblyLineClient<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssemblyLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineCountArgs} args - Arguments to filter AssemblyLines to count.
     * @example
     * // Count the number of AssemblyLines
     * const count = await prisma.assemblyLine.count({
     *   where: {
     *     // ... the filter for the AssemblyLines we want to count
     *   }
     * })
    **/
    count<T extends AssemblyLineCountArgs>(
      args?: Subset<T, AssemblyLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssemblyLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssemblyLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssemblyLineAggregateArgs>(args: Subset<T, AssemblyLineAggregateArgs>): Prisma.PrismaPromise<GetAssemblyLineAggregateType<T>>

    /**
     * Group by AssemblyLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineGroupByArgs} args - Group by arguments.
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
      T extends AssemblyLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssemblyLineGroupByArgs['orderBy'] }
        : { orderBy?: AssemblyLineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssemblyLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssemblyLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssemblyLine model
   */
  readonly fields: AssemblyLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssemblyLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssemblyLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assemblyLineWorkStations<T extends AssemblyLine$assemblyLineWorkStationsArgs<ExtArgs> = {}>(args?: Subset<T, AssemblyLine$assemblyLineWorkStationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AssemblyLine model
   */
  interface AssemblyLineFieldRefs {
    readonly id: FieldRef<"AssemblyLine", 'Int'>
    readonly name: FieldRef<"AssemblyLine", 'String'>
    readonly active: FieldRef<"AssemblyLine", 'Boolean'>
    readonly productId: FieldRef<"AssemblyLine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AssemblyLine findUnique
   */
  export type AssemblyLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineInclude<ExtArgs> | null
    /**
     * Filter, which AssemblyLine to fetch.
     */
    where: AssemblyLineWhereUniqueInput
  }

  /**
   * AssemblyLine findUniqueOrThrow
   */
  export type AssemblyLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineInclude<ExtArgs> | null
    /**
     * Filter, which AssemblyLine to fetch.
     */
    where: AssemblyLineWhereUniqueInput
  }

  /**
   * AssemblyLine findFirst
   */
  export type AssemblyLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineInclude<ExtArgs> | null
    /**
     * Filter, which AssemblyLine to fetch.
     */
    where?: AssemblyLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssemblyLines to fetch.
     */
    orderBy?: AssemblyLineOrderByWithRelationInput | AssemblyLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssemblyLines.
     */
    cursor?: AssemblyLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssemblyLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssemblyLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssemblyLines.
     */
    distinct?: AssemblyLineScalarFieldEnum | AssemblyLineScalarFieldEnum[]
  }

  /**
   * AssemblyLine findFirstOrThrow
   */
  export type AssemblyLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineInclude<ExtArgs> | null
    /**
     * Filter, which AssemblyLine to fetch.
     */
    where?: AssemblyLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssemblyLines to fetch.
     */
    orderBy?: AssemblyLineOrderByWithRelationInput | AssemblyLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssemblyLines.
     */
    cursor?: AssemblyLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssemblyLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssemblyLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssemblyLines.
     */
    distinct?: AssemblyLineScalarFieldEnum | AssemblyLineScalarFieldEnum[]
  }

  /**
   * AssemblyLine findMany
   */
  export type AssemblyLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineInclude<ExtArgs> | null
    /**
     * Filter, which AssemblyLines to fetch.
     */
    where?: AssemblyLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssemblyLines to fetch.
     */
    orderBy?: AssemblyLineOrderByWithRelationInput | AssemblyLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssemblyLines.
     */
    cursor?: AssemblyLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssemblyLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssemblyLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssemblyLines.
     */
    distinct?: AssemblyLineScalarFieldEnum | AssemblyLineScalarFieldEnum[]
  }

  /**
   * AssemblyLine create
   */
  export type AssemblyLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineInclude<ExtArgs> | null
    /**
     * The data needed to create a AssemblyLine.
     */
    data: XOR<AssemblyLineCreateInput, AssemblyLineUncheckedCreateInput>
  }

  /**
   * AssemblyLine createMany
   */
  export type AssemblyLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssemblyLines.
     */
    data: AssemblyLineCreateManyInput | AssemblyLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssemblyLine createManyAndReturn
   */
  export type AssemblyLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * The data used to create many AssemblyLines.
     */
    data: AssemblyLineCreateManyInput | AssemblyLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssemblyLine update
   */
  export type AssemblyLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineInclude<ExtArgs> | null
    /**
     * The data needed to update a AssemblyLine.
     */
    data: XOR<AssemblyLineUpdateInput, AssemblyLineUncheckedUpdateInput>
    /**
     * Choose, which AssemblyLine to update.
     */
    where: AssemblyLineWhereUniqueInput
  }

  /**
   * AssemblyLine updateMany
   */
  export type AssemblyLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssemblyLines.
     */
    data: XOR<AssemblyLineUpdateManyMutationInput, AssemblyLineUncheckedUpdateManyInput>
    /**
     * Filter which AssemblyLines to update
     */
    where?: AssemblyLineWhereInput
    /**
     * Limit how many AssemblyLines to update.
     */
    limit?: number
  }

  /**
   * AssemblyLine updateManyAndReturn
   */
  export type AssemblyLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * The data used to update AssemblyLines.
     */
    data: XOR<AssemblyLineUpdateManyMutationInput, AssemblyLineUncheckedUpdateManyInput>
    /**
     * Filter which AssemblyLines to update
     */
    where?: AssemblyLineWhereInput
    /**
     * Limit how many AssemblyLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssemblyLine upsert
   */
  export type AssemblyLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineInclude<ExtArgs> | null
    /**
     * The filter to search for the AssemblyLine to update in case it exists.
     */
    where: AssemblyLineWhereUniqueInput
    /**
     * In case the AssemblyLine found by the `where` argument doesn't exist, create a new AssemblyLine with this data.
     */
    create: XOR<AssemblyLineCreateInput, AssemblyLineUncheckedCreateInput>
    /**
     * In case the AssemblyLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssemblyLineUpdateInput, AssemblyLineUncheckedUpdateInput>
  }

  /**
   * AssemblyLine delete
   */
  export type AssemblyLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineInclude<ExtArgs> | null
    /**
     * Filter which AssemblyLine to delete.
     */
    where: AssemblyLineWhereUniqueInput
  }

  /**
   * AssemblyLine deleteMany
   */
  export type AssemblyLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssemblyLines to delete
     */
    where?: AssemblyLineWhereInput
    /**
     * Limit how many AssemblyLines to delete.
     */
    limit?: number
  }

  /**
   * AssemblyLine.assemblyLineWorkStations
   */
  export type AssemblyLine$assemblyLineWorkStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
    where?: AssemblyLineWorkstationWhereInput
    orderBy?: AssemblyLineWorkstationOrderByWithRelationInput | AssemblyLineWorkstationOrderByWithRelationInput[]
    cursor?: AssemblyLineWorkstationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssemblyLineWorkstationScalarFieldEnum | AssemblyLineWorkstationScalarFieldEnum[]
  }

  /**
   * AssemblyLine without action
   */
  export type AssemblyLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLine
     */
    select?: AssemblyLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLine
     */
    omit?: AssemblyLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineInclude<ExtArgs> | null
  }


  /**
   * Model Workstation
   */

  export type AggregateWorkstation = {
    _count: WorkstationCountAggregateOutputType | null
    _avg: WorkstationAvgAggregateOutputType | null
    _sum: WorkstationSumAggregateOutputType | null
    _min: WorkstationMinAggregateOutputType | null
    _max: WorkstationMaxAggregateOutputType | null
  }

  export type WorkstationAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkstationSumAggregateOutputType = {
    id: number | null
  }

  export type WorkstationMinAggregateOutputType = {
    id: number | null
    name: string | null
    shortName: string | null
    pcName: string | null
  }

  export type WorkstationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    shortName: string | null
    pcName: string | null
  }

  export type WorkstationCountAggregateOutputType = {
    id: number
    name: number
    shortName: number
    pcName: number
    _all: number
  }


  export type WorkstationAvgAggregateInputType = {
    id?: true
  }

  export type WorkstationSumAggregateInputType = {
    id?: true
  }

  export type WorkstationMinAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    pcName?: true
  }

  export type WorkstationMaxAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    pcName?: true
  }

  export type WorkstationCountAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    pcName?: true
    _all?: true
  }

  export type WorkstationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workstation to aggregate.
     */
    where?: WorkstationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workstations to fetch.
     */
    orderBy?: WorkstationOrderByWithRelationInput | WorkstationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkstationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workstations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workstations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workstations
    **/
    _count?: true | WorkstationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkstationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkstationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkstationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkstationMaxAggregateInputType
  }

  export type GetWorkstationAggregateType<T extends WorkstationAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkstation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkstation[P]>
      : GetScalarType<T[P], AggregateWorkstation[P]>
  }




  export type WorkstationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkstationWhereInput
    orderBy?: WorkstationOrderByWithAggregationInput | WorkstationOrderByWithAggregationInput[]
    by: WorkstationScalarFieldEnum[] | WorkstationScalarFieldEnum
    having?: WorkstationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkstationCountAggregateInputType | true
    _avg?: WorkstationAvgAggregateInputType
    _sum?: WorkstationSumAggregateInputType
    _min?: WorkstationMinAggregateInputType
    _max?: WorkstationMaxAggregateInputType
  }

  export type WorkstationGroupByOutputType = {
    id: number
    name: string
    shortName: string
    pcName: string
    _count: WorkstationCountAggregateOutputType | null
    _avg: WorkstationAvgAggregateOutputType | null
    _sum: WorkstationSumAggregateOutputType | null
    _min: WorkstationMinAggregateOutputType | null
    _max: WorkstationMaxAggregateOutputType | null
  }

  type GetWorkstationGroupByPayload<T extends WorkstationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkstationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkstationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkstationGroupByOutputType[P]>
            : GetScalarType<T[P], WorkstationGroupByOutputType[P]>
        }
      >
    >


  export type WorkstationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    pcName?: boolean
    assemblyLineWorkStations?: boolean | Workstation$assemblyLineWorkStationsArgs<ExtArgs>
    _count?: boolean | WorkstationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workstation"]>

  export type WorkstationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    pcName?: boolean
  }, ExtArgs["result"]["workstation"]>

  export type WorkstationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    pcName?: boolean
  }, ExtArgs["result"]["workstation"]>

  export type WorkstationSelectScalar = {
    id?: boolean
    name?: boolean
    shortName?: boolean
    pcName?: boolean
  }

  export type WorkstationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shortName" | "pcName", ExtArgs["result"]["workstation"]>
  export type WorkstationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assemblyLineWorkStations?: boolean | Workstation$assemblyLineWorkStationsArgs<ExtArgs>
    _count?: boolean | WorkstationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkstationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkstationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkstationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workstation"
    objects: {
      assemblyLineWorkStations: Prisma.$AssemblyLineWorkstationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      shortName: string
      pcName: string
    }, ExtArgs["result"]["workstation"]>
    composites: {}
  }

  type WorkstationGetPayload<S extends boolean | null | undefined | WorkstationDefaultArgs> = $Result.GetResult<Prisma.$WorkstationPayload, S>

  type WorkstationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkstationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkstationCountAggregateInputType | true
    }

  export interface WorkstationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workstation'], meta: { name: 'Workstation' } }
    /**
     * Find zero or one Workstation that matches the filter.
     * @param {WorkstationFindUniqueArgs} args - Arguments to find a Workstation
     * @example
     * // Get one Workstation
     * const workstation = await prisma.workstation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkstationFindUniqueArgs>(args: SelectSubset<T, WorkstationFindUniqueArgs<ExtArgs>>): Prisma__WorkstationClient<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workstation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkstationFindUniqueOrThrowArgs} args - Arguments to find a Workstation
     * @example
     * // Get one Workstation
     * const workstation = await prisma.workstation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkstationFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkstationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkstationClient<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workstation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkstationFindFirstArgs} args - Arguments to find a Workstation
     * @example
     * // Get one Workstation
     * const workstation = await prisma.workstation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkstationFindFirstArgs>(args?: SelectSubset<T, WorkstationFindFirstArgs<ExtArgs>>): Prisma__WorkstationClient<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workstation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkstationFindFirstOrThrowArgs} args - Arguments to find a Workstation
     * @example
     * // Get one Workstation
     * const workstation = await prisma.workstation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkstationFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkstationFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkstationClient<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workstations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkstationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workstations
     * const workstations = await prisma.workstation.findMany()
     * 
     * // Get first 10 Workstations
     * const workstations = await prisma.workstation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workstationWithIdOnly = await prisma.workstation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkstationFindManyArgs>(args?: SelectSubset<T, WorkstationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workstation.
     * @param {WorkstationCreateArgs} args - Arguments to create a Workstation.
     * @example
     * // Create one Workstation
     * const Workstation = await prisma.workstation.create({
     *   data: {
     *     // ... data to create a Workstation
     *   }
     * })
     * 
     */
    create<T extends WorkstationCreateArgs>(args: SelectSubset<T, WorkstationCreateArgs<ExtArgs>>): Prisma__WorkstationClient<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workstations.
     * @param {WorkstationCreateManyArgs} args - Arguments to create many Workstations.
     * @example
     * // Create many Workstations
     * const workstation = await prisma.workstation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkstationCreateManyArgs>(args?: SelectSubset<T, WorkstationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workstations and returns the data saved in the database.
     * @param {WorkstationCreateManyAndReturnArgs} args - Arguments to create many Workstations.
     * @example
     * // Create many Workstations
     * const workstation = await prisma.workstation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workstations and only return the `id`
     * const workstationWithIdOnly = await prisma.workstation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkstationCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkstationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workstation.
     * @param {WorkstationDeleteArgs} args - Arguments to delete one Workstation.
     * @example
     * // Delete one Workstation
     * const Workstation = await prisma.workstation.delete({
     *   where: {
     *     // ... filter to delete one Workstation
     *   }
     * })
     * 
     */
    delete<T extends WorkstationDeleteArgs>(args: SelectSubset<T, WorkstationDeleteArgs<ExtArgs>>): Prisma__WorkstationClient<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workstation.
     * @param {WorkstationUpdateArgs} args - Arguments to update one Workstation.
     * @example
     * // Update one Workstation
     * const workstation = await prisma.workstation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkstationUpdateArgs>(args: SelectSubset<T, WorkstationUpdateArgs<ExtArgs>>): Prisma__WorkstationClient<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workstations.
     * @param {WorkstationDeleteManyArgs} args - Arguments to filter Workstations to delete.
     * @example
     * // Delete a few Workstations
     * const { count } = await prisma.workstation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkstationDeleteManyArgs>(args?: SelectSubset<T, WorkstationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workstations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkstationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workstations
     * const workstation = await prisma.workstation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkstationUpdateManyArgs>(args: SelectSubset<T, WorkstationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workstations and returns the data updated in the database.
     * @param {WorkstationUpdateManyAndReturnArgs} args - Arguments to update many Workstations.
     * @example
     * // Update many Workstations
     * const workstation = await prisma.workstation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workstations and only return the `id`
     * const workstationWithIdOnly = await prisma.workstation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkstationUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkstationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workstation.
     * @param {WorkstationUpsertArgs} args - Arguments to update or create a Workstation.
     * @example
     * // Update or create a Workstation
     * const workstation = await prisma.workstation.upsert({
     *   create: {
     *     // ... data to create a Workstation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workstation we want to update
     *   }
     * })
     */
    upsert<T extends WorkstationUpsertArgs>(args: SelectSubset<T, WorkstationUpsertArgs<ExtArgs>>): Prisma__WorkstationClient<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workstations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkstationCountArgs} args - Arguments to filter Workstations to count.
     * @example
     * // Count the number of Workstations
     * const count = await prisma.workstation.count({
     *   where: {
     *     // ... the filter for the Workstations we want to count
     *   }
     * })
    **/
    count<T extends WorkstationCountArgs>(
      args?: Subset<T, WorkstationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkstationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workstation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkstationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkstationAggregateArgs>(args: Subset<T, WorkstationAggregateArgs>): Prisma.PrismaPromise<GetWorkstationAggregateType<T>>

    /**
     * Group by Workstation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkstationGroupByArgs} args - Group by arguments.
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
      T extends WorkstationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkstationGroupByArgs['orderBy'] }
        : { orderBy?: WorkstationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkstationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkstationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workstation model
   */
  readonly fields: WorkstationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workstation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkstationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assemblyLineWorkStations<T extends Workstation$assemblyLineWorkStationsArgs<ExtArgs> = {}>(args?: Subset<T, Workstation$assemblyLineWorkStationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workstation model
   */
  interface WorkstationFieldRefs {
    readonly id: FieldRef<"Workstation", 'Int'>
    readonly name: FieldRef<"Workstation", 'String'>
    readonly shortName: FieldRef<"Workstation", 'String'>
    readonly pcName: FieldRef<"Workstation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workstation findUnique
   */
  export type WorkstationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkstationInclude<ExtArgs> | null
    /**
     * Filter, which Workstation to fetch.
     */
    where: WorkstationWhereUniqueInput
  }

  /**
   * Workstation findUniqueOrThrow
   */
  export type WorkstationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkstationInclude<ExtArgs> | null
    /**
     * Filter, which Workstation to fetch.
     */
    where: WorkstationWhereUniqueInput
  }

  /**
   * Workstation findFirst
   */
  export type WorkstationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkstationInclude<ExtArgs> | null
    /**
     * Filter, which Workstation to fetch.
     */
    where?: WorkstationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workstations to fetch.
     */
    orderBy?: WorkstationOrderByWithRelationInput | WorkstationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workstations.
     */
    cursor?: WorkstationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workstations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workstations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workstations.
     */
    distinct?: WorkstationScalarFieldEnum | WorkstationScalarFieldEnum[]
  }

  /**
   * Workstation findFirstOrThrow
   */
  export type WorkstationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkstationInclude<ExtArgs> | null
    /**
     * Filter, which Workstation to fetch.
     */
    where?: WorkstationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workstations to fetch.
     */
    orderBy?: WorkstationOrderByWithRelationInput | WorkstationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workstations.
     */
    cursor?: WorkstationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workstations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workstations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workstations.
     */
    distinct?: WorkstationScalarFieldEnum | WorkstationScalarFieldEnum[]
  }

  /**
   * Workstation findMany
   */
  export type WorkstationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkstationInclude<ExtArgs> | null
    /**
     * Filter, which Workstations to fetch.
     */
    where?: WorkstationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workstations to fetch.
     */
    orderBy?: WorkstationOrderByWithRelationInput | WorkstationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workstations.
     */
    cursor?: WorkstationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workstations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workstations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workstations.
     */
    distinct?: WorkstationScalarFieldEnum | WorkstationScalarFieldEnum[]
  }

  /**
   * Workstation create
   */
  export type WorkstationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkstationInclude<ExtArgs> | null
    /**
     * The data needed to create a Workstation.
     */
    data: XOR<WorkstationCreateInput, WorkstationUncheckedCreateInput>
  }

  /**
   * Workstation createMany
   */
  export type WorkstationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workstations.
     */
    data: WorkstationCreateManyInput | WorkstationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workstation createManyAndReturn
   */
  export type WorkstationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * The data used to create many Workstations.
     */
    data: WorkstationCreateManyInput | WorkstationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workstation update
   */
  export type WorkstationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkstationInclude<ExtArgs> | null
    /**
     * The data needed to update a Workstation.
     */
    data: XOR<WorkstationUpdateInput, WorkstationUncheckedUpdateInput>
    /**
     * Choose, which Workstation to update.
     */
    where: WorkstationWhereUniqueInput
  }

  /**
   * Workstation updateMany
   */
  export type WorkstationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workstations.
     */
    data: XOR<WorkstationUpdateManyMutationInput, WorkstationUncheckedUpdateManyInput>
    /**
     * Filter which Workstations to update
     */
    where?: WorkstationWhereInput
    /**
     * Limit how many Workstations to update.
     */
    limit?: number
  }

  /**
   * Workstation updateManyAndReturn
   */
  export type WorkstationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * The data used to update Workstations.
     */
    data: XOR<WorkstationUpdateManyMutationInput, WorkstationUncheckedUpdateManyInput>
    /**
     * Filter which Workstations to update
     */
    where?: WorkstationWhereInput
    /**
     * Limit how many Workstations to update.
     */
    limit?: number
  }

  /**
   * Workstation upsert
   */
  export type WorkstationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkstationInclude<ExtArgs> | null
    /**
     * The filter to search for the Workstation to update in case it exists.
     */
    where: WorkstationWhereUniqueInput
    /**
     * In case the Workstation found by the `where` argument doesn't exist, create a new Workstation with this data.
     */
    create: XOR<WorkstationCreateInput, WorkstationUncheckedCreateInput>
    /**
     * In case the Workstation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkstationUpdateInput, WorkstationUncheckedUpdateInput>
  }

  /**
   * Workstation delete
   */
  export type WorkstationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkstationInclude<ExtArgs> | null
    /**
     * Filter which Workstation to delete.
     */
    where: WorkstationWhereUniqueInput
  }

  /**
   * Workstation deleteMany
   */
  export type WorkstationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workstations to delete
     */
    where?: WorkstationWhereInput
    /**
     * Limit how many Workstations to delete.
     */
    limit?: number
  }

  /**
   * Workstation.assemblyLineWorkStations
   */
  export type Workstation$assemblyLineWorkStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
    where?: AssemblyLineWorkstationWhereInput
    orderBy?: AssemblyLineWorkstationOrderByWithRelationInput | AssemblyLineWorkstationOrderByWithRelationInput[]
    cursor?: AssemblyLineWorkstationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssemblyLineWorkstationScalarFieldEnum | AssemblyLineWorkstationScalarFieldEnum[]
  }

  /**
   * Workstation without action
   */
  export type WorkstationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workstation
     */
    select?: WorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workstation
     */
    omit?: WorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkstationInclude<ExtArgs> | null
  }


  /**
   * Model AssemblyLineWorkstation
   */

  export type AggregateAssemblyLineWorkstation = {
    _count: AssemblyLineWorkstationCountAggregateOutputType | null
    _avg: AssemblyLineWorkstationAvgAggregateOutputType | null
    _sum: AssemblyLineWorkstationSumAggregateOutputType | null
    _min: AssemblyLineWorkstationMinAggregateOutputType | null
    _max: AssemblyLineWorkstationMaxAggregateOutputType | null
  }

  export type AssemblyLineWorkstationAvgAggregateOutputType = {
    id: number | null
    assemblyLineId: number | null
    workstationId: number | null
    order: number | null
  }

  export type AssemblyLineWorkstationSumAggregateOutputType = {
    id: number | null
    assemblyLineId: number | null
    workstationId: number | null
    order: number | null
  }

  export type AssemblyLineWorkstationMinAggregateOutputType = {
    id: number | null
    assemblyLineId: number | null
    workstationId: number | null
    order: number | null
  }

  export type AssemblyLineWorkstationMaxAggregateOutputType = {
    id: number | null
    assemblyLineId: number | null
    workstationId: number | null
    order: number | null
  }

  export type AssemblyLineWorkstationCountAggregateOutputType = {
    id: number
    assemblyLineId: number
    workstationId: number
    order: number
    _all: number
  }


  export type AssemblyLineWorkstationAvgAggregateInputType = {
    id?: true
    assemblyLineId?: true
    workstationId?: true
    order?: true
  }

  export type AssemblyLineWorkstationSumAggregateInputType = {
    id?: true
    assemblyLineId?: true
    workstationId?: true
    order?: true
  }

  export type AssemblyLineWorkstationMinAggregateInputType = {
    id?: true
    assemblyLineId?: true
    workstationId?: true
    order?: true
  }

  export type AssemblyLineWorkstationMaxAggregateInputType = {
    id?: true
    assemblyLineId?: true
    workstationId?: true
    order?: true
  }

  export type AssemblyLineWorkstationCountAggregateInputType = {
    id?: true
    assemblyLineId?: true
    workstationId?: true
    order?: true
    _all?: true
  }

  export type AssemblyLineWorkstationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssemblyLineWorkstation to aggregate.
     */
    where?: AssemblyLineWorkstationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssemblyLineWorkstations to fetch.
     */
    orderBy?: AssemblyLineWorkstationOrderByWithRelationInput | AssemblyLineWorkstationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssemblyLineWorkstationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssemblyLineWorkstations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssemblyLineWorkstations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssemblyLineWorkstations
    **/
    _count?: true | AssemblyLineWorkstationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssemblyLineWorkstationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssemblyLineWorkstationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssemblyLineWorkstationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssemblyLineWorkstationMaxAggregateInputType
  }

  export type GetAssemblyLineWorkstationAggregateType<T extends AssemblyLineWorkstationAggregateArgs> = {
        [P in keyof T & keyof AggregateAssemblyLineWorkstation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssemblyLineWorkstation[P]>
      : GetScalarType<T[P], AggregateAssemblyLineWorkstation[P]>
  }




  export type AssemblyLineWorkstationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssemblyLineWorkstationWhereInput
    orderBy?: AssemblyLineWorkstationOrderByWithAggregationInput | AssemblyLineWorkstationOrderByWithAggregationInput[]
    by: AssemblyLineWorkstationScalarFieldEnum[] | AssemblyLineWorkstationScalarFieldEnum
    having?: AssemblyLineWorkstationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssemblyLineWorkstationCountAggregateInputType | true
    _avg?: AssemblyLineWorkstationAvgAggregateInputType
    _sum?: AssemblyLineWorkstationSumAggregateInputType
    _min?: AssemblyLineWorkstationMinAggregateInputType
    _max?: AssemblyLineWorkstationMaxAggregateInputType
  }

  export type AssemblyLineWorkstationGroupByOutputType = {
    id: number
    assemblyLineId: number
    workstationId: number
    order: number
    _count: AssemblyLineWorkstationCountAggregateOutputType | null
    _avg: AssemblyLineWorkstationAvgAggregateOutputType | null
    _sum: AssemblyLineWorkstationSumAggregateOutputType | null
    _min: AssemblyLineWorkstationMinAggregateOutputType | null
    _max: AssemblyLineWorkstationMaxAggregateOutputType | null
  }

  type GetAssemblyLineWorkstationGroupByPayload<T extends AssemblyLineWorkstationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssemblyLineWorkstationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssemblyLineWorkstationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssemblyLineWorkstationGroupByOutputType[P]>
            : GetScalarType<T[P], AssemblyLineWorkstationGroupByOutputType[P]>
        }
      >
    >


  export type AssemblyLineWorkstationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assemblyLineId?: boolean
    workstationId?: boolean
    order?: boolean
    assemblyLine?: boolean | AssemblyLineDefaultArgs<ExtArgs>
    workstation?: boolean | WorkstationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assemblyLineWorkstation"]>

  export type AssemblyLineWorkstationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assemblyLineId?: boolean
    workstationId?: boolean
    order?: boolean
    assemblyLine?: boolean | AssemblyLineDefaultArgs<ExtArgs>
    workstation?: boolean | WorkstationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assemblyLineWorkstation"]>

  export type AssemblyLineWorkstationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assemblyLineId?: boolean
    workstationId?: boolean
    order?: boolean
    assemblyLine?: boolean | AssemblyLineDefaultArgs<ExtArgs>
    workstation?: boolean | WorkstationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assemblyLineWorkstation"]>

  export type AssemblyLineWorkstationSelectScalar = {
    id?: boolean
    assemblyLineId?: boolean
    workstationId?: boolean
    order?: boolean
  }

  export type AssemblyLineWorkstationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assemblyLineId" | "workstationId" | "order", ExtArgs["result"]["assemblyLineWorkstation"]>
  export type AssemblyLineWorkstationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assemblyLine?: boolean | AssemblyLineDefaultArgs<ExtArgs>
    workstation?: boolean | WorkstationDefaultArgs<ExtArgs>
  }
  export type AssemblyLineWorkstationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assemblyLine?: boolean | AssemblyLineDefaultArgs<ExtArgs>
    workstation?: boolean | WorkstationDefaultArgs<ExtArgs>
  }
  export type AssemblyLineWorkstationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assemblyLine?: boolean | AssemblyLineDefaultArgs<ExtArgs>
    workstation?: boolean | WorkstationDefaultArgs<ExtArgs>
  }

  export type $AssemblyLineWorkstationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssemblyLineWorkstation"
    objects: {
      assemblyLine: Prisma.$AssemblyLinePayload<ExtArgs>
      workstation: Prisma.$WorkstationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assemblyLineId: number
      workstationId: number
      order: number
    }, ExtArgs["result"]["assemblyLineWorkstation"]>
    composites: {}
  }

  type AssemblyLineWorkstationGetPayload<S extends boolean | null | undefined | AssemblyLineWorkstationDefaultArgs> = $Result.GetResult<Prisma.$AssemblyLineWorkstationPayload, S>

  type AssemblyLineWorkstationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssemblyLineWorkstationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssemblyLineWorkstationCountAggregateInputType | true
    }

  export interface AssemblyLineWorkstationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssemblyLineWorkstation'], meta: { name: 'AssemblyLineWorkstation' } }
    /**
     * Find zero or one AssemblyLineWorkstation that matches the filter.
     * @param {AssemblyLineWorkstationFindUniqueArgs} args - Arguments to find a AssemblyLineWorkstation
     * @example
     * // Get one AssemblyLineWorkstation
     * const assemblyLineWorkstation = await prisma.assemblyLineWorkstation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssemblyLineWorkstationFindUniqueArgs>(args: SelectSubset<T, AssemblyLineWorkstationFindUniqueArgs<ExtArgs>>): Prisma__AssemblyLineWorkstationClient<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssemblyLineWorkstation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssemblyLineWorkstationFindUniqueOrThrowArgs} args - Arguments to find a AssemblyLineWorkstation
     * @example
     * // Get one AssemblyLineWorkstation
     * const assemblyLineWorkstation = await prisma.assemblyLineWorkstation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssemblyLineWorkstationFindUniqueOrThrowArgs>(args: SelectSubset<T, AssemblyLineWorkstationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssemblyLineWorkstationClient<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssemblyLineWorkstation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineWorkstationFindFirstArgs} args - Arguments to find a AssemblyLineWorkstation
     * @example
     * // Get one AssemblyLineWorkstation
     * const assemblyLineWorkstation = await prisma.assemblyLineWorkstation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssemblyLineWorkstationFindFirstArgs>(args?: SelectSubset<T, AssemblyLineWorkstationFindFirstArgs<ExtArgs>>): Prisma__AssemblyLineWorkstationClient<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssemblyLineWorkstation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineWorkstationFindFirstOrThrowArgs} args - Arguments to find a AssemblyLineWorkstation
     * @example
     * // Get one AssemblyLineWorkstation
     * const assemblyLineWorkstation = await prisma.assemblyLineWorkstation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssemblyLineWorkstationFindFirstOrThrowArgs>(args?: SelectSubset<T, AssemblyLineWorkstationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssemblyLineWorkstationClient<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssemblyLineWorkstations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineWorkstationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssemblyLineWorkstations
     * const assemblyLineWorkstations = await prisma.assemblyLineWorkstation.findMany()
     * 
     * // Get first 10 AssemblyLineWorkstations
     * const assemblyLineWorkstations = await prisma.assemblyLineWorkstation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assemblyLineWorkstationWithIdOnly = await prisma.assemblyLineWorkstation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssemblyLineWorkstationFindManyArgs>(args?: SelectSubset<T, AssemblyLineWorkstationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssemblyLineWorkstation.
     * @param {AssemblyLineWorkstationCreateArgs} args - Arguments to create a AssemblyLineWorkstation.
     * @example
     * // Create one AssemblyLineWorkstation
     * const AssemblyLineWorkstation = await prisma.assemblyLineWorkstation.create({
     *   data: {
     *     // ... data to create a AssemblyLineWorkstation
     *   }
     * })
     * 
     */
    create<T extends AssemblyLineWorkstationCreateArgs>(args: SelectSubset<T, AssemblyLineWorkstationCreateArgs<ExtArgs>>): Prisma__AssemblyLineWorkstationClient<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssemblyLineWorkstations.
     * @param {AssemblyLineWorkstationCreateManyArgs} args - Arguments to create many AssemblyLineWorkstations.
     * @example
     * // Create many AssemblyLineWorkstations
     * const assemblyLineWorkstation = await prisma.assemblyLineWorkstation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssemblyLineWorkstationCreateManyArgs>(args?: SelectSubset<T, AssemblyLineWorkstationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssemblyLineWorkstations and returns the data saved in the database.
     * @param {AssemblyLineWorkstationCreateManyAndReturnArgs} args - Arguments to create many AssemblyLineWorkstations.
     * @example
     * // Create many AssemblyLineWorkstations
     * const assemblyLineWorkstation = await prisma.assemblyLineWorkstation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssemblyLineWorkstations and only return the `id`
     * const assemblyLineWorkstationWithIdOnly = await prisma.assemblyLineWorkstation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssemblyLineWorkstationCreateManyAndReturnArgs>(args?: SelectSubset<T, AssemblyLineWorkstationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssemblyLineWorkstation.
     * @param {AssemblyLineWorkstationDeleteArgs} args - Arguments to delete one AssemblyLineWorkstation.
     * @example
     * // Delete one AssemblyLineWorkstation
     * const AssemblyLineWorkstation = await prisma.assemblyLineWorkstation.delete({
     *   where: {
     *     // ... filter to delete one AssemblyLineWorkstation
     *   }
     * })
     * 
     */
    delete<T extends AssemblyLineWorkstationDeleteArgs>(args: SelectSubset<T, AssemblyLineWorkstationDeleteArgs<ExtArgs>>): Prisma__AssemblyLineWorkstationClient<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssemblyLineWorkstation.
     * @param {AssemblyLineWorkstationUpdateArgs} args - Arguments to update one AssemblyLineWorkstation.
     * @example
     * // Update one AssemblyLineWorkstation
     * const assemblyLineWorkstation = await prisma.assemblyLineWorkstation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssemblyLineWorkstationUpdateArgs>(args: SelectSubset<T, AssemblyLineWorkstationUpdateArgs<ExtArgs>>): Prisma__AssemblyLineWorkstationClient<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssemblyLineWorkstations.
     * @param {AssemblyLineWorkstationDeleteManyArgs} args - Arguments to filter AssemblyLineWorkstations to delete.
     * @example
     * // Delete a few AssemblyLineWorkstations
     * const { count } = await prisma.assemblyLineWorkstation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssemblyLineWorkstationDeleteManyArgs>(args?: SelectSubset<T, AssemblyLineWorkstationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssemblyLineWorkstations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineWorkstationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssemblyLineWorkstations
     * const assemblyLineWorkstation = await prisma.assemblyLineWorkstation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssemblyLineWorkstationUpdateManyArgs>(args: SelectSubset<T, AssemblyLineWorkstationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssemblyLineWorkstations and returns the data updated in the database.
     * @param {AssemblyLineWorkstationUpdateManyAndReturnArgs} args - Arguments to update many AssemblyLineWorkstations.
     * @example
     * // Update many AssemblyLineWorkstations
     * const assemblyLineWorkstation = await prisma.assemblyLineWorkstation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssemblyLineWorkstations and only return the `id`
     * const assemblyLineWorkstationWithIdOnly = await prisma.assemblyLineWorkstation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssemblyLineWorkstationUpdateManyAndReturnArgs>(args: SelectSubset<T, AssemblyLineWorkstationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssemblyLineWorkstation.
     * @param {AssemblyLineWorkstationUpsertArgs} args - Arguments to update or create a AssemblyLineWorkstation.
     * @example
     * // Update or create a AssemblyLineWorkstation
     * const assemblyLineWorkstation = await prisma.assemblyLineWorkstation.upsert({
     *   create: {
     *     // ... data to create a AssemblyLineWorkstation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssemblyLineWorkstation we want to update
     *   }
     * })
     */
    upsert<T extends AssemblyLineWorkstationUpsertArgs>(args: SelectSubset<T, AssemblyLineWorkstationUpsertArgs<ExtArgs>>): Prisma__AssemblyLineWorkstationClient<$Result.GetResult<Prisma.$AssemblyLineWorkstationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssemblyLineWorkstations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineWorkstationCountArgs} args - Arguments to filter AssemblyLineWorkstations to count.
     * @example
     * // Count the number of AssemblyLineWorkstations
     * const count = await prisma.assemblyLineWorkstation.count({
     *   where: {
     *     // ... the filter for the AssemblyLineWorkstations we want to count
     *   }
     * })
    **/
    count<T extends AssemblyLineWorkstationCountArgs>(
      args?: Subset<T, AssemblyLineWorkstationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssemblyLineWorkstationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssemblyLineWorkstation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineWorkstationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssemblyLineWorkstationAggregateArgs>(args: Subset<T, AssemblyLineWorkstationAggregateArgs>): Prisma.PrismaPromise<GetAssemblyLineWorkstationAggregateType<T>>

    /**
     * Group by AssemblyLineWorkstation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyLineWorkstationGroupByArgs} args - Group by arguments.
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
      T extends AssemblyLineWorkstationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssemblyLineWorkstationGroupByArgs['orderBy'] }
        : { orderBy?: AssemblyLineWorkstationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssemblyLineWorkstationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssemblyLineWorkstationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssemblyLineWorkstation model
   */
  readonly fields: AssemblyLineWorkstationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssemblyLineWorkstation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssemblyLineWorkstationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assemblyLine<T extends AssemblyLineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssemblyLineDefaultArgs<ExtArgs>>): Prisma__AssemblyLineClient<$Result.GetResult<Prisma.$AssemblyLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workstation<T extends WorkstationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkstationDefaultArgs<ExtArgs>>): Prisma__WorkstationClient<$Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AssemblyLineWorkstation model
   */
  interface AssemblyLineWorkstationFieldRefs {
    readonly id: FieldRef<"AssemblyLineWorkstation", 'Int'>
    readonly assemblyLineId: FieldRef<"AssemblyLineWorkstation", 'Int'>
    readonly workstationId: FieldRef<"AssemblyLineWorkstation", 'Int'>
    readonly order: FieldRef<"AssemblyLineWorkstation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AssemblyLineWorkstation findUnique
   */
  export type AssemblyLineWorkstationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
    /**
     * Filter, which AssemblyLineWorkstation to fetch.
     */
    where: AssemblyLineWorkstationWhereUniqueInput
  }

  /**
   * AssemblyLineWorkstation findUniqueOrThrow
   */
  export type AssemblyLineWorkstationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
    /**
     * Filter, which AssemblyLineWorkstation to fetch.
     */
    where: AssemblyLineWorkstationWhereUniqueInput
  }

  /**
   * AssemblyLineWorkstation findFirst
   */
  export type AssemblyLineWorkstationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
    /**
     * Filter, which AssemblyLineWorkstation to fetch.
     */
    where?: AssemblyLineWorkstationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssemblyLineWorkstations to fetch.
     */
    orderBy?: AssemblyLineWorkstationOrderByWithRelationInput | AssemblyLineWorkstationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssemblyLineWorkstations.
     */
    cursor?: AssemblyLineWorkstationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssemblyLineWorkstations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssemblyLineWorkstations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssemblyLineWorkstations.
     */
    distinct?: AssemblyLineWorkstationScalarFieldEnum | AssemblyLineWorkstationScalarFieldEnum[]
  }

  /**
   * AssemblyLineWorkstation findFirstOrThrow
   */
  export type AssemblyLineWorkstationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
    /**
     * Filter, which AssemblyLineWorkstation to fetch.
     */
    where?: AssemblyLineWorkstationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssemblyLineWorkstations to fetch.
     */
    orderBy?: AssemblyLineWorkstationOrderByWithRelationInput | AssemblyLineWorkstationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssemblyLineWorkstations.
     */
    cursor?: AssemblyLineWorkstationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssemblyLineWorkstations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssemblyLineWorkstations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssemblyLineWorkstations.
     */
    distinct?: AssemblyLineWorkstationScalarFieldEnum | AssemblyLineWorkstationScalarFieldEnum[]
  }

  /**
   * AssemblyLineWorkstation findMany
   */
  export type AssemblyLineWorkstationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
    /**
     * Filter, which AssemblyLineWorkstations to fetch.
     */
    where?: AssemblyLineWorkstationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssemblyLineWorkstations to fetch.
     */
    orderBy?: AssemblyLineWorkstationOrderByWithRelationInput | AssemblyLineWorkstationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssemblyLineWorkstations.
     */
    cursor?: AssemblyLineWorkstationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssemblyLineWorkstations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssemblyLineWorkstations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssemblyLineWorkstations.
     */
    distinct?: AssemblyLineWorkstationScalarFieldEnum | AssemblyLineWorkstationScalarFieldEnum[]
  }

  /**
   * AssemblyLineWorkstation create
   */
  export type AssemblyLineWorkstationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
    /**
     * The data needed to create a AssemblyLineWorkstation.
     */
    data: XOR<AssemblyLineWorkstationCreateInput, AssemblyLineWorkstationUncheckedCreateInput>
  }

  /**
   * AssemblyLineWorkstation createMany
   */
  export type AssemblyLineWorkstationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssemblyLineWorkstations.
     */
    data: AssemblyLineWorkstationCreateManyInput | AssemblyLineWorkstationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssemblyLineWorkstation createManyAndReturn
   */
  export type AssemblyLineWorkstationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * The data used to create many AssemblyLineWorkstations.
     */
    data: AssemblyLineWorkstationCreateManyInput | AssemblyLineWorkstationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssemblyLineWorkstation update
   */
  export type AssemblyLineWorkstationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
    /**
     * The data needed to update a AssemblyLineWorkstation.
     */
    data: XOR<AssemblyLineWorkstationUpdateInput, AssemblyLineWorkstationUncheckedUpdateInput>
    /**
     * Choose, which AssemblyLineWorkstation to update.
     */
    where: AssemblyLineWorkstationWhereUniqueInput
  }

  /**
   * AssemblyLineWorkstation updateMany
   */
  export type AssemblyLineWorkstationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssemblyLineWorkstations.
     */
    data: XOR<AssemblyLineWorkstationUpdateManyMutationInput, AssemblyLineWorkstationUncheckedUpdateManyInput>
    /**
     * Filter which AssemblyLineWorkstations to update
     */
    where?: AssemblyLineWorkstationWhereInput
    /**
     * Limit how many AssemblyLineWorkstations to update.
     */
    limit?: number
  }

  /**
   * AssemblyLineWorkstation updateManyAndReturn
   */
  export type AssemblyLineWorkstationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * The data used to update AssemblyLineWorkstations.
     */
    data: XOR<AssemblyLineWorkstationUpdateManyMutationInput, AssemblyLineWorkstationUncheckedUpdateManyInput>
    /**
     * Filter which AssemblyLineWorkstations to update
     */
    where?: AssemblyLineWorkstationWhereInput
    /**
     * Limit how many AssemblyLineWorkstations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssemblyLineWorkstation upsert
   */
  export type AssemblyLineWorkstationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
    /**
     * The filter to search for the AssemblyLineWorkstation to update in case it exists.
     */
    where: AssemblyLineWorkstationWhereUniqueInput
    /**
     * In case the AssemblyLineWorkstation found by the `where` argument doesn't exist, create a new AssemblyLineWorkstation with this data.
     */
    create: XOR<AssemblyLineWorkstationCreateInput, AssemblyLineWorkstationUncheckedCreateInput>
    /**
     * In case the AssemblyLineWorkstation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssemblyLineWorkstationUpdateInput, AssemblyLineWorkstationUncheckedUpdateInput>
  }

  /**
   * AssemblyLineWorkstation delete
   */
  export type AssemblyLineWorkstationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
    /**
     * Filter which AssemblyLineWorkstation to delete.
     */
    where: AssemblyLineWorkstationWhereUniqueInput
  }

  /**
   * AssemblyLineWorkstation deleteMany
   */
  export type AssemblyLineWorkstationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssemblyLineWorkstations to delete
     */
    where?: AssemblyLineWorkstationWhereInput
    /**
     * Limit how many AssemblyLineWorkstations to delete.
     */
    limit?: number
  }

  /**
   * AssemblyLineWorkstation without action
   */
  export type AssemblyLineWorkstationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssemblyLineWorkstation
     */
    select?: AssemblyLineWorkstationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssemblyLineWorkstation
     */
    omit?: AssemblyLineWorkstationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssemblyLineWorkstationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    profession: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    profession: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    profession: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    profession?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    profession?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    profession?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    passwordHash: string
    profession: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    profession?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    profession?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    profession?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    profession?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "profession", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      passwordHash: string
      profession: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly profession: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const AssemblyLineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    active: 'active',
    productId: 'productId'
  };

  export type AssemblyLineScalarFieldEnum = (typeof AssemblyLineScalarFieldEnum)[keyof typeof AssemblyLineScalarFieldEnum]


  export const WorkstationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shortName: 'shortName',
    pcName: 'pcName'
  };

  export type WorkstationScalarFieldEnum = (typeof WorkstationScalarFieldEnum)[keyof typeof WorkstationScalarFieldEnum]


  export const AssemblyLineWorkstationScalarFieldEnum: {
    id: 'id',
    assemblyLineId: 'assemblyLineId',
    workstationId: 'workstationId',
    order: 'order'
  };

  export type AssemblyLineWorkstationScalarFieldEnum = (typeof AssemblyLineWorkstationScalarFieldEnum)[keyof typeof AssemblyLineWorkstationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    profession: 'profession'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    assemblyLines?: AssemblyLineListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    assemblyLines?: AssemblyLineOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    assemblyLines?: AssemblyLineListRelationFilter
  }, "id" | "name">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
  }

  export type AssemblyLineWhereInput = {
    AND?: AssemblyLineWhereInput | AssemblyLineWhereInput[]
    OR?: AssemblyLineWhereInput[]
    NOT?: AssemblyLineWhereInput | AssemblyLineWhereInput[]
    id?: IntFilter<"AssemblyLine"> | number
    name?: StringFilter<"AssemblyLine"> | string
    active?: BoolFilter<"AssemblyLine"> | boolean
    productId?: IntFilter<"AssemblyLine"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    assemblyLineWorkStations?: AssemblyLineWorkstationListRelationFilter
  }

  export type AssemblyLineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    assemblyLineWorkStations?: AssemblyLineWorkstationOrderByRelationAggregateInput
  }

  export type AssemblyLineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_name?: AssemblyLineProductIdNameCompoundUniqueInput
    AND?: AssemblyLineWhereInput | AssemblyLineWhereInput[]
    OR?: AssemblyLineWhereInput[]
    NOT?: AssemblyLineWhereInput | AssemblyLineWhereInput[]
    name?: StringFilter<"AssemblyLine"> | string
    active?: BoolFilter<"AssemblyLine"> | boolean
    productId?: IntFilter<"AssemblyLine"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    assemblyLineWorkStations?: AssemblyLineWorkstationListRelationFilter
  }, "id" | "productId_name">

  export type AssemblyLineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    productId?: SortOrder
    _count?: AssemblyLineCountOrderByAggregateInput
    _avg?: AssemblyLineAvgOrderByAggregateInput
    _max?: AssemblyLineMaxOrderByAggregateInput
    _min?: AssemblyLineMinOrderByAggregateInput
    _sum?: AssemblyLineSumOrderByAggregateInput
  }

  export type AssemblyLineScalarWhereWithAggregatesInput = {
    AND?: AssemblyLineScalarWhereWithAggregatesInput | AssemblyLineScalarWhereWithAggregatesInput[]
    OR?: AssemblyLineScalarWhereWithAggregatesInput[]
    NOT?: AssemblyLineScalarWhereWithAggregatesInput | AssemblyLineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssemblyLine"> | number
    name?: StringWithAggregatesFilter<"AssemblyLine"> | string
    active?: BoolWithAggregatesFilter<"AssemblyLine"> | boolean
    productId?: IntWithAggregatesFilter<"AssemblyLine"> | number
  }

  export type WorkstationWhereInput = {
    AND?: WorkstationWhereInput | WorkstationWhereInput[]
    OR?: WorkstationWhereInput[]
    NOT?: WorkstationWhereInput | WorkstationWhereInput[]
    id?: IntFilter<"Workstation"> | number
    name?: StringFilter<"Workstation"> | string
    shortName?: StringFilter<"Workstation"> | string
    pcName?: StringFilter<"Workstation"> | string
    assemblyLineWorkStations?: AssemblyLineWorkstationListRelationFilter
  }

  export type WorkstationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    pcName?: SortOrder
    assemblyLineWorkStations?: AssemblyLineWorkstationOrderByRelationAggregateInput
  }

  export type WorkstationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: WorkstationWhereInput | WorkstationWhereInput[]
    OR?: WorkstationWhereInput[]
    NOT?: WorkstationWhereInput | WorkstationWhereInput[]
    shortName?: StringFilter<"Workstation"> | string
    pcName?: StringFilter<"Workstation"> | string
    assemblyLineWorkStations?: AssemblyLineWorkstationListRelationFilter
  }, "id" | "name">

  export type WorkstationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    pcName?: SortOrder
    _count?: WorkstationCountOrderByAggregateInput
    _avg?: WorkstationAvgOrderByAggregateInput
    _max?: WorkstationMaxOrderByAggregateInput
    _min?: WorkstationMinOrderByAggregateInput
    _sum?: WorkstationSumOrderByAggregateInput
  }

  export type WorkstationScalarWhereWithAggregatesInput = {
    AND?: WorkstationScalarWhereWithAggregatesInput | WorkstationScalarWhereWithAggregatesInput[]
    OR?: WorkstationScalarWhereWithAggregatesInput[]
    NOT?: WorkstationScalarWhereWithAggregatesInput | WorkstationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workstation"> | number
    name?: StringWithAggregatesFilter<"Workstation"> | string
    shortName?: StringWithAggregatesFilter<"Workstation"> | string
    pcName?: StringWithAggregatesFilter<"Workstation"> | string
  }

  export type AssemblyLineWorkstationWhereInput = {
    AND?: AssemblyLineWorkstationWhereInput | AssemblyLineWorkstationWhereInput[]
    OR?: AssemblyLineWorkstationWhereInput[]
    NOT?: AssemblyLineWorkstationWhereInput | AssemblyLineWorkstationWhereInput[]
    id?: IntFilter<"AssemblyLineWorkstation"> | number
    assemblyLineId?: IntFilter<"AssemblyLineWorkstation"> | number
    workstationId?: IntFilter<"AssemblyLineWorkstation"> | number
    order?: IntFilter<"AssemblyLineWorkstation"> | number
    assemblyLine?: XOR<AssemblyLineScalarRelationFilter, AssemblyLineWhereInput>
    workstation?: XOR<WorkstationScalarRelationFilter, WorkstationWhereInput>
  }

  export type AssemblyLineWorkstationOrderByWithRelationInput = {
    id?: SortOrder
    assemblyLineId?: SortOrder
    workstationId?: SortOrder
    order?: SortOrder
    assemblyLine?: AssemblyLineOrderByWithRelationInput
    workstation?: WorkstationOrderByWithRelationInput
  }

  export type AssemblyLineWorkstationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    assemblyLineId_workstationId?: AssemblyLineWorkstationAssemblyLineIdWorkstationIdCompoundUniqueInput
    AND?: AssemblyLineWorkstationWhereInput | AssemblyLineWorkstationWhereInput[]
    OR?: AssemblyLineWorkstationWhereInput[]
    NOT?: AssemblyLineWorkstationWhereInput | AssemblyLineWorkstationWhereInput[]
    assemblyLineId?: IntFilter<"AssemblyLineWorkstation"> | number
    workstationId?: IntFilter<"AssemblyLineWorkstation"> | number
    order?: IntFilter<"AssemblyLineWorkstation"> | number
    assemblyLine?: XOR<AssemblyLineScalarRelationFilter, AssemblyLineWhereInput>
    workstation?: XOR<WorkstationScalarRelationFilter, WorkstationWhereInput>
  }, "id" | "assemblyLineId_workstationId">

  export type AssemblyLineWorkstationOrderByWithAggregationInput = {
    id?: SortOrder
    assemblyLineId?: SortOrder
    workstationId?: SortOrder
    order?: SortOrder
    _count?: AssemblyLineWorkstationCountOrderByAggregateInput
    _avg?: AssemblyLineWorkstationAvgOrderByAggregateInput
    _max?: AssemblyLineWorkstationMaxOrderByAggregateInput
    _min?: AssemblyLineWorkstationMinOrderByAggregateInput
    _sum?: AssemblyLineWorkstationSumOrderByAggregateInput
  }

  export type AssemblyLineWorkstationScalarWhereWithAggregatesInput = {
    AND?: AssemblyLineWorkstationScalarWhereWithAggregatesInput | AssemblyLineWorkstationScalarWhereWithAggregatesInput[]
    OR?: AssemblyLineWorkstationScalarWhereWithAggregatesInput[]
    NOT?: AssemblyLineWorkstationScalarWhereWithAggregatesInput | AssemblyLineWorkstationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssemblyLineWorkstation"> | number
    assemblyLineId?: IntWithAggregatesFilter<"AssemblyLineWorkstation"> | number
    workstationId?: IntWithAggregatesFilter<"AssemblyLineWorkstation"> | number
    order?: IntWithAggregatesFilter<"AssemblyLineWorkstation"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    profession?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    profession?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    profession?: StringNullableFilter<"User"> | string | null
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    profession?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    profession?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ProductCreateInput = {
    name: string
    assemblyLines?: AssemblyLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    assemblyLines?: AssemblyLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    assemblyLines?: AssemblyLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    assemblyLines?: AssemblyLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AssemblyLineCreateInput = {
    name: string
    active?: boolean
    product: ProductCreateNestedOneWithoutAssemblyLinesInput
    assemblyLineWorkStations?: AssemblyLineWorkstationCreateNestedManyWithoutAssemblyLineInput
  }

  export type AssemblyLineUncheckedCreateInput = {
    id?: number
    name: string
    active?: boolean
    productId: number
    assemblyLineWorkStations?: AssemblyLineWorkstationUncheckedCreateNestedManyWithoutAssemblyLineInput
  }

  export type AssemblyLineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    product?: ProductUpdateOneRequiredWithoutAssemblyLinesNestedInput
    assemblyLineWorkStations?: AssemblyLineWorkstationUpdateManyWithoutAssemblyLineNestedInput
  }

  export type AssemblyLineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
    assemblyLineWorkStations?: AssemblyLineWorkstationUncheckedUpdateManyWithoutAssemblyLineNestedInput
  }

  export type AssemblyLineCreateManyInput = {
    id?: number
    name: string
    active?: boolean
    productId: number
  }

  export type AssemblyLineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssemblyLineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkstationCreateInput = {
    name: string
    shortName: string
    pcName: string
    assemblyLineWorkStations?: AssemblyLineWorkstationCreateNestedManyWithoutWorkstationInput
  }

  export type WorkstationUncheckedCreateInput = {
    id?: number
    name: string
    shortName: string
    pcName: string
    assemblyLineWorkStations?: AssemblyLineWorkstationUncheckedCreateNestedManyWithoutWorkstationInput
  }

  export type WorkstationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    pcName?: StringFieldUpdateOperationsInput | string
    assemblyLineWorkStations?: AssemblyLineWorkstationUpdateManyWithoutWorkstationNestedInput
  }

  export type WorkstationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    pcName?: StringFieldUpdateOperationsInput | string
    assemblyLineWorkStations?: AssemblyLineWorkstationUncheckedUpdateManyWithoutWorkstationNestedInput
  }

  export type WorkstationCreateManyInput = {
    id?: number
    name: string
    shortName: string
    pcName: string
  }

  export type WorkstationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    pcName?: StringFieldUpdateOperationsInput | string
  }

  export type WorkstationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    pcName?: StringFieldUpdateOperationsInput | string
  }

  export type AssemblyLineWorkstationCreateInput = {
    order: number
    assemblyLine: AssemblyLineCreateNestedOneWithoutAssemblyLineWorkStationsInput
    workstation: WorkstationCreateNestedOneWithoutAssemblyLineWorkStationsInput
  }

  export type AssemblyLineWorkstationUncheckedCreateInput = {
    id?: number
    assemblyLineId: number
    workstationId: number
    order: number
  }

  export type AssemblyLineWorkstationUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    assemblyLine?: AssemblyLineUpdateOneRequiredWithoutAssemblyLineWorkStationsNestedInput
    workstation?: WorkstationUpdateOneRequiredWithoutAssemblyLineWorkStationsNestedInput
  }

  export type AssemblyLineWorkstationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assemblyLineId?: IntFieldUpdateOperationsInput | number
    workstationId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type AssemblyLineWorkstationCreateManyInput = {
    id?: number
    assemblyLineId: number
    workstationId: number
    order: number
  }

  export type AssemblyLineWorkstationUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
  }

  export type AssemblyLineWorkstationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assemblyLineId?: IntFieldUpdateOperationsInput | number
    workstationId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    username: string
    passwordHash: string
    profession?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    passwordHash: string
    profession?: string | null
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    passwordHash: string
    profession?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type AssemblyLineListRelationFilter = {
    every?: AssemblyLineWhereInput
    some?: AssemblyLineWhereInput
    none?: AssemblyLineWhereInput
  }

  export type AssemblyLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type AssemblyLineWorkstationListRelationFilter = {
    every?: AssemblyLineWorkstationWhereInput
    some?: AssemblyLineWorkstationWhereInput
    none?: AssemblyLineWorkstationWhereInput
  }

  export type AssemblyLineWorkstationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssemblyLineProductIdNameCompoundUniqueInput = {
    productId: number
    name: string
  }

  export type AssemblyLineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    productId?: SortOrder
  }

  export type AssemblyLineAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type AssemblyLineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    productId?: SortOrder
  }

  export type AssemblyLineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    productId?: SortOrder
  }

  export type AssemblyLineSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WorkstationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    pcName?: SortOrder
  }

  export type WorkstationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkstationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    pcName?: SortOrder
  }

  export type WorkstationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    pcName?: SortOrder
  }

  export type WorkstationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AssemblyLineScalarRelationFilter = {
    is?: AssemblyLineWhereInput
    isNot?: AssemblyLineWhereInput
  }

  export type WorkstationScalarRelationFilter = {
    is?: WorkstationWhereInput
    isNot?: WorkstationWhereInput
  }

  export type AssemblyLineWorkstationAssemblyLineIdWorkstationIdCompoundUniqueInput = {
    assemblyLineId: number
    workstationId: number
  }

  export type AssemblyLineWorkstationCountOrderByAggregateInput = {
    id?: SortOrder
    assemblyLineId?: SortOrder
    workstationId?: SortOrder
    order?: SortOrder
  }

  export type AssemblyLineWorkstationAvgOrderByAggregateInput = {
    id?: SortOrder
    assemblyLineId?: SortOrder
    workstationId?: SortOrder
    order?: SortOrder
  }

  export type AssemblyLineWorkstationMaxOrderByAggregateInput = {
    id?: SortOrder
    assemblyLineId?: SortOrder
    workstationId?: SortOrder
    order?: SortOrder
  }

  export type AssemblyLineWorkstationMinOrderByAggregateInput = {
    id?: SortOrder
    assemblyLineId?: SortOrder
    workstationId?: SortOrder
    order?: SortOrder
  }

  export type AssemblyLineWorkstationSumOrderByAggregateInput = {
    id?: SortOrder
    assemblyLineId?: SortOrder
    workstationId?: SortOrder
    order?: SortOrder
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
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    profession?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    profession?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    profession?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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
  }

  export type AssemblyLineCreateNestedManyWithoutProductInput = {
    create?: XOR<AssemblyLineCreateWithoutProductInput, AssemblyLineUncheckedCreateWithoutProductInput> | AssemblyLineCreateWithoutProductInput[] | AssemblyLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AssemblyLineCreateOrConnectWithoutProductInput | AssemblyLineCreateOrConnectWithoutProductInput[]
    createMany?: AssemblyLineCreateManyProductInputEnvelope
    connect?: AssemblyLineWhereUniqueInput | AssemblyLineWhereUniqueInput[]
  }

  export type AssemblyLineUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<AssemblyLineCreateWithoutProductInput, AssemblyLineUncheckedCreateWithoutProductInput> | AssemblyLineCreateWithoutProductInput[] | AssemblyLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AssemblyLineCreateOrConnectWithoutProductInput | AssemblyLineCreateOrConnectWithoutProductInput[]
    createMany?: AssemblyLineCreateManyProductInputEnvelope
    connect?: AssemblyLineWhereUniqueInput | AssemblyLineWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AssemblyLineUpdateManyWithoutProductNestedInput = {
    create?: XOR<AssemblyLineCreateWithoutProductInput, AssemblyLineUncheckedCreateWithoutProductInput> | AssemblyLineCreateWithoutProductInput[] | AssemblyLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AssemblyLineCreateOrConnectWithoutProductInput | AssemblyLineCreateOrConnectWithoutProductInput[]
    upsert?: AssemblyLineUpsertWithWhereUniqueWithoutProductInput | AssemblyLineUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: AssemblyLineCreateManyProductInputEnvelope
    set?: AssemblyLineWhereUniqueInput | AssemblyLineWhereUniqueInput[]
    disconnect?: AssemblyLineWhereUniqueInput | AssemblyLineWhereUniqueInput[]
    delete?: AssemblyLineWhereUniqueInput | AssemblyLineWhereUniqueInput[]
    connect?: AssemblyLineWhereUniqueInput | AssemblyLineWhereUniqueInput[]
    update?: AssemblyLineUpdateWithWhereUniqueWithoutProductInput | AssemblyLineUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: AssemblyLineUpdateManyWithWhereWithoutProductInput | AssemblyLineUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: AssemblyLineScalarWhereInput | AssemblyLineScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssemblyLineUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<AssemblyLineCreateWithoutProductInput, AssemblyLineUncheckedCreateWithoutProductInput> | AssemblyLineCreateWithoutProductInput[] | AssemblyLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AssemblyLineCreateOrConnectWithoutProductInput | AssemblyLineCreateOrConnectWithoutProductInput[]
    upsert?: AssemblyLineUpsertWithWhereUniqueWithoutProductInput | AssemblyLineUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: AssemblyLineCreateManyProductInputEnvelope
    set?: AssemblyLineWhereUniqueInput | AssemblyLineWhereUniqueInput[]
    disconnect?: AssemblyLineWhereUniqueInput | AssemblyLineWhereUniqueInput[]
    delete?: AssemblyLineWhereUniqueInput | AssemblyLineWhereUniqueInput[]
    connect?: AssemblyLineWhereUniqueInput | AssemblyLineWhereUniqueInput[]
    update?: AssemblyLineUpdateWithWhereUniqueWithoutProductInput | AssemblyLineUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: AssemblyLineUpdateManyWithWhereWithoutProductInput | AssemblyLineUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: AssemblyLineScalarWhereInput | AssemblyLineScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutAssemblyLinesInput = {
    create?: XOR<ProductCreateWithoutAssemblyLinesInput, ProductUncheckedCreateWithoutAssemblyLinesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAssemblyLinesInput
    connect?: ProductWhereUniqueInput
  }

  export type AssemblyLineWorkstationCreateNestedManyWithoutAssemblyLineInput = {
    create?: XOR<AssemblyLineWorkstationCreateWithoutAssemblyLineInput, AssemblyLineWorkstationUncheckedCreateWithoutAssemblyLineInput> | AssemblyLineWorkstationCreateWithoutAssemblyLineInput[] | AssemblyLineWorkstationUncheckedCreateWithoutAssemblyLineInput[]
    connectOrCreate?: AssemblyLineWorkstationCreateOrConnectWithoutAssemblyLineInput | AssemblyLineWorkstationCreateOrConnectWithoutAssemblyLineInput[]
    createMany?: AssemblyLineWorkstationCreateManyAssemblyLineInputEnvelope
    connect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
  }

  export type AssemblyLineWorkstationUncheckedCreateNestedManyWithoutAssemblyLineInput = {
    create?: XOR<AssemblyLineWorkstationCreateWithoutAssemblyLineInput, AssemblyLineWorkstationUncheckedCreateWithoutAssemblyLineInput> | AssemblyLineWorkstationCreateWithoutAssemblyLineInput[] | AssemblyLineWorkstationUncheckedCreateWithoutAssemblyLineInput[]
    connectOrCreate?: AssemblyLineWorkstationCreateOrConnectWithoutAssemblyLineInput | AssemblyLineWorkstationCreateOrConnectWithoutAssemblyLineInput[]
    createMany?: AssemblyLineWorkstationCreateManyAssemblyLineInputEnvelope
    connect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdateOneRequiredWithoutAssemblyLinesNestedInput = {
    create?: XOR<ProductCreateWithoutAssemblyLinesInput, ProductUncheckedCreateWithoutAssemblyLinesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAssemblyLinesInput
    upsert?: ProductUpsertWithoutAssemblyLinesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAssemblyLinesInput, ProductUpdateWithoutAssemblyLinesInput>, ProductUncheckedUpdateWithoutAssemblyLinesInput>
  }

  export type AssemblyLineWorkstationUpdateManyWithoutAssemblyLineNestedInput = {
    create?: XOR<AssemblyLineWorkstationCreateWithoutAssemblyLineInput, AssemblyLineWorkstationUncheckedCreateWithoutAssemblyLineInput> | AssemblyLineWorkstationCreateWithoutAssemblyLineInput[] | AssemblyLineWorkstationUncheckedCreateWithoutAssemblyLineInput[]
    connectOrCreate?: AssemblyLineWorkstationCreateOrConnectWithoutAssemblyLineInput | AssemblyLineWorkstationCreateOrConnectWithoutAssemblyLineInput[]
    upsert?: AssemblyLineWorkstationUpsertWithWhereUniqueWithoutAssemblyLineInput | AssemblyLineWorkstationUpsertWithWhereUniqueWithoutAssemblyLineInput[]
    createMany?: AssemblyLineWorkstationCreateManyAssemblyLineInputEnvelope
    set?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    disconnect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    delete?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    connect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    update?: AssemblyLineWorkstationUpdateWithWhereUniqueWithoutAssemblyLineInput | AssemblyLineWorkstationUpdateWithWhereUniqueWithoutAssemblyLineInput[]
    updateMany?: AssemblyLineWorkstationUpdateManyWithWhereWithoutAssemblyLineInput | AssemblyLineWorkstationUpdateManyWithWhereWithoutAssemblyLineInput[]
    deleteMany?: AssemblyLineWorkstationScalarWhereInput | AssemblyLineWorkstationScalarWhereInput[]
  }

  export type AssemblyLineWorkstationUncheckedUpdateManyWithoutAssemblyLineNestedInput = {
    create?: XOR<AssemblyLineWorkstationCreateWithoutAssemblyLineInput, AssemblyLineWorkstationUncheckedCreateWithoutAssemblyLineInput> | AssemblyLineWorkstationCreateWithoutAssemblyLineInput[] | AssemblyLineWorkstationUncheckedCreateWithoutAssemblyLineInput[]
    connectOrCreate?: AssemblyLineWorkstationCreateOrConnectWithoutAssemblyLineInput | AssemblyLineWorkstationCreateOrConnectWithoutAssemblyLineInput[]
    upsert?: AssemblyLineWorkstationUpsertWithWhereUniqueWithoutAssemblyLineInput | AssemblyLineWorkstationUpsertWithWhereUniqueWithoutAssemblyLineInput[]
    createMany?: AssemblyLineWorkstationCreateManyAssemblyLineInputEnvelope
    set?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    disconnect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    delete?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    connect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    update?: AssemblyLineWorkstationUpdateWithWhereUniqueWithoutAssemblyLineInput | AssemblyLineWorkstationUpdateWithWhereUniqueWithoutAssemblyLineInput[]
    updateMany?: AssemblyLineWorkstationUpdateManyWithWhereWithoutAssemblyLineInput | AssemblyLineWorkstationUpdateManyWithWhereWithoutAssemblyLineInput[]
    deleteMany?: AssemblyLineWorkstationScalarWhereInput | AssemblyLineWorkstationScalarWhereInput[]
  }

  export type AssemblyLineWorkstationCreateNestedManyWithoutWorkstationInput = {
    create?: XOR<AssemblyLineWorkstationCreateWithoutWorkstationInput, AssemblyLineWorkstationUncheckedCreateWithoutWorkstationInput> | AssemblyLineWorkstationCreateWithoutWorkstationInput[] | AssemblyLineWorkstationUncheckedCreateWithoutWorkstationInput[]
    connectOrCreate?: AssemblyLineWorkstationCreateOrConnectWithoutWorkstationInput | AssemblyLineWorkstationCreateOrConnectWithoutWorkstationInput[]
    createMany?: AssemblyLineWorkstationCreateManyWorkstationInputEnvelope
    connect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
  }

  export type AssemblyLineWorkstationUncheckedCreateNestedManyWithoutWorkstationInput = {
    create?: XOR<AssemblyLineWorkstationCreateWithoutWorkstationInput, AssemblyLineWorkstationUncheckedCreateWithoutWorkstationInput> | AssemblyLineWorkstationCreateWithoutWorkstationInput[] | AssemblyLineWorkstationUncheckedCreateWithoutWorkstationInput[]
    connectOrCreate?: AssemblyLineWorkstationCreateOrConnectWithoutWorkstationInput | AssemblyLineWorkstationCreateOrConnectWithoutWorkstationInput[]
    createMany?: AssemblyLineWorkstationCreateManyWorkstationInputEnvelope
    connect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
  }

  export type AssemblyLineWorkstationUpdateManyWithoutWorkstationNestedInput = {
    create?: XOR<AssemblyLineWorkstationCreateWithoutWorkstationInput, AssemblyLineWorkstationUncheckedCreateWithoutWorkstationInput> | AssemblyLineWorkstationCreateWithoutWorkstationInput[] | AssemblyLineWorkstationUncheckedCreateWithoutWorkstationInput[]
    connectOrCreate?: AssemblyLineWorkstationCreateOrConnectWithoutWorkstationInput | AssemblyLineWorkstationCreateOrConnectWithoutWorkstationInput[]
    upsert?: AssemblyLineWorkstationUpsertWithWhereUniqueWithoutWorkstationInput | AssemblyLineWorkstationUpsertWithWhereUniqueWithoutWorkstationInput[]
    createMany?: AssemblyLineWorkstationCreateManyWorkstationInputEnvelope
    set?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    disconnect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    delete?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    connect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    update?: AssemblyLineWorkstationUpdateWithWhereUniqueWithoutWorkstationInput | AssemblyLineWorkstationUpdateWithWhereUniqueWithoutWorkstationInput[]
    updateMany?: AssemblyLineWorkstationUpdateManyWithWhereWithoutWorkstationInput | AssemblyLineWorkstationUpdateManyWithWhereWithoutWorkstationInput[]
    deleteMany?: AssemblyLineWorkstationScalarWhereInput | AssemblyLineWorkstationScalarWhereInput[]
  }

  export type AssemblyLineWorkstationUncheckedUpdateManyWithoutWorkstationNestedInput = {
    create?: XOR<AssemblyLineWorkstationCreateWithoutWorkstationInput, AssemblyLineWorkstationUncheckedCreateWithoutWorkstationInput> | AssemblyLineWorkstationCreateWithoutWorkstationInput[] | AssemblyLineWorkstationUncheckedCreateWithoutWorkstationInput[]
    connectOrCreate?: AssemblyLineWorkstationCreateOrConnectWithoutWorkstationInput | AssemblyLineWorkstationCreateOrConnectWithoutWorkstationInput[]
    upsert?: AssemblyLineWorkstationUpsertWithWhereUniqueWithoutWorkstationInput | AssemblyLineWorkstationUpsertWithWhereUniqueWithoutWorkstationInput[]
    createMany?: AssemblyLineWorkstationCreateManyWorkstationInputEnvelope
    set?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    disconnect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    delete?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    connect?: AssemblyLineWorkstationWhereUniqueInput | AssemblyLineWorkstationWhereUniqueInput[]
    update?: AssemblyLineWorkstationUpdateWithWhereUniqueWithoutWorkstationInput | AssemblyLineWorkstationUpdateWithWhereUniqueWithoutWorkstationInput[]
    updateMany?: AssemblyLineWorkstationUpdateManyWithWhereWithoutWorkstationInput | AssemblyLineWorkstationUpdateManyWithWhereWithoutWorkstationInput[]
    deleteMany?: AssemblyLineWorkstationScalarWhereInput | AssemblyLineWorkstationScalarWhereInput[]
  }

  export type AssemblyLineCreateNestedOneWithoutAssemblyLineWorkStationsInput = {
    create?: XOR<AssemblyLineCreateWithoutAssemblyLineWorkStationsInput, AssemblyLineUncheckedCreateWithoutAssemblyLineWorkStationsInput>
    connectOrCreate?: AssemblyLineCreateOrConnectWithoutAssemblyLineWorkStationsInput
    connect?: AssemblyLineWhereUniqueInput
  }

  export type WorkstationCreateNestedOneWithoutAssemblyLineWorkStationsInput = {
    create?: XOR<WorkstationCreateWithoutAssemblyLineWorkStationsInput, WorkstationUncheckedCreateWithoutAssemblyLineWorkStationsInput>
    connectOrCreate?: WorkstationCreateOrConnectWithoutAssemblyLineWorkStationsInput
    connect?: WorkstationWhereUniqueInput
  }

  export type AssemblyLineUpdateOneRequiredWithoutAssemblyLineWorkStationsNestedInput = {
    create?: XOR<AssemblyLineCreateWithoutAssemblyLineWorkStationsInput, AssemblyLineUncheckedCreateWithoutAssemblyLineWorkStationsInput>
    connectOrCreate?: AssemblyLineCreateOrConnectWithoutAssemblyLineWorkStationsInput
    upsert?: AssemblyLineUpsertWithoutAssemblyLineWorkStationsInput
    connect?: AssemblyLineWhereUniqueInput
    update?: XOR<XOR<AssemblyLineUpdateToOneWithWhereWithoutAssemblyLineWorkStationsInput, AssemblyLineUpdateWithoutAssemblyLineWorkStationsInput>, AssemblyLineUncheckedUpdateWithoutAssemblyLineWorkStationsInput>
  }

  export type WorkstationUpdateOneRequiredWithoutAssemblyLineWorkStationsNestedInput = {
    create?: XOR<WorkstationCreateWithoutAssemblyLineWorkStationsInput, WorkstationUncheckedCreateWithoutAssemblyLineWorkStationsInput>
    connectOrCreate?: WorkstationCreateOrConnectWithoutAssemblyLineWorkStationsInput
    upsert?: WorkstationUpsertWithoutAssemblyLineWorkStationsInput
    connect?: WorkstationWhereUniqueInput
    update?: XOR<XOR<WorkstationUpdateToOneWithWhereWithoutAssemblyLineWorkStationsInput, WorkstationUpdateWithoutAssemblyLineWorkStationsInput>, WorkstationUncheckedUpdateWithoutAssemblyLineWorkStationsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  }

  export type AssemblyLineCreateWithoutProductInput = {
    name: string
    active?: boolean
    assemblyLineWorkStations?: AssemblyLineWorkstationCreateNestedManyWithoutAssemblyLineInput
  }

  export type AssemblyLineUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    active?: boolean
    assemblyLineWorkStations?: AssemblyLineWorkstationUncheckedCreateNestedManyWithoutAssemblyLineInput
  }

  export type AssemblyLineCreateOrConnectWithoutProductInput = {
    where: AssemblyLineWhereUniqueInput
    create: XOR<AssemblyLineCreateWithoutProductInput, AssemblyLineUncheckedCreateWithoutProductInput>
  }

  export type AssemblyLineCreateManyProductInputEnvelope = {
    data: AssemblyLineCreateManyProductInput | AssemblyLineCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type AssemblyLineUpsertWithWhereUniqueWithoutProductInput = {
    where: AssemblyLineWhereUniqueInput
    update: XOR<AssemblyLineUpdateWithoutProductInput, AssemblyLineUncheckedUpdateWithoutProductInput>
    create: XOR<AssemblyLineCreateWithoutProductInput, AssemblyLineUncheckedCreateWithoutProductInput>
  }

  export type AssemblyLineUpdateWithWhereUniqueWithoutProductInput = {
    where: AssemblyLineWhereUniqueInput
    data: XOR<AssemblyLineUpdateWithoutProductInput, AssemblyLineUncheckedUpdateWithoutProductInput>
  }

  export type AssemblyLineUpdateManyWithWhereWithoutProductInput = {
    where: AssemblyLineScalarWhereInput
    data: XOR<AssemblyLineUpdateManyMutationInput, AssemblyLineUncheckedUpdateManyWithoutProductInput>
  }

  export type AssemblyLineScalarWhereInput = {
    AND?: AssemblyLineScalarWhereInput | AssemblyLineScalarWhereInput[]
    OR?: AssemblyLineScalarWhereInput[]
    NOT?: AssemblyLineScalarWhereInput | AssemblyLineScalarWhereInput[]
    id?: IntFilter<"AssemblyLine"> | number
    name?: StringFilter<"AssemblyLine"> | string
    active?: BoolFilter<"AssemblyLine"> | boolean
    productId?: IntFilter<"AssemblyLine"> | number
  }

  export type ProductCreateWithoutAssemblyLinesInput = {
    name: string
  }

  export type ProductUncheckedCreateWithoutAssemblyLinesInput = {
    id?: number
    name: string
  }

  export type ProductCreateOrConnectWithoutAssemblyLinesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAssemblyLinesInput, ProductUncheckedCreateWithoutAssemblyLinesInput>
  }

  export type AssemblyLineWorkstationCreateWithoutAssemblyLineInput = {
    order: number
    workstation: WorkstationCreateNestedOneWithoutAssemblyLineWorkStationsInput
  }

  export type AssemblyLineWorkstationUncheckedCreateWithoutAssemblyLineInput = {
    id?: number
    workstationId: number
    order: number
  }

  export type AssemblyLineWorkstationCreateOrConnectWithoutAssemblyLineInput = {
    where: AssemblyLineWorkstationWhereUniqueInput
    create: XOR<AssemblyLineWorkstationCreateWithoutAssemblyLineInput, AssemblyLineWorkstationUncheckedCreateWithoutAssemblyLineInput>
  }

  export type AssemblyLineWorkstationCreateManyAssemblyLineInputEnvelope = {
    data: AssemblyLineWorkstationCreateManyAssemblyLineInput | AssemblyLineWorkstationCreateManyAssemblyLineInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutAssemblyLinesInput = {
    update: XOR<ProductUpdateWithoutAssemblyLinesInput, ProductUncheckedUpdateWithoutAssemblyLinesInput>
    create: XOR<ProductCreateWithoutAssemblyLinesInput, ProductUncheckedCreateWithoutAssemblyLinesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAssemblyLinesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAssemblyLinesInput, ProductUncheckedUpdateWithoutAssemblyLinesInput>
  }

  export type ProductUpdateWithoutAssemblyLinesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateWithoutAssemblyLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AssemblyLineWorkstationUpsertWithWhereUniqueWithoutAssemblyLineInput = {
    where: AssemblyLineWorkstationWhereUniqueInput
    update: XOR<AssemblyLineWorkstationUpdateWithoutAssemblyLineInput, AssemblyLineWorkstationUncheckedUpdateWithoutAssemblyLineInput>
    create: XOR<AssemblyLineWorkstationCreateWithoutAssemblyLineInput, AssemblyLineWorkstationUncheckedCreateWithoutAssemblyLineInput>
  }

  export type AssemblyLineWorkstationUpdateWithWhereUniqueWithoutAssemblyLineInput = {
    where: AssemblyLineWorkstationWhereUniqueInput
    data: XOR<AssemblyLineWorkstationUpdateWithoutAssemblyLineInput, AssemblyLineWorkstationUncheckedUpdateWithoutAssemblyLineInput>
  }

  export type AssemblyLineWorkstationUpdateManyWithWhereWithoutAssemblyLineInput = {
    where: AssemblyLineWorkstationScalarWhereInput
    data: XOR<AssemblyLineWorkstationUpdateManyMutationInput, AssemblyLineWorkstationUncheckedUpdateManyWithoutAssemblyLineInput>
  }

  export type AssemblyLineWorkstationScalarWhereInput = {
    AND?: AssemblyLineWorkstationScalarWhereInput | AssemblyLineWorkstationScalarWhereInput[]
    OR?: AssemblyLineWorkstationScalarWhereInput[]
    NOT?: AssemblyLineWorkstationScalarWhereInput | AssemblyLineWorkstationScalarWhereInput[]
    id?: IntFilter<"AssemblyLineWorkstation"> | number
    assemblyLineId?: IntFilter<"AssemblyLineWorkstation"> | number
    workstationId?: IntFilter<"AssemblyLineWorkstation"> | number
    order?: IntFilter<"AssemblyLineWorkstation"> | number
  }

  export type AssemblyLineWorkstationCreateWithoutWorkstationInput = {
    order: number
    assemblyLine: AssemblyLineCreateNestedOneWithoutAssemblyLineWorkStationsInput
  }

  export type AssemblyLineWorkstationUncheckedCreateWithoutWorkstationInput = {
    id?: number
    assemblyLineId: number
    order: number
  }

  export type AssemblyLineWorkstationCreateOrConnectWithoutWorkstationInput = {
    where: AssemblyLineWorkstationWhereUniqueInput
    create: XOR<AssemblyLineWorkstationCreateWithoutWorkstationInput, AssemblyLineWorkstationUncheckedCreateWithoutWorkstationInput>
  }

  export type AssemblyLineWorkstationCreateManyWorkstationInputEnvelope = {
    data: AssemblyLineWorkstationCreateManyWorkstationInput | AssemblyLineWorkstationCreateManyWorkstationInput[]
    skipDuplicates?: boolean
  }

  export type AssemblyLineWorkstationUpsertWithWhereUniqueWithoutWorkstationInput = {
    where: AssemblyLineWorkstationWhereUniqueInput
    update: XOR<AssemblyLineWorkstationUpdateWithoutWorkstationInput, AssemblyLineWorkstationUncheckedUpdateWithoutWorkstationInput>
    create: XOR<AssemblyLineWorkstationCreateWithoutWorkstationInput, AssemblyLineWorkstationUncheckedCreateWithoutWorkstationInput>
  }

  export type AssemblyLineWorkstationUpdateWithWhereUniqueWithoutWorkstationInput = {
    where: AssemblyLineWorkstationWhereUniqueInput
    data: XOR<AssemblyLineWorkstationUpdateWithoutWorkstationInput, AssemblyLineWorkstationUncheckedUpdateWithoutWorkstationInput>
  }

  export type AssemblyLineWorkstationUpdateManyWithWhereWithoutWorkstationInput = {
    where: AssemblyLineWorkstationScalarWhereInput
    data: XOR<AssemblyLineWorkstationUpdateManyMutationInput, AssemblyLineWorkstationUncheckedUpdateManyWithoutWorkstationInput>
  }

  export type AssemblyLineCreateWithoutAssemblyLineWorkStationsInput = {
    name: string
    active?: boolean
    product: ProductCreateNestedOneWithoutAssemblyLinesInput
  }

  export type AssemblyLineUncheckedCreateWithoutAssemblyLineWorkStationsInput = {
    id?: number
    name: string
    active?: boolean
    productId: number
  }

  export type AssemblyLineCreateOrConnectWithoutAssemblyLineWorkStationsInput = {
    where: AssemblyLineWhereUniqueInput
    create: XOR<AssemblyLineCreateWithoutAssemblyLineWorkStationsInput, AssemblyLineUncheckedCreateWithoutAssemblyLineWorkStationsInput>
  }

  export type WorkstationCreateWithoutAssemblyLineWorkStationsInput = {
    name: string
    shortName: string
    pcName: string
  }

  export type WorkstationUncheckedCreateWithoutAssemblyLineWorkStationsInput = {
    id?: number
    name: string
    shortName: string
    pcName: string
  }

  export type WorkstationCreateOrConnectWithoutAssemblyLineWorkStationsInput = {
    where: WorkstationWhereUniqueInput
    create: XOR<WorkstationCreateWithoutAssemblyLineWorkStationsInput, WorkstationUncheckedCreateWithoutAssemblyLineWorkStationsInput>
  }

  export type AssemblyLineUpsertWithoutAssemblyLineWorkStationsInput = {
    update: XOR<AssemblyLineUpdateWithoutAssemblyLineWorkStationsInput, AssemblyLineUncheckedUpdateWithoutAssemblyLineWorkStationsInput>
    create: XOR<AssemblyLineCreateWithoutAssemblyLineWorkStationsInput, AssemblyLineUncheckedCreateWithoutAssemblyLineWorkStationsInput>
    where?: AssemblyLineWhereInput
  }

  export type AssemblyLineUpdateToOneWithWhereWithoutAssemblyLineWorkStationsInput = {
    where?: AssemblyLineWhereInput
    data: XOR<AssemblyLineUpdateWithoutAssemblyLineWorkStationsInput, AssemblyLineUncheckedUpdateWithoutAssemblyLineWorkStationsInput>
  }

  export type AssemblyLineUpdateWithoutAssemblyLineWorkStationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    product?: ProductUpdateOneRequiredWithoutAssemblyLinesNestedInput
  }

  export type AssemblyLineUncheckedUpdateWithoutAssemblyLineWorkStationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkstationUpsertWithoutAssemblyLineWorkStationsInput = {
    update: XOR<WorkstationUpdateWithoutAssemblyLineWorkStationsInput, WorkstationUncheckedUpdateWithoutAssemblyLineWorkStationsInput>
    create: XOR<WorkstationCreateWithoutAssemblyLineWorkStationsInput, WorkstationUncheckedCreateWithoutAssemblyLineWorkStationsInput>
    where?: WorkstationWhereInput
  }

  export type WorkstationUpdateToOneWithWhereWithoutAssemblyLineWorkStationsInput = {
    where?: WorkstationWhereInput
    data: XOR<WorkstationUpdateWithoutAssemblyLineWorkStationsInput, WorkstationUncheckedUpdateWithoutAssemblyLineWorkStationsInput>
  }

  export type WorkstationUpdateWithoutAssemblyLineWorkStationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    pcName?: StringFieldUpdateOperationsInput | string
  }

  export type WorkstationUncheckedUpdateWithoutAssemblyLineWorkStationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    pcName?: StringFieldUpdateOperationsInput | string
  }

  export type AssemblyLineCreateManyProductInput = {
    id?: number
    name: string
    active?: boolean
  }

  export type AssemblyLineUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    assemblyLineWorkStations?: AssemblyLineWorkstationUpdateManyWithoutAssemblyLineNestedInput
  }

  export type AssemblyLineUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    assemblyLineWorkStations?: AssemblyLineWorkstationUncheckedUpdateManyWithoutAssemblyLineNestedInput
  }

  export type AssemblyLineUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssemblyLineWorkstationCreateManyAssemblyLineInput = {
    id?: number
    workstationId: number
    order: number
  }

  export type AssemblyLineWorkstationUpdateWithoutAssemblyLineInput = {
    order?: IntFieldUpdateOperationsInput | number
    workstation?: WorkstationUpdateOneRequiredWithoutAssemblyLineWorkStationsNestedInput
  }

  export type AssemblyLineWorkstationUncheckedUpdateWithoutAssemblyLineInput = {
    id?: IntFieldUpdateOperationsInput | number
    workstationId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type AssemblyLineWorkstationUncheckedUpdateManyWithoutAssemblyLineInput = {
    id?: IntFieldUpdateOperationsInput | number
    workstationId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type AssemblyLineWorkstationCreateManyWorkstationInput = {
    id?: number
    assemblyLineId: number
    order: number
  }

  export type AssemblyLineWorkstationUpdateWithoutWorkstationInput = {
    order?: IntFieldUpdateOperationsInput | number
    assemblyLine?: AssemblyLineUpdateOneRequiredWithoutAssemblyLineWorkStationsNestedInput
  }

  export type AssemblyLineWorkstationUncheckedUpdateWithoutWorkstationInput = {
    id?: IntFieldUpdateOperationsInput | number
    assemblyLineId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type AssemblyLineWorkstationUncheckedUpdateManyWithoutWorkstationInput = {
    id?: IntFieldUpdateOperationsInput | number
    assemblyLineId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
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