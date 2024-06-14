/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px"}}>
 *  <p>Official <a href="https://unstorage.unjs.io/">Unstorage</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://unstorage.unjs.io/">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/unstorage.svg" width="60"/>
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install unstorage @auth/unstorage-adapter
 * ```
 *
 * @module @auth/unstorage-adapter
 */
import type { Adapter } from "@auth/core/adapters";
import type { Storage } from "unstorage";
/** This is the interface of the Unstorage adapter options. */
export interface UnstorageAdapterOptions {
    /**
     * The base prefix for your keys
     */
    baseKeyPrefix?: string;
    /**
     * The prefix for the `account` key
     */
    accountKeyPrefix?: string;
    /**
     * The prefix for the `accountByUserId` key
     */
    accountByUserIdPrefix?: string;
    /**
     * The prefix for the `emailKey` key
     */
    emailKeyPrefix?: string;
    /**
     * The prefix for the `sessionKey` key
     */
    sessionKeyPrefix?: string;
    /**
     * The prefix for the `sessionByUserId` key
     */
    sessionByUserIdKeyPrefix?: string;
    /**
     * The prefix for the `user` key
     */
    userKeyPrefix?: string;
    /**
     * The prefix for the `verificationToken` key
     */
    verificationTokenKeyPrefix?: string;
    /**
     * The prefix for the `authenticator` key
     */
    authenticatorKeyPrefix?: string;
    /**
     * The prefix for the `authenticator-by-user-id` key
     */
    authenticatorUserKeyPrefix?: string;
    /**
     * Use `getItemRaw/setItemRaw` instead of `getItem/setItem`.
     *
     * This is an experimental feature. Please check [unjs/unstorage#142](https://github.com/unjs/unstorage/issues/142) for more information.
     */
    useItemRaw?: boolean;
}
export declare const defaultOptions: {
    baseKeyPrefix: string;
    accountKeyPrefix: string;
    accountByUserIdPrefix: string;
    emailKeyPrefix: string;
    sessionKeyPrefix: string;
    sessionByUserIdKeyPrefix: string;
    userKeyPrefix: string;
    verificationTokenKeyPrefix: string;
    authenticatorKeyPrefix: string;
    authenticatorUserKeyPrefix: string;
    useItemRaw: boolean;
};
export declare function hydrateDates(json: Record<string, any>): any;
export declare function UnstorageAdapter(storage: Storage, options?: UnstorageAdapterOptions): Adapter;
//# sourceMappingURL=index.d.ts.map