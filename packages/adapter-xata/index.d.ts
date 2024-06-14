/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  <p>Official <a href="https://xata.io/docs/overview">Xata</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://xata.io/">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/xata.svg" width="50"/>
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * 1. Install Auth.js and the Xata adapter
 *
 * ```bash npm2yarn
 * npm install @auth/xata-adapter
 * ```
 *
 * 2. Install the Xata CLI globally if you don't already have it
 *
 * ```bash npm2yarn
 * npm install -g @xata.io/cli
 * ```
 *
 * 3. Login
 *
 * ```bash
 * xata auth login
 * ```
 *
 * @module @auth/xata-adapter
 */
import type { Adapter } from "@auth/core/adapters";
import type { XataClient } from "./xata.js";
export declare function XataAdapter(client: XataClient): Adapter;
//# sourceMappingURL=index.d.ts.map