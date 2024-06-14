/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  <p>Official <a href="https://pouchdb.com/api.html">PouchDB</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://pouchdb.com">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/pouchdb.svg" width="38" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install pouchdb pouchdb-find @auth/pouchdb-adapter
 * ```
 *
 * @module @auth/pouchdb-adapter
 */
/// <reference types="pouchdb-find" resolution-mode="require"/>
/// <reference types="pouchdb-core" resolution-mode="require"/>
/// <reference types="pouchdb-mapreduce" resolution-mode="require"/>
/// <reference types="pouchdb-replication" resolution-mode="require"/>
import type { Adapter } from "@auth/core/adapters";
type PrefixConfig = Record<"user" | "account" | "session" | "verificationToken", string>;
type IndexConfig = Record<"userByEmail" | "accountByProviderId" | "sessionByToken" | "verificationTokenByToken", string>;
/**
 * Configure the adapter
 */
export interface PouchDBAdapterOptions {
    /**
     * Your PouchDB instance, with the `pouchdb-find` plugin installed.
     * @example
     * ```javascript
     * import PouchDB from "pouchdb"
     *
     * PouchDB
     *   .plugin(require("pouchdb-adapter-leveldb")) // Or any other adapter
     *   .plugin(require("pouchdb-find")) // Don't forget the `pouchdb-find` plugin
     *
     * const pouchdb = new PouchDB("auth_db", { adapter: "leveldb" })
     */
    pouchdb: PouchDB.Database;
    /**
     * Override the default prefix names.
     *
     * @default
     * ```js
     * {
     *   user: "USER",
     *   account: "ACCOUNT",
     *   session: "SESSION",
     *   verificationToken: "VERIFICATION-TOKEN"
     * }
     * ```
     */
    prefixes?: PrefixConfig;
    /**
     * Override the default index names.
     *
     * @default
     * ```js
     * {
     *   userByEmail: "nextAuthUserByEmail",
     *   accountByProviderId: "nextAuthAccountByProviderId",
     *   sessionByToken: "nextAuthSessionByToken",
     *   verificationTokenByToken: "nextAuthVerificationRequestByToken"
     * }
     * ```
     */
    indexes?: IndexConfig;
}
export declare function PouchDBAdapter(options: PouchDBAdapterOptions): Adapter;
export declare function createIndexes(pouchdb: PouchDB.Database, indexes?: IndexConfig): Promise<void>;
export {};
//# sourceMappingURL=index.d.ts.map