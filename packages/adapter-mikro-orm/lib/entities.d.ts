import { Collection } from "@mikro-orm/core";
import type { AdapterUser, AdapterAccount, AdapterSession, VerificationToken as AdapterVerificationToken } from "@auth/core/adapters";
type RemoveIndex<T> = {
    [K in keyof T as {} extends Record<K, 1> ? never : K]: T[K];
};
export declare class User implements RemoveIndex<AdapterUser> {
    id: string;
    name?: AdapterUser["name"];
    email: AdapterUser["email"];
    emailVerified: AdapterUser["emailVerified"];
    image?: AdapterUser["image"];
    sessions: Collection<Session, object>;
    accounts: Collection<Account, object>;
}
export declare class Session implements AdapterSession {
    id: string;
    user: User;
    userId: AdapterSession["userId"];
    expires: AdapterSession["expires"];
    sessionToken: AdapterSession["sessionToken"];
}
export declare class Account implements RemoveIndex<AdapterAccount> {
    id: string;
    user: User;
    userId: AdapterAccount["userId"];
    type: AdapterAccount["type"];
    provider: AdapterAccount["provider"];
    providerAccountId: AdapterAccount["providerAccountId"];
    refresh_token?: AdapterAccount["refresh_token"];
    access_token?: AdapterAccount["access_token"];
    expires_at?: AdapterAccount["expires_at"];
    token_type?: AdapterAccount["token_type"];
    scope?: AdapterAccount["scope"];
    id_token?: AdapterAccount["id_token"];
    session_state?: AdapterAccount["session_state"];
}
export declare class VerificationToken implements AdapterVerificationToken {
    token: AdapterVerificationToken["token"];
    expires: AdapterVerificationToken["expires"];
    identifier: AdapterVerificationToken["identifier"];
}
export {};
//# sourceMappingURL=entities.d.ts.map