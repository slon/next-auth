/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  <p>Official <a href="https://docs.upstash.com/redis">Upstash Redis</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://docs.upstash.com/redis">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/upstash-redis.svg" width="60"/>
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @upstash/redis @auth/upstash-redis-adapter
 * ```
 *
 * @module @auth/upstash-redis-adapter
 */
import { type Adapter } from "@auth/core/adapters";
import type { Redis } from "@upstash/redis";
/** This is the interface of the Upstash Redis adapter options. */
export interface UpstashRedisAdapterOptions {
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
};
export declare function hydrateDates(json: object): any;
export declare function UpstashRedisAdapter(client: Redis, options?: UpstashRedisAdapterOptions): Adapter;
//# sourceMappingURL=index.d.ts.map