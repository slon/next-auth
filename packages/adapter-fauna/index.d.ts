/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px"}}>
 *  <p>Official <a href="https://docs.fauna.com/fauna/current/">Fauna</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://fauna.com/features">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/fauna.svg" width="64" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @auth/fauna-adapter fauna
 * ```
 *
 * @module @auth/fauna-adapter
 */
import { Client, TimeStub, QueryValue, QueryValueObject } from "fauna";
import type { Adapter, AdapterUser, AdapterSession, VerificationToken, AdapterAccount } from "@auth/core/adapters";
type ToFauna<T> = {
    [P in keyof T]: T[P] extends Date | null ? TimeStub | null : T[P] extends undefined ? null : T[P] extends QueryValue ? T[P] : QueryValueObject;
};
export type FaunaUser = ToFauna<AdapterUser>;
export type FaunaSession = ToFauna<AdapterSession>;
export type FaunaVerificationToken = ToFauna<VerificationToken> & {
    id: string;
};
export type FaunaAccount = ToFauna<AdapterAccount>;
type AdapterConfig = {
    collectionNames: {
        user: string;
        session: string;
        account: string;
        verificationToken: string;
    };
};
export declare function FaunaAdapter(client: Client, config?: AdapterConfig): Adapter;
export declare const format: {
    /** Takes an object that's coming from the database and converts it to plain JavaScript. */
    from<T>(object?: Record<string, any>): T;
    /** Takes an object that's coming from Auth.js and prepares it to be written to the database. */
    to<T_1>(object: Record<string, any>): T_1;
};
export {};
//# sourceMappingURL=index.d.ts.map