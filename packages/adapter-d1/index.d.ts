/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px"}}>
 *  <p>An official <a href="https://developers.cloudflare.com/d1/">Cloudflare D1</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://developers.cloudflare.com/d1/">
 *   <img style={{display: "block"}} src="/img/adapters/d1.svg" width="48" />
 *  </a>
 * </div>
 *
 * ## Warning
 * This adapter is not developed or maintained by Cloudflare and they haven't declared the D1 api stable.  The author will make an effort to keep this adapter up to date.
 * The adapter is compatible with the D1 api as of March 22, 2023.
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install next-auth @auth/d1-adapter
 * ```
 *
 * @module @auth/d1-adapter
 */
import type { D1Database as WorkerDatabase } from "@cloudflare/workers-types";
import type { D1Database as MiniflareD1Database } from "@miniflare/d1";
import { type Adapter } from "@auth/core/adapters";
export { up } from "./migrations.js";
/**
 * @type @cloudflare/workers-types.D1Database | @miniflare/d1.D1Database
 */
export type D1Database = WorkerDatabase | MiniflareD1Database;
export declare function createRecord<RecordType>(db: D1Database, CREATE_SQL: string, bindings: any[], GET_SQL: string, getBindings: any[]): Promise<RecordType | null>;
export declare function getRecord<RecordType>(db: D1Database, SQL: string, bindings: any[]): Promise<RecordType | null>;
export declare function updateRecord(db: D1Database, SQL: string, bindings: any[]): Promise<import("@miniflare/d1").D1Result<unknown> | import("@cloudflare/workers-types").D1Result<unknown>>;
export declare function deleteRecord(db: D1Database, SQL: string, bindings: any[]): Promise<void>;
export declare function D1Adapter(db: D1Database): Adapter;
//# sourceMappingURL=index.d.ts.map