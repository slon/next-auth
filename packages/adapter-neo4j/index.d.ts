/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  <p>Official <a href="https://neo4j.com/docs/">Neo4j</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://neo4j.com/">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/neo4j.svg" width="128" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @auth/neo4j-adapter neo4j-driver
 * ```
 *
 * @module @auth/neo4j-adapter
 */
import { type Session } from "neo4j-driver";
import { type Adapter } from "@auth/core/adapters";
/**
 * This is the interface of the Neo4j adapter options. The Neo4j adapter takes a {@link https://neo4j.com/docs/bolt/current/driver-api/#driver-session Neo4j session} as its only argument.
 **/
export interface Neo4jOptions extends Session {
}
export declare function Neo4jAdapter(session: Session): Adapter;
export declare const format: {
    /** Takes a plain old JavaScript object and turns it into a Neo4j compatible object */
    to(object: Record<string, any>): Record<string, unknown>;
    /** Takes a Neo4j object and returns a plain old JavaScript object */
    from<T = Record<string, unknown>>(object?: Record<string, any>): T | null;
};
//# sourceMappingURL=index.d.ts.map