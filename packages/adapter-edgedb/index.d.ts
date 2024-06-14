/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px"}}>
 *  <p>Official <a href="https://www.edgedb.com/">Edge DB</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://www.edgedb.com/">
 *   <img style={{display: "block"}} src="/img/adapters/edgedb.svg" width="38" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install edgedb @auth/edgedb-adapter
 * npm install @edgedb/generate --save-dev
 * ```
 *
 * @module @auth/edgedb-adapter
 */
import type { Adapter } from "@auth/core/adapters";
import type { Client } from "edgedb";
export declare function EdgeDBAdapter(client: Client): Adapter;
//# sourceMappingURL=index.d.ts.map