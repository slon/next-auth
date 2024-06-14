/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  <p>Official <a href="https://www.surrealdb.com">SurrealDB</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://www.surrealdb.com">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/surrealdb.svg" width="30" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @auth/surrealdb-adapter surrealdb.js
 * ```
 *
 * @module @auth/surrealdb-adapter
 */
import Surreal, { ExperimentalSurrealHTTP } from "surrealdb.js";
import type { Adapter } from "@auth/core/adapters";
import type { ProviderType } from "@auth/core/providers";
type Document = Record<string, string | null | undefined> & {
    id: string;
};
export type UserDoc = Document & {
    email: string;
};
export type AccountDoc<T = string> = {
    id: string;
    userId: T;
    refresh_token?: string;
    access_token?: string;
    type: Extract<ProviderType, "oauth" | "oidc" | "email" | "webauthn">;
    provider: string;
    providerAccountId: string;
    expires_at?: number;
};
export type SessionDoc<T = string> = Document & {
    userId: T;
};
export declare const toSurrealId: (id: string) => string;
export declare const toId: (surrealId: string) => string;
export declare function SurrealDBAdapter<T>(client: Promise<Surreal | ExperimentalSurrealHTTP<T>>): Adapter;
export {};
//# sourceMappingURL=index.d.ts.map