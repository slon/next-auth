/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px"}}>
 *  <p>Official <a href="https://typeorm.io">TypeORM</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://typeorm.io">
 *   <img style={{display: "block" }} width="56" src="/img/adapters/typeorm.svg" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @auth/typeorm-adapter typeorm
 * ```
 *
 * @module @auth/typeorm-adapter
 */
import type { Adapter } from "@auth/core/adapters";
import { DataSourceOptions, EntityManager } from "typeorm";
import * as defaultEntities from "./entities.js";
export declare const entities: typeof defaultEntities;
export type Entities = typeof entities;
/** This is the interface for the TypeORM adapter options. */
export interface TypeORMAdapterOptions {
    /**
     * The {@link https://orkhan.gitbook.io/typeorm/docs/entities TypeORM entities} to create the database tables from.
     */
    entities?: Entities;
}
export declare function getManager(options: {
    dataSource: string | DataSourceOptions;
    entities: Entities;
}): Promise<EntityManager>;
export declare function TypeORMAdapter(dataSource: string | DataSourceOptions, options?: TypeORMAdapterOptions): Adapter;
//# sourceMappingURL=index.d.ts.map