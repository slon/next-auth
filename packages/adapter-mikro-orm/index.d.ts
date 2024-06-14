/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  <p>Official <a href="https://mikro-orm.io/docs/installation">MikroORM</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://mikro-orm.io/">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/mikro-orm.svg" width="64"/>
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @mikro-orm/core @auth/mikro-orm-adapter
 * ```
 *
 * @module @auth/mikro-orm-adapter
 */
import type { Connection, IDatabaseDriver, Options as ORMOptions } from "@mikro-orm/core";
import type { Adapter } from "@auth/core/adapters";
import * as defaultEntities from "./lib/entities.js";
export { defaultEntities };
export declare function MikroOrmAdapter<D extends IDatabaseDriver<Connection> = IDatabaseDriver<Connection>>(ormOptions: ORMOptions<D>, options?: {
    entities?: Partial<typeof defaultEntities>;
}): Adapter;
//# sourceMappingURL=index.d.ts.map