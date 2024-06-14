import type { TypedDocumentString } from "./generated/graphql.js";
export interface HasuraAdapterClient {
    endpoint: string;
    /**
     * `x-hasura-admin-secret` header value
     *
     * [Hasura Authentication](https://hasura.io/docs/search/?q=x-hasura-admin-secret)
     */
    adminSecret: string;
}
export declare class HasuraClientError extends Error {
    name: string;
    constructor(errors: any[], query: TypedDocumentString<any, any>, variables: any);
}
export declare function client({ adminSecret, endpoint }: HasuraAdapterClient): {
    run<Q extends TypedDocumentString<any, any>, T_1 extends Q extends TypedDocumentString<infer T, any> ? T : never, V_1 extends Q extends TypedDocumentString<any, infer V> ? V : never>(query: Q, variables?: V_1 | undefined): Promise<T_1>;
};
//# sourceMappingURL=client.d.ts.map