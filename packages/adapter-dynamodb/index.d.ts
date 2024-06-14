/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px"}}>
 *  <p>Official <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html">DynamoDB</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://docs.aws.amazon.com/dynamodb/index.html">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/dynamodb.png" width="48"/>
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install next-auth @auth/dynamodb-adapter
 * ```
 *
 * @module @auth/dynamodb-adapter
 */
import type { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { type Adapter } from "@auth/core/adapters";
export interface DynamoDBAdapterOptions {
    tableName?: string;
    partitionKey?: string;
    sortKey?: string;
    indexName?: string;
    indexPartitionKey?: string;
    indexSortKey?: string;
}
export declare function DynamoDBAdapter(client: DynamoDBDocument, options?: DynamoDBAdapterOptions): Adapter;
declare const format: {
    /** Takes a plain old JavaScript object and turns it into a DynamoDB object */
    to(object: Record<string, any>): Record<string, unknown>;
    /** Takes a Dynamo object and returns a plain old JavaScript object */
    from<T = Record<string, unknown>>(object?: Record<string, any>): T | null;
};
declare function generateUpdateExpression(object: Record<string, any>): {
    UpdateExpression: string;
    ExpressionAttributeNames: Record<string, string>;
    ExpressionAttributeValues: Record<string, unknown>;
};
export { format, generateUpdateExpression };
//# sourceMappingURL=index.d.ts.map