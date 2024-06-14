/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px"}}>
 *  <p>Official <a href="https://hasura.io/">Hasura</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://hasura.io/">
 *   <img style={{display: "block"}} src="/img/adapters/hasura.svg" width="38" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @auth/hasura-adapter
 * ```
 *
 * @module @auth/hasura-adapter
 */
import { type Adapter } from "@auth/core/adapters";
import { type HasuraAdapterClient } from "./lib/client.js";
export declare function HasuraAdapter(client: HasuraAdapterClient): Adapter;
export declare const format: {
    from<T, B extends boolean = false>(object?: Record<string, any> | null | undefined, throwIfNullish?: B | undefined): B extends true ? T : T | null;
    to<T_1>(object: Record<string, any>): T_1;
};
//# sourceMappingURL=index.d.ts.map